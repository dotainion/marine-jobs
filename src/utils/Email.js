import emailJs, { init } from '@emailjs/browser';

//init("user_6YCRvUIthi8NFOXbpKxV9");

class Emailing{
    send(fromName, toName, contact, email, program, message){

        const template = {fromName, toName, contact, email, program, message}

        emailJs.send(
            'service_1336ndx', 
            'template_zikg8nc', 
            template, 
            'user_6YCRvUIthi8NFOXbpKxV9'
        ).then((result)=>{
            console.log(result.text);
        }).catch((error)=>{
            console.log(error.text);
        });
    }
}

export const email = new Emailing();