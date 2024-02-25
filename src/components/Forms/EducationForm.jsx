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
                  <label htmlFor={id + 'edu-name'}>School Name:</label>
                  <input
                    type='text'
                    value={education[id].name}
                    onChange={formHandlers.changeEname}
                    id={id + 'edu-name'}
                    data-itemid={id}
                  />
                </div>

                <div className='title'>
                  <label htmlFor={id + 'edu-title'}>Title of study:</label>
                  <input
                    type='text'
                    value={education[id].title}
                    onChange={formHandlers.changeEtitle}
                    id={id + 'edu-title'}
                    data-itemid={id}
                  />
                </div>

                <div className='edate'>
                  <label htmlFor={id + 'edu-edate'}>Completed:</label>
                  <input
                    type='date'
                    value={education[id].date}
                    onChange={formHandlers.changeEdate}
                    id={id + 'edu-edate'}
                    data-itemid={id}
                  />
                </div>

                <div className='buttons'>
                  <button
                    data-itemid={id}
                    className='save'
                    onClick={formHandlers.setIsActiveEdu}
                  >
                    <img src={unlock} alt='save' /> {'Save'}
                  </button>

                  <button
                    data-itemid={id}
                    className='remove'
                    onClick={formHandlers.deleteEdu}
                  >
                    Remove <img src={remove} alt='remove' />
                  </button>
                </div>
              </div>
            ) : (
              <div key={id} className='lock'>
                <div>Name of the school: {education[id].name}</div>
                <div>Title of study: {education[id].title}</div>
                <div>Date of completion: {education[id].date}</div>

                <div className='buttons'>
                  <button
                    data-itemid={id}
                    className='edit'
                    onClick={formHandlers.setIsActiveEdu}
                  >
                    <img src={lock} alt='edit' /> {'Edit'}
                  </button>
                  <button
                    data-itemid={id}
                    className='remove'
                    onClick={formHandlers.deleteEdu}
                  >
                    Remove <img src={remove} alt='remove' />
                  </button>
                </div>
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
