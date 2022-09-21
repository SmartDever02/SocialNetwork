import user2 from '../assets/images/user2.svg';
import user3 from '../assets/images/user3.svg';
import user4 from '../assets/images/user4.svg';
import user5 from '../assets/images/user5.svg';
import user6 from '../assets/images/user6.svg';
import user7 from '../assets/images/user7.svg';
import user8 from '../assets/images/user8.svg';
import user9 from '../assets/images/user9.svg';

const users = [user2, user3, user4, user5, user6, user7, user8, user9];
const AsideBar = () => {
  return (
    <aside className='w-[86px] flex flex-col items-center bg-[#F3F3F3] mt-1 pt-5 gap-5'>
      {users.map((user, index) => (
        <span key={'sidebar-user' + index} className='relative'>
          <img src={user} alt={'user' + index} />
          <span className='absolute w-4 h-4 rounded-full bg-[#59CE5E] -right-2 top-1/2 -translate-y-[18px]' />
        </span>
      ))}
    </aside>
  );
};

export default AsideBar;
