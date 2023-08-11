import React from 'react';
import './Work.css'; 
import Card from './Card';
import img1 from './Ecommerce.png';
import img2 from './Rwebsite.png';
import img3 from './Jprojects.jpg';

const Work = () => {
  const projectsData = [
    {
      link: 'https://github.com/Sukrit3007/React-Website-e-commerce-',
      imageSrc: img1,
      title: 'E-COMMERCE WEBSITE USING REACT JS',
      description: 'Discover a modern e-commerce experience built with React. Shop effortlessly, explore a variety of products, and enjoy seamless checkout. Your one-stop destination for convenient online shopping.',
    },
    {
      link: 'https://github.com/Sukrit3007/recruitment-website',
      imageSrc: img2,
      title: 'RECRUITMENT WEBSITE USING REACTJS',
      description: 'Presenting our React-powered Recruitment Website – a dynamic front-end solution designed to streamline job searching and hiring processes. With an engaging user interface, our platform offers a user-friendly experience for job seekers and employers alike.',
    },
    {
      link: 'https://github.com/Sukrit3007/Dad-joke-Generator',
      imageSrc: img3,
      title: " JAVASCRIPT PROJECTS ",
      description: 'Dive into my JavaScript projects showcasing API integration. Experience dynamic text generation with the Auto Text Generator and seamless user feedback collection using the Feedback Form. Discover innovation through code.',
    },
  ];

  return (
    <div className="work-page">
      <h1>“MY WORK”</h1>
      <div className="card-container">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            link={project.link}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
