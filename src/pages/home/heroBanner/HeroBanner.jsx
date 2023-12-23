import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router';
import {useSelector} from "react-redux"

import "./HeroBanner.scss"

import useFetch from '../../../hooks/useFetch';

import Img from "../../../components/lazyLoadImage/Img"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"

const HeroBanner = () => {

  const[background,setBackground] = useState("");
  const[query,setQuery] = useState("");
  const navigate = useNavigate();
  const {url} = useSelector((state)=>
    state.home
  )
  const{data,loading} = useFetch("/movie/popular")

  useEffect(()=>{
       const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
       setBackground(bg)
  },[data])

  const searchQueryHanlder = (e) =>{
       if(e.key === "Enter" && query.length > 0){
           navigate(`/search/${query}`)
       }
  }


  return (
    <div className="heroBanner">
      {!loading && <div className="backdrop-img">
          <Img src={background} />
      </div>}
      <div className="opacity-layer">

      </div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome,</span>
          <span className="subTitle">Explore our movie listing web app for an immersive journey through captivating stories. Unleash the magic of film at your fingertips. Discover, indulge, enjoy!"</span>
          <div className="searchInput">
            <input type="text"
             placeholder='Search for Movies or TV Shows....'
             onKeyUp={searchQueryHanlder} 
             onChange={(e)=>setQuery(e.target.value)} />
             <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
     
    </div>
  )
}

export default HeroBanner