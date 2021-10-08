import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = ()=>{

    const form = useRef();


   

    const Send = (e)=>{
        e.preventDefault();        
        emailjs.sendForm('service_xvaqr5s','template_jbwc6jv',form.current,'user_cGVhWDjiLWoLEXDaMM4xk')
        .then((result) => {
            alert("your message sent")
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}
return (
    <form ref={form} onSubmit={Send}>
      <label>Name</label><br/>
      <input type="text" name="sender_name" /><br/>
      <label>Email</label><br/>
      <input type="text" name="user_email" /><br/>
      <label>Message</label><br/>
      <textarea name="message" /><br/>
      <input type="submit" value="Send" />
    </form>
  );
}

export default Contact;