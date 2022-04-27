import React, { useRef } from "react";
import $ from 'jquery';


export const Input = ({title, inputRef}) =>{
    const titleRef = useRef();

    const focus = () =>{
        $(titleRef.current).parent().find('input').focus();
        $(titleRef.current).animate({top: '-2px'}, 'fast');
    }
    
    const blur = () =>{
        if(!$(titleRef.current).parent().find('input').val()){
            $(titleRef.current).animate({top: '50%'}, 'fast');
        }
    }

    return(
        <div className="form-input">
            <input ref={inputRef} onFocus={focus} onBlur={blur} />
            <div ref={titleRef} onClick={focus}>{title}</div>
        </div>
    )
}