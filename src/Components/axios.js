import axios from 'axios'

const instance = axios.create( {
    baseURL: "https://serene-reaches-43898.herokuapp.com" 
})

export default instance