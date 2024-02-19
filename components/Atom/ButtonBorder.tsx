'use client'
import Link from 'next/link';
import React from 'react'

export default function ButtonBorder(props: {title:string}) {
    const { title } = props;
  return (
      <Link href='https://wa.me/6283863011200' target='_blank' className='py-2 px-4 bg-transparent text-xs lg:text-sm text-white rounded-full border-[1px] border-white hover:bg-green-light hover:text-green-dark hover:border-green-dark'>{title}</Link>
  )
}
