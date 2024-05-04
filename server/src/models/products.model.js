const { JSDOM } = require('jsdom')
const accounting = require('accounting-js')

// Getting rid of the JSDom error when parsing @layer on css
// Src: https://github.com/primefaces/primevue/issues/4512
const originalConsoleError = console.error

const jsDomCssError = "Error: Could not parse CSS stylesheet"

console.error = (...params) => {
  if (!params.find((p) => p.toString().includes(jsDomCssError))) {
    originalConsoleError(...params)
  }
}

// Mocking a Web Browser request
const getProducts = async (item) => {

  const products = []

  // axios does not provide the html page, since it seems like amazon is blocking it 
  const data = await fetch(`https://www.amazon.com/s?k=${item}&crid=MEGDYM299YJ&sprefix=${item}%2Caps%2C260&ref=nb_sb_noss_1`, {
    headers: {
      'Host': 'www.amazon.com',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'Accept-Language':' en-US,en;q=0.8,pt-BR;q=0.5,pt;q=0.3',
      'Accept-Encoding': 'gzip, deflate, br',
      'Referer': 'https://www.amazon.com/',
      'Upgrade-Insecure-Requests': 1,
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-User': '?1', 
      'Pragma': 'no-cache',
      'Cache-Control': 'no-cache',
      'TE': 'trailers'
    }
  })
  .then((data) => data.text())
  .catch((error) => console.log(error))

  console.log(data)

  if (!data) return
  const dom = new JSDOM(data)

  //extracting the data with JSDom
  dom.window.document.querySelectorAll('.s-result-item').forEach((element) => {
    const title = element.querySelector('.s-result-item h2 span')
    const wholePrice = element.querySelector('.s-result-item .a-price-whole')
    const fractionPrice = element.querySelector('.s-result-item .a-price-fraction')
    const otherPrice = element.querySelector('.s-result-item div[data-cy="secondary-offer-recipe"] span.a-color-base')
    const stars = element.querySelector('.s-result-item span[aria-label*="stars"]')
    const rating = element.querySelector('.s-result-item span[aria-label*="ratings"]')
    const img = element.querySelector('.s-result-item span[data-component-type="s-product-image"] img')

    let price
    if (wholePrice && fractionPrice) {
      price = accounting.unformat(wholePrice.textContent + fractionPrice.textContent)
    } else if (otherPrice) {
      price = accounting.unformat(otherPrice.textContent)
    }

    if (title && stars && rating && img) {
      products.push({
        title: title.textContent.trim(),
        stars: stars.textContent.trim(),
        price: price ? price.toFixed(2).toString() : null,
        rating: rating.textContent.trim(),
        img: img.src
      })
    }
  })

  return products
}

module.exports = {
  getProducts
}
