import { Card, Typography } from '@material-tailwind/react'
import { title } from 'process'
import { FC, useState } from 'react'

type OtherProps = {
  title: string
  subTitle: string
  hideDescription: string
}

const Other: FC<OtherProps> = ({ title, subTitle, hideDescription }) => {
  return (
    <div className='my-2'>
      <Typography className='text-sm mb-1 text-blue-gray-900'>{title}</Typography>
      <Typography color='gray' className='text-sm mb-2 '>
        {subTitle}
      </Typography>
    </div>
  )
}

export const Others = () => {
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
    <Card className='p-6 shadow-sm mb-6'>
      <Typography className='text-xl font-bold mb-4 text-blue-gray-900'>Others</Typography>
      {others.map((other, i) => {
        return <Other key={i} {...other}></Other>
      })}
    </Card>
  )
}
