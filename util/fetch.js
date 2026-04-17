import axios from "axios";
import { create } from "zustand";

export const useFetch = create((set)=>({
    
    Data: [],
    loading: true,
    Error: null,
    fetchProducts: async()=>{
        try {
            const { data } = await axios.get('https://dummyjson.com/products')
            set(()=>(
                {Data: data, loading: false}
            ))
            
        } catch (error) {
            console.log('fetch eror',error)
            set(()=>(
                {Error: error.message, loading: false}
            ))
        }
    }

   
}))