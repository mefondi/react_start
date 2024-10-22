import { useState } from "react"

export const useFetching = (callback) =>{
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const Fetching = async() =>{
        try {
            setIsLoading(true)
            await callback()
        } catch (e) {
            setError(e.message)
        }finally{
            setIsLoading(false)
        }
    }
    return [Fetching, isLoading, error]

}