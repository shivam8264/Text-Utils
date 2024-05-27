import React,{useState} from 'react'

export default function Textarea(props) {
    const [text,setText]=useState("");
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const onChangeHandler=(event)=>{
        setText(event.target.value);
        updateCounts(event.target.value);
    }
    const onToUp=()=>{
        const newText=text.toUpperCase();
        setText(newText);
        updateCounts(newText);
        props.showAlert("Converted to UpperCase!", "Success");
    } 
    const onToLo=()=>{
        const newText=text.toLowerCase();
        setText(newText);
        updateCounts(newText);
        props.showAlert("Converted to LowerCase!", "Success");
    } 

    const onWordCount = (text) => {
        const trimmedText = text.trim();
        const words = trimmedText.split(/\s+/).filter(word => word.length > 0);
        setWordCount(words.length);
    };

    const onChCount = (text) => {
        setCharCount(text.length);
    };

    const handleClearText=()=>{
        setText('');
        updateCounts('');
        props.showAlert("Text Cleared!", "Success");
    }

    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard!", "Success");
        document.getSelection().removeAllRanges();
    }

    const handleRemoveText=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");
    }

    const updateCounts = (text) => {
        onWordCount(text);
        onChCount(text);
    };

  return (
    <div>
        <div className="mb-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <textarea className="form-control mb-2" value={text} onChange={onChangeHandler} placeholder='Enter Your Text...' style={{backgroundColor: props.mode==='dark'?'#9AC4E6':'white'}} id="floatingTextarea" rows="8"></textarea>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={onToUp}>Convert to UpperCase</button>
            <button disabled={text.length===0} type="button" className="btn btn-danger mx-1 my-1" onClick={onToLo}>Convert to LowerCase</button>
            <button disabled={text.length===0} type="button" className="btn btn-warning mx-1 my-1" onClick={handleClearText}>Clear Text</button>
            <button disabled={text.length===0} type="button" className="btn btn-success mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} type="button" className="btn btn-info mx-1 my-1" onClick={handleRemoveText}>Remove Extra Spaces</button>
        </div> 
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h3>Your Text Summary</h3>
            <p className="fs-4">Word Count: {wordCount}</p>
            <p className="fs-4">Character Count: {charCount}</p>
            <p className="fs-4">{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p className="fs-5">{text.length>0 ? text : "Nothing to preview!"}</p>
        </div>
    </div>
  )
}
