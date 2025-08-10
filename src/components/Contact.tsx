import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { EMAIL_CONFIG } from '../config/emailConfig';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: any) => {
    e.preventDefault();
    
    // Reset status
    setEmailStatus('idle');
    setStatusMessage('');

    // Validate form
    const nameValid = name.trim() !== '';
    const emailValid = email.trim() !== '' && isValidEmail(email);
    const messageValid = message.trim() !== '';

    setNameError(!nameValid);
    setEmailError(!emailValid);
    setMessageError(!messageValid);

    if (!nameValid || !emailValid || !messageValid) {
      setEmailStatus('error');
      setStatusMessage('Please fill in all fields correctly.');
      return;
    }

    setIsLoading(true);

    try {
      // Check if EmailJS is configured
      const isConfigured = EMAIL_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID';
      
      if (isConfigured) {
        // Real EmailJS implementation
        const templateParams = {
          from_name: name,
          from_email: email,
          message: message,
          to_name: 'Aryan Patil',
        };

        const result = await emailjs.send(
          EMAIL_CONFIG.SERVICE_ID,
          EMAIL_CONFIG.TEMPLATE_ID,
          templateParams,
          EMAIL_CONFIG.PUBLIC_KEY
        );

        console.log('Email sent successfully:', result);
        setEmailStatus('success');
        setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
      } else {
        // Demo mode - simulate email sending
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay
        
        console.log('Demo mode: Email would be sent with:', {
          from_name: name,
          from_email: email,
          message: message,
          to_name: 'Aryan Patil',
        });
        
        setEmailStatus('success');
        setStatusMessage('Demo mode: Message "sent" successfully! (Configure EmailJS for real emails)');
      }
      
      // Clear form
      setName('');
      setEmail('');
      setMessage('');
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setEmailStatus('error');
      setStatusMessage('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-header">
            <h1 className="contact-title">Let's Work Together</h1>
            <p className="contact-subtitle">Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          </div>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`form-input ${nameError ? 'error' : ''}`}
                  placeholder=" "
                  required
                />
                <label htmlFor="name" className="form-label">Your Name</label>
                {nameError && <span className="error-message">Please enter your name</span>}
              </div>
              
              <div className="input-wrapper">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`form-input ${emailError ? 'error' : ''}`}
                  placeholder=" "
                  required
                />
                <label htmlFor="email" className="form-label">Email</label>
                {emailError && <span className="error-message">Please enter your email or phone</span>}
              </div>
            </div>
            
            <div className="input-wrapper">
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`form-textarea ${messageError ? 'error' : ''}`}
                placeholder=" "
                rows={6}
                required
              />
              <label htmlFor="message" className="form-label">Message</label>
              {messageError && <span className="error-message">Please enter your message</span>}
            </div>
            
            <button 
              type="submit" 
              className={`submit-btn ${isLoading ? 'loading' : ''} ${emailStatus}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="loading-spinner"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <SendIcon className="send-icon" />
                </>
              )}
            </button>
            
            {emailStatus !== 'idle' && (
              <div className={`status-message ${emailStatus}`}>
                {emailStatus === 'success' && <CheckCircleIcon className="status-icon" />}
                {emailStatus === 'error' && <ErrorIcon className="status-icon" />}
                <span>{statusMessage}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;