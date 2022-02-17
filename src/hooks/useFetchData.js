import React, { useEffect, useState } from "react"
import axios from "axios"

const useFetchData = (schedule,button, time) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const config = {
    "accept": "application/json",
    "app_id": "d3278977",
    "app_key": "579dc05aacd0ec06190955b93f5112d5",
    "resourceVersion": "v4"
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.schiphol.nl/public-flights/flights?${schedule}${time}&includedelays=false&page=0&sort=%2BscheduleTime`, { headers: config })
      setData(response.data.flights)
      console.log(response.data.flights)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [button])
  return {data, loading}
}

export default useFetchData