'use client'
import { Button } from '@/components/ui/button'
import { getSimpleCredit } from '@/app/actions/simplecredit'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function PaymentButton(){
  const [isPending, setIsPending] = useState(false)

  const params = useSearchParams()
  const id = [...params.keys()][0]
  return ( <Button
    className={
      'bg-[#34346D] relative shadow-md hover:bg-[#39a4a1] flex gap-2 whitespace-normal justify-between text-left rounded-xl w-full p-6 font-heading text-2xl'
    }
    disabled={isPending}
    size="lg"
    onClick={() => {
      setIsPending(true)
      return getSimpleCredit(id)
    }}
    type="submit"
  >
                <span className="absolute -right-1 -top-1 flex size-4">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39a4a1] opacity-75"></span>
                  <span
                    className="relative inline-flex rounded-full size-4 shadow bg-[#39a4a1]"></span>
                </span>
    <div>Reserveer je spot</div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="w-[65px]"
        viewBox="0 0 277 102"
      >
        <path
          fill="#14A4A0"
          d="M224.82 0c-28.3 0-51.242 22.62-51.242 50.522a49.76 49.76 0 0 0 3.167 17.519c1.189 3.064 1.811 6.372 1.811 9.848 0 9.334-4.699 17.57-11.886 22.576-.681.474-.348 1.535.486 1.535h.029c11.001 0 21.188-3.418 29.549-9.22 8.066 5.222 17.716 8.264 28.089 8.264 28.3 0 51.242-22.62 51.242-50.522C276.065 22.62 253.123 0 224.82 0Z"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
        <path
          fill="#fff"
          d="M200.102 58.468c-2.102 0-3.114-.956-3.114-3.108 0-1.834 1.012-2.949 3.114-2.949h.078v-1.514c0-.877 0-1.833.078-2.79h-.156c-2.102 0-3.114-.956-3.114-3.108 0-1.833 1.012-2.949 3.114-2.949h1.012c1.168-4.862 3.425-9.086 6.695-12.593 5.216-5.658 11.755-8.448 19.618-8.448 4.593 0 8.641.956 12.066 2.95 3.503 1.912 5.216 4.223 5.294 6.853 0 3.428-2.102 6.536-5.138 6.616-1.479.079-3.192-.558-5.138-1.754-1.946-1.276-4.281-1.913-7.006-1.913-4.438 0-7.941 1.594-10.51 4.703-.856 1.115-1.635 2.31-2.18 3.586h11.911c1.946 0 3.114 1.116 3.114 2.949 0 2.152-1.168 3.108-3.114 3.108h-13.39c-.078.957-.156 1.913-.156 2.79v1.514h9.031c1.868 0 3.036 1.115 3.036 2.95 0 2.151-1.168 3.107-3.036 3.107h-7.785a16.212 16.212 0 0 0 2.569 4.543c2.569 3.108 6.072 4.703 10.51 4.703 2.725 0 5.06-.637 7.006-1.833 1.946-1.276 3.659-1.914 5.138-1.834 3.036.08 5.138 3.268 5.138 6.536-.078 2.71-1.791 5.021-5.294 7.014-3.425 1.912-7.473 2.868-12.066 2.868-7.863 0-14.402-2.789-19.618-8.447-3.503-3.826-5.761-8.369-6.928-13.55h-.779ZM14.72 33.61H6.525C2.426 33.61 0 31.442 0 27.441c0-4.082 2.426-6.25 6.524-6.25h29.86c4.098 0 6.523 2.168 6.523 6.167 0 4.084-2.425 6.25-6.523 6.25H28.27v38.67c0 5.75-2.843 8.167-6.774 8.167-4.015 0-6.775-2.418-6.775-8.168V33.61ZM56.188 21.192c4.15 0 7.152 2.417 7.152 8.168v42.918c0 5.75-3.002 8.168-7.152 8.168-4.238 0-7.15-2.418-7.15-8.168V30.11c0-6.75 2.912-8.917 7.15-8.917ZM84.752 57.11v15.168c0 5.75-2.778 8.168-6.62 8.168-3.922 0-6.62-2.418-6.62-8.168V29.36c0-5.751 2.698-8.168 6.62-8.168 3.841 0 6.62 2.417 6.62 8.168v14.084l17.735-18.418c3.842-4.333 7.437-4.167 9.971-2.084 2.616 2.084 3.269 6.335-.408 10.334l-17.735 17 18.961 18.002c2.124 2.084 3.187 4.083 3.187 5.833s-.572 3.251-1.635 4.501c-1.225 1.25-2.696 1.834-4.413 1.834-1.716 0-3.596-1-5.639-3.084L84.752 57.111ZM134.376 57.11v15.168c0 5.75-2.779 8.168-6.62 8.168-3.923 0-6.62-2.418-6.62-8.168V29.36c0-5.751 2.697-8.168 6.62-8.168 3.841 0 6.62 2.417 6.62 8.168v14.084l17.735-18.418c3.841-4.333 7.437-4.167 9.971-2.084 2.615 2.084 3.268 6.335-.409 10.334l-17.735 17 18.961 18.002c2.125 2.084 3.187 4.083 3.187 5.833s-.571 3.251-1.635 4.501c-1.225 1.25-2.696 1.834-4.412 1.834-1.717 0-3.597-1-5.64-3.084l-20.023-20.251ZM178.259 21.192c4.15 0 7.151 2.417 7.151 8.168v42.918c0 5.75-3.001 8.168-7.151 8.168-4.239 0-7.152-2.418-7.152-8.168V30.11c0-6.75 2.913-8.917 7.152-8.917Z"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
      <div className={"text-xs font-sans w-full text-center mt-2 text-slate-300"}>€17,50</div>
    </div>
  </Button>)
}
