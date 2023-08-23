import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/contentWrapper';

function HeroBanner() {

  const [background, setBackground ] = useState('')
  const [query, setQuery ] = useState('');
  const navigate = useNavigate();
  const { url } =  useSelector( (state) => state.home)
  const {data, loading} = useFetch('/movie/upcoming');
  
  useEffect( () => {
      const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
      setBackground(bg)
  }, [data])

  const searchQueryHandler = (event) => {
    if( query.length > 0 &&  (event.key === "Enter" || event.onClick) ){
      navigate(`/search/:${query}`)
    }
  }

  return (
    <div className='heroBanner w-[100%] h-[450px] bg-black flex items-center relative md:h-[700px]'>
      {!loading && <div className="backdrop_img h-[100%] w-[100%] absolute top-0 left-0 opacity-50 overflow-hidden">
        <Img src={background} />
      </div>}
      <div className="opacity_layer w-full h-[250px] absolute bottom-0 left-0 ">
        
      </div>
      <ContentWrapper >
        <div className="heroBannerContent flex flex-col items-center text-white text-center relative max-w-[800px] my-0 mx-auto">
          <span className="title text-[50px] font-bold mb-[10px] md:mb-0 md:text-[70px] ">Welcome</span>
          <span className="subTitle text-[18px] font-semibold mb-[40px] md:text-[24px]">Millions of movies, TV shows and people to discover. Explore now.</span>
          <div className="searchInput flex items-center w-full  ">
            <input  
              type="text"
              placeholder='Search for a Movie or TV show ...' 
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              className='w-[calc(100%-100px)] h-[50px] bg-white text-black outline-0 border-0 rounded-l-[30px] py-0 px-[15px] text-[14px] md:w-[calc(100% - 150px)] md:h-[60px] md:py-0 md:px-30 '
            />
              <button 
                className='w-[100px] h-[50px] text-white outline-0 border-0 rounded-r-[30px] text-[16px] md:w-[150px] md:h-[60px] md:text-[25px]  bg-gradient-to-r from-[#f89e00] to-[#da2f68]'>
                  Search
                </button>
          </div>
        </div>
      </ContentWrapper>
      
    </div>
    
  )
}

export default HeroBanner