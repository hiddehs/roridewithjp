import Image from "next/image";
import asset1 from "./assets/Asset 1.png";
import asset2 from "./assets/Asset 2.png";
import asset3 from "./assets/Asset 3.png";
import asset4 from "./assets/Asset 4.png";
import asset5 from "./assets/Asset 5.png";
import asset6 from "./assets/Asset 6.png";
import asset7 from "./assets/Asset 7.svg";

export default function Home() {
  return (
    <div className="grid text-white bg-slate-900 items-center justify-items-center min-h-screen p-2 pb-20 sm:gap-16 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="bg-[#77C8C5] leading-none p-4 rounded-xl">
          <h1>RORIDE WITH JP</h1>
        </div>
        <div className="bg-[#909DCF] leading-none p-4 rounded-xl">
          <h2 className="text-[#4B2567]">A KILLER WORKOUT AT <a href="https://maps.app.goo.gl/DZJNTfBLEpKV8cfj6" className="underline" target="_blank">KAATSTRAAT 59 UTRECHT</a></h2>
        </div>

[get your unique credit here]
[get your unique credit here]
[get your unique credit here]
[get your unique credit here]

        <div className="bg-[#98835F] mt-12 p-6 text-center sm:text-left sm:flex-row  flex-col gap-4 rounded flex items-center w-full">
          <h3 className="mr-4 flex-shrink-0 leading-none">
            FEATURING
            <br />
            MUSIC FROM
          </h3>
          <div className="flex gap-8 flex-wrap sm:justify-start justify-center items-center">
            <Image alt="powerful company" src={asset6} height="30"></Image>

            <Image alt="powerful company" src={asset7} height="30"></Image>
            <Image alt="powerful company" src={asset1} height="30"></Image>
            <Image alt="powerful company" src={asset2} height="30"></Image>
            <Image alt="powerful company" src={asset3} height="30"></Image>
            <Image alt="powerful company" src={asset4} height="30"></Image>
            <Image alt="powerful company" src={asset5} height="30"></Image>
          </div>
        </div>
      </main>
    </div>
  );
}
