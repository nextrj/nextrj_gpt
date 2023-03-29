import { Head } from "$fresh/runtime.ts"
import Counter from "../islands/Counter.tsx"
import DarkModeSwitcher from "../islands/DarkModeSwitcher.tsx"

export default function Home() {
  return (
    <>
      <div class="h-full flex flex-col">
        <div class="p-4 flex-none flex flex-row items-center">
          <img src="/logo.svg" class="w-6 h-6 inline" alt="NextRJ" />
          <div class="flex-1 text-center">
            <a class={`hover:(underline)`} href="javascript:void 0" title="Click to set token.">
              Use ChatGPT With Your Token
            </a>
          </div>
          <DarkModeSwitcher />
        </div>
        <div class="flex-1 overflow-y-scroll dark:bg-[#444654]">
          <ul class="">
            {Array.from({ length: 50 }).map((_value, index) => <li>{index}</li>)}
          </ul>
        </div>
        <div class="p-4 flex-none flex flex-row items-center">
          <div class="flex flex-row w-full p-2 flex-grow relative bg-white dark:text-white dark:bg-gray-700 rounded-md">
            <textarea
              rows={1}
              class="outline-none flex-1 m-0 w-full resize-none border-0 bg-transparent pl-2 pr-2"
              style="max-height: 200px; height: 24px; overflow-y: hidden;"
            >
            </textarea>
            <button class="outline-none flex-none p-1 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4 mr-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
