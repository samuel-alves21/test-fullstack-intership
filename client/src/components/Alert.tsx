import { useContext, useEffect, useRef } from "react"
import { AlertContext, AlertContextType } from "../context/AlertContext"

export const Alert = () => {
  const { alert, setAlert } = useContext(AlertContext) as AlertContextType

  useEffect(() => {
    if (alertElement.current?.parentElement) {
      if (alert.display) {
        alertElement.current.parentElement.style.overflow = 'hidden'
        alertElement.current.parentElement.style.height = '100vh'
      } else {
        alertElement.current.parentElement.style.overflow = 'auto'
        alertElement.current.parentElement.style.height = 'auto'
      }
    }
  }, [alert.display])

  const alertElement = useRef<HTMLDivElement>(null)

  return (
    <div 
    ref={alertElement}
    data-display={alert.display} 
    className="h-[max(100vh,100%)] w-full bg-black/50 flex justify-center absolute z-10 transition-opacity duration-500 opacity-0 data-[display=true]:opacity-100 data-[display=false]:pointer-events-none top-0"
    onClick={() => setAlert({ display: false, message: '' })}
    >
      <div 
      data-display={alert.display} 
      className="h-24 w-96 bg-[#d89c41] text-black rounded-md text-lg flex justify-center items-center p-2 mt-5 -translate-y-80 data-[display=true]:translate-y-0 transition-transform duration-500">
        <p>{alert.message}</p>
      </div>
    </div>
  )
}