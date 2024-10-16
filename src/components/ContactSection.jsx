import React, { useRef, useState } from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const formRef = useRef(); // Reference to the form
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  // Handle form changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // Use EmailJS to send email with all form data
    emailjs.sendForm(
      'service_ey0gu2z',  // EmailJS service ID
      'template_s8657bq',  // EmailJS template ID
      formRef.current,
      'pk_UHJrE_CxImpzgK'       // EmailJS user ID (public key)
    ).then((result) => {
      console.log(result.text);
      alert(`Message Sent Successfully, ${formData.fullName}! I will get back to you as soon as possible. Thank you`);
      setLoading(false);
      // Clear form fields after successful submission
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
    }).catch((error) => {
      console.log(error.text);
      alert('Failed to send the message, please try again.');
      setLoading(false);
    });
  }

  return (
    <section className='max-w-7xl mx-auto py-6' id='contact'>
      <form ref={formRef} onSubmit={handleSubmit} className='px-4 sm:w-3/4 md:w-1/2 mx-auto my-12'>
        <fieldset className='sm:border-neutral-500 sm:border-2 sm:px-6 md:px-8 px-2 py-4 flex flex-col pb-8'>
          <legend className='font-bold text-3xl md:text-5xl text-center px-4'>Let's talk</legend>
          <p className='text-center text-neutral-400 mb-10'>Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.</p>

          {/* Full Name Input */}
          <label className='flex flex-col gap-1'>Full Name
            <input
              type="text"
              name='fullName' // This name should match the placeholder in the EmailJS template
              value={formData.fullName}
              onChange={handleChange}
              placeholder='John Doe'
              className='placeholder:text-neutral-600 bg-[#0E0E10] outline-none px-2 py-2 rounded-md mb-8'
              required
            />
          </label>

          {/* Email Input */}
          <label className='flex flex-col gap-1'>Email
            <input
              type="email"
              name='email' // This name should match the placeholder in the EmailJS template
              value={formData.email}
              onChange={handleChange}
              placeholder='johndoe@gmail.com'
              className='placeholder:text-neutral-600 bg-[#0E0E10] outline-none px-2 py-2 rounded-md mb-8'
              required
            />
          </label>

          {/* Phone Number Input */}
          <label className='flex flex-col gap-1'>Phone Number
            <input
              type="text"
              name='phoneNumber' // This name should match the placeholder in the EmailJS template
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder='(optional)'
              className='placeholder:text-neutral-600 bg-[#0E0E10] outline-none px-2 py-2 rounded-md mb-8'
            />
          </label>

          {/* Message Input */}
          <label className='flex flex-col gap-1'>Message
            <textarea
              name='message' // This name should match the placeholder in the EmailJS template
              value={formData.message}
              onChange={handleChange}
              placeholder='Hi, I have a job for you...'
              className='placeholder:text-neutral-600 bg-[#0E0E10] outline-none px-2 py-2 rounded-md mb-8'
              required
            />
          </label>

          {/* Submit Button */}
          <button
            className='border-neutral-800 bg-[#0E0E10] text-base sm:text-xl font-semibold px-4 py-2 border-2 rounded-md mt-8 mb-4 hover:border-neutral-500'
            type='submit'
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'} <FiArrowUpRight className="inline" />
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default ContactSection;
