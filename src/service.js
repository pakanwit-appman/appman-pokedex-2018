import axios from 'axios'

const BaseUrl = 'http://localhost:3030/api/cards'

export const searchPokedexData = async (wording) => {
  const res = await axios.get(`${BaseUrl}?limit=20&name=${wording}&type=${wording}`)
  console.log('searchPokedexData: res', res)
  return res
}

export const getPokedexData = async () => {
  const res = await axios.get(`${BaseUrl}?limit=20`)
  console.log('searchPokedexData: res', res)
  return res
}