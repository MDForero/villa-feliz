import React from 'react'

const Nosotros = ({ item }) => {
    const { title, description, bg } = item
    return (
        <div className='relative'>
            <section className={bg + " blur-[3px] h-screen w-screen relative"}>
            </section>
                <article className="h-screen flex justify-center items-center w-screen absolute top-0" >
                    <div className='xsm:max-w-[400px] md:max-w-[640px] lg:max-w-[768px] border-2 p-[50px] bg-verde-oliva/50 rounded-lg text-white'>
                        <h1 className='text-center text-4xl font-blackz py-[10px]'>{title}</h1>
                        <p>{description}</p>
                    </div>
                </article>
        </div>
    )
}

export default Nosotros