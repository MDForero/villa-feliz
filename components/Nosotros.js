import Image from 'next/image'
import React from 'react'

const Nosotros = ({ item }) => {
    const { title, description, bg } = item
    return (
        <div className='relative mt-20'>
                <article className="px-2 flex lg:flex-row flex-col-reverse justify-center items-center max-w-7xl lg:gap-12 mx-auto  " >
                    <div className='xsm:max-w-[400px] md:max-w-[640px] lg:max-w-[768px] border-2 rounded-b-full px-4 pb-24 md:rounded-none  bg-blueSea/50 rounded-lg text-white'>
                        <h1 className='text-center text-4xl font-blackz my-7'>{title}</h1>
                        <p className='text-justify tracking-widest'>{description}</p>
                    </div>
                    <Image src={item.img} width={0} height={0} className='w-full lg:w-1/2 lg:h-[600px] h-[300px]  rounded-t-full md:rounded-none object-bottom object-cover'/>
                </article>
        </div>
    )
}

export default Nosotros