import { useState } from 'react';
import FormMenu from '../FormMenu';

function EducationForm({ education, formHandlers }) {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <div className='education'>
        {Object.keys(education).map((id) => {
          {
            return isActive ? (
              <div key={id} className={id + ' form'}>
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

                <FormMenu isActive={isActive} setIsActive={setIsActive} />
              </div>
            ) : (
              <div className='lock'>
                <div>Name of the school: {education[id].name}</div>
                <div>Title of study: {education[id].title}</div>
                <div>Date of completion: {education[id].date}</div>

                <FormMenu isActive={isActive} setIsActive={setIsActive} />
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default EducationForm;
