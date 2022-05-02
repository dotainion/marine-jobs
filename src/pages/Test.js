import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../Routes/Routes";
import cargo from '../images/cargo.jpg';
import cruise from '../images/ship2.avif';
import trawlers from '../images/trawlers.jpg';
import anyBoat from '../images/any-boat.jpg';
import { Button } from "../widgets/Buttons";
import { MdMenu } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import $ from 'jquery';


export const Test = () =>{
    const [info, setInfo] = useState({header: null, detail: null});

    const manuOptionRef = useRef();
    const backdropRef = useRef();
    const modalRef = useRef();

    const navigate = useNavigate();

    const onNavigate = (route, thenScrollTop) =>{
        navigate(route, thenScrollTop ? {state: 'scrollTop'} : {});
    }

    const lists = [
        {
            img: cargo,
            title: 'Cargo Boats',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            Where does it come from`
        },{
            img: cruise,
            title: 'Cruise Ship', 
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            detail: `Where does it Why do we come from text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            use it Lorem Ipsum is simply dummy?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            `
        },{
            img: trawlers,
            title: 'Fishing Trawlers',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            detail: `typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Why do we use it?
            It is a long established Lorem Ipsum is simply dummy text of the printing and fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            Where does it come from`
        },{
            img: anyBoat,
            title: 'Any boat that is on sea',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            detail: `fact that a reader will be  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Why do we use it?
            It is a long established distracted by the Lorem Ipsum is simply dummy readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            Where does it come from`
        },
    ];

    const onEnter = (info) =>{
        setInfo({header: info?.title, detail: info?.detail});
    }

    const onToggle = () =>{
        if ($(manuOptionRef.current).hasClass('show-md')){
            $(backdropRef.current).removeClass('show-md');
            $(manuOptionRef.current).removeClass('show-md');
        }else{
            $(backdropRef.current).addClass('show-md');
            $(manuOptionRef.current).addClass('show-md');
        }
    }

    const onOpenModal = (state=true) =>{
        !state 
            ? $(modalRef.current).removeClass('show-md')
            : $(modalRef.current).addClass('show-md');
    }

    useEffect(()=>{
        setInfo({header: lists[0].title, detail: lists[0].detail});
    }, []);

    return(
        <div className="test-page">
            <div className="test-nav">
                <div data-logo>MARINE JOBS<MdMenu onClick={onToggle} /></div>
                <span ref={manuOptionRef}>
                    <div onClick={()=>onNavigate(routes.homeDefault, true)}>home</div>
                    <div onClick={()=>onNavigate(routes.application)}>Application</div>
                    <div onClick={()=>onNavigate(routes.contact)}>Contact</div>
                    <div onClick={()=>onNavigate(routes.ourWork, true)}>Our Work</div>
                    <div onClick={()=>onNavigate(routes.ourProcess, true)}>Our Process</div>
                    <div onClick={()=>onNavigate(routes.about)}>About Us</div>
                </span>
            </div>
            <div ref={modalRef} className="test-infos">
                <GrClose onClick={()=>onOpenModal(false)} />
                <h3>{info.header}</h3>
                <p>{info.detail}</p>
            </div>
            <div className="test-slide">
                <div className="test-solution">
                    <h1>SOLUTIONS</h1>
                    <h2>WHAT YOU NEED</h2>
                    <p>some info to some extentalsdflasdlfa</p>
                    <div>
                        <Button onClick={()=>{}} title={'Read More'} />
                        <Button onClick={()=>onNavigate(routes.contact)} title={'Contact Us'} dark />
                    </div>
                </div>
                {lists.map((a, key)=>(
                    <div onMouseEnter={()=>onEnter(a)} className="test-card" key={key}>
                        <div onClick={()=>onOpenModal()}>
                            <div className="test-card-img">
                                <img src={a.img} alt="" />
                            </div>
                            <h4>{a.title}</h4>
                            <p>{a.info}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="test-footer">
                <div className="test-footer-content">
                    <div className="test-footer-flex">
                        <div><b>footer info</b></div>
                        <div>
                            <div><b>Address:</b> some address</div>
                            <div><b>Email:</b> some email address</div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={backdropRef} onClick={onToggle} className="navigate-md-backdrop" />
        </div>
    )
}