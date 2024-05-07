import React, { useState } from 'react'
import { FaLink } from "react-icons/fa";
import { IoQrCode } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";

import axios from "axios";
import { Toaster, toast } from 'react-hot-toast';


const MainPage = () => {

    const[shortUrlState,setShortUrlState]=useState(false);
    const[qrCodeState,setQrCodeState]=useState(false);

    const[su,setSu]=useState("");

    const handleShortUrl=()=>{
        setShortUrlState(true);
        setQrCodeState(false); 

    }

    const handleQr=()=>{
        setShortUrlState(false);
        setQrCodeState(true);
    }

    const[Inputs,setInputs]=useState({
        "url":""
    });

    const change=(e)=>{
        const{name,value}=e.target;
        setInputs({...Inputs,[name]:value});
    }

    const submitUrl=async(e)=>{
        e.preventDefault();

        try {
            const response=await axios.post("http://localhost:1000/url",Inputs);
            console.log(response.data.id);

            if(response.status===200){
                toast.success("Short Link Generated 🥳");  

                const shorturl="http://localhost:1000/"+response.data.id;
                setSu(shorturl);                
            }
          
        } catch (error) {
            console.log("Error from frontend login:", error);
            if(error.response){
                if(error.response.status===400){          
                    toast.error("Kindly enter URL :("); 
                }
                else {
                    toast.error("An error occurred. Please try again.");
                }
            }



        }
        
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(su);
        toast.success('Link Copied !!');
    };


  return (
    <>

        <div className="main">
        <Toaster
            position="top-right"
            reverseOrder={false}
            />

       <div className="flex flex-col justify-center text-center m-auto h-screen">

        <h1 className='text-4xl font-semibold text-blue-1'>Say goodbye to link overload!</h1>

        <div className="maincontainer mt-7 flex flex-col items-center">
            <ul className='flex flex-row justify-center h-70px text-center mt-7'>
                <li className='flex items-center mx-8'>
                    <FaLink className='mr-3 text-xl'/>
                    <button onClick={handleShortUrl} className='text-xl font-semibold'>Short Link</button>

                </li>
                <li className='flex items-center'>
                    <IoQrCode className='mr-3 text-xl' />
                    <button onClick={handleQr} className='text-xl font-semibold'>QR Code</button>
                </li>
            </ul>


            {shortUrlState &&
            (
                <div className="container flex flex-col bg-blue-2 w-auto mt-10 p-20 rounded-xl">
                <h1 className='text-4xl font-semibold text-dark-3 mb-7'>Paste Long URL</h1>
                    <input
                        className=
                        " bg-dark-3flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 "
                        placeholder='Enter Long url'
                        name="url"
                        onChange={change}
                        value={Inputs.url}


                    />

                <button className='mt-7 bg-dark-3 text-white-1 mx-7 p-2 rounded-lg' onClick={submitUrl}>Generate Short Link</button>
                
                {su && (                   //copy short url generated                               
                    <div className="flex flex-row justify-center items-center mt-4">
                        <p className="text-blue-1 font-semibold mr-2">{su}</p>
                            <button
                                className="bg-blue-1 text-white-1 font-semibold px-3 py-1 rounded-md"
                                onClick={copyToClipboard}
                            >
                            <IoCopyOutline /> 
                            </button>
                            </div>
                        )}
                </div>
            )    
            }

            {qrCodeState &&
                (
                <div className="container flex flex-col bg-blue-2 w-auto mt-10 p-20 rounded-xl">
                <h1 className='text-4xl font-semibold text-dark-3 mb-7'>Paste Link</h1>
                    <input
                        className=
                        " bg-dark-3flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 "
                        placeholder='Enter link'
                    />

                <button className='mt-7 bg-dark-3 text-white-1 mx-7 p-2 rounded-lg' >Generate QR Code</button>
                </div>
 
            )
            }
            
        </div>

       
       
       </div>
       </div>

    </>
  )
}

export default MainPage
