'use client';
import React from 'react'
import { DashCircle, PlusCircle } from 'react-bootstrap-icons'

export default function FaqElement({title, text, ...props}) {
    const [open, setOpen] = React.useState(false);
  return (
    <div className="w-full p-3 flex flex-col justify-start items-start gap-2">
        <div className="flex flex-row justify-start items-start gap-3 w-full">
            {open ? <DashCircle className={'text-4xl text-red-700 w-8 h-8'} onClick={() => setOpen(false)} />:  <PlusCircle className={'text-4xl text-gray-700 w-8 h-8'} onClick={() => setOpen(true)} />}
            <h3 className="text-xl font-bold text-start text-black capitalize w-11/12">{title}</h3>
        </div>
        <p className={open ? "text-lg text-start px-5" : "text-[0px] text-start px-5"}>{text}</p>
    </div>
  )
}
