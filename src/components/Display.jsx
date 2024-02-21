import General from './General';

function Display({ name, email, phone, education, experience }) {
  return (
    <>
      <div className='display'>
        <General {...{ name, email, phone }} />
      </div>
    </>
  );
}

export default Display;
