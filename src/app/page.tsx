import React, { Suspense } from 'react'
import Image from 'next/image'
import asset1 from './assets/Asset 1.png'
import asset2 from './assets/Asset 2.png'
import asset3 from './assets/Asset 3.png'
import asset4 from './assets/Asset 4.png'
import asset5 from './assets/Asset 5.png'
import asset6 from './assets/Asset 6.png'
import asset7 from './assets/Asset 7.svg'
import asset8 from './assets/Asset 8.png'
import top from './assets/artboard69.png'
import PaymentButton from '@/app/PaymentButton'

export default function Home () {
  return (
    <div
      className="grid text-white items-center justify-items-center min-h-screen p-3 pb-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <div
          className="flex flex-wrap sm:flex-nowrap gap-6 sm:items-start sm:gap-12 items-center sm:justify-start justify-center">
          <Image
            alt="moi plaatje"
            src={top}
            className={`w-[150px] rounded-full sm:w-[250px]`}
            width="300"
          />
          <div className="space-y-6  text-center sm:text-left sm:items-start">
            <div
              className={`bg-slate-300 text-[#4B2567] max-w-md w-full sm:w-auto leading-tight p-6 rounded`}
            >
              <div className="space-y-2 mb-4">
                <h2 className="leading-[80%]">RORIDE WITH JP</h2>

                <h3 className="leading-[100%]">
                  ZATERDAG 1 FEBRUARI, 2025
                </h3>
                <h3 className=" leading-[100%]">
                  13:45 BIJ{' '}
                  <a
                    href="https://maps.app.goo.gl/DZJNTfBLEpKV8cfj6"
                    className="underline"
                    target="_blank"
                  >
                    ROCYCLE UTRECHT
                  </a>
                </h3>
              </div>
            <Suspense>
              <PaymentButton/>
            </Suspense>

              <p
                className="text-muted-foreground mx-auto text-center w-full mt-4">
                Vragen?
                <a
                  className="underline ml-1"
                  href="https://wa.me/31611990713"
                  target="_blank"
                >
                  Stuur ons een berichtje →
                </a>
              </p>

            </div>

            <div
              className={`bg-[#98835F] p-6 text-center sm:text-left sm:flex-row flex-col gap-4 rounded-lg flex flex-wrap items-center w-auto `}
            >
              <div className="flex flex-col sm:flex-row flex-nowrap">
                <h3
                  className="sm:mr-8 mb-8 mt-2 sm:mb-0 flex-shrink-0 leading-none">
                FEATURING
                  <br/>
                  MUSIC FROM
                </h3>
                <div
                  className="flex gap-8 flex-wrap sm:justify-start justify-center items-center">
                  <Image
                    alt="powerful company"
                    src={asset6}
                    height="30"
                  ></Image>
                  <Image
                    alt="powerful company"
                    className="brightness-[1000]"
                    src={asset8}
                    height="30"
                  ></Image>
                  <Image
                    alt="powerful company"
                    className="brightness-[1000]"
                    src={asset7}
                    height="30"
                  ></Image>
                  <Image
                    alt="powerful company"
                    src={asset1}
                    height="70"
                  ></Image>
                  <Image
                    alt="powerful company"
                    src={asset2}
                    height="30"
                  ></Image>
                  <Image
                    alt="powerful company"
                    src={asset3}
                    height="30"
                  ></Image>
                  <Image
                    alt="powerful company"
                    src={asset4}
                    height="30"
                  ></Image>
                  <Image
                    alt="powerful company"
                    src={asset5}
                    height="30"
                  ></Image>
                </div>
              </div>
              <div
                className="flex gap-2 mt-6 flex-wrap justify-center sm:justify-start items-start">
                <div
                  className="border-black border-[0.42rem] max-w-[12.6rem] text-center bg-white text-sm text-black p-3 leading-none font-[Arial] font-bold">
                  Binnen Roken Niet Toegestaan
                </div>
                <div
                  className="border-black border-[0.42rem] max-w-[12.6rem] text-center bg-white text-sm text-black p-3 leading-none font-[Arial] font-bold">
                  Rookcycle is Dodelijk. Turn the Dial to 8.
                </div>
                <div
                  className="border-black border-[0.42rem] max-w-[16.8rem] text-center bg-white text-sm text-black p-3 leading-none font-[Arial] font-bold">
                  Sporten kan de bloedsomloop verbeteren en veroorzaakt
                  impotentie
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          className={`opacity-15 underline`}
          target="_blank"
          href="https://github.com/hiddehs/roridewithjp"
        >
          open source
        </a>
      </main>
    </div>
  )
}
