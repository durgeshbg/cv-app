import '../styles/Education.css'

function Education(education) {
  return (
    <>
      <div className='education'>
        <h3>Education</h3>
        {Object.keys(education).map((id) => {
          return (
            <div key={id} className={id + ' item'}>
              <div className='title'>{education[id].title}</div>
              <div className='name'>{education[id].name}</div>
              <div className='date'>{education[id].date}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Education;
