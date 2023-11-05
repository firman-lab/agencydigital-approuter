'use client'
import React from 'react'

export default function ButtonBorder(props: {title:string}) {
    const { title } = props;
  return (
    <button className='py-2 px-4 bg-transparent text-xs lg:text-sm text-white rounded-full border-[1px] border-white' >{title}</button>
  )
}
