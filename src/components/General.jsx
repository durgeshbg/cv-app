import nameSVG from '../assets/name.svg';
import emailSVG from '../assets/email.svg';
import phoneSVG from '../assets/phone.svg';
import '../styles/General.css';
function General({ name, email, phone }) {
  return (
    <>
      <div className='general'>
        <div className='name'>
          <img src={nameSVG} alt='name svg' />
          {name}
        </div>
        <div className='email'>
          <img src={emailSVG} alt='email svg' /> {email}
        </div>
        <div className='phone'>
          <img src={phoneSVG} alt='phone svg' /> {phone}
        </div>
      </div>
    </>
  );
}

export default General;
