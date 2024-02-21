import lock from '/lock.svg';
import unlock from '/unlock.svg';
import remove from '/cross.svg';

function FormMenu({
  isActive,
  setIsActive,
  isGeneral = false,
  id = 'none',
  handleDelete = 'none',
}) {
  return (
    <>
      <button id={id} onClick={setIsActive}>
        <img src={isActive ? unlock : lock} alt={isActive ? 'save' : 'edit'} />
        {isActive ? 'Save' : 'Edit'}
      </button>

      {!isGeneral && (
        <button id={id} className='remove' onClick={handleDelete}>
          Remove <img src={remove} alt='remove' />
        </button>
      )}
    </>
  );
}

export default FormMenu;
