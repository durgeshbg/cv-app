import { useState } from 'react';
import Display from './Display';
import From from './Forms/Form';
import '../styles/Main.css';

function Main() {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    education: {
      default: {
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

  const formHandlers = {
    changeName: (e) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.name = e.target.value;
      setState(newState);
    },
    changeEmail: (e) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.email = e.target.value;
      setState(newState);
    },
    changePhone: (e) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.phone = e.target.value;
      setState(newState);
    },
  };

  return (
    <>
      <main>
        <From state={state} formHandlers={formHandlers} />
        <Display {...state} />
      </main>
    </>
  );
}

export default Main;
