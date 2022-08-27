import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID MlWF_sTchl9Dl_DST4Q__0L4z_jvrptbJAuHoduTdow'
    },
})