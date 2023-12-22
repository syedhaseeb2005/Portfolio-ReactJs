import React from 'react'
// import img1 from '../assest/img-1.png'

const Work = () => {
    const projects = [
        {
          title: 'Project 1',
          description: 'Social Media App with ReactJs Nodejs ExpressJs and Mongodb',
          imageUrl: 'https://img.freepik.com/free-vector/antigravity-isometric-mobile-phone-with-messages-notifications_23-2148273359.jpg?size=626&ext=jpg&ga=GA1.1.140349720.1700509378&semt=ais', 
        },
        {
          title: 'Project 2',
          description: 'Ticket Booking App with ReactJs Nodejs ExpressJs and Mongodb',
          imageUrl: 'https://img.freepik.com/free-vector/women-using-mobile-phone-booking-flight-ticket_1262-21308.jpg?size=626&ext=jpg&ga=GA1.1.140349720.1700509378&semt=ais',
        },
        {
          title: 'Project 3',
          description: 'Attendance App with ReactJs Nodejs ExpressJs and Mongodb',
          imageUrl: 'https://placekitten.com/300/202',
        },
        {
          title: 'Project 4',
          description: 'E-commerce App with ReactJs Nodejs ExpressJs and Mongodb',
          imageUrl: require('../assest/img.png')
        },
        {
          title: 'Project 5',
          description: 'Weather App with ReactJs',
          imageUrl: require('../assest/img-1.png'),
        },
      ];
    return (
        <section name='work' className="py-16 bg-[#0a192f] text-gray-300 w-full h-full ">
      <div className="container mx-auto max-w-[1000px] items-start  p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h2 className="text-4xl font-bold inline border-b-2 border-b-pink-600">My Work</h2>
          <p className='py-4'>Check out some of my recent work</p>
        </div>
        <div className="w-full cursor-pointer grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          {projects.map((project, index) => (
            <div key={index} className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-2">
              <img src={project.imageUrl} alt={project.title} className="mb-4 object-cover rounded-md shadow-md w-[190px] h-[150px]"/>
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