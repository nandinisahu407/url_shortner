import React, { useState } from 'react'
import Lottie from 'react-lottie';
import urlAnimationData from './url_anim.json';
import qrAnimationData from './qr_anim.json';

import arrowAnimationData from './arrow_anim.json'



const Home = () => {

  const [animationState, setAnimationState] = useState('url');

  const handleAnimationFinish = () => {
    if (animationState === 'url') {
      setAnimationState('qr');
    }
    else if(animationState === 'qr') {
        setAnimationState('url');
      }
  };

  return (
    <>

    <div className="flex flex-row justify-center m-auto h-screen ml-10">

        <div className="flex flex-col justify-center mt-10 h-screen">
            <h1 className='text-5xl font-bold mx-15 text-dark-4 font-serif'>Links getting out of hand?</h1>
            <p className='text-xl font-semibold text-gray-400 my-4'>We got you. Shorten URLs & make 'em QR-code cute <br />for easy sharing !!</p>
            <a className='font-semibold text-3xl text-blue-1 mt-10 cursor-pointer' href="/shorty">Click. Shorten. Scan. Share.</a>

            <Lottie
              options={{
                  loop: true,
                  autoplay: true,
                  animationData: arrowAnimationData,
              }}
              height={130}
              width={120} 
              
              />


        </div>

        <div className="animation-container">
            <Lottie
            options={{
                loop: animationState, 
                autoplay: true,
                animationData: animationState === 'url' ? urlAnimationData : qrAnimationData,
                rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice', 
                },
            }}
            height={700}
            width={600}
            eventListeners={[
                {
                eventName: 'complete',
                callback: handleAnimationFinish,
                },
            ]}
            />
      </div>
    </div>
    
    </>
  )
}

export default Home
