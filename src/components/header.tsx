import { Avatar, Navbar, Typography } from '@material-tailwind/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import { useState } from 'react'

export const Header = () => {
  const [showDetail, setShowDetail] = useState(false)
  return (
    <Navbar className='min-w-full px-4 py-4 rounded-none border-none shadow-sm mb-16 relative z-10'>
      <div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
        <Typography className='mr-4 cursor-pointer font-bold text-blue-gray-900'>
          <span>Hi👋</span>
        </Typography>
        <div className='static'>
          <button
            className='flex gap-1 items-center'
            onClick={() => {
              setShowDetail(!showDetail)
            }}
          >
            <Avatar src='/yellow.png' variant='circular' size='xs'></Avatar>
            <Typography className='ml-1 text-sm font-medium'>kawamou</Typography>
            {showDetail ? (
              <ChevronUpIcon className='w-3'></ChevronUpIcon>
            ) : (
              <ChevronDownIcon className='w-3'></ChevronDownIcon>
            )}
          </button>
          <div
            className={`${
              showDetail ? '' : 'hidden'
            } mt-2 absolute z-50 list-none rounded-lg border bg-white text-left text-sm`}
          >
            <ul className=''>
              <li className='py-2 px-8 hover:bg-gray-100'>
                <div
                  onClick={() => {
                    return
                  }}
                >
                  <Typography className='text-sm text-blue-gray-900'>工事中👷‍♂️</Typography>
                </div>
              </li>
              <li className='py-2 px-8 hover:bg-gray-100'>
                <div>
                  <Typography className='text-sm text-blue-gray-900'>工事中👷‍♂️</Typography>
                </div>
              </li>
              <li className='py-2 px-8 hover:bg-gray-100'>
                <div>
                  <Typography className='text-sm text-blue-gray-900'>工事中👷‍♂️</Typography>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Navbar>
  )
}
