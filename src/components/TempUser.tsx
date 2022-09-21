import img1 from '../assets/images/user1.svg';

const images = [img1];

const TempUserAvatar = ({ index, addClass }: ITempAvatar) => {
  return (
    <img
      src={images[index] || images[0]}
      alt={'avatar' + index}
      width={45}
      height={45}
      className={addClass ?? ''}
    />
  );
};

export default TempUserAvatar;
