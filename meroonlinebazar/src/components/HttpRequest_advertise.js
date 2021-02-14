import {useEffect, useState} from 'react'
import axios from 'axios'

export function useAxiosGetAdd(urlAdv){
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    },
    )

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        
            axios.get(urlAdv)
            .then(response => {
               
          

                   setRequest({
                    loading: false,
                    data: response.data,
                    error: false
                })
                
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [urlAdv])

    return request
}

