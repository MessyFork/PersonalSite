import React from 'react'
import style from './Resume.scss'

export default class Resume extends React.Component {
  render() {
    return (
      <div className={style.pageContainer}>
        <div className={style.pageTitle}>I'll Code For You</div>
        <div className={style.sectionContainer}>
          <div className={style.sectionText}>
          </div>
        </div>
      </div>
    )
  }
}
