import style from './effects.module.css';
const baseURL = import.meta.env.VITE_BASE_URL;

function RegisterBackground() {
  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      <img
        className={`object-cover max-h-[3840px] min-h-full ${style.registerAnimation} ${style.registerImg} absolute`}
        src={`${baseURL}/assets/images/registerBackground.png`}
        alt='background grey'
      ></img>
      <img
        className='object-cover max-h-[3840px] min-h-full block'
        src={`${baseURL}/assets/images/registerOriginal.png`}
        alt='background color'
      ></img>
    </div>
  );
}

export default RegisterBackground;
