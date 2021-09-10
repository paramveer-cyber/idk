import React, {useState} from 'react'

export default function Form(props) {
    const HandleupClick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const HandlelowerClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const FirstCapital = ()=>{
        let newtext = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newtext);
    }
    const HandleOnChange = (event)=>{
        setText(event.target.value);
    }
    const Clear = ()=> {
        setText("");
    }
    const [text, setText] = useState('');
    return (
        <>
        <h2 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" placeholder="Enter Text Here:" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='light'?'black':'white'}} value={text} id="myBox" rows="5" onChange={HandleOnChange}></textarea>
        </div>
        <button className="btn btn-primary my-2" onClick={HandleupClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={HandlelowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-2" onClick={FirstCapital}>Only First Letter Capital</button>
        <button className="btn btn-primary mx-2 my-2" onClick={Clear}>Clear</button>
        <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
        </div>
        </>
    )
}
