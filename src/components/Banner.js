import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from '../request'
import instance from '../instanceConfig'


function Banner() {
    
    const fetchData = async ()=>{
        const response = await instance.get(requests.fetchNetflixOriginals)
        const {results} = response.data
        console.log(results);
    }
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>Banner</div>
  )
}

export default Banner