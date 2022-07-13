import emailJs, { init } from '@emailjs/browser';
import $ from 'jquery';


class Emailing{
    loader = null;
    send(fromName, contact, email, program, message, elements){
        if (this.loader !== null) return;
        this.startLoader();
        const template = {fromName, contact, email, program, message}
        emailJs.send(
            'service_lulbro4', 
            'template_d0xafa7', 
            template, 
            'user_6YCRvUIthi8NFOXbpKxV9'
        ).then((result)=>{
            console.log(result.text);
            this.runAfter(elements);
            this.toast('Your request sent.', 'green');
        }).catch((error)=>{
            console.log(error.text);
            this.runAfter(elements);
            this.toast('Unable to send your request at this time. Please try again later.', 'red');
        });
    }

    toast(message, color='black'){
        this.removeLoader();
        const toast = $('<div/>').css({
            position: 'absolute',
            top: '30%',
            left: '50%',
            color: color,
            transform: 'translateX(-50%)',
            zIndex: '999999999999',
            backgroundColor: 'white',
            padding: '8px 25px',
            boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
            borderRadius: '5px',
            userSelect: 'none'
        }).text(message);
        $(toast).appendTo('body');
        setTimeout(() => $(toast).remove() , 5000);
    }

    startLoader(){
        this.loader = $('<div/>').css({
            zIndex: '999999999999',
            backgroundColor: 'rgba(0,0,0,0.4)'
        }).addClass('position-absolute start-0 top-0 vw-100 vh-100').append(
            $('<div/>').addClass('position-absolute start-50 top-50').append(
                $('<div/>').addClass('spinner-border').append(
                    $('<div/>').addClass('visually-hidden')
                )
            )
        );
        $(this.loader).appendTo('body');
    }

    removeLoader(){
        $(this.loader).remove();
        this.loader = null;
    }
    
    runAfter(elements){
        elements?.forEach((element)=>{
            $(element).css({backgroundColor: 'lightgreen'}).val('');
        });
        setTimeout(()=>{
            elements?.forEach((element)=>{
                $(element).css({backgroundColor: ''});
            });
        }, 5000);
    }
}

export const email = new Emailing();