import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import {
  GrActions,
  GrMoon,
} from "react_icons/gr/mod.ts";

function isDark(): boolean {
  if (!IS_BROWSER) return false
  else return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
}

interface Props {
  dark?: boolean;
}

export default function DarkModeSwitcher(props: Props) {
  const [dark, setDark] = useState(isDark());

  function toggleDark() {
    const next = !dark
    setDark(next)
    document.documentElement.classList[next ? "add" : "remove"]("dark");
    localStorage.theme = next ? "dark" : "light";
  }

  return (
      <Button onClick={toggleDark}>
        {dark ? (<GrMoon />) : (<GrActions />)}
      </Button>
  );
}
