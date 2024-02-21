import EducationForm from './EducationForm';
import GeneralForm from './GeneralFrom';
import ExperienceForm from './ExperienceForm';

function From({ state, formHandlers }) {
  return (
    <>
      <div className='form'>
        <GeneralForm
          name={state.name}
          phone={state.phone}
          email={state.email}
          formHandlers={formHandlers}
        />
        <EducationForm education={state.education} formHandlers={formHandlers} />
        <ExperienceForm experience={state.experience} formHandlers={formHandlers} />
      </div>
    </>
  );
}

export default From;
