import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Typography } from '@material-tailwind/react'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FC, useState } from 'react'

type SkillBoxProps = {
  skill: string
}

const SkillBox: FC<SkillBoxProps> = ({ skill }) => {
  return (
    <div className='rounded border border-gray-200 px-2 py-1'>
      <Typography className='text-sm text-blue-gray-900'>{skill}</Typography>
    </div>
  )
}

export const Skills = () => {
  const [skills] = useState([
    'Go',
    'Google Cloud',
    'Firebase',
    'コンテナ',
    'TypeScript',
    'React',
    'AWS',
    'SQL',
    'Python',
    '新規事業開発',
  ])
  return (
    <Card className='shadow-sm p-6'>
      <Typography variant='' className='text-xl font-bold text-blue-gray-900'>
        Preffered Positons
      </Typography>
      <ul className='list-disc p-4 border-b marker:text-blue-gray-900 border-gray-200'>
        <li className='pb-3'>
          <div className='max-w-sm rounded-xl border border-gray-200'>
            <div className='flex items-center gap-2'>
              <div className='mr-auto pl-3'>
                <Typography className='text-sm text-blue-gray-900'>バックエンド（Go）</Typography>
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
        {skills.map((skillBox, i) => {
          return <SkillBox key={i} skill={skillBox}></SkillBox>
        })}
      </div>
    </Card>
  )
}
