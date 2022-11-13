// 同じものは同じものにするのがデザイン。ExperiencesとAppendix
// スキルに技術ブログへの導線
// https://nttdocomo-developers.jp/entry/2022/10/18/120000

import type { NextPage } from 'next'
import { useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Avatar, Button, Card, Navbar, Select, Typography, Option } from '@material-tailwind/react'
import { ChevronDownIcon, ArrowSmRightIcon, ArrowNarrowUpIcon } from '@heroicons/react/outline'
import {
  faBirthdayCake,
  faCheckCircle,
  faLink,
  faMailBulk,
  faPhone,
  faTag,
  faThunderstorm,
  faSquareArrowUpRight,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

// 必要な事項
// - 保有資格、受賞登壇歴、経験（電通インターンとかも書いて良いと思う）
// - 別ページにポートフォリオがあると良いかもしれない
const Home: NextPage = () => {
  return (
    <div className='background bg-gray-50 min-w-full min-h-screen'>
      <Navbar className='min-w-full py-2 px-4 lg:px-8 lg:py-4 rounded-none border-none shadow-sm mb-16'>
        <div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
          <Typography className='mr-4 cursor-pointer font-bold text-blue-gray-900'>
            <span>Hi👋</span>
          </Typography>
          <div className='flex gap-2 items-center'>
            <Avatar src='/yellow.png' variant='circular' size='xs'></Avatar>
            <div className='flex gap-1'>
              <Typography className='text-sm font-medium'>kawamou</Typography>
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
                  <Typography className='text-xl font-bold text-blue-gray-900'>kawamou</Typography>
                  <Typography color='gray' variant='' className='text-sm'>
                    新規事業 / Software developer
                  </Typography>
                </div>
              </div>
              <div className='mb-2'>
                <Typography variant='' className='text-sm text-blue-gray-900 leading-6'>
                  1992年9月生まれ。人間の表現に関することが好きです。現在は大手通信会社のR&D部門で新規事業創出に取り組んでいます
                </Typography>
              </div>
              <div className='flex text-gray-700 mb-4 hover:text-gray-300 hover:cursor-pointer'>
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
                <div className='text-gray-700 flex items-center gap-1'>
                  <Typography className='text-xs font-bold'>Qiita</Typography>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={'h-2'} />
                </div>
              </div>
            </Card>
            <Card className='shadow-sm p-6'>
              <Typography variant='' className='text-xl font-bold text-blue-gray-900'>
                Preffered Positons
              </Typography>
              <ul className='list-disc p-4 border-b marker:text-blue-gray-900 border-gray-200'>
                <li className='pb-3'>
                  <div className='max-w-sm rounded-xl border border-gray-200'>
                    <div className='flex items-center gap-2'>
                      <div className='mr-auto pl-3'>
                        <Typography className='text-sm text-blue-gray-900'>
                          バックエンド（Go）
                        </Typography>
                      </div>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className='text-green-500 pr-3'
                      ></FontAwesomeIcon>
                      <div className='border-l border-gray-200'>
                        <div className='px-3 py-2'>
                          <Typography className='text-sm text-blue-gray-900'>2 Year</Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='pb-3'>
                  <div className='max-w-sm rounded-xl border border-gray-200'>
                    <div className='flex items-center gap-2'>
                      <div className='mr-auto pl-3'>
                        <Typography className='text-sm text-blue-gray-900'>
                          クラウド / SRE（Google Cloud）
                        </Typography>
                      </div>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className='text-green-500 pr-3'
                      ></FontAwesomeIcon>
                      <div className='border-l border-gray-200'>
                        <div className='px-3 py-2'>
                          <Typography className='text-sm text-blue-gray-900'>2 Year</Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <Typography variant='' className='text-xl font-black my-4 text-blue-gray-900'>
                Skills
              </Typography>
              <div>
                <Typography className='text-sm mb-6 text-blue-gray-900'>
                  業務ではうんぬんかんぬん。プライベートではうんぬんかんぬん
                </Typography>
              </div>
              <div className='flex gap-2 flex-wrap'>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography className='text-sm text-blue-gray-900'>Go</Typography>
                </div>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography className='text-sm text-blue-gray-900'>Google Cloud</Typography>
                </div>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography className='text-sm text-blue-gray-900'>Firebase</Typography>
                </div>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography className='text-sm text-blue-gray-900'>コンテナ</Typography>
                </div>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography className='text-sm text-blue-gray-900'>TypeScript</Typography>
                </div>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography className='text-sm text-blue-gray-900'>React</Typography>
                </div>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography className='text-sm text-blue-gray-900'>AWS</Typography>
                </div>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography className='text-sm text-blue-gray-900'>SQL</Typography>
                </div>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography className='text-sm text-blue-gray-900'>Python</Typography>
                </div>
                <div className='rounded border border-gray-200 px-2 py-1'>
                  <Typography className='text-sm text-blue-gray-900'>新規事業開発</Typography>
                </div>
              </div>
            </Card>
            <Card className='p-6 shadow-sm'>
              <Typography className='text-xl font-bold mb-4 text-blue-gray-900'>
                All Experiences
              </Typography>
              <div className='mb-5'>
                <Select label='カテゴリー'>
                  <Option>会社</Option>
                  <Option>教育</Option>
                </Select>
              </div>
              <div className='flex border-b border-gray-200 my-4'>
                <div className='flex gap-4'>
                  <div className=''>
                    <div className='bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center'>
                      <Typography className='text-lg'>👨‍💼</Typography>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className='flex items-center gap-4'>
                        <Typography className='text-base font-bold mb-1 text-blue-gray-900'>
                          株式会社NTTドコモ
                        </Typography>
                        <div className='bg-gray-200 rounded px-3 py-1 flex text-sm items-center justify-center mr-4 mb-1'>
                          <Typography className='text-xs'>Latest</Typography>
                        </div>
                      </div>
                      <Typography color='gray' className='text-sm mb-2'>
                        2020.03 - 現在 | Software developer, 新規事業創出
                      </Typography>
                      <Typography className='text-sm mb-4'>
                        <ul className='list-disc list-inside marker:text-blue-gray-900 text-blue-gray-900 leading-6'>
                          <li>新規事業</li>
                          <li>ソフトウェアエンジニア</li>
                        </ul>
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex border-b border-gray-200 my-4'>
                <div className='flex gap-4'>
                  <div className=''>
                    <div className='bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center'>
                      <Typography className='text-lg'>👨‍💼</Typography>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className='flex items-center gap-4'>
                        <Typography className='text-base font-bold mb-1 text-blue-gray-900'>
                          株式会社NTTドコモ
                        </Typography>
                      </div>
                      <Typography color='gray' className='text-sm mb-2'>
                        2018.04 - 2020.03
                      </Typography>
                      <Typography className='text-sm mb-4'>
                        <ul className='list-disc list-inside marker:text-blue-gray-900 text-blue-gray-900 leading-6'>
                          <li>新卒入社後、R&Dの新規事業部門に配属</li>
                          <li>Twitterを始めとしたWebマーケ</li>
                          <li>PHP / AWSを</li>
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
                        <Typography className='text-base font-bold mb-1 text-blue-gray-900'>
                          筑波大学大学院
                        </Typography>
                      </div>
                      <Typography color='gray' className='text-sm mb-2'>
                        2016.04 - 2018.03 | コンピュータサイエンス専攻
                      </Typography>
                      <Typography className='text-sm mb-4 text-blue-gray-900 leading-6'>
                        システム情報工学研究科コンピュータサイエンス専攻に所属。研究テーマはCuckoo
                        Searchによる連続値最適化。ニューラルネットワークを対象としたNeuroEvolutionやブラックボックス最適化をメインに研究。Cuckoo
                        Searchの並列化に取り組んだ
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
                        <Typography className='text-base font-bold mb-1 text-blue-gray-900'>
                          インターン 株式会社電通
                        </Typography>
                      </div>
                      <Typography color='gray' className='text-sm mb-2'>
                        2016.03
                      </Typography>
                      <Typography className='text-sm mb-4 text-blue-gray-900'>
                        テクノロジーとアイデアの学校1期生
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
                        <Typography className='text-base font-bold mb-1 text-blue-gray-900'>
                          アルバイト WWD JAPAN
                        </Typography>
                      </div>
                      <Typography color='gray' className='text-sm mb-2'>
                        2017 - 2018
                      </Typography>
                      <Typography className='text-sm mb-4 text-blue-gray-900'>
                        ファッション週刊誌 / Web媒体のインターン及び学生アルバイト
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
                        <Typography className='text-base font-bold mb-1 text-blue-gray-900'>
                          アルバイト 株式会社テレビ朝日
                        </Typography>
                      </div>
                      <Typography color='gray' className='text-sm mb-2'>
                        2012 - 2018
                      </Typography>
                      <Typography className='text-sm mb-4 text-blue-gray-900'>
                        政治系討論番組の学生アルバイト
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex border-gray-100 my-4'>
                <div className='flex gap-4'>
                  <div className=''>
                    <div className='bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center'>
                      <Typography className='text-lg'>🎓</Typography>
                    </div>
                  </div>
                  <div>
                    <div>
                      <Typography className='text-base font-bold mb-1 text-blue-gray-900'>
                        筑波大学
                      </Typography>
                      <Typography color='gray' className='text-sm mb-2 '>
                        2012.04 - 2016.03 | 情報学群情報科学類
                      </Typography>
                      <Typography className='text-sm mb-4 leading-6 text-blue-gray-900'>
                        情報学群情報科学類に所属。卒論は進化計算を用いた対話型配色支援システムの開発と評価
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card className='p-6 shadow-sm mb-6'>
              <Typography className='text-xl font-bold mb-4 text-blue-gray-900'>Others</Typography>
              <div className='my-2'>
                <Typography className='text-sm mb-1 text-blue-gray-900'>
                  ドコモ夏季インターン2022 ハッカソンメンター
                </Typography>
                <Typography color='gray' className='text-sm mb-2 '>
                  2022.09
                </Typography>
              </div>
              <div className='my-2'>
                <Typography className='text-sm mb-1 text-blue-gray-900'>
                  NTT Com Tech Night#2登壇
                </Typography>
                <Typography color='gray' className='text-sm mb-2 '>
                  2022.08
                </Typography>
              </div>
              <div className='my-2'>
                <Typography className='text-sm mb-1 text-blue-gray-900'>
                  ドコモ夏季インターン2021 ハッカソンメンター
                </Typography>
                <Typography color='gray' className='text-sm mb-2 '>
                  2021.09
                </Typography>
              </div>
              <div className='my-2'>
                <Typography className='text-sm mb-1 text-blue-gray-900'>
                  OPEN DX 2021登壇
                </Typography>
                <Typography color='gray' className='text-sm mb-2 '>
                  2021.09
                </Typography>
              </div>
              <div className='my-2'>
                <Typography className='text-sm mb-1 text-blue-gray-900'>
                  Google Cloud Day: Digital '21登壇
                </Typography>
                <Typography color='gray' className='text-sm mb-2 '>
                  2021.05
                </Typography>
              </div>
              <div className='my-2'>
                <Typography className='text-sm mb-1 text-blue-gray-900'>
                  Google Cloud Professional Cloud Architect
                </Typography>
                <Typography color='gray' className='text-sm mb-2 '>
                  2021.03
                </Typography>
              </div>
              <div className='my-2'>
                <Typography className='text-sm mb-1 text-blue-gray-900'>
                  AWS Certified Solutions Architect – Associate
                </Typography>
                <Typography color='gray' className='text-sm mb-2 '>
                  2020.02
                </Typography>
              </div>
              <div className='my-2'>
                <Typography className='text-sm mb-1 text-blue-gray-900'>証券外務員1種</Typography>
                <Typography color='gray' className='text-sm mb-2 '>
                  2019.03
                </Typography>
              </div>
              <div className='my-2'>
                <Typography className='text-sm mb-1 text-blue-gray-900'>
                  第80回情報処理学会全国大会, 学生奨励賞
                </Typography>
                <Typography color='gray' className='text-sm mb-2 '>
                  2016.03
                </Typography>
              </div>
              <div className='my-2'>
                <Typography className='text-sm mb-1 text-blue-gray-900'>
                  Mashup Awards 2016 エーアイ賞
                </Typography>
                <Typography color='gray' className='text-sm mb-2 '>
                  2016.03
                </Typography>
              </div>
            </Card>
          </div>
          <div className='flex flex-col w-2/5 gap-6'>
            <Card className='shadow-sm p-6'>
              <Typography className='text-xl font-bold mb-4 text-blue-gray-900'>Contact</Typography>
              <div className='border-gray-200 border-b pb-4 mb-4'>
                <ul className='list-none text-blue-gray-900 leading-6 text-sm'>
                  <li>
                    kazusada.kawamo.nt[at]gmail.com
                    <Typography color='gray' className='text-xs mb-2 '>
                      Email
                    </Typography>
                  </li>
                  <li>
                    @3kwm
                    <Typography color='gray' className='text-xs mb-2 '>
                      Twitter DM
                    </Typography>
                  </li>
                </ul>
              </div>
              <div className='text-center'>
                <Avatar src='/qr-code.png' size='xl'></Avatar>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
