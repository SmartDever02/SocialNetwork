import homeSVG from '../assets/images/home.svg';
import calendarSVG from '../assets/images/calendar.svg';
import videoSVG from '../assets/images/video.svg';
import groupSVG from '../assets/images/group.svg';
import settingSVG from '../assets/images/setting.svg';

const Sidebar = () => {
  const data = [
    {
      label: 'Home',
      icon: homeSVG,
    },
    {
      label: 'Calendar',
      icon: calendarSVG,
    },
    {
      label: 'Video',
      icon: videoSVG,
    },
    {
      label: 'Group',
      icon: groupSVG,
    },
    {
      label: 'Setting',
      icon: settingSVG,
    },
  ];
  return (
    <nav className='pt-10'>
      <ul className='w-[290px]'>
        {data.map((_data, index) => (
          <li
            className='pb-10 last:pb-0 flex items-center gap-2'
            key={'nav-list-' + index}
          >
            <img src={_data.icon} alt={_data.label} width={30} height={30} />
            <span className='text-base'>{_data.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
