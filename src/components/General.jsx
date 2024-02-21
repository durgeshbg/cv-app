function General({ name, email, phone }) {
  return (
    <>
      <div className='general'>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Phone: {phone}</div>
      </div>
    </>
  );
}

export default General;
