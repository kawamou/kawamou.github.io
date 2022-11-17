import { Card, Select, Typography, Option } from '@material-tailwind/react'
import { FC, useState } from 'react'

type ExperienceProps = {
  category: '👨‍💼' | '🎓' | '👨‍💻'
  title: string
  subTitle: string
  contents: string[]
}

const Experience: FC<{ index: number } & ExperienceProps> = ({
  index,
  category,
  title,
  subTitle,
  contents,
}) => {
  return (
    <div className='flex mt-4'>
      <div className='flex gap-4'>
        <div>
          <div className='bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center'>
            <Typography className='text-lg'>{category}</Typography>
          </div>
        </div>
        <div>
          <div>
            <div className='flex items-center gap-4'>
              <Typography className='text-base font-bold mb-1 text-blue-gray-900'>
                {title}
              </Typography>
              {index == 0 ? (
                <div className='bg-gray-200 rounded px-3 py-1 flex text-sm items-center justify-center mr-4 mb-1'>
                  <Typography className='text-xs'>Latest</Typography>
                </div>
              ) : (
                <></>
              )}
            </div>
            <Typography color='gray' className='text-sm mb-2'>
              {subTitle}
            </Typography>

            <ul
              className={`${
                contents.length > 1 ? 'list-disc' : 'list-none'
              } list-inside marker:text-blue-gray-900 text-blue-gray-900 leading-6 mb-4`}
            >
              {contents.map((content, i) => {
                return (
                  <li key={i}>
                    <Typography className='text-sm inline'> {content}</Typography>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Experiences = () => {
  const [experiences] = useState<ExperienceProps[]>([
    {
      category: '👨‍💼',
      title: '株式会社NTTドコモ',
      subTitle: '2020.03 - 現在 | Software developer, 新規事業創出',
      contents: ['新規事業', 'ソフトウェアエンジニア'],
    },
    {
      category: '👨‍💼',
      title: '株式会社NTTドコモ',
      subTitle: '2018.04 - 2020.03',
      contents: [
        '新卒入社後、R&Dの新規事業部門に配属',
        'Twitterを始めとしたWebマーケ',
        'PHP / AWSを',
      ],
    },
    {
      category: '🎓',
      title: '筑波大学大学院',
      subTitle: '2016.04 - 2018.03 | コンピュータサイエンス専攻',
      contents: [
        'システム情報工学研究科コンピュータサイエンス専攻に所属',
        '研究テーマはCuckoo Searchによる連続値最適化',
        'ニューラルネットワークを対象としたNeuroEvolutionやブラックボックス最適化をメインに研究',
      ],
    },
    {
      category: '👨‍💼',
      title: 'インターン 株式会社電通',
      subTitle: '2016.03',
      contents: ['テクノロジーとアイデアの学校1期生'],
    },
    {
      category: '👨‍💻',
      title: 'アルバイト WWD JAPAN',
      subTitle: '2017 - 2018',
      contents: ['ファッション週刊誌 / Web媒体のインターン及び学生アルバイト'],
    },
    {
      category: '👨‍💻',
      title: 'アルバイト 株式会社テレビ朝日',
      subTitle: '2012 - 2018',
      contents: ['政治系討論番組の学生アルバイト'],
    },
    {
      category: '🎓',
      title: '筑波大学',
      subTitle: '2012.04 - 2016.03 | 情報学群情報科学類',
      contents: [
        '情報学群情報科学類に所属',
        '卒論は進化計算を用いた対話型配色支援システムの開発と評価',
      ],
    },
  ])
  return (
    <Card className='p-6 shadow-sm'>
      <Typography className='text-xl font-bold mb-4 text-blue-gray-900'>All Experiences</Typography>
      <div className='mb-5'>
        <Select label='カテゴリー' className=''>
          <Option>会社</Option>
          <Option>教育</Option>
        </Select>
      </div>
      {experiences.map((experience, i) => {
        return (
          <div
            key={i}
            className={` ${i == experiences.length - 1 ? '' : 'border-b border-gray-200'}`}
          >
            <Experience index={i} {...experience}></Experience>
          </div>
        )
      })}
    </Card>
  )
}
