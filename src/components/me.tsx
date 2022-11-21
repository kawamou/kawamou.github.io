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
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core'

type IconProps = {
  iconDifinision: IconDefinition
  link: string
}

const Icon: FC<IconProps> = (iconProps) => {
  return (
    <a target='_blank' rel='noreferrer' href={`${iconProps.link}`} className='inline-block'>
      <div className='text-gray-700 hover:text-gray-500 hover:cursor-pointer'>
        <FontAwesomeIcon icon={iconProps.iconDifinision} className={'h-4'} />
      </div>
    </a>
  )
}

export const Me = () => {
  const [iconDifinisions] = useState([
    { iconDifinition: faTwitter, link: 'https://twitter.com/3kwm' },
    { iconDifinition: faGithub, link: 'https://github.com/kawamou' },
    { iconDifinition: faInstagram, link: 'https://www.instagram.com/b00q' },
    {
      iconDifinition: faLinkedin,
      link: 'https://jp.linkedin.com/in/%E7%9F%A5%E5%AE%9A-%E6%B2%B3%E9%9D%A2-bb7a1a251',
    },
  ])
  return (
    <Card className='shadow-sm p-6'>
      <div className='flex gap-4 mb-4'>
        <Avatar src='/yellow.png' variant='circular' size='md'></Avatar>
        <div>
          <Typography className='text-xl font-bold text-blue-gray-900'>kawamou</Typography>
          <Typography color='gray' className='text-sm'>
            デジタルプロダクト作り / Software Developer
          </Typography>
        </div>
      </div>
      <div className='mb-2'>
        <Typography className='text-sm text-blue-gray-900 leading-6'>
          携帯キャリアのR&D部門で新規事業開発に取り組んでいます。主にバックエンドの技術者としてお仕事をしています。人間の表現に関するコトが好きです
        </Typography>
      </div>
      <div className='flex text-gray-700 mb-4 hover:text-gray-300 hover:cursor-pointer'></div>
      <div className='flex gap-4 items-center'>
        {iconDifinisions.map((iconDifinision, i) => {
          return (
            <Icon
              key={i}
              iconDifinision={iconDifinision.iconDifinition}
              link={iconDifinision.link}
            ></Icon>
          )
        })}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://qiita.com/kawamou'
          className='inline-block'
        >
          <div className='text-gray-700 hover:text-gray-500 hover:cursor-pointer flex items-center gap-1'>
            <Typography className='text-xs font-bold'>Qiita</Typography>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={'h-2'} />
          </div>
        </a>
      </div>
    </Card>
  )
}
