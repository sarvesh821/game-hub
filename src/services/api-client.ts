import axios from "axios";

 export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'da2ae626e59d4f5bafab545185a7a1ca'
    }
})
