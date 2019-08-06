import React from "react";
import "./style.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Linkedin from "../../images/linkedin-logo.png";
import Facebook from "../../images/facebook-logo.png";
import Instagram from "../../images/instragram-logo.png";
import Github from "../../images/github-logo.png";



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
        <h1 id="page-title">&#123; Contact &#125;</h1>
        <a href="https://www.linkedin.com/in/megha-bindiganavale/" target="_blank">
        <img src={Linkedin} alt="linkedin-logo" style={{width: "200px", height: "200px"}} id="contact"></img>
        </a>
        <a href="https://www.facebook.com/megha.prasad.946" target="_blank">
        <img src={Facebook} alt="facebook-logo" style={{width: "200px", height: "200px"}}id="contact"></img>
        </a>
        <a href="https://www.instagram.com/ohhmeghod/" target="_blank">
        <img src={Instagram} alt="instagram-logo" style={{width: "200px", height: "200px"}}id="contact"></img>
        </a>
        <a href="https://github.com/meghabprasad" target="_blank">
        <img src={Github} alt="git-logo" style={{width: "200px", height: "200px"}}id="contact"></img>
        </a>
        <h2>Whether for a potential opportunity or just to say hi, my inbox is always open!</h2>
        <a href="mailto:meghab.prasad@gmail.com" id="sayhello">
        <Button variant="outlined" size="large" color="secondary" className={classes.margin} id = "button">
        SAY HELLO 
        </Button>
        </a>
      </div>
    </div>
  );
}
