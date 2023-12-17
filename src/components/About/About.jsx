import React from 'react';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import './About.css';
import aboutVector from './../../assets/about_vector.png';
import aboutAnime from './../../assets/about_anime.gif';


const About = () => {
    return (
        <div className='section-container'>
            {/* <h1>I am the about page</h1> */}
            < Header
                heading="Who Am I"
                details="| Artist | Linguist | Painter |"
            />

            <div className="about-main">
                <div className="about-main-left">
                    {/* subsection 1*/}
                    <h3 className='about-sub-head'>About</h3>
                    <p className='about-details'>
                        I am Nupur, completed Post Graduation in English literature. I spend my leisure with scetches.
                        <br></br>
                        My hometown is Barabazar, Purulia, W.B, India. 
                    </p>
                    <br/>
                    {/* can add more subsections here */}
                    <h3 className='about-sub-head'>Achievements</h3>
                    <li className="normal-font">Sample Achievement 1.</li>
                    <li className="normal-font">Sample Achievement 2.</li>
                    <li className="normal-font">Sample Achievement 3.</li>


                </div>
                <div className="about-main-right">
                    {/* added animation */}
                    <img src={aboutAnime}
                        alt="animation"
                        className="about-anime"
                        style={{ width: '400px', height: 'auto' }}
                    />

                </div>
            </div>

            <div>
                

            <h3 className='acad-sub-head about-sub-head'>Academics</h3>
                    <table class="styled-table flex-table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Institute</th>
                            <th scope="col">Degree</th>
                            <th scope="col">University/Board</th>
                            <th scope="col">CGPA/Percentage</th>
                            <th scope="col">Year of Passing</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td data-label="University">University Name</td>
                            <td data-label="Degree">Master of Arts in English Literature</td>
                            <td data-label="University">University name</td>
                            <td data-label="CGPA">XX</td>
                            <td data-label="Year of Passing">2022</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td data-label="College">College Name</td>
                            <td data-label="Degree">Bachelor of Arts in English Literature</td>
                            <td data-label="University">University name</td>
                            <td data-label="CGPA">XX</td>
                            <td data-label="Year of Passing">2020</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td data-label="School">School Name</td>
                            <td data-label="Degree">Higher Secondary Examination (12th)</td>
                            <td data-label="Board">WBCHSE</td>
                            <td data-label="Percentage">XX &#37;</td>
                            <td data-label="Year of Passing">2017</td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td data-label="School">Barabazar Girls' High School, Barabazar, Purulia, WB</td>
                            <td data-label="Degree">Madhyamik Examination (10th)</td>
                            <td data-label="Board">WBBSE</td>
                            <td data-label="Percentage">XX &#37;</td>
                            <td data-label="Year of Passing">2015</td>
                            </tr>
                        </tbody>
                    </table>
            </div>

            < FooterLink
                phrase="Check out my "
                link="projects"
                toAdress="/projects" />

            {/* Vector frame */}
            <div className="vector-frame">
                <img src={aboutVector} className='about-vector' alt="about" />
            </div>

        </div>
    );
}

export default About;