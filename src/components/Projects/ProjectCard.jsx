import React from 'react';
import './Projects.css';

const ProjectCard = ({
    projectName,
    projectDescription,
    imageUrl,

}) => {
    return (
        <div className="project-card">
            <div className="image-container">
                    <img
                        src='https://github.com/iamnupur/iamnupur.github.io/blob/master/src/assets/painting01.jpg'
                        alt='project'
                        className='project-image'
                    />
            </div>

            <div className='project-details-container'>
                <h2 className='project-heading'>{projectName}</h2>
                <p className='project-details'>{projectDescription}</p>
            </div>
        </div>
    );
}

export default ProjectCard;