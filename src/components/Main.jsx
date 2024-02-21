import { useState } from 'react';
import Display from './Display';
import '../styles/Main.css';

function Main() {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    education: {
      deafult: {
        name: '',
        title: '',
        date: '',
      },
    },
    experience: {
      default: {
        name: '',
        position: '',
        responsibilities: '',
        fromDate: '',
        toDate: '',
      },
    },
  });

  return (
    <>
      <main>
        <Display {...state} />
      </main>
    </>
  );
}

export default Main;
