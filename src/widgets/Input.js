import React, { useRef } from "react";
import $ from 'jquery';


export const Input = ({title, inputRef}) =>{
    const titleRef = useRef();

    const focus = () =>{
        $(titleRef.current).parent().find('input').focus();
        $(titleRef.current).animate({top: '-2px', fontSize: '12px'}, 'fast');
    }
    
    const blur = () =>{
        if(!$(titleRef.current).parent().find('input').val()){
            $(titleRef.current).animate({top: '50%', fontSize: '15px'}, 'fast');
        }
    }

    return(
        <div className="form-input">
            {
                title 
                    ? <input ref={inputRef} onFocus={focus} onBlur={blur} />
                    : <textarea ref={inputRef} rows={10} placeholder="Place text here"  />
            }
            <div ref={titleRef} onClick={focus}>{title}</div>
        </div>
    )
}