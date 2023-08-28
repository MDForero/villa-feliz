'use client'
import "./globals.css"
import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import logo from "../public/logo.png"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { usePathname } from 'next/navigation'
import path from "path"

const navigation = [
    { name: 'inicio', href: '/', current: false },
    { name: 'servicios', href: '/servicios', current: false },
    { name: 'glamping', href: '/glamping', current: false },
    { name: 'nosotros', href: '/nosotros', current: false },
    { name: 'contacto', href: '/contacto', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const RootLayout = ({ children }) => {
    const [fixed, setFixed] = useState("md:bg-transparent bg-blueSea absolute z-50 w-full")
    const pathName = usePathname()
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 300) {
                setFixed('bg-blueSea fixed w-full z-50');
            } else {
                setFixed("md:bg-transparent bg-blueSea  absolute z-50 w-full")
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <html>
            <body>

                <Disclosure as="nav" className={fixed}>
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                                <div className="relative flex h-16 items-center justify-between">
                                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                        {/* Mobile menu button*/}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                                        <div className="flex flex-shrink-0 items-center">
                                            <Image
                                                className="block h-10 w-auto lg:hidden bg-white rounded-full"
                                                src={logo}
                                                alt="Your Company"
                                            />
                                            <Image
                                                className="hidden h-10 w-auto lg:block bg-white rounded-full"
                                                src={logo}
                                                alt="Your Company"
                                            />
                                        </div>
                                        <div className="hidden sm:ml-6 sm:block">
                                            <div className="flex space-x-6 ">
                                                {navigation.map((item) => {
                                                    
                                                    return (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className={classNames(
                                                                pathName.slice(1,-1) === item.href.slice(1) ? 'bg-gray-900 text-white text-xl' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                                'rounded-md px-3 py-2 xsm:text-lg lg:text-2xl font-black first-letter:capitalize'
                                                            )}
                                                            aria-current={item.current ? 'page' : undefined}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="sm:hidden">
                                <div className="space-y-1 px-2 pt-2 pb-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block rounded-md px-3 py-2 text-base font-medium first-letter:capitalize'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <div className='max-w-screen-2xl mx-auto'>
                    {children}
                        <a href="https://api.whatsapp.com/send?phone=573219539256&text=Hola%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20Villa%20Feliz%20Eco%20Glamping" className='fixed bottom-0 right-0 z-50 bg-blueSea text-white p-2 rounded-s-full text-2xl' target="_blank"><FontAwesomeIcon icon={faWhatsapp} size='2x'/></a>
                </div>
                <footer className='bg-blueSea py-[30px]'>
                    <div className='grid grid-cols-footer gap-[1rem] max-w-screen-2xl mx-auto px-[10px] text-white'>
                        <div className=''>
                            <h3 className='text-center'>Contacto</h3>
                            <ul className='text-justify'>
                                <li>Estamos ubicados en un bello municipio del piedemonte llanero “MONTERREY CASANARE” a 7 kilómetros del casco urbano, con vía de acceso completamente pavimentada.</li>
                                <li><a href="tel:+573219539256">3219539256</a></li>
                                <li><a href="mailto:villafelizeco@gmail.com">villafelizeco@gmail.com</a></li>
                            </ul>
                            <ul className='list-none flex flex-wrap justify-evenly text-4xl my-[5px]'>
                                <li><a href="https://www.facebook.com/people/VILLA-FELIZ-Ecolodge/100086444870481/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li><a href="https://www.instagram.com/villafeliz_ecolodge/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="https://wa.me/+573219539256" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                            </ul>
                        </div>
                        <div className=''>
                            <h3 className='text-center'>Links</h3>
                            <ul className='grid place-content-center'>
                                {navigation.map((item, index) => <li key={index}><Link href={item.href}>{item.name}</Link></li>)}
                            </ul>
                        </div>
                        <div className=''>
                            <h3 className='text-center'>Términos y condiciones</h3>
                            <ul className='grid place-content-center'>
                                <li><Link href="terminos_y_condiciones">Términos y condiciones</Link></li>
                                <li><Link href="declaracion_de_riesgos">Declaración de riesgos</Link></li>
                                <li><Link href="reglamentos">Reglamentos</Link></li>
                            </ul>
                        </div>
                        <div className=''>
                            <h3 className='text-center'>Horarios</h3>
                            <dl>
                                <dt>Check-In</dt>
                                <dd className='ml-[15px]'>El horario de check in es a partir de las 3 de la tarde</dd>
                                <dt>Check-Out</dt>
                                <dd className='ml-[15px]'>El horario de check out se debe hacer antes de la 1 de la tarde</dd>
                            </dl>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    )
}

export default RootLayout