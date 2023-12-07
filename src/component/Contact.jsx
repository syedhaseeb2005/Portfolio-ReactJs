import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-full bg-[#0a192f] text-gray-300 flex justify-center items-center p-4'>
            <form method='POST' action='https://getform.io/f/324a3d09-baad-480b-acb8-cf2d2fb2082e' className='flex flex-col max-w-[600px] w-full  justify-center'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - haseebsyed901@gmail.com </p>
                </div>
                <div className='flex flex-col'>
                    <input className='bg-[#ccd6f6] p-2 text-black' type="text" placeholder='Your Name...' name='name' />
                    <input className='my-4 p-2 bg-[#ccd6f6] text-black' type="email" placeholder='Your Email...' name='email' />
                    <textarea className='bg-[#ccd6f6] text-black p-2' placeholder='Your Message...' name='message' rows="10"></textarea>
                    <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 duration-200 my-8 mx-auto flex items-center'>Let's Collaborate</button>
                </div>
            </form>
        </div>
    )
}

export default Contact