import React from "react";
import "./style.css"
import Grid from '@material-ui/core/Grid'
import photo from "../../happy-face.jpg";
import {Animated} from "react-animated-css";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")} id="about-section">
      <div className="section-content" id={id}>
      <div>
      <h1 id="page-title">&#123; Who am I? &#125;</h1>
      <p id="about-text">I am an AI Software Engineer with a passion for integrating technologies to solve problems and improve upon existing methods.</p>

      <br></br><br></br>

      <div class="pic-edu">
      <div>
      <img alt="my happy face"src={photo} id="my-face"/>
      </div>
      <div>
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
      <br></br>
      <h1>Education</h1>
      <h2>UC Berkeley Coding Bootcamp</h2>
      <p id="edu-text">Certificate in Full Stack Programming, earned August 2019</p>
      <p id="location"><i>San Francisco, CA</i></p>
      <hr></hr>
      <h2>UC Davis</h2>
      <p id ="edu-text">B.S. in Neurobiology, Physiology, and Behavior, earned June 2018</p>
      <p id="location"><i>Davis, CA</i></p>
      </Animated>
      </div>
      </div>

      </div>
      
      </div>
    </div>
  );
}
