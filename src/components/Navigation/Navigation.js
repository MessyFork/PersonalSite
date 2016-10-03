import React from 'react'
import {Link, IndexLink} from 'react-router'
import style from './Navigation.scss'


export default class Navigation extends React.Component {
  render() {
    return (
      <nav className={style.navContainer}>
        <div className={style.logo}>MessyForks</div>
        <div className={style.linkContainer}>
          <Link className={style.linkBox} to="/home">Home</Link>
          <Link className={style.linkBox} to="/resume">Resume</Link>
          <Link className={style.linkBox} to="/projects">Projects</Link>
          <Link className={style.linkBox} to="/contact">Contact</Link>
        </div>
      </nav>
    )
  }
}
