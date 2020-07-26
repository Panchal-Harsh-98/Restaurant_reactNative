import axios from 'axios';

export default axios.create({
    baseURL : 'https://developers.zomato.com/api/v2.1',
    headers :{ 
        'user-key' : 'cc23019398325a19371643e735d45844'
    }
});

//zomato api key == cc23019398325a19371643e735d45844