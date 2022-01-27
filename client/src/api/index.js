import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const productInsert = payload => api.post(`/product_insert`, payload)

export const productget = () => api.get(`/productget`)

export const productupdate = payload => api.post(`/productupdate`, payload)

export const deleteproduct = payload => api.post(`/productdelete`, payload)

const apis = {
    productInsert,
    productget,
    productupdate,
    deleteproduct
 }

export default apis