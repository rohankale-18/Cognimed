import classNames from 'classnames'
import React from 'react'

const ChatCard = ({first,second,chevi}) => {
  return (
      <div className={classNames('w-full h-[80px]  hover:bg-zinc-700 px-4 py-3 text-white hover:drop-shadow-xl transition-all duration-500 ',{
          'opacity-0': !chevi,
          'opacity-100':chevi,
      })}>
          <div className='text-lg transition-opacity duration-200'>{first}</div>
          <div className='text-sm text-gray-400 transition-opacity duration-200'>{second}</div>          
    </div>
  )
}

export default ChatCard