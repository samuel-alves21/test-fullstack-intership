import { createContext, useState } from "react";

export const AlertContext = createContext<null | AlertContextType>(null)

export type AlertContextType = {
  alert: {
    display: boolean,
    message: string
  },
  setAlert: (loader: {display: boolean, message: string}) => void
}

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {

  const [alert, setAlert] = useState({display: false, message: ''})

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  )
}