import React from "react";
import "./style.css";
import Stanford from "../../images/stanford-logo.png"
import ArvoPDF from "../../images/ARVO_Posterfinal.pdf"
import ArvoImg from "../../images/ARVO-img.jpg"
export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
      <h1 id="page-title">&#123; Experiences &#125;</h1>
        <div id="row">
            <img src={Asana} style={{width: "300px;", height: "200px"}}></img>
            <h4 id="job-company">Asana Inc.</h4>
        <p id="job-title">Software Engineer<i>Since Oct 2020</i></p>
        <p id="job-location">San Francisco, CA</p>
        <p id="job-info">AI & ML, Mobile Engineering, API development</p>
        </div>
        <div id="row">
            <img src={Stanford} style={{width: "300px;", height: "200px"}}></img>
            <h4 id="job-company">Stanford University</h4>
        <p id="job-title">Software Research Assistant, <i>Since June 2018</i></p>
        <p id="job-location">Palo Alto, CA</p>
        <p id="job-info">MATLAB, Lua, VR, iOS development </p>
        <a href = {ArvoPDF} target="_blank">
        <img id="myImg" src={ArvoImg} alt="Abstract Poster" style={{width: "300px", height: "200px"}}></img>
        </a>
        <p>- click to view -</p>
        </div>

        
      </div>
    </div>
  );
}
