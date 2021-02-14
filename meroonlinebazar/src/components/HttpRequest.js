import {useEffect, useState} from 'react'
import axios from 'axios'

export function useAxiosGet(url){
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
        
            axios.get(url)
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
    }, [url])

    return request
}

export function useAxiosGet_bikes(url){
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
        
            axios.get(url)
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
    }, [url])

    return request
}



export function useAxiosGet_land(url){
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
        
            axios.get(url)
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
    }, [url])

    return request
}



export function useAxiosGet_fashion(url){
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
        
            axios.get(url)
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
    }, [url])

    return request
}



export function useAxiosGet_computer(url){
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
        
            axios.get(url)
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
    }, [url])

    return request
}


export function useAxiosGet_mobile(url){
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
        
            axios.get(url)
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
    }, [url])

    return request
}









export function useAxiosGet1(url){
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
        
            axios.get(url)
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
    }, [url])

    return request
}

export function useAxiosGet_bikes1(url){
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
        
            axios.get(url)
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
    }, [url])

    return request
}



export function useAxiosGet_land1(url){
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
        
            axios.get(url)
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
    }, [url])

    return request
}



export function useAxiosGet_fashion1(url){
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
        
            axios.get(url)
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
    }, [url])

    return request
}



export function useAxiosGet_computer1(url){
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
        
            axios.get(url)
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
    }, [url])

    return request
}


export function useAxiosGet_mobile1(url){
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
        
            axios.get(url)
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
    }, [url])

    return request
}