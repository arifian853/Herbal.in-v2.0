import React from 'react';
import { useUserAuth } from '../Context/UserAuthContext';

export const FooterInside = () => {
  const { user } = useUserAuth();
  return (
    <div className='footer'>
        <p>Copyright © 2023 Herbal.in - C22-05. All Rights Reserved.</p>
        <p className='underline'> User : {user && user.email}</p>
    </div>
  )
}
