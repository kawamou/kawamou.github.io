import { Avatar, Navbar, Typography } from '@material-tailwind/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

export const Header = () => {
  return (
    <Navbar className='min-w-full py-2 px-4 lg:px-8 lg:py-4 rounded-none border-none shadow-sm mb-16'>
      <div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
        <Typography className='mr-4 cursor-pointer font-bold text-blue-gray-900'>
          <span>Hi👋</span>
        </Typography>
        <div className='flex gap-2 items-center'>
          <Avatar src='/yellow.png' variant='circular' size='xs'></Avatar>
          <div className='flex gap-1'>
            <Typography className='text-sm font-medium'>kawamou</Typography>
            <ChevronDownIcon className='w-3'></ChevronDownIcon>
          </div>
        </div>
      </div>
    </Navbar>
  )
}
