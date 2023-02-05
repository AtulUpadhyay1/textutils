import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        if(text.length>0){
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert('success', 'Text converted to uppercase!!');
        }else{
            props.showAlert('danger', 'Please write something!!');
        }
    }

    const handleDownClick = () =>{
        if(text.length>0){
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert('success', 'Text converted to lowercase!!');
        }else{
            props.showAlert('danger', 'Please write something!!');
        }
    }

    const handleCopyClick = () =>{
        if(text.length>0){
            navigator.clipboard.writeText(text);
            props.showAlert('success', 'Text copy to clipboard!!');
        }else{
            props.showAlert('danger', 'Please write something!!');
        }
    }

    const handleExtraSpace = () =>{
        if(text.length>0){
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "))
            props.showAlert('success', 'Remove extra space from text!!');
        }else{
            props.showAlert('danger', 'Please write something!!');
        }
    }

    const handleClearClick = () =>{
        if(text.length>0){
            let con = window.confirm('Are you sure you want to clear??');
            if(con){
                setText('');
                props.showAlert('success', 'Text clear!!');
            }
        }else{
            props.showAlert('danger', 'Please write something!!');
        }
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const[text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label htmlFor="mybox" className="form-label">Example Text</label> */}
                    <textarea className="form-control" id="mybox" rows="10" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary ms-2" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary ms-2" onClick={handleExtraSpace}>Remove Extra Space</button>
                <button className="btn btn-primary ms-2" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-danger ms-2" onClick={handleClearClick}>Clear All</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.length>0?text.split(" ").length:'0'} Words and {text.length} characters</p>
                <h1>Preview</h1>
                <p>{text.length>0?text:"Enter some text and see the preview !!"}</p>
            </div>
        </>
    )
}
