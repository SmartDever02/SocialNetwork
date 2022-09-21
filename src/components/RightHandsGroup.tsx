import alarmSVG from '../assets/images/alarm.svg';
import messageSVG from '../assets/images/message.svg';
import addUserSVG from '../assets/images/add-user.svg';

const RightHandsGroup = () => {
  return (
    <div className='flex items-center gap-10'>
      <button className='relative w-6 h-6'>
        <img src={addUserSVG} alt='add-user' width={25} height={25} />
        <span className='absolute -right-3 -top-2 bg-rose-600 w-5 h-5 rounded-full flex justify-center items-center text-white'>
          3
        </span>
      </button>
      <button className='relative w-6 h-6'>
        <img src={messageSVG} alt='message' width={25} height={25} />
        <span className='absolute -right-3 -top-2 bg-rose-600 w-5 h-5 rounded-full flex justify-center items-center text-white'>
          2
        </span>
      </button>
      <button className='relative w-6 h-6'>
        <img src={alarmSVG} alt='alarm' width={25} height={25} />
        <span className='absolute -right-3 -top-2 bg-rose-600 w-5 h-5 rounded-full flex justify-center items-center text-white'>
          1
        </span>
      </button>
    </div>
  );
};

export default RightHandsGroup;
