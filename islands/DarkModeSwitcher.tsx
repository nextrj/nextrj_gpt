import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import {
  GrActions,
  GrMoon,
} from "react_icons/gr/mod.ts";

interface Props {
  dark?: boolean;
}

export default function DarkModeSwitcher(props: Props) {
  function isCurrentDark(): boolean {
    console.log(`-IS_BROWSER=${IS_BROWSER}`)
    let dark;
    if (!IS_BROWSER) dark = false;
    else dark = ("isDark" in localStorage) 
      ? localStorage.isDark 
      : window.matchMedia("(prefers-color-scheme: dark)").matches 

    
    console.log(`window=${window}`)
    console.log(`window.matchMedia=${window.matchMedia}`)
    console.log(`dark0=${"isDark" in localStorage}`)
    console.log(`dark1=${window.matchMedia("(prefers-color-scheme: dark)").matches}`)
    console.log(`dark=${dark}`)
    return dark
  }

  const [dark, setDark] = useState(props.dark);
  console.log(`init dark=${dark}`)
  // console.log(`isCurrentDark()=${isCurrentDark()}`)

  if (dark && !document.documentElement.classList.contains("dark"))
    document.documentElement.classList.add("dark")

  function toggleDark() {
    console.log(`IS_BROWSER=${IS_BROWSER}`)
    console.log(`0=${dark}`)
    const next = !dark
    localStorage.dark = next
    setDark(next)
    console.log(`1=${dark}`)
    document.documentElement.classList[next ? "add" : "remove"]("dark");
  }

  return (
      <Button onClick={toggleDark}>
        {props.dark ? (<GrMoon />) : (<GrActions />)}
        |{props.dark}
      </Button>
  );
}
