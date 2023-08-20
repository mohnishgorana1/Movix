// import { useState, useEffect} from 'react'
import {useEffect } from 'react';
import { fetchDataFromApi } from './utils/api.js'

import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from './store/homeSlice.js'


import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'

import Home from './pages/home/Home.jsx';
import Details from './pages/details/Details.jsx'
import SearchResult from './pages/searchResult/SearchResult.jsx'
import Explore from './pages/explore/Explore.jsx'
import PageNotFound from './pages/404/PageNotFound.jsx'




function App() {

  const dispatch = useDispatch();
  const {url} = useSelector( (state) => state.home );
  console.log(url);

  useEffect( () => {
    apiTesting();
  }, []);

  const apiTesting  = () => {
    fetchDataFromApi('/movie/popular').then( (res) => { 
      console.log(res) ;
      dispatch(getApiConfiguration(res));
    })
  }


  return (
    <div className='App' >App
      {url?.total_pages}
      <Home />
      <Details />
      <SearchResult />
      <Explore />
      <PageNotFound />
    </div>

  )
}

export default App
