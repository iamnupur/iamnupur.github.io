import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Skills.css';
import skillsVector from './../../assets/skills_vector.png'
import communication from './../../assets/communication.png';
import creativity from './../../assets/creativity.png';
import randa from './../../assets/randa.png';
import curiosity from './../../assets/curiosity.png';
import problemsolving from './../../assets/problem-solving.png';
import atod from './../../assets/atod.png';
import culture from './../../assets/culture.png';
import learning from './../../assets/learning.png';
import writing from './../../assets/writing.png';
import singing from './../../assets/singing.png';
import language from './../../assets/language.png';
import painting from './../../assets/painting.png';
import digitalart from './../../assets/editing.png';


const Skills = () => {
    return (
        <div className='section-container'>
            < Header
                heading="My Skills"
                details=" "
            />


            <div className="skill-card-container">

                <div className="skill">
                    <img src={communication}
                        alt="skill"
                    />
                    <p>Communication</p>
                </div>

                <div className="skill">
                    <img src={randa}
                        alt="skill"
                    />
                    <p>Research and Analysis</p>
                </div>

                <div className="skill">
                    <img src={creativity}
                        alt="skill"
                    />
                    <p>Creativity</p>
                </div>

                <div className="skill">
                    <img src={language}
                        alt="skill"
                    />
                    <p>Language Proficiency</p>
                </div>

                <div className="skill">
                    <img src={curiosity}
                        alt="skill"
                    />
                    <p>Curiosity</p>
                </div>

                <div className="skill">
                    <img src={problemsolving}
                        alt="skill"
                    />
                    <p>Problem Solving</p>
                </div>

                <div className="skill">
                    <img src={atod}
                        alt="skill"
                    />
                    <p>Attention to Details</p>
                </div>

                <div className="skill">
                    <img src={culture}
                        alt="skill"
                    />
                    <p>Cultural Sensitivity</p>
                </div>

                <div className="skill">
                    <img src={learning}
                        alt="skill"
                    />
                    <p>Independent Learning</p>
                </div>

                <div className="skill">
                    <img src={painting}
                        alt="skill"
                    />
                    <p>Painting</p>
                </div>
                
                <div className="skill">
                    <img src={digitalart}
                        alt="skill"
                    />
                    <p>Digital Art</p>
                </div>

                <div className="skill">
                    <img src={writing}
                        alt="skill"
                    />
                    <p>Writing</p>
                </div>

                <div className="skill">
                    <img src={singing}
                        alt="skill"
                    />
                    <p>Singing</p>
                </div>


            </div>

            {/* <div className="certificate-container normal-font">
                <h3 className="certificate-sub-head">Certification </h3>
                <li><a href="/">Certificate Name and Details 1</a></li>
                <li><a href="/">Certificate Name and Details 2</a></li>
                <li><a href="/">Certificate Name and Details 3</a></li>
                <li><a href="/">Certificate Name and Details 4</a></li>

            </div> */}

            < FooterLink
                phrase="Get in " link="touch!" toAdress="/contact"
            />

            <div className="skills-vector-frame">
                <img
                    src={skillsVector}
                    alt="skills"
                    className="skills-vector"
                />
            </div>
        </div>
    );
}

export default Skills;