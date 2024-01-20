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
                details="| Educator | Artist | Linguist | Painter |"
            />

            <div className="about-main">
                <div className="about-main-left">
                    {/* subsection 1*/}
                    <h3 className='about-sub-head'>About</h3>
                    <p className='about-details'>
                        I am Nupur, completed Post Graduation in English literature. I spend my leisure with scetches.
                        <br></br>
                        My hometown is Barabazar, Purulia, W.B, India. 
                        <br /><br />
                        As an individual, my objective is to learn, grow & attain new knowledges. As a future teacher I want to 
                        contribute my knowledge positively to the future leaders. Seeking a teaching position to utilize my enthusiasm for 
                        student development, innovative teaching methods, and a passion for creating a positive impact on young minds. As 
                        an upcoming future educator, I look forward to nurturing the potential of my learners.

                    </p>
                    <br/>
                    {/* can add more subsections here */}
                    <h3 className='about-sub-head'>Seminars and Workshops:</h3>
                    <li className="normal-font"> Attended IQAC sponsored International Conference on South Asian Literature, Culture & Society, organized by Department of English and Department of History, Barabazar B.T.M. College, Purulia, West Bengal.</li>
                    <li className="normal-font"> Attended classes on Sustained Graded Value Education Programmes, conducted by Ramkrishna Mission Vidyapith, Purulia on the 150th Birth anniversary celebration of Swami Vivekananda.</li>


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
                            <td data-label="University">Baba Saheb Ambedkar Education University (Erstwhile WBUTTEPA)</td>
                            <td data-label="Degree">Bachelor of Education</td>
                            <td data-label="University">Baba Saheb Ambedkar Education University</td>
                            <td data-label="CGPA">Pursuing</td>
                            <td data-label="Year of Passing">2023-Present</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td data-label="University">Sidho-Kanho-Birsha University, Purulia, W.B.</td>
                            <td data-label="Degree">Master of Arts in English Literature</td>
                            <td data-label="University">Sidho-Kanho-Birsha University</td>
                            <td data-label="CGPA">7.67 CGPA</td>
                            <td data-label="Year of Passing">2022</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td data-label="College">Barabazar Bikram Tudu Memorial College, Barabazar, Purulia, W.B.</td>
                            <td data-label="Degree">Bachelor of Arts in English Literature</td>
                            <td data-label="University">Sidho-Kanho-Birsha University</td>
                            <td data-label="CGPA">7.59 CGPA</td>
                            <td data-label="Year of Passing">2020</td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td data-label="School">Barabhum High School(H.S.), Barabazar, Purulia, W.B.</td>
                            <td data-label="Degree">Higher Secondary Examination (12th)</td>
                            <td data-label="Board">WBCHSE</td>
                            <td data-label="Percentage">80 &#37;</td>
                            <td data-label="Year of Passing">2017</td>
                            </tr>
                            <tr>
                            <th scope="row">5</th>
                            <td data-label="School">Barabazar Girls' High School (H.S.), Barabazar, Purulia, W.B.</td>
                            <td data-label="Degree">Madhyamik Examination (10th)</td>
                            <td data-label="Board">WBBSE</td>
                            <td data-label="Percentage">69 &#37;</td>
                            <td data-label="Year of Passing">2015</td>
                            </tr>
                        </tbody>
                    </table>
            </div>

            <div className='about-bottom'>
                <div className='about-bottom-content'>
                    <h3 className='about-sub-head'>Extra-curricular Activities :</h3>
                            <li className="normal-font">Completed 4th year in Vocal Classical and was placed in first division and distinction from Pracheen Kala Kendra, Chandigarh.</li>
                            <li className="normal-font">Completed 5th year in Rabindra Sangeet and was placed in first division and distinction from Bangiya Sangeet Parishad, affiliated to Rabindra Bharati University, Calcutta.</li>
                            <li className="normal-font">Completed 3rd year in Najrul Geeti and was placed in first division and distinction from Bangiya Sangeet Parishad, affiliated to Rabindra Bharati University, Calcutta.</li>
                            <li className="normal-font">Completed 3rd year in Painting (Ankan Sree) and was placed in first division and distinction from Bangiya Sangeet Parishad, affiliated to Rabindra Bharati University, Calcutta.</li>
                </div>
                <div className='about-bottom-content'>
                    <h3 className='about-sub-head'>Extra-curricular Achievements :</h3>
                            <li className="normal-font">Secured first prize in Rabindra Sangeet & 'Adhunik Bangla gaan', second prize in Najrul geeti at Govt sponsored Block level competition.</li>
                            <li className="normal-font">Secured first position in Najrul geeti and second position in Lok Sangeet sponsored by Govt. of West Bengal as a tribute to Swami Vivekananda.</li>
                            <li className="normal-font">Achieved the highest position in Rabindra Sangeet district level from All Bengal Teachers Association, Purulia.</li>
                            <li className="normal-font">Received the first position also in Rabindra Sangeet from Govt. Of West Bengal as a homage to Rabindranath Tagore's memory in 2010.</li>
                            <li className="normal-font">Secured second position in Najrul Geeti & also in Rabindra Sangeet in Bandwan Boi Mela o Milan Mela, Bandwan, Purulia.</li>
                            <li className="normal-font">Attained the top position in Drawing competition from All Bengal Teachers' Association, Purulia in 2010.</li>

                </div>
                <div className='about-bottom-content'>
                    <h3 className='about-sub-head'>Hobbies and Interest :</h3>
                            <li className="normal-font">Singing & listening to different genre of songs.</li>
                            <li className="normal-font">Painting and Gardening in free time.</li>
                            <li className="normal-font">Interest in searching new topics on internet & gaining new knowledge.</li>
                            <li className="normal-font">Practicing mindfulness through meditation.</li>

                </div>
            </div>

            < FooterLink
                phrase="Check out my "
                link="Skills"
                toAdress="/skills" />

            {/* Vector frame */}
            <div className="vector-frame">
                <img src={aboutVector} className='about-vector' alt="about" />
            </div>

        </div>
    );
}

export default About;