import { getStarsNumber } from "../functions/get_stars_number"
import { Product } from "../types/types"

export const ProductCard = ({product, index}: {product: Product, index: number}) => {
  return (
    <div key={index} className="flex flex-col gap-4 rounded-md bg-amazon_quaternary w-[min(300px,100%)] overflow-hidden mx-auto max-h-[500px]">
      <div className="h-60 w-[80%] mt-5 mx-auto rounded-md bg-white">
        <img className="mx-auto rounded-md w-full h-full object-contain" src={product.img} alt="product img" />
      </div>
      <div className="px-4 pb-4 flex flex-col gap-4">
        <h3>{product.title}</h3>
        <div className="flex gap-2 items-center">
          <img className="w-24" src={getStarsNumber(product.stars)} alt="stars"/>
          <span className="text-amazon_rating">{product.rating}</span>
        </div>
        <div className="flex gap-1 align-text-top">
            {product.price && <span className="text-sm">$</span>}
          <span className="text-3xl -translate-y-1">{product.price ? product.price.split('.')[0] : 'no price'}</span>
          {product.price && <span className="text-sm">{product.price.split('.')[1]}</span>}
        </div>
      </div>
    </div>
  )
}