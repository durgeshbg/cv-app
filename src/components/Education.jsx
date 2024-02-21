function Education(education) {
  return (
    <>
      <div className='education'>
        {Object.keys(education).map((id) => {
          return (
            <div key={id} className={id + ' item'}>
              <div className='name'>Edu Name: {education[id].name}</div>
              <div className='title'>Edu Title: {education[id].title}</div>
              <div className='date'>Edu Date: {education[id].date}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Education;
