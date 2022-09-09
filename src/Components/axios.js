import axios from 'axios'

const instance = axios.create( {
    baseURL: "https://fast-journey-80413.herokuapp.com/" 
})

export default instance