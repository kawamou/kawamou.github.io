import type { NextPage } from 'next'
import { useState, useCallback } from 'react'

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

type Experience = {
  title: string
  date: string
  description: string
}

// https://portfolio-tailwind.preview.uideck.com/demos/personal/
// My Resumeの部分を埋める
// https://flowbite.com/docs/components/timeline/
// これが良さそう
const Experiences = () => {
  const [experiences] = useState<Experience[]>([
    {
      title: 'ここにタイトルが入る',
      date: '2022.01.01',
      description:
        'ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。',
    },
    {
      title: 'ここにタイトルが入る',
      date: '2022.01.01',
      description:
        'ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。',
    },
    {
      title: 'ここにタイトルが入る',
      date: '2022.01.01',
      description:
        'ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。',
    },
  ])
  return (
    <div className='max-w-3xl ml-auto mr-auto'>
      <ol className='relative border-l border-gray-200'>
        {experiences?.map((experience, index) => {
          return (
            <>
              <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                <svg
                  aria-hidden='true'
                  className='w-3 h-3 text-blue-600 dark:text-blue-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </span>
              {index ? (
                <></>
              ) : (
                <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                  {experience.title}
                  <span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                    Latest
                  </span>
                </h3>
              )}
              <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                {experience.date}
              </time>
              <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                {experience.description}
              </p>
            </>
          )
        })}
      </ol>
    </div>
  )
}
const Home: NextPage = () => {
  return <>top page</>
}

export default Home
