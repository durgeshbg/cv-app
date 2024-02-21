import Education from './Education';
import Experience from './Experience';
import General from './General';
import '../styles/Display.css';

function Display({ name, email, phone, education, experience }) {
  return (
    <>
      <div className='display'>
        <General {...{ name, email, phone }} />
        <Education {...education} />
        <Experience {...experience} />
      </div>
    </>
  );
}

export default Display;
