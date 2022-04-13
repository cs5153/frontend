import React from 'react'
import {Link} from 'react-router-dom'
import Close from '@mui/icons-material/Close'
import {green} from '@mui/material/colors'

//Local Imports
import "../css/ExitButton.css"

class ExitButton extends React.Component {
  //User can pass link to image as well as Trip name
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="exitButton">
        <Link aria-label="Close Window" style={{textDecoration:'none', color:'inherit'}} to="/">
        <Close fontSize="small" sx={{color: green[0]}}/>
        </Link>
      </div>
    )
  }
}

export default ExitButton
