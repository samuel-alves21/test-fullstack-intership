import { createContext, useState } from "react";

export const LoaderContext = createContext<null | LoaderContextType>(null)

export type LoaderContextType = {
  loader: boolean,
  setLoader: (loader: boolean) => void
}

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {

  const [loader, setLoader] = useState(false)

  return (
    <LoaderContext.Provider value={{ loader, setLoader }}>
      {children}
    </LoaderContext.Provider>
  )
}