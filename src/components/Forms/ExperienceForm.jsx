import add from '/add.svg';
import lock from '/lock.svg';
import unlock from '/unlock.svg';
import remove from '/cross.svg';

function ExperienceForm({ experience, formHandlers }) {
  return (
    <>
      <div className='experience'>
        {Object.keys(experience).map((id) => {
          {
            return experience[id].isActive ? (
              <div key={id} className={id + ' unlock'}>
                <div className='name'>
                  <label htmlFor={id + '-xp-name'}>Company Name:</label>
                  <input
                    type='text'
                    value={experience[id].name}
                    onChange={formHandlers.changeCname}
                    id={id + '-xp-name'}
                    data-itemid={id}
                  />
                </div>

                <div className='position'>
                  <label htmlFor={id + '-xp-position'}>Position:</label>
                  <input
                    type='text'
                    value={experience[id].position}
                    onChange={formHandlers.changeCposition}
                    id={id + '-xp-position'}
                    data-itemid={id}
                  />
                </div>

                <div className='responsibilities'>
                  <label htmlFor={id + '-xp-responsibilities'}>Responsibilities:</label>
                  <input
                    type='text'
                    value={experience[id].responsibilities}
                    onChange={formHandlers.changeCresponsibilities}
                    id={id + '-xp-responsibilities'}
                    data-itemid={id}
                  />
                </div>

                <div className='fromDate'>
                  <label htmlFor={id + '-xp-fromDate'}>From:</label>
                  <input
                    type='date'
                    value={experience[id].fromDate}
                    onChange={formHandlers.changeCfdate}
                    id={id + '-xp-fromDate'}
                    data-itemid={id}
                  />
                </div>
                <div className='toDate'>
                  <label htmlFor={id + 'xp-toDate'}>To:</label>
                  <input
                    type='date'
                    value={experience[id].toDate}
                    onChange={formHandlers.changeCtdate}
                    id={id + 'xp-toDate'}
                    data-itemid={id}
                  />
                </div>

                <div className='buttons'>
                  <button
                    data-itemid={id}
                    className='save'
                    onClick={formHandlers.setIsActiveCom}
                  >
                    <img src={unlock} alt='save' /> {'Save'}
                  </button>

                  <button
                    data-itemid={id}
                    className='remove'
                    onClick={formHandlers.deleteCom}
                  >
                    Remove <img src={remove} alt='remove' />
                  </button>
                </div>
              </div>
            ) : (
              <div key={id} className='lock'>
                <div>{experience[id].name}</div>
                <div>{experience[id].position}</div>
                <div>{experience[id].responsibilities}</div>
                <div>
                  {experience[id].fromDate} - {experience[id].toDate}
                </div>

                <div className='buttons'>
                  <button
                    data-itemid={id}
                    className='edit'
                    onClick={formHandlers.setIsActiveCom}
                  >
                    <img src={lock} alt='edit' /> {'Edit'}
                  </button>
                  <button
                    data-itemid={id}
                    className='remove'
                    onClick={formHandlers.deleteCom}
                  >
                    Remove <img src={remove} alt='remove' />
                  </button>
                </div>
              </div>
            );
          }
        })}

        <button className='add' onClick={formHandlers.addCom}>
          Add <img src={add} alt='add' />
        </button>
      </div>
    </>
  );
}

export default ExperienceForm;
