import { Card, Typography } from '@material-tailwind/react'
import { FC, useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

type OtherProps = {
  title: string
  subTitle: string
  description: string
  link: string
}

const Other: FC<OtherProps> = ({ title, subTitle, description, link }) => {
  const [showDetail, setShowDetail] = useState(false)
  return (
    <div className='px-6 py-3 hover:bg-gray-50'>
      <button
        className='w-full'
        onClick={() => {
          setShowDetail(!showDetail)
        }}
      >
        <div className='flex items-center'>
          <div>
            <Typography className='text-sm mb-1 text-blue-gray-900 text-left'>{title}</Typography>
            <Typography color='gray' className='text-xs text-left'>
              {subTitle}
            </Typography>
          </div>
          {showDetail ? (
            <ChevronUpIcon className='w-4 ml-auto duration-1000'></ChevronUpIcon>
          ) : (
            <ChevronDownIcon className='w-4 ml-auto duration-1000'></ChevronDownIcon>
          )}
        </div>
      </button>
      <div
        className={`${
          showDetail ? 'mt-4 h-auto opacity-100' : 'h-0 opacity-0'
        } duration-200 overflow-hidden`}
      >
        {description.length > 0 ? (
          <Typography className='text-sm text-blue-gray-900 text-left mr-2'>
            {description}
          </Typography>
        ) : (
          <></>
        )}
        {link.length > 0 ? (
          <a target='_blank' rel='noreferrer' href={`${link}`} className='inline-block'>
            <div className='flex items-center'>
              <Typography className='text-sm text-blue-gray-900 text-left mr-2 hover:border-b border-blue-gray-400'>
                {link}
              </Typography>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={'h-2'} />
            </div>
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

const Others = () => {
  const [others] = useState<OtherProps[]>([
    {
      title: 'ドコモ夏季インターン2022 ハッカソンメンター',
      subTitle: '2022.09',
      description: '担当: Eチーム（Android / Java / 自然言語処理）',
      link: 'https://nttdocomo-developers.jp/entry/2022/10/18/120000',
    },
    {
      title: '登壇 - NTT Com Tech Night#2',
      subTitle: '2022.08',
      description: 'Google の技術まとめ',
      link: '',
    },
    {
      title: 'ドコモ夏季インターン2021 ハッカソンメンター',
      subTitle: '2021.09',
      description: '担当: Dチーム（Unity / TensorFlow / FastAPI / WebSocket）',
      link: '',
    },
    {
      title: '登壇 - OPEN DX 2021',
      subTitle: '2021.09',
      description: '日系エンプラ企業で社員内製開発にトライしてみた',
      link: 'https://cloud-ace.jp/opendx2021/',
    },
    {
      title: "登壇 - Google Cloud Day: Digital '21",
      subTitle: '2021.06',
      description: 'Google 流！どこでも安全に働けるクラウドワーカーのセキュリティ最前線',
      link: 'https://cloudonair.withgoogle.com/events/google-cloud-day-digital-21/speakers',
    },
    {
      title: '資格 - Google Cloud Professional Cloud Architect',
      subTitle: '2021.03',
      description: '',
      link: 'https://cloud.google.com/certification/cloud-architect?hl=ja',
    },
    {
      title: '資格 - AWS Certified Solutions Architect – Associate',
      subTitle: '2020.02',
      description: '',
      link: 'https://aws.amazon.com/jp/certification/certified-solutions-architect-associate/',
    },
    {
      title: '資格 - 証券外務員1種',
      subTitle: '2019.03',
      description: 'FinTech ドメイン知識のために取得',
      link: 'https://www.jsda.or.jp/gaimuin/shiken.html',
    },
    {
      title: '第80回情報処理学会全国大会, 学生奨励賞',
      subTitle: '2018.03',
      description: '複数の群れを有する並列 Cuckoo Search による連続値最適化',
      link: 'https://www.ipsj.or.jp/award/taikaigakusei.html',
    },
    {
      title: '文部科学省 情報技術人材育成のための実践教育ネットワーク形成事業 enPiT BizApp修了',
      subTitle: '2017.12',
      description: '',
      link: 'https://www.cs.tsukuba.ac.jp/enPiT-old/',
    },
    {
      title:
        '筑波大学国際産学連携本部「大学・研究機関発ベンチャー×経営ノウハウを持つ人材 Talent-Connect」',
      subTitle: '2017.11',
      description: '',
      link: 'https://www.sanrenhonbu.tsukuba.ac.jp/talentconnect/',
    },
    {
      title: 'Mashup Awards 2016 エーアイ賞',
      subTitle: '2016.03',
      description: '傘の盗難防止システム「れいんちゃん」',
      link: '',
    },
  ])
  return (
    <Card className='shadow-sm mb-6'>
      <Typography className='px-6 pt-6 text-xl font-bold mb-4 text-blue-gray-900'>
        Others
      </Typography>
      {others.map((other, i) => {
        return (
          <div key={i} className={`border-t border-gray-200`}>
            <Other key={i} {...other}></Other>
          </div>
        )
      })}
    </Card>
  )
}

export default Others
