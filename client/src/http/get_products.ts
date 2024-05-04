import axios from "axios"
import { API_URL } from "../utils/api"
import { Product } from "../types/types"

export const getProducts = async (keyword: string | undefined) => {
  
  let toggle = true
  let products: Product[] = [] 
  
  // keeps making requests until it gets the products, since Amazon is blocking the majority of them 
  while (toggle) {
    try {
      const { data } = await axios.get(`${API_URL}?keyword=${keyword}`)
      
      // breaks the while loop if there are products
      if (data.length) {
        toggle = false
      }
      
      products = [...data]
    } catch (error) {
      console.log(error)
      return {
        error: true,
        message: 'Something went wrong',
        products
      }
    }

    // if the while loop is still true after 20 seconds, it returns an error
    setTimeout(() => {
      toggle = false
      return {
        error: true,
        message: 'timeout',
        products
      }
    }, 20000);
  }

  return {
    error: false,
    message: '',
    products
  }
}
