import { Avatar, Navbar, Typography } from '@material-tailwind/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import { useState } from 'react'

export const Header = () => {
  const [showDetail, setShowDetail] = useState(false)
  return (
    <Navbar className='min-w-full px-4 py-4 rounded-none border-none shadow-sm mb-16'>
      <div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
        <Typography className='mr-4 cursor-pointer font-bold text-blue-gray-900'>
          <span>Hi👋</span>
        </Typography>
        <div>
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
          {showDetail ? (
            <div className='mt-2 absolute list-none rounded-lg border bg-white text-left text-sm'>
              <ul className=''>
                <li className='py-4 px-6 hover:bg-gray-100'>
                  <div
                    onClick={() => {
                      return
                    }}
                  >
                    Edit
                  </div>
                </li>
                <li className='py-4 px-6 hover:bg-gray-100'>
                  <div>Delete</div>
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Navbar>
  )
}
