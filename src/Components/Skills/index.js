import React from "react";
import "./style.css";
import Grid from '@material-ui/core/Grid';
import Firebase from "../../images/firebase-logo.png"
import Ajax from "../../images/ajax-logo.png.png";
import Bootstrap from "../../images/bootstrap-logo.png";
import Express from "../../images/express-logo.png";
import Jquery from "../../images/jquery-logo2.png";
import Materialize from "../../images/materialize-logo.png";
import Mongo from "../../images/mongo-logo.png";
import Mysql from "../../images/mysql-logo.png";
import Node from "../../images/node-logo.png";
import ReactLogo from "../../images/react-logo.png";
import Handlebars from "../../images/handlebars-logo.png";
import MaterialUI from "../../images/material-ui-logo.svg";


export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}id="skills-content">
      <div className="section-content" id={id}>
        <h1 id="title">&#123; Languages &#125;</h1>
        <p id = "languages">HTML | CSS | JAVASCRIPT | C | PYTHON | MATLAB | LUA</p>
        <h1 id ="title">&#123; Technologies &#125;</h1>
        <Grid item xs={12}>
        <Grid container justify="center" spacing="2">
            <Grid item> 
                
                <img src={ReactLogo} style={{width: "200px", height: "200px", backgroundColor:"white"}}></img>
                
            </Grid>
            <Grid item>
                <img src={Firebase} style={{width: "180px", height: "200px", backgroundColor:"white"}}></img>
            </Grid>
            <Grid item>
                <img src={Ajax} style={{width: "250px", height: "200px", backgroundColor:"white"}}></img>
            </Grid>
            <Grid item>
                <img src={Jquery} style={{width: "200px", height: "200px", backgroundColor: "white"}}></img>
            </Grid>

        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing="2">
            <Grid item> 
                <img src={Bootstrap} style={{width: "280px", height: "200px", backgroundColor: "white"}}></img>
            </Grid>
            <Grid item>
                <img src={Materialize} style={{width: "400px", height: "200px", backgroundColor: "white"}}></img>
            </Grid>
            <Grid item>
                <img src={MaterialUI} style={{width: "200px", height: "200px", backgroundColor: "white"}}></img>
            </Grid>
            <Grid item>
                <img src={Node} style={{width: "200px", height: "200px", backgroundColor: "white"}}></img>
            </Grid>
            <Grid item>
                <img src={Handlebars} style={{width: "200px", height: "200px", backgroundColor: "white"}}></img>
            </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing="2">
            <Grid item> 
                <img src={Mongo} style={{width: "350px", height: "200px", backgroundColor: "white"}}></img>
            </Grid>
            <Grid item>
                <img src={Mysql} style={{width: "250px", height: "200px", backgroundColor: "white"}}></img>
            </Grid>
            <Grid item>
                <img src={Express} style={{width: "250px", height: "200px", backgroundColor: "white"}}></img>
            </Grid>
        </Grid>
      </Grid>
        <h2></h2>
      </div>
      </div>
  );
}
