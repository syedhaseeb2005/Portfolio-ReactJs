import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex py-5 flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px]  w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline  border-b-4 border-b-pink-600'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p className='text-2xl font-bold'>Hi. I'm Syed Haseeb, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                            I am a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
                            <br /><br />
                            Thank you for visiting my portfolio and I look forward to hearing from you!
                            <br /><br />
                            <span className='text-pink-600 font-bold'>Have a great day!</span>
                            <br /><br />
                            <span className='text-pink-600 font-bold'>- Syed Haseeb</span>
                            <br /><br />
                            <span className='text-pink-600 font-bold'>- Web Developer</span>
                            <br /><br />
                            <span className='text-pink-600 font-bold'>- Mern Stack Developer</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About