import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
            I have experience in Front-End Web Development proficiency in HTML, CSS, JavaScript, Node.js, Bootstrap, Tailwind CSS, React, and Angular along with some Back-End knowledge like SQL, NoSQL, MongoDB, MySQL .
            </p>

            <br />

            <p className='text-xl'>
            A good problem solver, innovative mind, self-motivated, and always ready to learn new technologies with quick grasping and learning capabilities. I also have a keen interest in bug-solving and fixing. 
            </p>

            <br />
            
            <p className='text-xl'>
            As a technology enthusiast, I love exploring new technologies and using them to solve real-life problems. 
            </p>
        </div>
    </div>
  )
}

export default About