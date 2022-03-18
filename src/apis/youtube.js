import axios from 'axios'


const KEY = 'AIzaSyCowVmyP6mkKfOdHIgv12K8mguD3nYWbjQ'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type: 'video',
        maxResults:5,
        key: KEY
    }
});