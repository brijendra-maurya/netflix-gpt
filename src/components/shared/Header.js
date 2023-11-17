import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store);

  console.log(user)

  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate("/");
    })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='absolute w-screen px-8 py-2 z-10 bg-gradient-to-b from-black flex justify-between'>
      <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo' width='148' height='40' />
      { user &&
        <div className='flex'>
          <button className='font-bold text-lg' onClick={handleSignout}>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header