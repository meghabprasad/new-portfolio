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
            <img src={Stanford} style={{width: "300px;", height: "200px"}}></img>
            <h4 id="job-company">Stanford University</h4>
        <p id="job-title">Software Research Assistant, <i>Since June 2018</i></p>
        <p id="job-location">Palo Alto, CA</p>
        <p id="job-info">Configure and validate the RETeval diagnostic device to retrieve pupil diameter measurements in addition to the currently recorded retinal responses.</p>
        <p id="job-info">Use Lua for programming various flash protocols in the device. Utilize RFF extractor for data extraction and MATLAB/R for data cleansing and analysis. Use MATLAB for image segmentation of the pupil. Use Excel and PowerPoint for data presentation.</p>
        <p id="job-info">Presented research developments at national conferences and obtained manuscript co-authorship.</p>
        <a href = {ArvoPDF} target="_blank">
        <img id="myImg" src={ArvoImg} alt="Abstract Poster" style={{width: "300px", height: "200px"}}></img>
        </a>
        <p>- click to view -</p>
        </div>
      </div>
    </div>
  );
}
