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
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button 
              variant="contained" 
              endIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
              onClick={sendEmail}
              disabled={isLoading}
              className={`send-button ${emailStatus}`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
            
            {/* Status Message */}
            {emailStatus !== 'idle' && (
              <div className={`status-message ${emailStatus}`}>
                {emailStatus === 'success' && <CheckCircleIcon />}
                {emailStatus === 'error' && <ErrorIcon />}
                <span>{statusMessage}</span>
              </div>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;