import { useEffect, useState } from 'react'

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
        const json = await res.json()
        setData(json)
      } catch (err: any) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, error, loading }
}
