import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, CheckIcon } from '@heroicons/react/20/solid'
import Layout from '@/components/Layout'
import iglu from "../public/iglu-interno.jpg"
import logo from "../public/logo.png"
import Image from 'next/image'
import utils from "../styles/utils.module.css"
import fotoPanoramica from "../public/IMG-8815.jpg"
import Head from 'next/head'
import Galeria from '@/components/Galeria'
import Logos from '@/components/Logos'
import BannerLogo from '@/components/BannerLogo'
import anato from "../public/ANATO 2023 .mp4"
import Video from '@/components/Video'

const includedFeatures = [
  "Desayuno:(3 opciones: típico, suramericano, liviano o vegetariano).",
  "Chinchorros.",
  "Acomodación en cama doble con colchón ortopédico.",
  "Jacuzzi privado con hidromasaje y calentador de agua.",
  "Baño privado.",
  "Acceso a la finca (bosques, Avistamiento de aves)",
  "Recibimiento con una botella de licor de aguacate o 2 cervezas artesanales casanareñas.",
  "Malla catamarán. ",
  "Televisor con conexión a internet",
  "Wi fi",
  "Parqueadero",
  "Estación de café campesino."
]

const features = [
  {
    name: 'Acomodaciones únicas',
    description: 'Ofrecemos dos tipos de acomodaciones únicas, incluyendo un Ajila y otra opción de glamping de lujo (pasaje). Cada acomodación tiene características y servicios únicos.',
    icon: ServerIcon,
  },
  {
    name: 'Servicios de lujo:',
    description:
      ' Ofrecemos servicios de lujo para hacer que la estancia de nuestros clientes sea más cómoda y agradable. Estos servicios incluyen baños privados, servicio de habitaciones y más.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Experiencias inolvidables',
    description: 'Ofrecemos una amplia variedad de actividades al aire libre y de aventura para que nuestros clientes disfruten de una experiencia inolvidable. Desde caminatas guiadas hasta cenas bajo las estrellas, tenemos algo para todos.',
    icon: LockClosedIcon,
  },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Layout>
      <Head>
        <title>Villa feliz ecolodge</title>
      </Head>
      <div className="bg-white">
        <div className="relative isolate">
          <BannerLogo bg={utils.fondo}/>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <Logos />
      {/* caracteristicas */}
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-verde-hunt">Una escapada perfecta</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-verde-oliva sm:text-4xl">experimenta una combinación de lujo y aventura</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Bienvenido a Villa Feliz Ecolodge, un lugar donde podrás escapar del bullicio de la ciudad y disfrutar de un ambiente tranquilo y natural. Nos enorgullece ofrecer a nuestros huéspedes una experiencia de hospedaje única en un entorno ecológico y sostenible.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-verde-oliva">
                        <feature.icon className="absolute top-1 left-1 h-5 w-5 text-verde-hunt" aria-hidden="true" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className='w-full h-full'>
              <Video/>
            </div>
          </div>
        </div>
      </div>

      {/* Precios */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks pricing</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nuestro servicio estrella es el alojamiento en bellos y cómodos glampings construidos de forma amigable con el medio ambiente, en medio de la naturaleza, y disfrutando del oxígeno puro.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">

              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="text-2xl font-semibold leading-6 text-verde-oliva">La reserva por el servicio de alojamiento incluye:</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-verde-hunt" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 self-center">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600"></p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">$220.000</span>
                    <span className="text-5xl font-bold tracking-tight text-gray-900">-$250.000</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">COP</span>
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-verde-oliva px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Reserva ya!!
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Aplican términos y condiciones
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* call to action */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-verde-oliva px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#fff" />
                  <stop offset={1} stopColor="#F2C50E" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Disfruta del mejor lugar
                <br />
                Reserva ya!!.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">No pierdas la oportunidad de experimentar una escapada inolvidable en Villa Feliz Ecolodge! Nuestro equipo estará encantado de ayudarte a planificar tu viaje y asegurarse de que tengas la mejor experiencia posible. ¡Reserva ahora y prepárate para disfrutar de unas vacaciones que nunca olvidarás!</p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Reserva ya!!
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 lg:mt-8">
              <Image
                className="absolute top-0 left-0 h-[32rem] w-[43rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 h-full object-cover"
                src={fotoPanoramica}
                alt="Foto del amanecer llanero"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <Galeria />
      </div>
    </Layout>



  )
}
