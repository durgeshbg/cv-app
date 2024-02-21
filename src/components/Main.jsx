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
        isActive: true,
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

    changeEname: (e) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.education[e.target.id].name = e.target.value;
      setState(newState);
    },
    changeEtitle: (e) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.education[e.target.id].title = e.target.value;
      setState(newState);
    },
    changeEdate: (e) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.education[e.target.id].date = e.target.value;
      setState(newState);
    },
    addEdu: () => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.education = {
        ...newState.education,
        [Date.now().toString(36)]: { name: '', title: '', date: '', isActive: true },
      };
      setState(newState);
    },
    deleteEdu: (e) => {
      if (Object.keys(state.education).length > 1) {
        const newState = JSON.parse(JSON.stringify(state));
        delete newState.education[e.target.id];
        setState(newState);
      } else {
        console.log('Error: minimum one education field required');
      }
    },
    setIsActiveEdu: (e) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.education[e.target.id].isActive =
        !newState.education[e.target.id].isActive;
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
