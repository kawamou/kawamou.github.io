import type { NextPage } from 'next'

const Header = () => {
  return (
    <div className='navbar h-20'>
      <div className='flex h-full'>
        <div className='flex-1 m-auto text-xl'>aaa</div>
        <div className='mt-auto mb-auto text-xl'>bbb</div>
        <div className='mt-auto mb-auto ml-8 text-xl'>ccc</div>
        <div className='mt-auto mb-auto ml-8 text-xl'>ddd</div>
      </div>
    </div>
  )
}
const AboutMe = () => {
  return (
    <div className='about-me max-w-2xl m-auto'>
      <div className='flex justify-center'>
        <div className='w-30 mt-auto mb-auto'>
          <img src='/qr.png' className='w-full' />
        </div>
        <div className='mt-auto mb-auto'>
          <div className='text-5xl'>Hello👋</div>
          <div>
            gonyogonyogonyogonyogonyogonyogonyogonyogonyogonyo
            <br />
            gonyogonyogonyogonyogonyogonyogonyogonyogonyogonyo
            <br />
            gonyogonyogonyogonyogonyogonyogonyogonyo
          </div>
          <button className='bg-gray-500 hover:bg-gray-700 text-white py-1 px-4 rounded'>
            PORTFOLIO
          </button>
        </div>
      </div>
    </div>
  )
}
const Home: NextPage = () => {
  return <>top page</>
}

export default Home
