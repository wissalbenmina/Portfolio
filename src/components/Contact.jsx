import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_9usf53b', 'template_687w2rk', form.current, {publicKey: 'sKcbWYtrW7giVYGPk',})
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div className='max-w-[1200px] mx-auto bg-black sm:py-20 p-5' id='contact'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
      </div>

      <div className='max-w-[800px] mx-auto'>
        <div className='mt-6 bg-[#161616] rounded-xl'>
            <div className='p-10'>

                <form action="#" method='POST' ref={form} onSubmit={sendEmail}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                        <div>
                            <div className='mt-2.5'>
                                <input type="text" name='user_name' id='' placeholder='Your Name' className='bg-[#161616] w-full px-4 py-2 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-[#ff5f6d]'/>
                            </div>
                        </div>

                        <div>
                            <div className='mt-2.5'>
                                <input type="text" name='user_email' id='' placeholder='Your Email' className='bg-[#161616] w-full px-4 py-2 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-[#ff5f6d]'/>
                            </div>
                        </div>

                        <div className='sm:col-span-2'>
                            <div className='mt-2.5'>
                                <textarea name="message" id="" placeholder='Your Message' className='bg-[#161616] w-full px-4 py-4 text-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-[#ff5f6d]' rows="4"></textarea>
                            </div>
                        </div>

                        <div className='sm:col-span-2'>
                            <button type='submit' value="Send" className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md'>Send</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
