import React from "react";
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import { Link, animateScroll as scroll } from "react-scroll";
import Button from '@material-ui/core/Button';
import Home from "../Home"
import { borderColor } from "@material-ui/system";
import Pdf from "../../megha-resume-8-14-24.pdf";
const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
      color: "white",
      borderColor: "#E2C044"
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
export default function Section({ title, dark, id }) {
   const classes = useStyles();
  return (
    <div className={"section" + (dark ? " section-dark" : "")} id="home-section">
      <div className="section-content home-content" id={id}>
        <div>
        <p id="hi-text">Hi, my name is</p>
        <h1 id="name-text">Megha Bindiganavale</h1>
        <p id="bio-text">I'm a Software Engineer based in San Francisco, Bay Area. </p>
        <p id="bio-text"> I am thrilled by the possibilities of Generative AI & ML technologies and eager to explore their potential to revolutionize software development.</p>
        <br></br><br></br>
        <Link 
            activeClass="active"
            to="section6"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
        >
            <Button variant="outlined" size="large" color="secondary" className={classes.margin} id = "button">
            Get in touch
            </Button>
        </Link>

        <a href = {Pdf} target = "_blank" id = "resume-button">
        <Button variant="outlined" size="large" color="secondary" className={classes.margin} id = "button">
        RESUME 
        </Button>
        </a>
      </div>
      </div>
    </div>
  );
}

