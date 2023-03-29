import { JSX } from "preact"
import { IS_BROWSER } from "$fresh/runtime.ts"

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="outline-none px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-700"
    />
  )
}
