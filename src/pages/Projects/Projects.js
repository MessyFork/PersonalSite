import React from 'react'
import style from './Projects.scss'

export default class Projects extends React.Component {
  render() {
    return (
      <div className={style.pageContainer}>
        <div className={style.pageTitle}>The Code I Write.</div>
        <div className={style.sectionContainer}>
          <div className={style.sectionTitle}>Static Reactjs + React-Router website</div>

          <div className={style.sectionText}>
          This website you are currently viewing was written with with ReactJS a JavaScript framework originally created by Facebook. As this was the second web project I’ve ever worked on I spent a significant amount of time to also learn the fundamental web technologies including HTML5 and Sass/CSS.
          <br></br>
          <br></br>
          The motivation behind this project was to avoid using jQuery and replace it with ReactJS. The logic behind this decision is that websites today have so many interactive aspects to them that it makes sense to build the entire site with JavaScript.
          <br></br>
          <br></br>
          Most of the work in this project was in adapting React and React-Router to work in a static website.
          <br></br>
          <br></br>
          A basic boilerplate to build your own static website can be found at https://github.com/messyfork/
          </div>
        </div>

        <div className={style.moboardBackground}>
          <div className={style.sectionContainer}>
            <div className={style.sectionTitle}>MoBoard</div>

            <div className={style.sectionText}>
            MoBoard is the development name for an battery powered electric skateboard that utilizes open source parts for the entire powertrain.
            <br></br>
            <br></br>
            The github page for this project can be found at https://github.com/messyfork/
            </div>
          </div>
        </div>

        <div className={style.coupleTonesBackground}>
          <div className={style.sectionContainer}>
            <div className={style.sectionTitle}>CoupleTones</div>

            <div className={style.sectionText}>
            CoupleTones is a private Android appication that sends a SMS message to you when yo ur significant other passes locations they mark down. The application utilies Firebase for fast backend development and Google Maps API for GPS tracking.
            <br></br>
            <br></br>
            The github page for this project can be found at https://github.com/MessyFork/CoupleTones.
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
