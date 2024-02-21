import { useState } from 'react';
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
      </main>
    </>
  );
}

export default Main;
