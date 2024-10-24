import { useEffect, useState } from 'react';

const useFetch = (url) => {

    var [data,setData] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:8000/'+url).then((data)=>data.json()).then((data)=>{
            setData(data)  
        })
      },[])

      return {data:data}
}

export default useFetch;