import { useEffect, useState } from 'react'

const useFetch = <T = any>(url: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    fetch('http://localhost:8000'+url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! ${res.status}`)
        return res.json()
      })
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}

export default useFetch
