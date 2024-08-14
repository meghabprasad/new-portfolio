import React from "react";
import "./style.css";
import Stanford from "../../images/stanford-logo.png";
import ArvoPDF from "../../images/ARVO_Posterfinal.pdf";
import ArvoImg from "../../images/ARVO-img.jpg";
import Asana from "../../images/asana-logo.png"; 

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1 className="page-title">&#123; Experiences &#125;</h1>
        <div className="row">
          <img src={Asana} alt="Asana Logo" style={{ width: "300px", height: "200px" }} />
          <h4 className="job-company">Asana Inc.</h4>
          <p className="job-title">Software Engineer <i>Since Oct 2020</i></p>
          <p className="job-location">San Francisco, CA</p>
          <p className="job-info">AI & ML, Mobile Engineering, API Development</p>
        </div>
        <div className="row">
          <img src={Stanford} alt="Stanford Logo" style={{ width: "300px", height: "200px" }} />
          <h4 className="job-company">Stanford University</h4>
          <p className="job-title">Software Research Assistant, <i>Since June 2018</i></p>
          <p className="job-location">Palo Alto, CA</p>
          <p className="job-info">MATLAB, Lua, VR, iOS development</p>
          <a href={ArvoPDF} target="_blank" rel="noopener noreferrer">
            <img id="myImg" src={ArvoImg} alt="Abstract Poster" style={{ width: "300px", height: "200px" }} />
          </a>
          <p>- click to view -</p>
        </div>
      </div>
    </div>
  );
}
