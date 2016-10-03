import React from 'react'
import {Link, IndexLink} from 'react-router'
import style from './Footer.scss'


export default class Footer extends React.Component {
  render() {
    return (
      <nav className={style.footContainer}>
        <div className={style.linkContainer}>
          <IndexLink className={style.linkBox} to="/">Landing</IndexLink>
          <Link className={style.linkBox} to="/home">Home</Link>
          <Link className={style.linkBox} to="/contact">Contact</Link>
        </div>
        <div className={style.copyright}>Site by Eason Chan 2016</div>
      </nav>
    )
  }
}
