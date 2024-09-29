"use client";
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
import { useFormState, useFormStatus } from "react-dom";
import { getcredit } from "./actions/getcredit";

const initialState = {
  success: 0,
};

export default function Home() {
  const [state, formAction] = useFormState(getcredit, initialState);

  return (
    <div className="grid text-white bg-slate-900 items-center justify-items-center min-h-screen p-2 pb-20 sm:gap-16 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-12 flex-wrap sm:flex-nowrap items-start">
          <Image
            alt="moi plaatje"
            src={top}
            className="w-[200px] sm:w-[300px]"
            width="300"
          />
          <div className="flex flex-col gap-8 justify-start items-start">
            <div className="bg-[#77C8C5] p-4 rounded-xl">
              <h1 className="text-4xl leading-[80%] sm:text-[6rem]">
                RORIDE WITH JP
              </h1>
            </div>
            <div className="bg-[#909DCF] leading-none p-4 rounded-xl">
              <h2 className="text-[#4B2567] text-2xl sm:text-[4rem] leading-[100%]">
                THE KILLER WORKOUT AT{" "}
                <a
                  href="https://maps.app.goo.gl/DZJNTfBLEpKV8cfj6"
                  className="underline"
                  target="_blank"
                >
                  KAATSTRAAT 59 UTRECHT
                </a>
              </h2>
            </div>
            <div className="bg-slate-800 leading-none p-8 my-8 rounded-lg">
              <h3 className="mb-2">Sign-up here</h3>
              <ol className="text-slate-200">
                <li>Fill in your real name & 06 🤝 </li>
                <li>We will send a Whatsapp with the date & time ⏰ </li>
                <li>When confirmed, you'll get a €17,50 Tikkie ✅</li>
                <li>And you'll added to the groupchat 🪩</li>
              </ol>
              <p className="text-muted mb-4">We'll send you a confirmation</p>

              {state.success === 0 ? (
                <form
                  action={formAction}
                  className="flex gap-2 text-black flex-col mt-8"
                >
                  <Input
                    required
                    name="name"
                    placeholder="What is your name?"
                  ></Input>
                  <Input
                    required
                    name="phone"
                    type="tel"
                    placeholder="And your 06-nummer?"
                  ></Input>
                  <Button type="submit">Sign up for the ro-ride!</Button>
                </form>
              ) : state.success === 1 ? (
                <p className="border border-green-500 p-4 rounded bg-green-800/20 font-bold">
                  Bedankt, jonge! Doar hej me mooi mit holden. We gaait der wat
                  moois van maken! (de Credit ontvang je snel)
                </p>
              ) : (
                <p className="border border-red-500 p-4 rounded bg-red-800/20 font-bold">
                  We hebb'n problem, poar nemn!
                </p>
              )}
            </div>
            {/* <Input placeholder=""></Input> */}

            <div className="bg-[#98835F] mt-12 p-6 text-center sm:text-left sm:flex-row  flex-col gap-4 rounded-lg flex flex-wrap items-center w-auto">
              <div className="flex flex-col">
                <h3 className="mr-8 flex-shrink-0 leading-none">
                  FEATURING
                  <br />
                  MUSIC FROM
                </h3>
                <div className="flex gap-8 flex-wrap sm:justify-start justify-center items-center">
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
              <div className="flex gap-4 mt-10 flex-wrap justify-center sm:justify-start items-start">
                <div className="border-black border-[0.6rem] max-w-[18rem] text-center bg-white text-2xl text-black p-5 leading-none font-[Arial] font-bold">
                  Binnen Roken Toegestaan
                </div>
                <div className="border-black border-[0.6rem] max-w-[18rem] text-center bg-white text-2xl text-black p-5 leading-none font-[Arial] font-bold">
                  Rookcycle is Dodelijk. Turn the Dial to 8.{" "}
                </div>
                <div className="border-black border-[0.6rem] max-w-[24rem] text-center bg-white text-2xl text-black p-5 leading-none font-[Arial] font-bold">
                  Sporten kan de bloedsomloop verbeteren en veroorzaakt
                  impotentie
                </div>
              </div>
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
