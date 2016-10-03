import React from 'react'
import style from './Contact.scss'

export default class Contact extends React.Component {
  render() {
    return (
      <div className={style.pageContainer}>
        <div className={style.pageTitle}>Code With Me.</div>
        <div className={style.sectionContainer}>
          <div className={style.sectionText}>
          I'm currently looking for an internship for the summer of 2017.
          If you have any questions about myself or any of my projects don't
          hesitate to send me an email or a message on GitHub.
          </div>
          <br></br>
          <a className={style.contactStyle} href="mailto:e7chan@ucsd.edu">Email: e7chan@ucsd.edu</a>
          <a className={style.contactStyle} href="https://github.com/messyfork">GitHub: https://github.com/messyfork</a>
        </div>
      </div>
    )
  }
}
