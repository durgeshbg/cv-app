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
        isActive: true,
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
      newState.education[e.target.dataset.itemid].name = e.target.value;
      setState(newState);
    },
    changeEtitle: (e) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.education[e.target.dataset.itemid].title = e.target.value;
      setState(newState);
    },
    changeEdate: (e) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.education[e.target.dataset.itemid].date = e.target.value;
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
        delete newState.education[e.target.dataset.itemid];
        setState(newState);
      } else {
        console.log('Error: minimum one education field required');
      }
    },
    setIsActiveEdu: (e) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.education[e.target.dataset.itemid].isActive =
        !newState.education[e.target.dataset.itemid].isActive;
      setState(newState);
    },

    changeCname: (e) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.experience[e.target.dataset.itemid].name = e.target.value;
      setState(newState);
    },
    changeCposition: (e) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.experience[e.target.dataset.itemid].position = e.target.value;
      setState(newState);
    },
    changeCresponsibilities: (e) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.experience[e.target.dataset.itemid].responsibilities = e.target.value;
      setState(newState);
    },
    changeCfdate: (e) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.experience[e.target.dataset.itemid].fromDate = e.target.value;
      setState(newState);
    },
    changeCtdate: (e) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.experience[e.target.dataset.itemid].toDate = e.target.value;
      setState(newState);
    },
    addCom: () => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.experience = {
        ...newState.experience,
        [Date.now().toString(36)]: {
          name: '',
          position: '',
          responsibilities: '',
          fromDate: '',
          toDate: '',
          isActive: true,
        },
      };
      setState(newState);
    },
    deleteCom: (e) => {
      if (Object.keys(state.experience).length > 1) {
        const newState = JSON.parse(JSON.stringify(state));
        delete newState.experience[e.target.dataset.itemid];
        setState(newState);
      } else {
        console.log('Error: minimum one experience field required');
      }
    },
    setIsActiveCom: (e) => {
      const newState = JSON.parse(JSON.stringify(state));
      console.log(e.target.dataset.itemid);
      newState.experience[e.target.dataset.itemid].isActive =
        !newState.experience[e.target.dataset.itemid].isActive;
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
