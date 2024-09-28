'use client'
import Image from "next/image";
import asset1 from "./assets/Asset 1.png";
import asset2 from "./assets/Asset 2.png";
import asset3 from "./assets/Asset 3.png";
import asset4 from "./assets/Asset 4.png";
import asset5 from "./assets/Asset 5.png";
import asset6 from "./assets/Asset 6.png";
import asset7 from "./assets/Asset 7.svg";
import asset8 from "./assets/Asset 8.png";
import top from "./assets/artboard 8.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { console } from "inspector";
import { getcredit } from "./actions/getcredit";



export default function Home() {


  return (
    <div className="grid text-white bg-slate-900 items-center justify-items-center min-h-screen p-2 pb-20 sm:gap-16 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 flex-wrap sm:flex-nowrap items-center">
          <Image src={top} width="300" />
          <div className="flex flex-col gap-8 justify-start items-start">
            <div className="bg-[#77C8C5] leading-none p-4 rounded-xl">
              <h1>RORIDE WITH JP</h1>
            </div>
            <div className="bg-[#909DCF] leading-none p-4 rounded-xl">
              <h2 className="text-[#4B2567]">
                A KILLER WORKOUT AT{" "}
                <a
                  href="https://maps.app.goo.gl/DZJNTfBLEpKV8cfj6"
                  className="underline"
                  target="_blank"
                >
                  KAATSTRAAT 59 UTRECHT
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 leading-none p-8 my-8 rounded-lg">
          <h3 className="mb-2">Get your credit</h3>
          <p className="text-muted mb-4">
            No Habbo credits allowed. Ro-ro-rogier pricing applies (€ 17,50).
            Date T.B.D.
          </p>

          <form action={getcredit} className="flex gap-2 text-black flex-col mt-8">
            <Input name="bike" placeholder="The name of your Bike"></Input>
            <Input name="name" placeholder="Your name"></Input>
            <Button type="submit">Get Credit</Button>
          </form>
          {/* <p>Bedankt, jonge! Doar hej me mooi mit holden. We gaait der wat moois van maken!</p> */}
        </div>
        {/* <Input placeholder=""></Input> */}

        <div className="bg-[#98835F] mt-12 p-6 text-center sm:text-left sm:flex-row  flex-col gap-4 rounded-lg flex flex-wrap items-center w-auto">
          <div className="flex">
            <h3 className="mr-8 flex-shrink-0 leading-none">
              FEATURING
              <br />
              MUSIC FROM
            </h3>
            <div className="flex gap-8 flex-wrap sm:justify-start justify-center items-center">
              <Image alt="powerful company" src={asset6} height="30"></Image>
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
              <Image alt="powerful company" src={asset1} height="30"></Image>
              <Image alt="powerful company" src={asset2} height="30"></Image>
              <Image alt="powerful company" src={asset3} height="30"></Image>
              <Image alt="powerful company" src={asset4} height="30"></Image>
              <Image alt="powerful company" src={asset5} height="30"></Image>
            </div>
          </div>
          <div className="flex gap-4 mt-10 items-start">
            <div className="border-black border-[0.6rem] max-w-[18rem] text-center bg-white text-2xl text-black p-5 leading-none font-[Arial] font-bold">
              Binnen Roken Toegestaan
            </div>
            <div className="border-black border-[0.6rem] max-w-[18rem] text-center bg-white text-2xl text-black p-5 leading-none font-[Arial] font-bold">
              Rookcycle is Dodelijk. Turn the Dial to 8.{" "}
            </div>
            <div className="border-black border-[0.6rem] max-w-[24rem] text-center bg-white text-2xl text-black p-5 leading-none font-[Arial] font-bold">
              Sporten kan de bloedsomloop verbeteren en veroorzaakt impotentie
            </div>
          </div>
        </div>
        <a
          className="opacity-15 underline"
          target="_blank"
          href="https://github.com/hiddehs/roridewithjp"
        >
          open source
        </a>
      </main>
    </div>
  );
}
