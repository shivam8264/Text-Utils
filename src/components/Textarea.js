import React,{useState} from 'react'

export default function Textarea() {
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
    } 
    const onToLo=()=>{
        const newText=text.toLowerCase();
        setText(newText);
        updateCounts(newText);
    } 

    const onWordCount = (text) => {
        const trimmedText = text.trim();
        const words = trimmedText.split(/\s+/).filter(word => word.length > 0);
        setWordCount(words.length);
    };

    const onChCount = (text) => {
        setCharCount(text.length);
    };

    const updateCounts = (text) => {
        onWordCount(text);
        onChCount(text);
    };

  return (
    <div>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={onChangeHandler} placeholder='Enter Your Text Here' id="floatingTextarea" rows="8"></textarea>
            <button type="button" className="btn btn-primary m-3" onClick={onToUp}>Convert to UpperCase</button>
            <button type="button" className="btn btn-danger m-3" onClick={onToLo}>Convert to LowerCase</button>
        </div>
        <p className="fs-4">Word Count: {wordCount}</p>
        <p className="fs-4">Character Count: {charCount}</p>
    </div>
  )
}
