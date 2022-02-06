import { useState } from 'react';
import './Contact.scss';
import { Person, Mail } from '@material-ui/icons';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({});

  const updateForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    (formData.email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) &&
      formData.mssg &&
      setMessage("I'll reply to you ASAP")) ||
      setMessage('Invalid Inputs');
  };
  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='assets/call.png' alt='' />
        <div className='detail'>
          <ul>
            <li>
              <Person className='icon' />
              Phone Number: <span>+6204266219</span>
            </li>
            <li>
              <Mail className='icon' />
              Email Id: <span>shubhamprakash2000513@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='right'>
        <h2>Contact.</h2>
        <form onSubmit={formSubmit}>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData?.email}
            onChange={updateForm}
          />
          <textarea
            name='mssg'
            placeholder='Message'
            value={formData?.mssg}
            onChange={updateForm}
          ></textarea>
          <button type='submit'>Send</button>
          {<span>{message}</span>}
        </form>
      </div>
    </div>
  );
}
