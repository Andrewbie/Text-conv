import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForms(props) {

    const changeToAlter = ()=>{
        let vr = ''
        for (let i = 0; i < text.length; i++) {
            if(text.charAt(i)===text.charAt(i).toUpperCase()){

            vr+=text.charAt(i).toLowerCase()}
            else if(text.charAt(i)===text.charAt(i).toLowerCase()){
                vr+=text.charAt(i).toUpperCase()
            }
        }
        newText(vr)
        props.showAlert('text alternated','success')
    }

    const changeClear = ()=>{
        newText("")
        props.showAlert('cleared','danger')
    }

    const changeToCapit = ()=>{
        let vr = ''
        vr+=text.charAt(0).toUpperCase()
        for(let i = 1;i<text.length;i++){
            if(text.charAt(i-1)===' '){
            vr+=text.charAt(i).toUpperCase()}
            else{
                vr+=text.charAt(i)
            }
        }
        newText(vr)
    }

    const changeToLow = ()=>{
        let vr = text.toLowerCase()
        newText(vr)
    }
    const changeToUp = ()=>{
        let variable = text.toUpperCase()
        newText(variable)
    }
    const toUpHandler = (event)=>{
        newText(event.target.value);
    }
    const [text,newText] = useState("Enter your Text Here..");
  return (
    <>
    <div className="container my-3" >
        <h3 className={`text-${props.txtCol}`}>{props.heading}</h3>
<div className="mb-3" data-bs-theme={props.mode}>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={toUpHandler}></textarea>
</div>
<button type="button" className="btn btn-primary mx-1" onClick={changeToUp}>UPPERCASE</button>
<button type="button" className="btn btn-secondary mx-1" onClick={changeToLow}>lowercase</button>
<button type="button" className="btn btn-secondary mx-1" onClick={changeToCapit}>Capitalize Word</button>
<button type="button" className="btn btn-secondary mx-1" onClick={changeToAlter}>AlternateCase</button>
<button type="button" className="btn btn-secondary mx-1" onClick={changeToCapit}>Capitalize Word</button>
<button type="button" className="btn btn-danger mx-1" onClick={changeClear}>clear</button>
    </div>

    <div className="container">
    <h4 className={`text-${props.txtCol}`}>Your Text Summary</h4>
    <p className={`text-${props.txtCol}`}>Your text has {text.split(/\s+/).filter((element)=>{
        return element.length!==0
    }).length} words and {text.length} characters</p>
    <p className={`text-${props.txtCol}`}>Your text will take {text.split(/\s+/).filter((element)=>{
        return element.length!==0
    }).length*0.003} minutes to read</p>
    </div>

    </>
  )
}

TextForms.propTypes={
    heading:PropTypes.string
}
TextForms.defaultProps={
    heading:"Heading here"
}