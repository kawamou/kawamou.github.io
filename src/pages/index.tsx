import type { NextPage } from 'next'
import { useState, useCallback } from 'react'
import { BriefcaseIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const SideNav = () => {
  return (
    <aside>
      <div>kawamou</div>
      <p>HOME</p>
      <p>ABOUT</p>
      <p>SKILLS</p>
      <p>EXPERIENCES</p>
      <p>APPENDIX</p>
      <p>CONTACT</p>
    </aside>
  )
}

const Header = () => {
  return (
    <div className='navbar h-20 p-4'>
      <div className='flex h-full w-full ml-auto mr-auto'>
        <div className='flex-1 m-auto text-xl'>kawamou</div>
      </div>
    </div>
  )
}

const Top = () => {
  return (
    <div className='w-full m-auto'>
      <div className='flex justify-center'>
        <div className='w-2/5 m-auto'>
          <img src='/qr.png' className='m-auto w-40' />
        </div>
        <div className='w-3/5 mt-auto mb-auto'>
          <h4 className='font-semibold'>Hi👋 I am</h4>
          <h1 className='text-5xl font-extrabold mb-2'>kawamou</h1>
          <div className='mb-8 text-gray-500'>
            gonyogonyogonyogonyogonyogonyogonyogonyogonyogonyo
            <br />
            gonyogonyogonyogonyogonyogonyogonyogonyogonyogonyo
            <br />
            gonyogonyogonyogonyogonyogonyogonyogonyo
          </div>
          <div className='flex gap-2'>
            <button className='bg-gray-500 hover:bg-gray-700 text-white py-2 pr-4 pl-4 rounded-3xl'>
              Contact me
            </button>
            <button className='bg-white hover:text-gray-300 border-2 border-gray-400 text-gray-500  pr-4 pl-4 rounded-3xl'>
              Works
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const AboutMe = () => {
  return (
    <div className='w-full m-auto'>
      <h2 className='text-3xl font-semibold text-center mb-8'>About</h2>
      <div className='mb-8'>
        私はこんな職業です。こんなことが好きです。
        それからこんな経験をしてきました。こんなことができます
        段落作って右側に作ることが好きですとかそういう感じのパーソナルなこと書いても良いかも
        それからこんなこととか、あんなこととか、これからのこと たのしいこと、うれしいこと
        こちら側に自己紹介系のことを書くイメージか。エンジニアです、とか
      </div>
      <div className='flex justify-center gap-2 max-w-xs ml-auto mr-auto'>
        <div className='text-gray-800'>
          <FontAwesomeIcon icon={faTwitter} className={'h-5'} />
        </div>
        <div className='text-gray-800'>
          <FontAwesomeIcon icon={faGithub} className={'h-5'} />
        </div>
        <div className='text-gray-800'>
          <FontAwesomeIcon icon={faInstagram} className={'h-5'} />
        </div>
        <div className='text-gray-800'>
          <FontAwesomeIcon icon={faLinkedin} className={'h-5'} />
        </div>
        {/* ここにQiitaを足す */}
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <div className='w-full ml-auto mr-auto'>
      <h2 className='text-3xl font-semibold text-center mb-8'>Skills</h2>
      <div className='mb-8'>業務ではうんぬんかんぬん。プライベートではうんぬんかんぬん</div>
      <div className='flex gap-2 flex-wrap'>
        <div className='bg-gray-500 py-1 text-white pl-4 pr-4 text-center'>#Go</div>
        <div className='bg-gray-500 py-1 text-white pl-4 pr-4 text-center'>#Google Cloud</div>
        <div className='bg-gray-500 py-1 text-white pl-4 pr-4 text-center'>#Firebase</div>
        <div className='bg-gray-500 py-1 text-white pl-4 pr-4 text-center'>#k8s</div>
        <div className='bg-gray-500 py-1 text-white pl-4 pr-4 text-center'>#Container</div>
        <div className='bg-gray-500 py-1 text-white pl-4 pr-4 text-center'>#Docker</div>
        <div className='bg-gray-500 py-1 text-white pl-4 pr-4 text-center'>#TypeScript</div>
        <div className='bg-gray-500 py-1 text-white pl-4 pr-4 text-center'>#React</div>
        <div className='bg-gray-500 py-1 text-white pl-4 pr-4 text-center'>#Node</div>
        <div className='bg-gray-500 py-1 text-white pl-4 pr-4 text-center'>#AWS</div>
        <div className='bg-gray-500 py-1 text-white pl-4 pr-4 text-center'>#SQL</div>
        <div className='bg-gray-500 py-1 text-white pl-4 pr-4 text-center'>#Python</div>
        <div className='bg-gray-500 py-1 text-white pl-4 pr-4 text-center'>#Flutter</div>
        <div className='bg-gray-500 py-1 text-white pl-4 pr-4 text-center'>
          #Adobe (Photoshop, Illustrator...)
        </div>
      </div>
    </div>
  )
}

type Content = {
  title: string
  date: string
  description: string
}

// https://portfolio-tailwind.preview.uideck.com/demos/personal/
// My Resumeの部分を埋める
// https://flowbite.com/docs/components/timeline/
// これが良さそう
// all, 会社, 学問, その他で絞れると良さそう。ボタンがあって
const Experiences = () => {
  const [experiences] = useState<Content[]>([
    {
      title: '株式会社NTTドコモ',
      date: '2018.04 - 現在 | Software Engineer, 新規事業創出',
      description:
        'ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。',
    },
    {
      title: '筑波大学大学院',
      date: '2016.04 - 2018.03 | コンピュータサイエンス専攻',
      description:
        'システム情報工学研究科コンピュータサイエンス専攻に所属。主なテーマはCuckoo Searchによる連続値最適化で、ニューラルネットワークを対象としたNeuroEvolutionやブラックボックス最適化をメインに研究。',
    },
    {
      title: 'インターンシップ 株式会社電通',
      date: '2012.04 - 2016.03 | テクノロジーとアイデアの学校',
      description: '',
    },
    {
      title: 'アルバイト WWD JAPAN',
      date: '2017 - 2018 | アルバイト',
      description: '',
    },
    {
      title: 'アルバイト 株式会社テレビ朝日',
      date: '2012 - 2018 | アルバイト',
      description: '',
    },
    {
      title: '筑波大学',
      date: '2012.04 - 2016.03 | 情報学群情報科学類',
      description: '情報学群情報科学類に所属。',
    },
  ])
  return (
    <div className='w-full m-auto'>
      <h2 className='text-3xl font-semibold text-center mb-8'>Experiences</h2>
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
  const [contents] = useState<Content[]>([
    {
      title: 'ドコモ夏季インターン2022ハッカソンメンター',
      date: '2020.09',
      description: 'こんな感じのことやりましたよ',
    },
    {
      title: 'ドコモ夏季インターン2022ハッカソンメンター',
      date: '2020.09',
      description: 'こんな感じのことやりましたよ',
    },
  ])
  return (
    <div className='w-full m-auto'>
      <h2 className='text-3xl font-semibold text-center mb-8'>Appendix</h2>
      {contents.map((content) => {
        return (
          <>
            <ol>
              <li>
                <h3 className='text-xl'>content.title</h3>
                <h4>content.date</h4>
              </li>
            </ol>
          </>
        )
      })}
    </div>
  )
}

const Contact = () => {
  return (
    <div className='w-full m-auto'>
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
    <div className='flex font-sans'>
      <div className='max-w-5xl m-auto bg-gray-50 p-8'>
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
      </div>
    </div>
  )
}

export default Home
