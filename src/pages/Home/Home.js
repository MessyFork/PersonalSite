import React from 'react'
import style from './Home.scss'
import Typist from 'react-typist'

export default class Home extends React.Component {
  render() {
    return (
      <div className={style.homeContainer}>
        <div className={style.pageTitle}>I Write Code.</div>
        <div className={style.paragraphContainer}>
          <div className={style.paragraphText}>
          <span>
          Thanks for coming to my page! My name is Eason Chan currently a third year undergraduate studying Computer Science at the University of California San Diego (UCSD) in La Jolla, California. My current interests are in web-related technologies running down the entire stack from front-end to backend.
          </span>
          <br></br>
          <br></br>
          <span>
          Despite my current web focus I have done multiple projects utilizing low-level programming specifically ARM assembly and vanilla C.
          </span>
          </div>
        </div>
      </div>
    )
  }
}
