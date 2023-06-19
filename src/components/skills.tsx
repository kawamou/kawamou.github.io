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

const Skills = () => {
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
    'Adjust',
    'Google Analytics',
    'BigQuery',
  ])
  return (
    <Card className='shadow-sm p-6'>
      <Typography className='text-xl font-black text-blue-gray-900 mb-4'>Skills</Typography>
      <div>
        <Typography className='text-sm mb-6 text-blue-gray-900 leading-6'>
          主に Go や TypeScript、Next.js、Google Cloud / Firebase を使って Web
          プロダクトを作るのが得意です。新規事業の立ち上げからクローズまで経験アリ。最近は R&D
          Engineer として自己研鑽中。
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

export default Skills
