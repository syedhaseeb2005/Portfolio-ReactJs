import React from 'react'
// import img1 from '../assest/img-1.png'



const Work = () => {
    const projects = [
        {
          title: 'Project 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: 'https://placekitten.com/300/200', // Replace with your image URL
        },
        {
          title: 'Project 2',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          imageUrl: 'https://placekitten.com/300/201', // Replace with your image URL
        },
        {
          title: 'Project 3',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          imageUrl: 'https://placekitten.com/300/202', // Replace with your image URL
        },
        {
          title: 'Project 4',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          imageUrl: 'https://placekitten.com/300/203', // Replace with your image URL
        },
        {
          title: 'Project 5',
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          imageUrl: 'https://placekitten.com/300/204', // Replace with your image URL
        },
      ];
    return (
        <section name='work' className="py-16 bg-[#0a192f] text-gray-300 w-full h-full ">
        <div className="container mx-auto max-w-[1000px] items-start  p-4 flex flex-col justify-center w-full h-full">
          <div>
            <h2 className="text-4xl font-bold inline border-b-2 border-b-pink-600">My Work</h2>
            <p className='py-4'>Check out some of my recent work</p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
            {projects.map((project, index) => (
              <div key={index} className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-2">
                <img src={project.imageUrl} alt={project.title} className="mb-4 rounded-md shadow-md"/>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Work