import TempUserAvatar from './components/TempUser';
import SearchInput from './components/SearchInput';
import RightHandsGroup from './components/RightHandsGroup';
import Sidebar from './components/Sidebar';

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

      <main className='flex px-10'>
        <Sidebar />
        <div className='mt-10'>
          <div className='bg-white w-[750px] h-[220px] border-b-[4px] border-b-[#06C0D9] rounded-t-[10px] px-6 pt-4'>
            <div className='flex gap-8'>
              <TempUserAvatar index={0} addClass='mt-4 block' />
              <textarea
                placeholder='Write message to ... '
                className='w-full h-[126px] bg-[#F9F9F9] rounded-[10px] outline-[#06C0D9a0] p-4 text-xs'
              />
            </div>
            <div className='mt-[30px]'></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
