"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import asset1 from "./assets/Asset 1.png";
import asset2 from "./assets/Asset 2.png";
import asset3 from "./assets/Asset 3.png";
import asset4 from "./assets/Asset 4.png";
import asset5 from "./assets/Asset 5.png";
import asset6 from "./assets/Asset 6.png";
import asset7 from "./assets/Asset 7.svg";
import asset8 from "./assets/Asset 8.png";
import top from "./assets/artboard69.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { getcredit } from "./actions/getcredit";

const initialState = {
  success: 0,
};

export default function Home() {
  const [state, formAction] = useFormState(getcredit, initialState);
  const [placesRemaining, setPlacesRemaining] = useState(6);
  const counterRef = useRef(null);
  const [visibleElements, setVisibleElements] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setPlacesRemaining(5);
          }, 500);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const totalElements = 7; // Adjust this number based on the number of main elements
    const interval = setInterval(() => {
      setVisibleElements((prev) => {
        if (prev < totalElements) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 200); // Adjust the interval for faster/slower animation

    return () => clearInterval(interval);
  }, []);

  const fadeInClass = (index: number) =>
    `opacity-0 transition-opacity duration-500 ${
      visibleElements > index ? "opacity-100" : ""
    }`;

  return (
    <div className="grid text-white bg-slate-900 items-center justify-items-center min-h-screen p-3 pb-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:items-start sm:gap-12 items-center sm:justify-start justify-center">
          <Image
            alt="moi plaatje"
            src={top}
            className={`w-[200px] rounded-full sm:w-[300px] ${fadeInClass(0)}`}
            width="300"
          />
          <div className="flex flex-col gap-4 sm:gap-8 sm:justify-start justify-center items-center text-center sm:text-left sm:items-start">
            <div className={`bg-[#77C8C5] p-4 rounded-xl sm:w-1/2 ${fadeInClass(1)}`}>
              <h2 className="leading-[80%] sm:text-[4rem]">RORIDE WITH JP</h2>
            </div>
            <div className={`bg-[#909DCF] leading-none p-4 rounded-xl sm:w-1/2 ${fadeInClass(2)}`}>
              <h3 className="text-[#4B2567] sm:text-[3rem] text-[2.4rem] leading-[100%]">
                SATURDAY 1 FEBRUARY, 2025
              </h3>
            </div>
            <div className={`bg-[#E4727F] leading-none p-4 rounded-xl sm:w-1/2 ${fadeInClass(3)}`}>
              <h3 className="text-[#66232A] sm:text-[3rem] text-[2.4rem] leading-[100%]">
                13:45 AT {" "}
                <a
                  href="https://maps.app.goo.gl/DZJNTfBLEpKV8cfj6"
                  className="underline"
                  target="_blank"
                >
                  ROCYCLE UTRECHT
                </a>
              </h3>
            </div>
            <div className={`bg-slate-800 w-full sm:w-auto leading-tight p-4 sm:p-10 rounded-lg ${fadeInClass(4)}`}>
              <h2 className="mb-2">Sign-up here</h2>
              <ol className="text-slate-200 list-decimal leading-tight mx-4 my-1 sm:text-left text-center sm:list-inside list-outside">
                <li><strong>Fill in</strong> your real name & 06 🤝 </li>
                <li>We will send <strong>a Whatsapp</strong> with Tikkie⏰ </li>
                <li>We add you to <strong>the groupchat</strong> 🪩</li>
              </ol>

              {state.success === 0 ? (
                <form
                  action={formAction}
                  className="flex gap-2 my-4 text-black flex-col"
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
                  <Button size="lg" type="submit">
                    Sign up for the ro-ride!
                  </Button>
                </form>
              ) : state.success === 1 ? (
                <p className="border leading-normal border-green-500 p-4 rounded bg-green-800/20 font-bold">
                  Waanzinnig, je krijg snel een appje.{" "}
                  <i>En no hop, op 'e fyts en kilometers meitsje!</i>
                </p>
              ) : (
                <p className="border border-red-500 p-4 rounded bg-red-800/20 font-bold">
                  We hebb'n problem, poar nemn!
                </p>
              )}

              <p
                ref={counterRef}
                className="mt-6 text-2xl text-center font-bold duration-1000 transition-all ease-in-out"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.48, -0.25, 0.3, 2.57)",
                  transform: placesRemaining === 5 ? 'scale(1.02)' : 'scale(0.85)',
                  color: placesRemaining === 5 ? "#ff4136" : "inherit",
                }}
              >
                ⏳ Only {placesRemaining} places remaining!
              </p>
            </div>

            <div className={`bg-[#98835F] p-6 text-center sm:text-left sm:flex-row flex-col gap-4 rounded-lg flex flex-wrap items-center w-auto ${fadeInClass(5)}`}>
              <div className="flex flex-col sm:flex-row flex-nowrap">
                <h3 className="sm:mr-8 mb-8 mt-2 sm:mb-0 flex-shrink-0 leading-none">
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
              <div className="flex gap-2 mt-6 flex-wrap justify-center sm:justify-start items-start">
                <div className="border-black border-[0.42rem] max-w-[12.6rem] text-center bg-white text-sm text-black p-3 leading-none font-[Arial] font-bold">
                  Binnen Roken Niet Toegestaan
                </div>
                <div className="border-black border-[0.42rem] max-w-[12.6rem] text-center bg-white text-sm text-black p-3 leading-none font-[Arial] font-bold">
                  Rookcycle is Dodelijk. Turn the Dial to 8.
                </div>
                <div className="border-black border-[0.42rem] max-w-[16.8rem] text-center bg-white text-sm text-black p-3 leading-none font-[Arial] font-bold">
                  Sporten kan de bloedsomloop verbeteren en veroorzaakt impotentie
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          className={`opacity-15 underline ${fadeInClass(6)}`}
          target="_blank"
          href="https://github.com/hiddehs/roridewithjp"
        >
          open source
        </a>
      </main>
    </div>
  );
}