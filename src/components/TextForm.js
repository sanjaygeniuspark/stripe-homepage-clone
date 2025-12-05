import { useState } from "react";

export default function TextForm(props) {

    const handleUpperClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
      

    const [text, setText] = useState("Enter text here");
    return (
        <div>
            <h4>{props.heading}</h4>
            <div className="mb-3 mt-4">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="mybox" rows="7"></textarea>
            </div>
            <button type="button" onClick={handleUpperClick} className="btn btn-primary">Convert to Uppercase</button>
            <button type="button" onClick={handleLowerClick} className="btn btn-primary mx-3">Convert to Lowercase</button>
            <button type="button" onClick={handleClearClick} className="btn btn-primary">Clear</button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

            <div className="mt-3">
                <h3>Your text summay</h3>
                <p>{text.split (" ").length} words and {text.length} character</p>
                <p>{0.008 * text.split (" ").length} minute to read</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}
