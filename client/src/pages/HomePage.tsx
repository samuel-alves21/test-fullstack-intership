import { useContext, useEffect } from "react"
import { SearchField } from "../components/SearchField"
import { Footer } from "../components/Footer"
import { Loader } from "../components/Loader"
import { Alert } from "../components/Alert"
import { LoaderContext, LoaderContextType } from "../context/LoaderContext"

export const HomePage = () => {

  const { setLoader } = useContext(LoaderContext) as LoaderContextType
  
  useEffect(() => {
    setLoader(false)
  }, [setLoader])

  return (
    <section className="min-h-screen bg-amazon_tertiaty text-white flex justify-center items-center text-center flex-col font-amazon_ember">
      <Loader />
      <Alert/>
      <h1 className="text-4xl font-bold text-amazon_primary py-5 font-amazon_display">Amazon Scrapper</h1>
      <main className="flex-grow flex flex-col justify-center items-center max-w-[1800px] px-16">
        <SearchField />
      </main>
      <Footer />
    </section>
  )
}