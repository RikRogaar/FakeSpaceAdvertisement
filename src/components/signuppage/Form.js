import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'


const Form = () => {
    const[isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }
    return (
        <>
          <div className='form-container'>
            {/* <span className='close-btn'><Link to=".">×</Link></span> */}
            <div className='form-content-left'>
              <img className='form-img' src='/images/img-16.svg' alt='spaceship' />
            </div>
            {!isSubmitted ? (
              <FormSignup submitForm={submitForm} />
            ) : (
              <FormSuccess />
            )}
          </div>
        </>
      );
    };

export default Form
