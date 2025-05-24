import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Alert from '../components/Alert'
import { Particles } from '../components/Particles'
const Contact = () => {
    const [formData, setformData] = useState({name:"", email:"", message:""})
    const handleChanger=(e)=>{
        setformData({...formData,[e.target.name]:e.target.value})
    };
    const showAlertMessage = (type,message)=>{
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false)
        }, 5000);
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsLoading(true);

try {
    console.log("Form Submitted:", formData)

    await emailjs.send("service_zho8ke3", "template_puzngn8",{
        
            from_name: formData.name,
            to_name:"Soumi",
            from_email: formData.email,
            to_email:"paulsoumi330@gmail.com",
            message:formData.message,
        },"Bqw1wdismC1Ixac3q");
        setIsLoading(false);
        setformData({name:"", email:"", message:""});
        showAlertMessage("success", "Your email has been sent");
} catch (error) {
 setIsLoading(false);
 console.log(error);
 showAlertMessage( "danger","Something Went Wrong");
}

        
    }

    const[isLoading,setIsLoading] = useState(false);
    const[showAlert,setShowAlert] = useState(false);
    const[alertType,setAlertType] = useState("success");
    const[alertMessage,setAlertMessage]= useState("")
  return (
    <section className='relative flex items-center c-space section-spacing'>
        <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
       {showAlert && <Alert type={alertType} text={alertMessage}/>}
        <div className='flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary'>
        <div className='flex flex-col items-start w-full gap-5 mb-10'>
            <h2 className='text-heading'>Let's Talk</h2>
            <p className='font-normal text-neutral-400'>Whether you are looking for building a new website, improve your exsisting platform, or bring a unique project to life, I'm here to help.</p>
        </div>
        <form action="" className='w-full' onSubmit={handleSubmit}>
            <div className='mb-5'>
                <label htmlFor="name" className='failed-label'>Full Name</label>
                <input type="text" id='name'value={formData.name} name='name' onChange={handleChanger} className='field-input field-input-focus' 
                placeholder='John Doe' required autoComplete='name'/>
            </div>
            <div className='mb-5'>
                <label htmlFor="email" className='failed-label'>E-Mail</label>
                <input value={formData.email} type="text" id='email' name='email'onChange={handleChanger}  className='field-input field-input-focus' 
                placeholder='JohnDoe123@gmail.com' required autoComplete='email'/>
            </div>
            <div className='mb-5'>
                <label htmlFor="message" className='failed-label'>Message</label>
                <textarea type="text" id='message' name='message' className='field-input field-input-focus' 
                placeholder='Share Your Thoughts' required rows="4" onChange={handleChanger}  autoComplete='message'value={formData.message}/>
            </div>
            <button type='submit' className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation'>{!isLoading?"SEND":"SENDING..."}</button>
        </form>
        </div>
    </section>
  )
}

export default Contact;
