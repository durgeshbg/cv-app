import add from '/add.svg';
import FormMenu from '../FormMenu';

function EducationForm({ education, formHandlers }) {
  return (
    <>
      <div className='education'>
        {Object.keys(education).map((id) => {
          {
            return education[id].isActive ? (
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

                <FormMenu
                  isActive={education[id].isActive}
                  setIsActive={formHandlers.setIsActiveEdu}
                  id={id}
                  handleDelete={formHandlers.deleteEdu}
                />
              </div>
            ) : (
              <div key={id} className='lock'>
                <div>Name of the school: {education[id].name}</div>
                <div>Title of study: {education[id].title}</div>
                <div>Date of completion: {education[id].date}</div>

                <FormMenu
                  isActive={education[id].isActive}
                  setIsActive={formHandlers.setIsActiveEdu}
                  id={id}
                  handleDelete={formHandlers.deleteEdu}
                />
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
