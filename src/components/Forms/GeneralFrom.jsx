import { useState } from 'react';
import lock from '/lock.svg';
import unlock from '/unlock.svg';
import '../../styles/GeneralForm.css';

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

      <button onClick={() => setIsActive(!isActive)}>
        <img src={isActive ? unlock : lock} alt={isActive ? 'save' : 'edit'} />
        {isActive ? 'Save' : 'Edit'}
      </button>
    </>
  );
}

export default GeneralForm;
