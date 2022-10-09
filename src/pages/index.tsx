import type { NextPage } from 'next'
import { useState, useCallback } from 'react'
import { BriefcaseIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const SideNav = () => {
  return (
    <div>
      <p>About me</p>
      <p>About me</p>
      <p>About me</p>
      <p>About me</p>
      <p>About me</p>
    </div>
  )
}

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

const Top = () => {
  return (
    <div className='max-w-2xl m-auto'>
      <div className='flex justify-center'>
        <div className='w-30 m-auto'>
          <img src='/qr.png' className='w-full' />
        </div>
        <div className='mt-auto mb-auto'>
          <div className='text-5xl font-semibold mb-2'>Hello👋</div>
          <div className='mb-4'>
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

const AboutMe = () => {
  return (
    <div className='max-w-3xl m-auto'>
      <h2 className='text-3xl font-semibold text-center mb-8'>About me</h2>
      <div className='mb-4'>
        <p>
          私はこんな職業です。こんなことが好きです。
          それからこんな経験をしてきました。こんなことができます
          段落作って右側に作ることが好きですとかそういう感じのパーソナルなこと書いても良いかも
          https://employment.en-japan.com/tenshoku-daijiten/42593/
        </p>
      </div>
      <div className='flex text-center max-w-xs ml-auto mr-auto'>
        <div className='text-gray-800 w-1/4'>
          <FontAwesomeIcon icon={faTwitter} className={'h-5'} />
        </div>
        <div className='text-gray-800 w-1/4'>
          <FontAwesomeIcon icon={faGithub} className={'h-5'} />
        </div>
        <div className='text-gray-800 w-1/4'>
          <FontAwesomeIcon icon={faInstagram} className={'h-5'} />
        </div>
        <div className='text-gray-800 w-1/4'>
          <FontAwesomeIcon icon={faLinkedin} className={'h-5'} />
        </div>
        {/* ここにQiitaを足す */}
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <div className='max-w-3xl m-auto'>
      <h2 className='text-3xl font-semibold text-center mb-8'>Skills</h2>
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
      title: '大手通信会社事業化',
      date: '2022.01.01',
      description:
        'ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。',
    },
    {
      title: '大手通信会社初期配属',
      date: '2022.01.01',
      description:
        'ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。',
    },
    {
      title: '筑波大学大学院',
      date: '2016.04 - 2018.03',
      description:
        'ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。',
    },
    {
      title: '筑波大学',
      date: '2012.04 - 2016.03',
      description:
        '情報学群情報科学類にてコンピュータサイエンスについて学びました。大学外の活動としては...',
    },
  ])
  return (
    <div className='max-w-3xl m-auto'>
      <h2 className='text-3xl font-semibold text-center mb-8'>Experience</h2>
      <ol className='relative border-l border-gray-200'>
        {experiences?.map((experience, index) => {
          return (
            <>
              <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-gray-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-gray-900'>
                <BriefcaseIcon className='text-gray-800 w-4'></BriefcaseIcon>
              </span>
              <h3 className='flex items-center ml-5 mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                {experience.title}
                {index > 0 ? (
                  <></>
                ) : (
                  <span className='bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800 ml-3'>
                    Latest
                  </span>
                )}
              </h3>
              <time className='block mb-2 ml-5 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                {experience.date}
              </time>
              <p className='mb-4 ml-5 text-base font-normal text-gray-500 dark:text-gray-400'>
                {experience.description}
              </p>
            </>
          )
        })}
      </ol>
    </div>
  )
}

const Appendix = () => {
  return (
    <div className='max-w-3xl m-auto'>
      <h2 className='text-3xl font-semibold text-center mb-8'>Appendix</h2>
      ここに保有資格、受賞、登壇歴、インターン等を書くか
    </div>
  )
}

const Contact = () => {
  return (
    <div className='max-w-3xl m-auto'>
      <h2 className='text-3xl font-semibold text-center mb-8'>Contact</h2>
      <p className='text-center'>xxx@xxx.xxx</p>
    </div>
  )
}

// 余白は誰の持ち物？
// https://zenn.dev/seya/articles/09545c7503baa4
const Spacer = () => {
  return <div className='mb-16'></div>
}

// 必要な事項
// - 保有資格、受賞登壇歴、経験（電通インターンとかも書いて良いと思う）
// - 別ページにポートフォリオがあると良いかもしれない
const Home: NextPage = () => {
  return (
    <div className='max-w-5xl m-auto'>
      <div className='main'>
        <Header />
        <Spacer />
        <Top />
        <Spacer />
        <AboutMe />
        <Spacer />
        <Skills />
        <Spacer />
        <Experiences />
        <Spacer />
        <Appendix />
        <Spacer />
        <Contact />
      </div>
      {/* <SideNav /> */}
    </div>
  )
}

export default Home
