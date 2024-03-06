import axios from 'axios';
export const limit = 15
export let page = 1

    
   
  
export async function fetchIcon(query) {
    const params = new URLSearchParams({
        key: '42545240-8b0483885ebe28877133c0801',
        q: query,
        per_page: limit,
        page: page
      });
    

    const BASE_URL = 'https://pixabay.com/api/';
    const response = await axios.get(
        `${BASE_URL}?${params}`
      );
      page +=1
      
      
      return { hits: response.data.hits, totalHits: response.data.totalHits };
      
    
      }




