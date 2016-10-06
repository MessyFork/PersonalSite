import React from 'react'
import style from './Projects.scss'

export default class Projects extends React.Component {
  render() {
    return (
      <div className={style.pageContainer}>

        <div className={style.pageTitle}>The Code I Write.</div>

        <div className={style.staticSiteBackground}>
          <div className={style.sectionContainer}>
            <div className={style.sectionTitle}>Static Reactjs + React-Router website</div>
            <div className={style.technologyFlex}>
              <div className={style.reactImage}></div>
              <div className={style.reactRouterImage}></div>
              <div className={style.sassImage}></div>
            </div>
            <div className={style.sectionText}>
            This website you're looking at is written with with ReactJS the JavaScript framework created by Facebook. As this was one of the first web projects I've created; it took a significant amount of time to also learn the fundamental web technologies such as HTML5, Sass/CSS, and JavaScript.
            <br></br>
            <br></br>
            The motivation behind this project was to avoid using jQuery to instead use ReactJS. My thought process behind this decision came from my observation of how pervasive interactive websites are and the advantages of rendering the entire site with JavaScript rather than havingn JavaScript as an addon.
            <br></br>
            <br></br>
            Most of the work in this project was in adapting React and React-Router to work in a static website as the technology is mostly used to for dynamic websites with backends. The benefits can be seen as you navigate through this website. Your browser will not have to fetch data from the server as the entire site has already been downloaded.
            <br></br>
            <br></br>
            </div>
          </div>
        </div>

        <div className={style.moboardBackground}>
          <div className={style.sectionContainer}>
            <div className={style.sectionTitle}>MoBoard</div>

            <div className={style.technologyFlex}>
              <div className={style.ARMImage}></div>
              <div className={style.skateboardImage}></div>
            </div>

            <div className={style.sectionText}>
            MoBoard is the development name for an battery powered electric skateboard that utilizes open source parts for the entire powertrain.
            <br></br>
            <br></br>
            The project utilizes the fantastic VESC open source motor controller by Benjamin Vedder to power a 2kW hobby brushless
            motor. As the VESC controller was not commercially avaliable when we began the project the controller was handmade
            and the components soldered by hand.
            </div>
          </div>
        </div>

        <div className={style.coupleTonesBackground}>
          <div className={style.sectionContainer}>
            <div className={style.sectionTitle}>CoupleTones (Group Course Project)</div>

            <div className={style.technologyFlex}>
              <div className={style.androidImage}></div>
              <div className={style.firebaseImage}></div>
              <div className={style.googleMapsImage}></div>
            </div>

            <div className={style.sectionText}>
            CoupleTones is a private Android appication that sends a SMS message to you when yo ur significant other passes locations they mark down. The application utilies Firebase for fast backend development and Google Maps API for GPS tracking.
            <br></br>
            <br></br>
            The github page for this project can be found here <a href="https://github.com/MessyFork/CoupleTones"> here</a>
            <br></br>
            <br></br>
            **Permission is required to view this project due to academic integrity policy at UCSD.
            </div>
          </div>

        </div>
      </div>
    )
  }
}
