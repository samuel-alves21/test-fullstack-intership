import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LoaderProvider } from './context/LoaderContext/index.tsx'
import { AlertProvider } from './context/AlertContext/index.tsx'
import { ProductsProvider } from './context/ProductsContext/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProductsProvider>
    <AlertProvider>
      <LoaderProvider>
        <App />
      </LoaderProvider>
    </AlertProvider>
  </ProductsProvider>
)
