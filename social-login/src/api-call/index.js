import axiosClient from '../config/axios'

export async function retrieveProductsDB() {
  return await axiosClient.get('/SocialLogin')
}

export async function createProductDB(product) {
  return await axiosClient.post('/SocialLogin', product)
}

export async function deleteProductDB(id) {
  return await axiosClient.delete(`/SocialLogin/${id}`)
}

export async function editProductDB(product) {
  return await axiosClient.put(`//SocialLogin/${product.id}`, product)
}