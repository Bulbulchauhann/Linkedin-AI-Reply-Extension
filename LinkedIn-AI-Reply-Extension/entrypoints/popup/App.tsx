import './App.css';

function App() {
  return (
    <>
      <div className='flex flex-col items-center p-[30px] gap-3'>
        <img src="/wxt.svg" alt="ChatGPT Writer Logo" className='h-8 w-8 bg-black rounded-full' />
        <h1 className='text-lg font-bold'>ChatGPT Writer</h1>
      </div>
      <div className='px-[30px]'>
        <p className='text-base font-semibold text-slate mb-2 text-center'>Welcome to ChatGPT Writer</p>
        <p className='text-sm text-center'>
          ChatGPT Writer is a Chrome extension that helps you generate messages faster and more effectively. 
          It uses AI to suggest text as you write, so you can spend less time typing and more time on what matters.
        </p>
        <div className='mt-4 flex justify-center'>
          <button className='bg-black text-white py-2 w-52 rounded-md hover:bg-slate-950'>
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
