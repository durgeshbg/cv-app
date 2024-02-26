import '../styles/Experience.css';

function Experience(experience) {
  return (
    <>
      <div className='experience'>
        <h3>Experience</h3>
        {Object.keys(experience).map((id) => {
          return (
            <div key={id} className={id + ' item'}>
              <div className='name'>{experience[id].name}</div>
              <div className='position'>{experience[id].position}</div>
              <div className='responsibilities'>{experience[id].responsibilities}</div>
              {experience[id].fromDate && (
                <div className='duration'>
                  From {experience[id].fromDate} to {experience[id].toDate}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Experience;
