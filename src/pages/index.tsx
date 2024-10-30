import React from  'react';

export default function IdCard() {
  return <div className='flex flex-col min-h-screen bg-white'>
    <section id='card'>
    
    <div className='flex-grow flex items-center justify-center p-6'>
      <div className='bg-slate-200 p-14 rounded-lg shadow-lg max-w-4xl w-full flex items-center justify-center border-4 border-sky-300'>

       

        <div className='absolute inset-0 flex items-center justify-center'>
         <div className='relative w-full h-full max-w-[350px] max-h-[400px]'>
         <img src="image/backgrounds.png"
          alt="background image" 
          width={350}
          height={400}
          className='opacity-10'/> 



         </div>
        </div>
        
        
        

        
        <div className='w-2/3 pr-4 pt-16 relative z-10'>

         {/*LOGO */}

 <img 
 src="image/logo.png" 
 alt="card logo" 
 className='absolute top-[-20px] left-0 w-12 h-16 z-10'
 />

          <p className='mb-2'>
            <span className='text-sky-500'><strong> Name: </strong> </span>
            <span className='text-black font-black'>Muhammad Umair</span>
          </p>

          <p className='mb-2'>
            <span className='text-sky-500'><strong> Roll No: </strong> </span>
            <span className='text-black font-black'>00295215</span>
          </p>

          <p className='mb-2'>
            <span className='text-sky-500'><strong>Distance Learning: </strong> </span>
            <span className='text-black font-black'>No</span>
          </p>

          <p className='mb-2'>
            <span className='text-sky-500'><strong> City: </strong> </span>
            <span className='text-black font-black'>Karachi</span>
          </p>

          <p className='mb-2'>
            <span className='text-sky-500'><strong>Center: </strong> </span>
            <span className='text-black font-black'>Governor House Karachi</span>
          </p>

          <p className='mb-2'>
            <span className='text-sky-500'><strong>Campus: </strong> </span>
            <span className='text-black font-black'>Main</span>
          </p>

          <p className='mb-2'>
            <span className='text-sky-500'><strong>Days/Time: </strong> </span>
            <span className='text-black font-black'>Saturday (7:00PM-10:00PM) </span>
          </p>

          <p className='mb-2'>
            <span className='text-sky-500'><strong>Batch: </strong> </span>
            <span className='text-black font-black'>01 </span>
          </p>

        
          <div className='flex flex-col mt-4'>
            <button className='relative w-full p-1 rounded-lg border border-grey-300 bg-blue-900 text-white items-center justify-center flex'>

             <span className='absolute inset-0 bg-slate-500 w-1/2 rounded-lg'> 
             </span>

              <span className='relative z-10'>
              Q2 & WMD 
             </span>



            </button>
          </div>
        </div>


   

  <div className='w-1/3 text-center relative z-10' >
    <img
      src={"image/umairs.jpg"}
      alt ={'Muhammad Umair'}
      width={800} height={800}
      className='rounded-lg mb-6 w-full' />

      <p className='border-t-2 border-t-slate-400 pt-2 font-bold text-sky-500 mt-10 text-2xl'>Authorized Signature</p>

  </div>





      </div>
    </div> </section>
  </div>;
}
