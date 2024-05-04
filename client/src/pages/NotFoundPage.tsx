import { useContext } from "react"
import { LoaderContext, LoaderContextType } from "../context/LoaderContext"
import { backToHome } from "../functions/back_to_home"
import { Button } from "../components/Button"
import { Loader } from "../components/Loader"

export const NotFoundPage = () => {
  const { setLoader } = useContext(LoaderContext) as LoaderContextType

  return (
    <section className="min-h-screen bg-amazon_tertiaty text-white flex flex-col items-center text-center p-3 relative">
      <Loader />
      <h1 className="text-amazon_primary font-amazon_display text-5xl font-bold mt-20">Not Found</h1>
      <p className="text-xl mt-10 mb-5">Seems like the page you are looking for does not exist</p>
      <Button onClick={() => backToHome(setLoader)}>back to home</Button>
    </section>
  )
}