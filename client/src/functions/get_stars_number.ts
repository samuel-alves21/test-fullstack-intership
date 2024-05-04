const star0 = '/img/stars_0.svg'
const star0_5 = '/img/stars_0.5.svg'
const star1 = '/img/stars_1.svg'
const star1_5 = '/img/stars_1.5.svg'
const star2 = '/img/stars_2.svg'
const star2_5 = '/img/stars_2.5.svg'
const star3 = '/img/stars_3.svg'
const star3_5 = '/img/stars_3.5.svg'
const star4 = '/img/stars_4.svg'
const star4_5 = '/img/stars_4.5.svg'
const star5 = '/img/stars_5.svg'

export const getStarsNumber = (string: string) => {

  const starNumber = Number(string.split(" ")[0])
  
  if (starNumber < 0.5) return star0
  if (starNumber < 1) return star0_5
  if (starNumber < 1.5) return star1
  if (starNumber < 2) return star1_5
  if (starNumber < 2.5) return star2
  if (starNumber < 3) return star2_5
  if (starNumber < 3.5) return star3
  if (starNumber < 4) return star3_5
  if (starNumber < 4.5) return star4
  if (starNumber < 5) return star4_5
  if (starNumber === 5) return star5
}