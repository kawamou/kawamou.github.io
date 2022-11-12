// 同じものは同じものにするのがデザイン。ExperiencesとAppendix
// スキルに技術ブログへの導線
// https://nttdocomo-developers.jp/entry/2022/10/18/120000

import type { NextPage } from 'next'
import { useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Avatar, Button, Card, Navbar, Select, Typography, Option } from '@material-tailwind/react'
import { ChevronDownIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import {
  faBirthdayCake,
  faCheckCircle,
  faLink,
  faMailBulk,
  faPhone,
  faTag,
  faThunderstorm,
} from '@fortawesome/free-solid-svg-icons'

// 必要な事項
// - 保有資格、受賞登壇歴、経験（電通インターンとかも書いて良いと思う）
// - 別ページにポートフォリオがあると良いかもしれない
const Home: NextPage = () => {
  return (
    <div className='background bg-gray-50 min-w-full min-h-screen'>
      <Navbar className='min-w-full py-2 px-4 lg:px-8 lg:py-4 rounded-none border-none shadow-sm mb-16'>
        <div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
          <Typography className='mr-4 cursor-pointer font-bold'>
            <span>👋</span>
          </Typography>
          <div className='flex gap-2 items-center'>
            <Avatar src='/yellow.png' variant='circular' size='xs'></Avatar>
            <div className='flex gap-1'>
              <Typography className='text-xs font-medium'>kawamou</Typography>
              <ChevronDownIcon className='w-3'></ChevronDownIcon>
            </div>
          </div>
        </div>
      </Navbar>
      <div className='max-w-5xl mx-auto'>
        <div className='flex gap-6 justify-center'>
          <div className='flex flex-col gap-6 w-3/5'>
            <Card className='shadow-sm p-6'>
              <div className='flex gap-4 mb-4'>
                <Avatar src='/yellow.png' variant='circular' size='md'></Avatar>
                <div>
                  <Typography
                    color='black'
                    variant=''
                    className='text-xl font-bold text-blue-gray-900'
                  >
                    kawamou
                  </Typography>
                  <Typography color='gray' variant='' className='text-sm'>
                    新規事業創出 / Software Engineer
                  </Typography>
                </div>
              </div>
              <div className='mb-2'>
                <Typography color='black' variant='' className='text-sm'>
                  私はこんな職業です。こんなことが好きです。それからこんな経験をしてきました。こんなことができます。段落作って右側に作ることが好きですとかそういう感じのパーソナルなこと書いても良いかも
                </Typography>
              </div>
              <div className='flex text-gray-600 mb-4'>
                <Typography className='font-bold text-xs'>Read more</Typography>
                <ArrowSmRightIcon className='w-4'></ArrowSmRightIcon>
              </div>
              <div className='flex gap-4 items-center'>
                <div className='text-gray-700'>
                  <FontAwesomeIcon icon={faTwitter} className={'h-4'} />
                </div>
                <div className='text-gray-700'>
                  <FontAwesomeIcon icon={faGithub} className={'h-4'} />
                </div>
                <div className='text-gray-700'>
                  <FontAwesomeIcon icon={faInstagram} className={'h-4'} />
                </div>
                <div className='text-gray-700'>
                  <FontAwesomeIcon icon={faLinkedin} className={'h-4'} />
                </div>
              </div>
            </Card>
            <Card className='shadow-sm p-6'>
              <Typography color='black' variant='' className='text-xl font-bold text-blue-gray-900'>
                Preffered Positons
              </Typography>
              <ul className='list-disc p-4 border-b border-gray-50'>
                <li className='pb-3'>
                  <div className='max-w-sm rounded-xl border border-gray-200'>
                    <div className='flex items-center gap-2'>
                      <div className='mr-auto pl-3'>
                        <Typography color='black' className='text-sm'>
                          バックエンド（Go）
                        </Typography>
                      </div>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className='text-green-500 pr-3'
                      ></FontAwesomeIcon>
                      <div className='border-l border-gray-200'>
                        <div className='px-3 py-2'>
                          <Typography color='black' className='text-sm'>
                            2 Year
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='pb-3'>
                  <div className='max-w-sm rounded-xl border border-gray-200'>
                    <div className='flex items-center gap-2'>
                      <div className='mr-auto pl-3'>
                        <Typography color='black' className='text-sm'>
                          クラウド / SRE（Google Cloud）
                        </Typography>
                      </div>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className='text-green-500 pr-3'
                      ></FontAwesomeIcon>
                      <div className='border-l border-gray-200'>
                        <div className='px-3 py-2'>
                          <Typography color='black' className='text-sm'>
                            2 Year
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <Typography
                color='black'
                variant=''
                className='text-xl font-black my-4 text-blue-gray-900'
              >
                Skills
              </Typography>
              <div>
                <Typography color='black' className='text-sm mb-6'>
                  業務ではうんぬんかんぬん。プライベートではうんぬんかんぬん
                </Typography>
              </div>
              <div className='flex gap-2 flex-wrap'>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography color='black' className='text-sm'>
                    Go
                  </Typography>
                </div>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography color='black' className='text-sm'>
                    Google Cloud
                  </Typography>
                </div>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography color='black' className='text-sm'>
                    Firebase
                  </Typography>
                </div>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography color='black' className='text-sm'>
                    コンテナ
                  </Typography>
                </div>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography color='black' className='text-sm'>
                    TypeScript
                  </Typography>
                </div>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography color='black' className='text-sm'>
                    React
                  </Typography>
                </div>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography color='black' className='text-sm'>
                    AWS
                  </Typography>
                </div>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography color='black' className='text-sm'>
                    SQL
                  </Typography>
                </div>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography color='black' className='text-sm'>
                    Python
                  </Typography>
                </div>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography color='black' className='text-sm'>
                    新規事業開発
                  </Typography>
                </div>
              </div>
            </Card>
            <Card className='p-6 shadow-sm'>
              <Typography
                color='black'
                variant=''
                className='text-xl font-bold mb-4 text-blue-gray-900'
              >
                All Experiences
              </Typography>
              <div className='mb-5'>
                <Select label='カテゴリー'>
                  <Option>会社</Option>
                  <Option>教育</Option>
                </Select>
              </div>
              <div className='flex border-b border-gray-100'>
                <div className='flex gap-4'>
                  <div className=''>
                    <div className='bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center'>
                      <Typography className='text-lg'>👨‍💼</Typography>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className='flex items-center gap-4'>
                        <Typography
                          color='black'
                          className='text-base font-bold mb-1 text-blue-gray-900'
                        >
                          株式会社NTTドコモ
                        </Typography>
                        <div className='bg-gray-200 rounded px-3 py-1 flex text-sm items-center justify-center mr-4 mb-1'>
                          <Typography color='black' className='text-sm'>
                            Latest
                          </Typography>
                        </div>
                      </div>
                      <Typography color='gray' className='text-sm mb-2'>
                        2018.04 - 現在 | Software Engineer, 新規事業創出
                      </Typography>
                      <Typography color='black' className='text-sm mb-4'>
                        <ul className='list-disc list-inside marker:text-gray-500'>
                          <li>Twitter</li>
                          <li>PHP / AWS</li>
                        </ul>
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex border-b border-gray-100 my-4'>
                <div className='flex gap-4'>
                  <div className=''>
                    <div className='bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center'>
                      <Typography className='text-lg'>🎓</Typography>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className='flex items-center gap-4'>
                        <Typography
                          color='black'
                          className='text-base font-bold mb-1 text-blue-gray-900'
                        >
                          筑波大学大学院
                        </Typography>
                      </div>
                      <Typography color='gray' className='text-sm mb-2'>
                        2016.04 - 2018.03 | コンピュータサイエンス専攻
                      </Typography>
                      <Typography color='black' className='text-sm mb-4'>
                        システム情報工学研究科コンピュータサイエンス専攻に所属。主なテーマはCuckoo
                        Searchによる連続値最適化で、ニューラルネットワークを対象としたNeuroEvolutionやブラックボックス最適化をメインに研究
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex border-b border-gray-100 my-4'>
                <div className='flex gap-4'>
                  <div className=''>
                    <div className='bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center'>
                      <Typography className='text-lg'>👨‍💻</Typography>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className='flex items-center gap-4'>
                        <Typography
                          color='black'
                          className='text-base font-bold mb-1 text-blue-gray-900'
                        >
                          インターン 株式会社電通
                        </Typography>
                      </div>
                      <Typography color='gray' className='text-sm mb-2'>
                        2016.03
                      </Typography>
                      <Typography color='black' className='text-sm mb-4'>
                        テクノロジーとアイデアの学校
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex border-b border-gray-100 my-4'>
                <div className='flex gap-4'>
                  <div className=''>
                    <div className='bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center'>
                      <Typography className='text-lg'>👨‍💻</Typography>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className='flex items-center gap-4'>
                        <Typography
                          color='black'
                          className='text-base font-bold mb-1 text-blue-gray-900'
                        >
                          アルバイト WWD JAPAN
                        </Typography>
                      </div>
                      <Typography color='gray' className='text-sm mb-2'>
                        2017 - 2018
                      </Typography>
                      <Typography color='black' className='text-sm mb-4'></Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex border-b border-gray-100 my-4'>
                <div className='flex gap-4'>
                  <div className=''>
                    <div className='bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center'>
                      <Typography className='text-lg'>👨‍💻</Typography>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className='flex items-center gap-4'>
                        <Typography
                          color='black'
                          className='text-base font-bold mb-1 text-blue-gray-900'
                        >
                          アルバイト 株式会社テレビ朝日
                        </Typography>
                      </div>
                      <Typography color='gray' className='text-sm mb-2'>
                        2012 - 2018
                      </Typography>
                      <Typography color='black' className='text-sm mb-4'></Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex border-b border-gray-100 my-4'>
                <div className='flex gap-4'>
                  <div className=''>
                    <div className='bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center'>
                      <Typography className='text-lg'>🎓</Typography>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className='flex items-center gap-4'>
                        <Typography
                          color='black'
                          className='text-base font-bold mb-1 text-blue-gray-900'
                        >
                          筑波大学
                        </Typography>
                      </div>
                      <Typography color='gray' className='text-sm mb-2'>
                        2012.04 - 2016.03 | 情報学群情報科学類
                      </Typography>
                      <Typography color='black' className='text-sm mb-4'>
                        情報学群情報科学類に所属
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className='flex flex-col w-2/5 gap-6'>
            <Card className='shadow-sm p-6'>
              <Typography
                color='black'
                variant=''
                className='text-xl font-bold mb-4 text-blue-gray-900'
              >
                Contact
              </Typography>
              <div className='grid grid-cols-2 border-b border-gray-100 p-2'>
                <div className='p-2'>
                  <div className='flex items-center'>
                    <div className='bg-gray-50 rounded-md w-9 h-9 flex items-center justify-center mr-4'>
                      <FontAwesomeIcon
                        icon={faMailBulk}
                        className='text-gray-400'
                      ></FontAwesomeIcon>
                    </div>
                    <div className=''>
                      <Typography className='font-bold'>xxx-xxx-xxx</Typography>
                      <Typography>xxx-xxx-xxx</Typography>
                    </div>
                  </div>
                </div>
                <div className='p-2'>
                  <div className='flex items-center'>
                    <div className='bg-gray-50 rounded-md w-9 h-9 flex items-center justify-center mr-4'>
                      <FontAwesomeIcon icon={faPhone} className='text-gray-400'></FontAwesomeIcon>
                    </div>
                    <div className=''>
                      <Typography className='font-bold'>xxx-xxx-xxx</Typography>
                      <Typography>xxx-xxx-xxx</Typography>
                    </div>
                  </div>
                </div>
                <div className='p-2'>
                  <div className='flex items-center'>
                    <div className='bg-gray-50 rounded-md w-9 h-9 flex items-center justify-center mr-4'>
                      <FontAwesomeIcon
                        icon={faBirthdayCake}
                        className='text-gray-400'
                      ></FontAwesomeIcon>
                    </div>
                    <div className=''>
                      <Typography className='font-bold'>xxx-xxx-xxx</Typography>
                      <Typography>xxx-xxx-xxx</Typography>
                    </div>
                  </div>
                </div>
                <div className='p-2'>
                  <div className='flex items-center'>
                    <div className='bg-gray-50 rounded-md w-9 h-9 flex items-center justify-center mr-4'>
                      <FontAwesomeIcon
                        icon={faThunderstorm}
                        className='text-gray-400'
                      ></FontAwesomeIcon>
                    </div>
                    <div className=''>
                      <Typography className='font-bold'>xxx-xxx-xxx</Typography>
                      <Typography>xxx-xxx-xxx</Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-2'>
                <div className='flex items-center p-2'>
                  <div className='bg-gray-50 rounded-md w-9 h-9 flex items-center justify-center mr-4'>
                    <FontAwesomeIcon icon={faLink} className='text-gray-400'></FontAwesomeIcon>
                  </div>
                  <div>
                    <Typography variant='' className='font-bold'>
                      xxx, xxx, xxx, xxx
                    </Typography>
                    <Typography variant='' className=''>
                      xxx, xxx, xxx, xxx
                    </Typography>
                  </div>
                </div>
                <div className='flex items-center p-2'>
                  <div className='bg-gray-50 rounded-md w-9 h-9 flex items-center justify-center mr-4'>
                    <FontAwesomeIcon icon={faTag} className='text-gray-400'></FontAwesomeIcon>
                  </div>
                  <div>
                    <Typography variant='' className='font-bold'>
                      xxx, xxx, xxx, xxx
                    </Typography>
                    <Typography variant='' className=''>
                      xxx, xxx, xxx, xxx
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
