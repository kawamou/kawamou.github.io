import { Card, Select, Typography, Option } from '@material-tailwind/react'
import { FC, useState } from 'react'

type Category = '🦄' | '👨‍💼' | '🎓' | '👨‍💻'

type ExperienceProps = {
  category: Category
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
            <Typography className='text-base'>{category}</Typography>
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
            <Typography color='gray' className='text-xs mb-2'>
              {subTitle}
            </Typography>

            <ul className={`text-blue-gray-900 leading-6 mb-4`}>
              {contents.map((content, i) => {
                return (
                  <li
                    key={i}
                    className={`${
                      contents.length > 1
                        ? 'before:content-["・"] before:left-0 before:absolute before:text-blue-gray-900 pl-4 relative'
                        : ''
                    }`}
                  >
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
      title: '株式会社 NTT ドコモ',
      subTitle: '2020.03 - 現在 | Software Developer',
      contents: [
        'ドコモ初の B2C 完全内製アプリを少人数体制で開発・リリース。主にバックエンドエンジニアとして業務に従事',
        'REST API （Go / レイヤードアーキテクチャ）や、アプリケーションのインフラ基盤、ゼロトラストなカスタマーサポート基盤、BigQuery データ分析基盤の設計と実装をリード',
      ],
    },
    {
      category: '👨‍💼',
      title: '株式会社 NTT ドコモ',
      subTitle: '2018.04 - 2020.03',
      contents: [
        'R&D の新規事業部門に配属。PMF フェーズの B2C アプリ開発に参加し、SNS 広告を中心としたマーケに従事。仮説構築 / クリエイティブ作成と運用 / 効果測定を行いユーザ数 300% 超の成長を達成',
        'バックエンドチーム（Laravel / AWS）も兼任し機能検討や開発業務に従事',
        'サービス終了後はチームにてゼロからの新規事業検討を開始。リーンな考え方に基付き、ビジネスモデル構築や事業アイデアの検証等、0->1 フェーズを経験',
      ],
    },
    {
      category: '🎓',
      title: '筑波大学大学院',
      subTitle: '2016.04 - 2018.03 | コンピュータサイエンス専攻',
      contents: [
        'システム情報工学研究科コンピュータサイエンス専攻に所属。研究テーマは Cuckoo Search による連続値最適化',
        'ニューラルネットワークを対象とした NeuroEvolution やブラックボックス最適化をメインに研究',
      ],
    },
    {
      category: '👨‍💻',
      title: 'インターン 株式会社電通',
      subTitle: '2017.02',
      contents: ['テクノロジーとアイデアの学校1期生（最終課題ブロンズ賞）'],
    },
    {
      category: '👨‍💻',
      title: 'インターン 株式会社日本総合研究所',
      subTitle: '2017.02',
      contents: ['IT 戦略コース（最優秀賞）'],
    },
    {
      category: '👨‍💻',
      title: 'インターン Retty 株式会社',
      subTitle: '2016.09',
      contents: ['チャットボットハッカソン 2016'],
    },
    {
      category: '👨‍💻',
      title: 'アルバイト WWD JAPAN',
      subTitle: '2017 - 2018',
      contents: ['ファッション週刊誌 / Web 媒体のインターン及び学生アルバイト'],
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
        '情報学群情報科学類に所属。卒論は進化計算を用いた対話型配色支援システムの開発と評価',
      ],
    },
  ])
  return (
    <Card className='p-6 shadow-sm'>
      <Typography className='text-xl font-bold mb-4 text-blue-gray-900'>All Experiences</Typography>
      <div className='mb-5'>
        <Select label='カテゴリー' className=''>
          <Option>Industry Experience</Option>
          <Option>Education</Option>
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
