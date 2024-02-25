import add from '/add.svg';
import lock from '/lock.svg';
import unlock from '/unlock.svg';
import remove from '/cross.svg';

function ExperienceForm({ experience, formHandlers }) {
  return (
    <>
      <div className='education'>
        {Object.keys(experience).map((id) => {
          {
            return experience[id].isActive ? (
              <div key={id} className={id + ' unlock'}>
                <div className='name'>
                  <label>
                    Company Name:
                    <input
                      type='text'
                      value={experience[id].name}
                      onChange={formHandlers.changeCname}
                      id={id}
                    />
                  </label>
                </div>

                <div className='position'>
                  <label>
                    Position:
                    <input
                      type='text'
                      value={experience[id].position}
                      onChange={formHandlers.changeCposition}
                      id={id}
                    />
                  </label>
                </div>

                <div className='responsibilities'>
                  <label>
                    Responsibilities:
                    <input
                      type='text'
                      value={experience[id].responsibilities}
                      onChange={formHandlers.changeCresponsibilities}
                      id={id}
                    />
                  </label>
                </div>

                <div className='fromDate'>
                  <label>
                    From:
                    <input
                      type='date'
                      value={experience[id].fromDate}
                      onChange={formHandlers.changeCfdate}
                      id={id}
                    />
                  </label>
                </div>
                <div className='toDate'>
                  <label>
                    To:
                    <input
                      type='date'
                      value={experience[id].toDate}
                      onChange={formHandlers.changeCtdate}
                      id={id}
                    />
                  </label>
                </div>

                <button id={id} onClick={formHandlers.setIsActiveCom}>
                  <img src={unlock} alt='save' /> {'Save'}
                </button>
                <button id={id} className='remove' onClick={formHandlers.deleteCom}>
                  Remove <img src={remove} alt='remove' />
                </button>
              </div>
            ) : (
              <div key={id} className='lock'>
                <div>Company Name: {experience[id].name}</div>
                <div>Position: {experience[id].position}</div>
                <div>Resposibilities: {experience[id].responsibilities}</div>
                <div>From: {experience[id].fromDate}</div>
                <div>To: {experience[id].toDate}</div>

                <button id={id} onClick={formHandlers.setIsActiveCom}>
                  <img src={lock} alt='edit' /> {'Edit'}
                </button>
                <button id={id} className='remove' onClick={formHandlers.deleteCom}>
                  Remove <img src={remove} alt='remove' />
                </button>
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
