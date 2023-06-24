import React from 'react'

export default function Card({ image, title, text }) {
  return (
    <div className="flex h-[400px] w-80 flex-col gap-4 rounded-2xl bg-white p-7 duration-200 ease-linear md:scale-95 md:hover:scale-100">
      <img src={image} alt="prop.image" className="h-20 w-20" />
      <div className="flex flex-col gap-2 ">
        <h2 className="text-3xl font-black text-[#B52184]">{title}</h2>
        <p className="text-base font-semibold text-[#312D64]">{text}</p>
      </div>
    </div>
  )
}
