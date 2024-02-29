import React, { useContext, useState} from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';

import ytlogo from "../images/yt-logo.png";
import ytlogomobile from "../images/yt-logo-mobile.png";

import { SlMenu } from 'react-icons/sl';
import { IoIosSearch } from 'react-icons/io';
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";
import Loader from "../shared/loader";

const Headers = () => {

  const [searchQuery,setsearchQuery]=useState("");

  const { loading, MobileMenu ,setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {

    if((event?.key === "Enter" || event === "searchButton") && searchQuery?.length >0){
      navigate(`/searchResult/${searchQuery}`);
    }
  }

  const mobileMenuToggle =() => {
    setMobileMenu(!MobileMenu);
  }

  const {pathname} = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0]

  return (
      <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-16 px-4 md:px-5 bg-white dark:bg-black">
        {loading && <Loader/>}

        <div className="flex h-5 items-centre">
          {pageName !== "video" && (

            <div 
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover-bg:-[#303030]/[0.6]" 
            onClick={mobileMenuToggle}>

              {MobileMenu? 
              (
              <CgClose className="text-white text-xl"/>
              ) : (
              <SlMenu className="text-white text-xl"/>
              )
              }
            </div>
          )}

          <Link to="/" className='flex h-5 items-center'>

            <img className='h-full dark:md:black' src={ytlogo} alt="Youtube"></img>
            <img className='h-full md:hidden' src={ytlogomobile} alt="Youtube"></img>

          </Link>

        </div>

        
        <div className="group flex items-centre">
            <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
              
              <div className="w-10 ml-2 items-center justify-centre hidden group-focus-within:md:flex">
                <IoIosSearch className='text-white text-xl'/>
              </div>

              <input
                type="text"
                className='bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-4 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]'
                onChange={(e)=>setsearchQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                value={searchQuery}
                placeholder='Search'
              />

            </div>

            
            <button className='w-[60px] md:[60px] h-8 md:h-10 flex items-center justify-center rounded-r-3xl bg-white/[0.15]' onClick={()=>searchQueryHandler("searchButton")}>
                <IoIosSearch className='text-white text-xl'/>
            </button>

          </div>

          <div className="flex items-centre">
              <div className="hidden md:flex">

                <div className="flex items-center h-10 w-10 rounded-full hover:bg:[#303030]/[0.6]">
                  <RiVideoAddLine className='text-white text-xl cursor-pointer'/>
                </div>

                <div className="flex items-center h-10 w-10 rounded-full hover:bg:[#303030]/[0.6]">
                  <FiBell className='text-white text-xl cursor-pointer'/>
                </div>

                <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                  <img src="https://xsgames.co/randomusers/avatar.php?g=male" />
                </div>
              </div>
          </div>
      </div>
  )
}

export default Headers
