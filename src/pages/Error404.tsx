const baseURL = import.meta.env.VITE_BASE_URL;

function Error404() {
  return (
    <div className='h-screen w-screen flex flex-col items-center gap-6 justify-center'>
      <h1>Sorry, that content doesn't exist.</h1>
      <img className='max-h-96' src={`${baseURL}/assets/images/404.png`} />
    </div>
  );
}

export default Error404;
