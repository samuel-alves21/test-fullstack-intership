import { useContext, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ProductsContext, ProductsContextType } from "../context/ProductsContext"
import { LoaderContext, LoaderContextType } from "../context/LoaderContext"
import { AlertContext, AlertContextType } from "../context/AlertContext"
import { getProducts } from "../http/get_products"

export const SearchField = ({ header = false }: { header?: boolean }) => {
  const [empty, setEmpty] = useState(false)

  const { setLoader } = useContext(LoaderContext) as LoaderContextType
  const { setAlert } = useContext(AlertContext) as AlertContextType
  const { setProducts } = useContext(ProductsContext) as ProductsContextType

  const navigate = useNavigate()

  const handleSubmit = async (keyword: string | undefined) => {
    if (!keyword) {
      setEmpty(true)
      return
    }

    setLoader(true)
    const data = await getProducts(keyword)
    setLoader(false)

    if (data.error) {
      setAlert({ display: true, message: data.message })
      return
    }

    navigate(`/results/${keyword}`)
    setProducts(data.products)
  }
  
  const handleInputChange = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    setEmpty(false)
    const input = e.target as HTMLInputElement	
    
    if (e.key === 'Enter') {
      handleSubmit(input.value)
      input.blur()
    }
  }

  const input = useRef<HTMLInputElement>(null)

  return (
    <div data-empty={empty} data-header={header} className="box-content relative h-12 data-[header=true]:h-10 w-[min(450px,90vw)] bg-white flex justify-between items-center text-black data-[header=true]:translate-y-0 -translate-y-10 data-[empty=true]:border-2 data-[empty=true]:border-solid border-red-600 border-none rounded-md overflow-hidden">
      <input 
      ref={input} className="h-full py-2 flex-grow outline-none px-3" 
      type="text"
      data-empty={empty}
      placeholder="search products..."
      onKeyDown={(e) => handleInputChange(e)}
      />
      <div 
      data-header={header}
      className="bg-amazon_secundary data-[header=true]:w-10 w-12 flex justify-center items-center h-full py-1  cursor-pointer hover:bg-amazon_secundary_hover" 
      onClick={() => handleSubmit(input.current?.value)}>
        <i data-header={header} data-empty={empty} className="bi bi-search text-black text-xl data-[empty=true]:text-red-600 data-[header=true]:text-lg"></i>
      </div> 
    </div>
  )
}