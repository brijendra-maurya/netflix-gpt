import React, { useRef, useState } from 'react';
import Header from '../shared/Header';
import { checkValidData } from '../../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn)
  }

  const handleButtonClick = () => {
    const message = checkValidData(email?.current?.value, password?.current?.value);
    if (message) setErrorMessage(message);
    if (!message) {
      if (!isSignIn) {
        createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          navigate("/browse")
        })
        .catch((error) => {
          //const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        })

      } else {
        signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          navigate("/browse")
        })
        .catch((error) => {
          //const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        })
      }
    }
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt="bg" />
      </div>
      <form onSubmit={(e) => e.preventDefault()}
      className='absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black opacity-80 text-white rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        { !isSignIn && 
          <input type='text' ref={fullName} placeholder='Full Name' className='p-4 my-4 bg-gray-700 w-full' />
        }
        <input type='text' ref={email} placeholder='Email-id' className='p-4 my-4 bg-gray-700 w-full' />
        <input type='password' ref={password} placeholder='Password' className='p-4 my-4 bg-gray-700 w-full' />
        { errorMessage &&
          <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        }
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignIn ? 'Sing In' : 'Sign Up'}</button>
        <p className='py-4' onClick={toggleSignInForm}>New to Netflix? {!isSignIn ? 'Sign in' : 'Sign up'} now.</p>
      </form>
    </div>
  )
}

export default Login