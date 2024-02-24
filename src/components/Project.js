import { Container, Row, Col } from "react-bootstrap";
import flavor from "../assets/img/flavor.png";
import game from "../assets/img/game.png"
import weather18 from "../assets/img/weather18.png"

import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"


function Project(){

    const projects = [
        {
          title: "flavor-fusion",
          description: "DELICIOUS, AUTHENTIC NASHVILLE HOT BURGER",
          imgUrl: flavor,
          webUrl: "https://flavor-fusion-18.netlify.app/"
          
        },

        {
          title: "tic tac toe",
          description: "The tic-tac-toe game is for two players.",
          imgUrl: game,
          webUrl: "https://tictoctactics.netlify.app/"
          
        },

        {
          title: "Weather_App",
          description: "a weather condition tracker that uses the Open Weather API to fetch current weather data for a given location",
          imgUrl: weather18,
          webUrl: "https://weather-18.netlify.app/"
          
        },
       
         
      ];

    return(
        <div>
            <section className="project" id="projects">
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <p>Discover my portfolio of projects, each a testament to simplicity, functionality, and creative design. Let's build something amazing together.</p>  
                        </Col>
                    </Row>
                    <Row>
                      {
                        projects.map((project, index) => {
                          return(
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                </Container>
                <img className="background-image-right" src={colorSharp2}/>
            </section>
        </div>
    )
}

export default Project;