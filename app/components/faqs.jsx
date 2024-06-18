'use client'

import { Accordion } from '@ark-ui/react'

import { useState } from 'react'

export function Faqs({ items }) {
  const [current, setCurrent] = useState({ value: [0] })

  return (
    <div id="faqs" className="flex flex-col gap-6 items-center w-full p-10">
      <h1 className="text-center">FAQ</h1>
      <Accordion.Root
        defaultValue={current.value}
        collapsible
        className="flex flex-col gap-2 w-full"
        onValueChange={(value) => {
          setCurrent(value)
        }}
      >
        {items.map((item, i) => {
          const { question, answer } = item
          const value = current.value[0]

          return (
            <Accordion.Item
              className="grid overflow-hidden grid-rows-[auto_0fr] transition-[grid-template-rows] duration-[0.2s] w-full rounded-lg bg-base-200"
              key={i}
              value={i}
            >
              <Accordion.ItemTrigger className="collapse-title hover:underline font-bold !text-[20px]">
                {question}
                <Accordion.ItemIndicator className="absolute right-[2%] top-[33%]">
                  {
                    i === value
                      ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                        )
                      : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        )
                  }

                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent className="col-start-1 row-start-2 cursor-[unset] px-4 pb-4 text-center !text-[16px]">
                {answer}
              </Accordion.ItemContent>
            </Accordion.Item>
          )
        },
        )}
      </Accordion.Root>
    </div>
  )
}