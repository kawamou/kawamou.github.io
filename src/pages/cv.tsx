import type { NextPage } from 'next'
import { Avatar, Card, Typography } from '@material-tailwind/react'
import { Me } from '../components/Me'
import { Header } from '../components/Header'
import { Experiences } from '../components/Experiences'
import Others from '../components/Others'
import Skills from '../components/Skills'

const ContactMe = () => {
  return (
    <Card className='shadow-sm p-6'>
      <Typography className='text-xl font-bold mb-4 text-blue-gray-900'>Contact</Typography>
      <div className='border-gray-200 border-b pb-4 mb-4'>
        <ul className='list-none text-blue-gray-900 leading-6 text-sm'>
          <li>
            kazusada.kawamo.nt[at]gmail.com
            <Typography color='gray' className='text-sm mb-2 '>
              Email
            </Typography>
          </li>
          <li>
            3kwm
            <Typography color='gray' className='text-sm mb-2 '>
              Twitter DM
            </Typography>
          </li>
        </ul>
      </div>
      <div className='text-center'>
        <Avatar src='/qr-code.png' size='xl'></Avatar>
      </div>
    </Card>
  )
}

const Cv: NextPage = () => {
  return (
    <div className='background bg-gray-50 min-w-full min-h-screen'>
      <Header />
      <div className='max-w-5xl mx-auto'>
        <div className='flex gap-6 justify-center'>
          <div className='flex flex-col gap-6 w-3/5'>
            <Me />
            <Skills />
            <Experiences />
            <Others />
          </div>
          <div className='flex flex-col w-2/5 gap-6'>
            <ContactMe />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cv
