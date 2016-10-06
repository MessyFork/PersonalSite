import React from 'react'
import style from './Resume.scss'
import PDF from 'react-pdfjs'
import file from '../../assets/Fall2016.pdf'

export default class Resume extends React.Component {
  render() {
    return (
      <div className={style.pageContainer}>
        <div className={style.pageTitle}>Coder For Hire.</div>
        <div className={style.sectionContainer}>
          <div className={style.sectionText}>
            <PDF file={file}/>
            <br></br>
            <a href={file}>Download PDF</a>
          </div>
        </div>
      </div>
    )
  }
}
