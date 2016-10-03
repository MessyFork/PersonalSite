import React from 'react'
import style from './Resume.scss'

export default class Resume extends React.Component {
  render() {
    return (
      <div className={style.pageContainer}>
        <div className={style.pageTitle}>Coder For Hire.</div>
        <div className={style.sectionContainer}>
          <div className={style.sectionText}>
          Under Construction. Come back October 5th!
          </div>
        </div>
      </div>
    )
  }
}
