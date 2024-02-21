import { useState } from 'react';
import '../../styles/GeneralForm.css';
import FormMenu from '../FormMenu';

function GeneralForm({ name, phone, email, formHandlers }) {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      {isActive ? (
        <div className='general'>
          <div className='name'>
            <label htmlFor='name'>Name: </label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={formHandlers.changeName}
            />
          </div>

          <div className='email'>
            <label htmlFor='email'>Email: </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={formHandlers.changeEmail}
            />
          </div>

          <div className='phone'>
            <label htmlFor='phone'>Phone: </label>
            <input
              type='tel'
              id='phone'
              value={phone}
              onChange={formHandlers.changePhone}
            />
          </div>
        </div>
      ) : (
        <div className='lock general'>
          <div>Name: {name}</div>
          <div>Email: {email}</div>
          <div>Phone: {phone}</div>
        </div>
      )}

      <FormMenu isActive={isActive} setIsActive={setIsActive} isGeneral={true} />
    </>
  );
}

export default GeneralForm;
