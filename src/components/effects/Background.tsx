import style from './effects.module.css';
const baseURL = import.meta.env.VITE_BASE_URL;
function Background() {
  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      <img
        className={`object-cover max-h-[3840px] min-h-full ${style.animation} ${style.colorimg} absolute`}
        src={`${baseURL}/assets/images/graffiti-grey.png`}
        alt='background grey'
      ></img>
      <img
        className='object-cover max-h-[3840px] min-h-full block'
        src={`${baseURL}/assets/images/graffiti-original.jpg`}
        alt='background color'
      ></img>
    </div>
  );
}

export default Background;
