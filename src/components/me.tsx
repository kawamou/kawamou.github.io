import { useState, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'
import { Avatar, Card, Typography } from '@material-tailwind/react'
import { ArrowSmRightIcon } from '@heroicons/react/outline'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

type IconProps = {
  iconDifinision: IconDefinition
}

const Icon: FC<IconProps> = (iconProps) => {
  return (
    <div className='text-gray-700'>
      <FontAwesomeIcon icon={iconProps.iconDifinision} className={'h-4'} />
    </div>
  )
}

export const Me = () => {
  const [iconDifinisions] = useState([faTwitter, faGithub, faInstagram, faLinkedin])
  return (
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
        {iconDifinisions.map((iconDifinision, i) => {
          return <Icon key={i} iconDifinision={iconDifinision}></Icon>
        })}
        <div className='text-gray-700 flex items-center gap-1'>
          <Typography className='text-xs font-bold'>Qiita</Typography>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={'h-2'} />
        </div>
      </div>
    </Card>
  )
}
