import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_c89o1f4', 'template_lt7vg0s', form.current, {
          publicKey: 'fCuaO5w9lIkH8Q9Bw',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return <div className = "border-b border-neutral-900 pb-20">
    <h2 className = "my-10 text-center text-4xl">Get in Touch</h2>
        <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto p-8 shadow-lg rounded-lg border-4 border-neutral-800">
            <div className="mb-4">
                <label className="block text-white-900 text-sm font-bold mb-2">Name</label>
                <input type="text" name="user_name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
                <label className="block text-white-900 text-sm font-bold mb-2">Email</label>
                <input type="email" name="user_email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
                <label className="block text-white-900 text-sm font-bold mb-2">Message</label>
                <textarea name="message" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <input type="submit" value="Send" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer w-full" />
        </form>
    </div>
  
}

export default Contact