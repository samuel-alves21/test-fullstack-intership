import { useContext } from "react"
import { useParams } from "react-router-dom"
import { useProducts } from "../hooks/useProducts"
import { ProductsNotFound } from "../components/ProductsNotFound"
import { SearchField } from "../components/SearchField"
import { ProductCard } from "../components/ProductCard"
import { backToHome } from "../functions/back_to_home"
import { Footer } from "../components/Footer"
import { Loader } from "../components/Loader"
import { Alert } from "../components/Alert"
import { ProductsContext, ProductsContextType } from "../context/ProductsContext"
import { LoaderContext, LoaderContextType } from "../context/LoaderContext"

export const ResultsPage = () => {

  const { products } = useContext(ProductsContext) as ProductsContextType
  const { setLoader } = useContext(LoaderContext) as LoaderContextType

  const { keyword } = useParams()

  useProducts(keyword as string)

  return (
    <section className="relative min-h-screen bg-amazon_tertiaty font-amazon_ember text-white flex flex-col">
      <Loader />
      <Alert />

      <header className="fixed z-10 w-full">
        <header className="bg-amazon_primary md:h-16 h-24 flex items-center">
          <nav className="max-w-[1800px] px-16 flex md:justify-between gap-2 mx-auto items-center flex-1 flex-col md:flex-row">
            <h2 onClick={() => backToHome(setLoader)} className="text-amazon_tertiaty text-2xl font-bold font-amazon_display cursor-pointer hover:opacity-90">Amazon Srapper</h2>
            <SearchField header={true}/>
          </nav>
        </header>

        { !!products?.length && 
        <aside className="bg-amazon_quaternary text-center font-amazon_display text-base py-2 w-full">
          <p>{products?.length} results of {keyword}.</p>
        </aside> }
      </header>

      { products?.length === 0 && <ProductsNotFound keyword={keyword as string} /> }

      <main className="md:mt-28 mt-36 max-w-[1800px] w-full grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 lg:p-16 p-6 justify-center mx-auto flex-1">
        {products?.map((product, index) => (
          <ProductCard product={product} index={index}/>
        ))}
      </main>

      <Footer />
    </section>
  )
}
