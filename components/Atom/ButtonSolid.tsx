'use client'
import React from 'react'

export default function ButtonSolid(props: {title:string, bg:string}) {
    const { title, bg } = props;
  return (
    <button className={`${bg} py-2 px-4 text-xs md:text-sm text-green-dark rounded-full`}>{title}</button>
  )
}
