import { createContext, useState } from "react"
import { Product } from "../../types/types"

export const ProductsContext = createContext<null | ProductsContextType>(null)

export type ProductsContextType = {
  products: Product[] | null,
  setProducts: (products: Product[]) => void
}

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {

  const [products, setProducts] = useState<Product[] | null>(null)

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}