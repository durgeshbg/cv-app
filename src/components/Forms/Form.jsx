import GeneralForm from './GeneralFrom';

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
      </div>
    </>
  );
}

export default From;
