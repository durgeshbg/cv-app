import add from '/add.svg';
import lock from '/lock.svg';
import unlock from '/unlock.svg';
import remove from '/cross.svg';

function EducationForm({ education, formHandlers }) {
  return (
    <>
      <div className='education'>
        {Object.keys(education).map((id) => {
          {
            return education[id].isActive ? (
              <div key={id} className={id + ' unlock'}>
                <div className='name'>
                  <label>
                    School Name:
                    <input
                      type='text'
                      value={education[id].name}
                      onChange={formHandlers.changeEname}
                      id={id}
                    />
                  </label>
                </div>

                <div className='title'>
                  <label>
                    Title of study:
                    <input
                      type='text'
                      value={education[id].title}
                      onChange={formHandlers.changeEtitle}
                      id={id}
                    />
                  </label>
                </div>

                <div className='edate'>
                  <label>
                    Completed:
                    <input
                      type='date'
                      value={education[id].date}
                      onChange={formHandlers.changeEdate}
                      id={id}
                    />
                  </label>
                </div>

                <button id={id} onClick={formHandlers.setIsActiveEdu}>
                  <img src={unlock} alt='save' /> {'Save'}
                </button>
                <button id={id} className='remove' onClick={formHandlers.deleteEdu}>
                  Remove <img src={remove} alt='remove' />
                </button>
              </div>
            ) : (
              <div key={id} className='lock'>
                <div>Name of the school: {education[id].name}</div>
                <div>Title of study: {education[id].title}</div>
                <div>Date of completion: {education[id].date}</div>

                <button id={id} onClick={formHandlers.setIsActiveEdu}>
                  <img src={lock} alt='edit' /> {'Edit'}
                </button>
                <button id={id} className='remove' onClick={formHandlers.deleteEdu}>
                  Remove <img src={remove} alt='remove' />
                </button>
              </div>
            );
          }
        })}

        <button className='add' onClick={formHandlers.addEdu}>
          Add <img src={add} alt='add' />
        </button>
      </div>
    </>
  );
}

export default EducationForm;
