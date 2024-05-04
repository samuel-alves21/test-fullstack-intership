import { useContext, useEffect } from "react"
import { LoaderContext, LoaderContextType } from "../context/LoaderContext"
import { AlertContext, AlertContextType } from "../context/AlertContext"
import { getProducts } from "../http/get_products"
import { ProductsContext, ProductsContextType } from "../context/ProductsContext"

export const useProducts = (keyword: string) => {

  const { products, setProducts } = useContext(ProductsContext) as ProductsContextType
  const { setLoader } = useContext(LoaderContext) as LoaderContextType
  const { setAlert } = useContext(AlertContext) as AlertContextType

  useEffect(() => {
    const reFetch = async () => {
      setLoader(true)
      const data = await getProducts(keyword)
      setLoader(false)
  
      if (data.error) {
        setAlert({ display: true, message: data.message })
        return
      }
      setProducts(data.products)
    }

    if (products === null) {
      reFetch()
    }
  }, [products, keyword, setAlert, setProducts, setLoader])
}