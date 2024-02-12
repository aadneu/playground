
import {useState,useEffect} from 'react'
//ikke lagt inn error
const useFetch = (url) => {

    const abortCont = new AbortController();
    const [backendData, setBackendData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    
    useEffect(() => {
        fetch(url, {signal: abortCont.signal}).then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
                setIsPending(false)
                
            }
        ).catch(error => {
          console.error('Error fetching data', error)
        })
    
        return () => abortCont.abort();
    }, [url])

    return {backendData, isPending}
}
 
export default useFetch;