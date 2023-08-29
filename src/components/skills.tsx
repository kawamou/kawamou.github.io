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
    'Google Cloud/Firebase',
    'Docker',
    'TypeScript',
    'React/Next',
    'AWS',
    'Python',
    '新規事業開発',
    'Adjust',
    'Google Analytics',
    'BigQuery',
    'Unity',
    'LLM',
  ])
  return (
    <Card className='shadow-sm p-6'>
      <Typography className='text-xl font-black text-blue-gray-900 mb-4'>Skills</Typography>
      <div>
        <Typography className='text-sm mb-6 text-blue-gray-900 leading-6'>
          Web プロダクト開発においては、主に Go や TypeScript (React/Next)、Google Cloud/Firebase
          を使って作ることが多いです。新規事業の立ち上げからクローズまで経験アリ。直近は R&D
          Engineer 見習いとして Python (AI/ML) や C# (Unity) もやっている。
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
