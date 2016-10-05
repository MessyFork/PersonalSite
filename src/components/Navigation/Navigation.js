import React from 'react'
import {Link, IndexLink} from 'react-router'
import style from './Navigation.scss'


export default class Navigation extends React.Component {
  render() {
    return (
      <nav className={style.navContainer}>
        <Link to="/home"  className={style.logo}>MessyForks</Link>
        <div className={style.linkContainer}>
          <Link className={style.linkBox} activeClassName={style.activeBox} to="/home">Home</Link>
          <Link className={style.linkBox} activeClassName={style.activeBox} to="/resume">Resume</Link>
          <Link className={style.linkBox} activeClassName={style.activeBox} to="/projects">Projects</Link>
          <Link className={style.linkBox} activeClassName={style.activeBox} to="/contact">Contact</Link>
        </div>
      </nav>
    )
  }
}
