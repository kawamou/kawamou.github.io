import { Card, Typography } from '@material-tailwind/react'
import { FC, useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

type OtherProps = {
  title: string
  subTitle: string
  hideDescription: string
}

const Other: FC<OtherProps> = ({ title, subTitle, hideDescription }) => {
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
            <Typography className='text-sm mb-1 text-blue-gray-900'>{title}</Typography>
            <Typography color='gray' className='text-sm text-left'>
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
          showDetail && hideDescription.length > 0 ? 'mt-4 h-6 opacity-100' : 'h-0 opacity-0'
        } duration-300 overflow-hidden`}
      >
        <a target='_blank' rel='noreferrer' href={`${hideDescription}`} className='inline-bloc'>
          <div className='flex items-center'>
            <Typography className='text-sm text-blue-gray-900 text-left mr-2 hover:border-b border-blue-gray-400'>
              {hideDescription}
            </Typography>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={'h-2'} />
          </div>
        </a>
      </div>
    </div>
  )
}

const Others = () => {
  const [others] = useState<OtherProps[]>([
    {
      title: 'ドコモ夏季インターン2022 ハッカソンメンター',
      subTitle: '2022.09',
      hideDescription: '',
    },
    {
      title: 'NTT Com Tech Night#2登壇',
      subTitle: '2022.08',
      hideDescription: '',
    },
    {
      title: 'ドコモ夏季インターン2021 ハッカソンメンター',
      subTitle: '2021.09',
      hideDescription: 'https://nttdocomo-developers.jp/entry/2022/10/18/120000',
    },
    {
      title: 'OPEN DX 2021登壇',
      subTitle: '2021.09',
      hideDescription: '',
    },
    {
      title: "Google Cloud Day: Digital '21登壇",
      subTitle: '2021.06',
      hideDescription: '',
    },
    {
      title: 'Google Cloud Professional Cloud Architect',
      subTitle: '2021.03',
      hideDescription: '',
    },
    {
      title: 'AWS Certified Solutions Architect – Associate',
      subTitle: '2020.02',
      hideDescription: '',
    },
    {
      title: '証券外務員1種',
      subTitle: '2019.03',
      hideDescription: '',
    },
    {
      title: '第80回情報処理学会全国大会, 学生奨励賞',
      subTitle: '2016.03',
      hideDescription: '',
    },
    {
      title: 'Mashup Awards 2016 エーアイ賞',
      subTitle: '2016.03',
      hideDescription: '',
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
