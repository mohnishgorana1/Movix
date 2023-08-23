import React from 'react'

function ContentWrapper( {children}) {
  return (
    <div className='w-[100%] max-w-[1200px] my-0 mx-auto py-0 px-[20px]'>
        {children}
    </div>
  )
}

export default ContentWrapper