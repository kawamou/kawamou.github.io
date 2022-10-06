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
const Home: NextPage = () => {
  return <>top page</>
}

export default Home
