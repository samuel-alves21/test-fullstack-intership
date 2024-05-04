import { ColorRing } from "react-loader-spinner"
import { useContext, useEffect, useRef } from "react"
import { LoaderContext, LoaderContextType } from "../context/LoaderContext"

export const Loader = () => {

  const { loader } = useContext(LoaderContext) as LoaderContextType

  useEffect(() => {
    if (loaderElement.current?.parentElement) {
      if (loader) {
        loaderElement.current.parentElement.style.overflow = 'hidden'
        loaderElement.current.parentElement.style.height = '100vh'
      } else {
        loaderElement.current.parentElement.style.overflow = 'auto'
        loaderElement.current.parentElement.style.height = 'auto'
      }
    }
  }, [loader])

  const loaderElement = useRef<HTMLDivElement>(null) 

  return (
    <div 
    ref={loaderElement}
    id="loader"
    data-loader={loader} 
    className="data-[loader=false]:hidden h-screen w-screen bg-black/50 flex justify-center items-center absolute z-20">
      <ColorRing
      visible={true}
      height="150"
      width="150"
      ariaLabel="color-ring-loading"
      wrapperClass="color-ring-wrapper"
      colors={['#ff9900', '#ff9900', '#ff9900', '#ff9900', '#ff9900']}
      />
    </div>
  )
}