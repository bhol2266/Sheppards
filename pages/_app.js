import '../styles/globals.css'
import NProgress from 'nprogress'
import '../styles/globals.css'
import '../styles/nProgress.css'
import Router from 'next/router'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import ReactWhatsapp from 'react-whatsapp';
import { useRef, useState } from 'react'
import React from 'react'




export default function App({ Component, pageProps }) {


  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();

  })
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
  })

  const [message, setmessage] = useState("");
  const [messageBox, setmessageBox] = useState(false);

  const whatsAppClick = () => {
    var link = document.getElementById('ReactWhatsapp');
    link.click();
  }

  const openMessageBox = () => {
    setmessageBox(!messageBox)
  }



  return (
    <>

      <Navbar />
      <Component {...pageProps} />

      <div className={`${messageBox ? "bg-white shadow" : ""}  rounded-lg py-4  cursor-pointer  fixed bottom-2 left-2 z-10 lg:bottom-5 lg:left-5  flex items-center space-x-3 lg:space-x-4`}>
        <ReactWhatsapp id='ReactWhatsapp'  number="91-910-882-5914" message={message} />
        <img onClick={openMessageBox} src="./whatsapp.svg" alt="" className='h-[50px]  lg:h-[80px] ' />


        {messageBox &&
          <div className=''>
            <h1 className='font-inter text-[14px] lg:text-[16px] font-medium mb-1'>Chats with us! (online)</h1>
            <input onChange={(e) => { setmessage(e.target.value) }} value={message} type="text" name="message" id="message" placeholder='Enter message' className='px-2 py-1 lg:px-3 lg:py-2 border-[1px] border-[#25D366] rounded-md text-[#075E54] font-inter text-[14px] outline-none ' />

            <button onClick={whatsAppClick} className='px-4 py-2 text-white font-inter font-medium bg-[#25D366] rounded-md mx-2 lg:mx-4 text-[12px] lg:text-[14px]'>Start</button>

          </div>
        }

      </div>


    </>
  )

}
