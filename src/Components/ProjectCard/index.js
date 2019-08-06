import React from "react";
import "./style.css";
import Finfo from "../../finfo.gif"
import Scrape from "../../scrape.gif"
import Peak from "../../peak.gif"
import LinkLogo from "../../images/link-logo.png"
import GitLogo from "../../images/github-sign.png"
import Gymate from "../../gymate.gif";
import Books from "../../books.gif";
import Emogifs from "../../emogifs.gif";

export default function ProjectCard (props){
    if (props.title === "Finfo"){
        return (
            <div id="project-card">
                <img src={Finfo} alt="gif" id="project-gif"></img>
                <h2>{props.title}</h2>
                <a href={props.site} target="_blank">
                <img id="logo"src={LinkLogo}></img>
                </a>
                <a href={props.github} target="_blank">
                <img id="logo"src={GitLogo}></img>
                </a>
                <p id="info">{props.info}</p>
                <p></p>
                <p id="tech-text">{props.tech}</p>
            </div>
    )
    }else if (props.title === "Gymate") {
        return (
            <div id="project-card">
                <img src={Gymate} alt="gif" id="project-gif"></img>
                <h2>{props.title}</h2>
                <a href={props.site} target="_blank">
                <img id="logo"src={LinkLogo}></img>
                </a>
                <a href={props.github} target="_blank">
                <img id="logo"src={GitLogo}></img>
                </a>
                <p id="info">{props.info}</p>
                <p></p>
                <p id="tech-text">{props.tech}</p>
            </div>
        )
    }else if (props.title === "Peak"){
        return (
            <div id="project-card">
                <img src={Peak} alt="gif" id="project-gif"></img>
                <h2>{props.title}</h2>
                <a href={props.site} target="_blank">
                <img id="logo"src={LinkLogo}></img>
                </a>
                <a href={props.github} target="_blank">
                <img id="logo"src={GitLogo}></img>
                </a>
                <p id="info">{props.info}</p>
                <p></p>
                <p id="tech-text">{props.tech}</p>
            </div>
        )
    }else if (props.title === "Bookworm"){
        return (
            <div id="project-card">
                <img src={Books} alt="gif" id="project-gif"></img>
                <h2>{props.title}</h2>
                <a href={props.site} target="_blank">
                <img id="logo"src={LinkLogo}></img>
                </a>
                <a href={props.github} target="_blank">
                <img id="logo"src={GitLogo}></img>
                </a>
                <p id="info">{props.info}</p>
                <p></p>
                <p id="tech-text">{props.tech}</p>
            </div>
        )
    } else if (props.title === "JS NEWS SCRAPER"){
        return (
            <div id="project-card">
                <img src={Scrape} alt="gif" id="project-gif"></img>
                <h2>{props.title}</h2>
                <a href={props.site} target="_blank">
                <img id="logo"src={LinkLogo}></img>
                </a>
                <a href={props.github} target="_blank">
                <img id="logo"src={GitLogo}></img>
                </a>
                <p id="info">{props.info}</p>
                <p></p>
                <p id="tech-text">{props.tech}</p>
            </div>
        )
    }else if (props.title === "emoGIFs"){
        return (
            <div id="project-card">
                <img src={Emogifs} alt="gif" id="project-gif"></img>
                <h2>{props.title}</h2>
                <a href={props.site} target="_blank">
                <img id="logo"src={LinkLogo}></img>
                </a>
                <a href={props.github} target="_blank">
                <img id="logo"src={GitLogo}></img>
                </a>
                <p id="info">{props.info}</p>
                <p></p>
                <p id="tech-text">{props.tech}</p>
            </div>
        )
    }
    else {
        return <p>cool</p>
    }
    
}
