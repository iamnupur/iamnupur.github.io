import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Projects.css';
import pt1 from './../../assets/painting01.jpg'
import pt2 from './../../assets/painting02.jpg'
import pt3 from './../../assets/painting03.jpg'
import pt4 from './../../assets/painting04.jpg'

const Projects = () => {
    return (
        <div className='section-container'>
            < Header
                heading="My projects in short"
                details=" "

            />


            <div className="project-card">
            <div className="image-container">
                    <img
                        src={pt1}
                        alt='project'
                        className='project-image'
                    />
            </div>

            <div className='project-details-container'>
                <h2 className='project-heading'>The Sunset</h2>
                <p className='project-details'>#sunsetart #digiart #digitalartwork #digitaldrawing #sunsetphotography #sunsetart #sunset #artist #artlove #artonibispaintx #artforeveryone #ａｅｓｔｈｅｔｉｃ #aesthetic #sunsetlovers</p>
            </div>
            </div>

            <div className="project-card">
            <div className="image-container">
                    <img
                        src={pt2}
                        alt='project'
                        className='project-image'
                    />
            </div>

            <div className='project-details-container'>
                <h2 className='project-heading'>The Woods</h2>
                <p className='project-details'>#ibispaintxart #artonibispaintx #instagramartwork #instagramreels #artpost #instaart #instagram #arts #spring #springart #art #artoninstagram</p>
            </div>
            </div>

            <div className="project-card">
            <div className="image-container">
                    <img
                        src={pt3}
                        alt='project'
                        className='project-image'
                    />
            </div>

            <div className='project-details-container'>
                <h2 className='project-heading'>The Tree</h2>
                <p className='project-details'>#digitalart #artist #picture #picsart #gallery #photography #galleryart #artistoninstagram #instagramartist #artfromtheheart #artdaily #postoftheday #todays #pictureoftheday #picsofinstagram</p>
            </div>
            </div>

            <div className="project-card">
            <div className="image-container">
                    <img
                        src={pt4}
                        alt='project'
                        className='project-image'
                    />
            </div>

            <div className='project-details-container'>
                <h2 className='project-heading'>Let them fly</h2>
                <p className='project-details'>#digitalart #artonibispaintx #artist #trendingnow #gilehriyaan #trending #viralreels #viralpost #artistoninstagram #artsforall #artoftheday #artofinsta #artreels #reelsinstagram #instagramdigital #instagramartist #instagramdigitalart #instagramers #instagramdaily #reelkarofeelkaro</p>
            </div>
            </div>

            < FooterLink
                phrase="Check out "
                link="my Skills"
                toAdress="/skills"
            />
            {/* <h1>I am the projects page</h1> */}
        </div>
    );
}

export default Projects;