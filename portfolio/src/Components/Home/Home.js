import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Yohann from "../About/Yohann.jpg";
import "./Home.css"

import Competences from "../Projects/Competences/Competences.js";
import Projects from "../Projects/Projects.js";

import {projectList} from "../Projects/datas/projectList.js";
import { Link } from "react-router-dom";

export default function Home(){
    return(<div>
            <Header />


            <div className="main-container">
                <div id="about" className="home-about">
                    <h1 className="home-about-title">About me</h1>
                    <div>
                        <div className="presentation-content">
                            <img src={Yohann} className="profile-picture" />

                            <div className="home-about-text">
                                {
                                    /*
                                        <p className="typewriter-line1">Hello !</p>
                                <p className="typewriter-line2">I am Yohann Delacroix, front-end web developer</p>
                                <p>I love to spend my time on implementing designs with HTML/CSS and intelligent apps with JavaScript and React.</p>
                                    */
                                }
                                <p>Hello !</p>
                                <p>I am Yohann Delacroix, front-end web developer</p>
                                <p>I love to spend my time on implementing designs with HTML/CSS and intelligent apps with JavaScript and React.</p>
                                <div className="home-about-link-container"><Link className="home-about-link" to="/About">Learn More</Link></div>
                            </div>
                        </div>
                    </div>
                </div>



                <div id="skills" className="home-skills">
                    <h1 className="home-about-title">My Skills</h1>
                    <h3>Intensively Practiced</h3>
                    <Competences competenceList={['HTML5','CSS3','Javascript','React']}/>
                    <h3>Notions</h3>
                    <Competences competenceList={['NodeJS','TypeScript','Angular','PHP','Ruby', 'Bootstrap', 'API Rest', 'Webdesign']}/>
                </div>



                <div id="projects" className="home-projects">
                    <h1 className="home-about-title">My Work</h1>
                    <div className="home-projects-galery">
                    {
                        projectList.map( (project, index) => {
                            return(
                                <div key={index} className="home-project-galery-item">
                                    <Link to={project.link}>
                                    <img src={project.img} className="home-project-galery-item-image" />
                                    </Link>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                



            </div>
            <Footer />
        </div>)
}