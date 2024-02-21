function Experience(experience) {
  return (
    <>
      <div className='experience'>
        {Object.keys(experience).map((id) => {
          return (
            <div key={id} className={id + ' item'}>
              <div className='name'>XP Name: {experience[id].name}</div>
              <div className='position'>XP position: {experience[id].position}</div>
              <div className='responsibilities'>
                XP responsibilities: {experience[id].responsibilities}
              </div>
              <div className='fromDate'>XP fromDate: {experience[id].fromDate}</div>
              <div className='toDate'>XP toDate: {experience[id].toDate}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Experience;
