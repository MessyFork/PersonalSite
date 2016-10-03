import React from 'react'
import style from './Landing.scss'
import Typist from 'react-typist'


export default class Landing extends React.Component {
  render() {
    return (
      <div className={style.landingContainer}>
        <div className={style.pageTitle}>Here's Some Code.</div>

        <div className={style.consoleContainer}>
          <Typist className={style.consoleText} avgTypingDelay={30} stdTypingDelay={10} cursor={{hideWhenDone: true}}>
            <span>Last login: 1961 at laJollaCA</span> <br></br>
            <span>UCSD-CSE:~ jacobs$ gcc easonChan.cpp -o easonChan</span> <br></br>
            <span>UCSD-CSE:~ jacobs$ ./easonChan</span> <br></br>

            <span>> running /UCSD/CSE/2018/easonChan</span> <br></br>
            <span>Hash: 704fd5039ca919a7da08</span> <br></br>
            <span>Version: 1.0</span> <br></br>
            <span>Created: 1996-03-10</span> <br></br>
            <br></br>
            <span>+ 23 courses</span> <br></br>
            <br></br>
            <span>CSEdepartment: student education is CONTINUING</span> <br></br>
            <span>easonChan: READY for work</span> <br></br>
          </Typist>
        </div>
      </div>
    )
  }
}
