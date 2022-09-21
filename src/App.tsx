import TempUserAvatar from './components/TempUser';
import SearchInput from './components/SearchInput';
import RightHandsGroup from './components/RightHandsGroup';
import Sidebar from './components/Sidebar';
import AsideBar from './components/Aside';

import location from './assets/images/location.svg';
import image from './assets/images/image.svg';
import video from './assets/images/video.svg';
import dots from './assets/images/dotdotdot.svg';
import shoot from './assets/images/shootMessage.svg';

import postimage1 from './assets/images/post-image-1.svg';
import postimage2 from './assets/images/post-image-2.svg';

function App() {
  return (
    <div className='bg-[#F8F8F8] min-h-screen'>
      <header className='w-full shadow-md bg-white'>
        <div className='h-20 flex justify-between items-center max-w-[1600px] mx-auto'>
          <h3 className=''>Logo</h3>
          <SearchInput query={''} onChange={undefined} />
          <RightHandsGroup />
          <TempUserAvatar index={0} />
        </div>
      </header>

      <main className='flex pl-10 justify-between pb-20'>
        <Sidebar />
        <div className='mt-10'>
          <div className='bg-white w-[750px] h-[220px] border-b-[4px] border-b-[#06C0D9] rounded-t-[10px] px-6 pt-4 shadow-md'>
            <div className='flex gap-8'>
              <TempUserAvatar index={0} addClass='mt-4 block' />
              <textarea
                placeholder='Write message to ... '
                className='w-full h-[126px] bg-[#F9F9F9] rounded-[10px] outline-[#06C0D9a0] p-4 text-xs'
              />
            </div>
            <div className='mt-[30px] text-[#797979] flex justify-between'>
              <div className='gap-6 flex items-center'>
                <div className='flex items-center gap-[6px]'>
                  <img src={location} alt='location' />
                  Konum
                </div>
                <div className='flex items-center gap-[6px]'>
                  <img src={image} alt='image' />
                  Fotoğraf
                </div>
                <div className='flex items-center gap-[6px]'>
                  <img src={video} alt='video' width={24} height={18} />
                  Video
                </div>
                <div className='flex items-center gap-[6px]'>
                  <img src={dots} alt='dots' />
                  Daha Fazla
                </div>
              </div>

              <button className='bg-[#06C0D9] w-[118px] h-9 rounded-[10px] flex items-center justify-around font-extrabold text-white px-2'>
                <img src={shoot} alt='message' />
                Paylaş
              </button>
            </div>
          </div>

          <div className='mt-12 flex w-full justify-between'>
            <div>
              <span className='font-semibold border-b-[4px] border-b-[#06C0D9] h-5'>
                Trend
              </span>
              <span className='pl-[52px] font-medium text-[#A5A5A5]'>
                Takip ettiklerin
              </span>
              <span className='pl-[52px] font-medium text-[#A5A5A5]'>
                En son
              </span>
            </div>
            <div className='font-medium text-[#A5A5A5]'>Fotoğraflar</div>
          </div>

          <div className='mt-6 w-full h-[510px] bg-white rounded-[10px] shadow-md pt-5 px-8'>
            <p className='pl-20'>
              James beff, Diana Taccur’ın fotoğrafını paylaştı
              <br />
              <span className='text-sm text-[#8A8A8A]'>8 saat önce </span>
              <span className='text-sm text-[#8A8A8A]'> Türkiye</span>
            </p>
            <img src={postimage1} alt='post-img-1' className='mt-5' />
            <p className='mt-4 font-medium text-[#7C7C7C] max-w-[700px] '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              id dolor neq ue euismod proin ut nunc.
            </p>
          </div>

          <div className='mt-6 w-full h-[510px] bg-white rounded-[10px] shadow-md pt-5 px-8'>
            <p className='pl-20'>
              James beff, Diana Taccur’ın fotoğrafını paylaştı
              <br />
              <span className='text-sm text-[#8A8A8A]'>8 saat önce </span>
              <span className='text-sm text-[#8A8A8A]'> Türkiye</span>
            </p>
            <img src={postimage2} alt='post-img-2' className='mt-5' />
            <p className='mt-4 font-medium text-[#7C7C7C] max-w-[700px] '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              id dolor neq ue euismod proin ut nunc.
            </p>
          </div>
        </div>

        <div className='w-[500px] pt-[75px] flex  justify-center'>
          <div className='w-[280px] h-[280px] bg-white rounded-[20px] border-[0.5px] border-[#ABABAB80] absolute pt-[84px]'>
            <TempUserAvatar
              index={0}
              addClass='w-[105px] h-[105px] absolute -top-[28px] left-1/2 -translate-x-1/2'
            />
            <p className='text-center'>İpek ELDEKs</p>
            <p className='text-[#9F9F9F] text-center pt-1'>
              Yazılım Mühendisi, 22
            </p>
          </div>
        </div>
        <AsideBar />
      </main>
    </div>
  );
}

export default App;
