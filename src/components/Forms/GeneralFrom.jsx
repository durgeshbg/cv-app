import { useState } from 'react';
import lock from '/lock.svg';
import unlock from '/unlock.svg';

function GeneralForm({ name, phone, email, formHandlers }) {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <div className='general'>
        {isActive ? (
          <div className='unlock'>
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
          <div className='lock'>
            <div>{name}</div>
            <div>{email}</div>
            <div>{phone}</div>
          </div>
        )}

        <button onClick={() => setIsActive(!isActive)}>
          <img src={isActive ? unlock : lock} alt={isActive ? 'save' : 'edit'} />
          {isActive ? 'Save' : 'Edit'}
        </button>
      </div>
    </>
  );
}

export default GeneralForm;
