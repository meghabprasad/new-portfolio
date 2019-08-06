import React from "react";
import "./style.css";
import ProjectCard from "../ProjectCard";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import FinfoImg from "../../finfo.gif"

const projects = {
  finfo: {
    title: "Finfo",
    img: {FinfoImg},
    info: "FinFo is a one stop shop for all publically available financial information including stocks, cheap flights, and currency exchange.",
    tech: "HTML | CSS | Javascript | Bootstrap | APIs | Firebase",
    site: "https://meghabprasad.github.io/finfo/",
    github: "https://github.com/meghabprasad/finfo"
  },
  gymate: {
    title: "Gymate",
    info: "Gymate is a social media app for working out. Users can record amount of time spent working out, track their weight loss, and compete with other users. Users can also find popular routines to add to their profile!",
    site: "https://gymate123.herokuapp.com/",
    github: "https://github.com/meghabprasad/gymate",
    tech: "JS, Node, MySQL 2, Sequelize/CLI, Express, Handlebars, Okta, AWS-SDK S3"
  },
  peak: {
    title: "Peak",
    info: "PEAK is a virtual interview prep platform that allows users to take mock interviews using virtual reality and receive feedback on delivery.",
    site: "https://www.peak-point.org/",
    github: "https://github.com/meghabprasad/Peak",
    tech: "Python, C#, Oculus Rift, Wix, Javascript, GCP, Natural Language Processing"
  },
  books: {
    title: "Bookworm",
    info: "Bookworm is a React application that allows users to search for books from Google Books and save them to their page!",
    site: "https://googlembooks.herokuapp.com/",
    github: "https://github.com/meghabprasad/googlebooks",
    tech: "JS, React, Node, Express, MongoDB, Mongoose, Google Books API, Materialize"
  },
  scraper: {
    title: "JS NEWS SCRAPER",
    info: "JS news scraper allows users to scrape news articles from ECHO JS, save & unsave articles, and add & remove notes for each article.",
    site: "https://tech-scrape.herokuapp.com",
    github: "https://github.com/meghabprasad/tech-news-scraper",
    tech: "JS, Node, MongoDB, Mongoose, Express, Handlebars, Bootstrap"
  },
  emogifs: {
    title: "emoGIFs",
    info: "emoGIFs is an application that allows users to look up GIFs for any particular emotion. Users can play/pause the animation by clicking on the GIF.",
    site: "https://meghabprasad.github.io/find-gifs/",
    github: "https://github.com/meghabprasad/find-gifs",
    tech: "HTML, CSS, Javascript, Bootstrap, Giphy API"
  }

}
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    color: "black",
    borderColor: "#E2C044"
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
export default function Section({ title, subtitle, dark, id }) {

  const classes = useStyles();
  return (

    <div className={"section" + (dark ? " section-dark" : "")}>
    
      <div className="section-content" id={id}>
        <h1 id="page-title">&#123; Team Projects &#125;</h1>
        <div id="projects-container">
        <ProjectCard title={projects.finfo.title} info={projects.finfo.info} tech={projects.finfo.tech} site={projects.finfo.site} github={projects.finfo.github}/>
        <ProjectCard title={projects.gymate.title} info={projects.gymate.info} tech={projects.gymate.tech} site={projects.gymate.site} github={projects.gymate.github}/>
        <ProjectCard title={projects.peak.title} info={projects.peak.info} tech={projects.peak.tech} site={projects.peak.site} github={projects.peak.github}/>
        </div>
        <h1 id="page-title">&#123; Solo Projects &#125;</h1>
        <div id="projects-container">
        <ProjectCard title={projects.books.title} info={projects.books.info} tech={projects.books.tech} site={projects.books.site} github={projects.books.github}/>
        <ProjectCard title={projects.scraper.title} info={projects.scraper.info} tech={projects.scraper.tech} site={projects.scraper.site} github={projects.scraper.github}/>
        <ProjectCard title={projects.emogifs.title} info={projects.emogifs.info} tech={projects.emogifs.tech} site={projects.emogifs.site} github={projects.emogifs.github} />
        </div>
        <a href = "https://github.com/meghabprasad" target = "_blank" id ="link">
        <br></br>
        <div id="more-projects">
        <Button variant="outlined" size="large" color="secondary" className={classes.margin} id = "button">
        MORE PROJECTS 
        </Button>
        </div>
        </a>
      </div>
    
    </div>
  );
}

