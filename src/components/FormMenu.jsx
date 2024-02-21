import lock from '/lock.svg';
import unlock from '/unlock.svg';
import remove from '/cross.svg';

function FormMenu({ isActive, setIsActive, isGeneral = false }) {
  return (
    <>
      <button onClick={() => setIsActive(!isActive)}>
        <img src={isActive ? unlock : lock} alt={isActive ? 'save' : 'edit'} />
        {isActive ? 'Save' : 'Edit'}
      </button>

      {!isGeneral && (
        <button className='remove'>
          Remove <img src={remove} alt='remove' />
        </button>
      )}
    </>
  );
}

export default FormMenu;
