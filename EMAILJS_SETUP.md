# EmailJS Setup Guide

Follow these steps to set up EmailJS for your contact form:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (User ID)

## Step 5: Update Configuration
1. Open `src/config/emailConfig.js`
2. Replace the placeholder values:

```javascript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',
  TEMPLATE_ID: 'your_actual_template_id', 
  PUBLIC_KEY: 'your_actual_public_key',
};
```

## Step 6: Update Contact Component
1. Open `src/components/Contact.tsx`
2. Find the `sendEmail` function
3. Replace the placeholder values in the `emailjs.send()` call:

```javascript
const result = await emailjs.send(
  'your_actual_service_id',    // Replace this
  'your_actual_template_id',   // Replace this
  templateParams,
  'your_actual_public_key'     // Replace this
);
```

## Step 7: Test
1. Run your application
2. Fill out the contact form
3. Check your email to see if the message arrives

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Basic support

## Notes
- Keep your credentials secure
- Don't commit real credentials to version control
- Consider using environment variables for production
