import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

export default function App({ Component }: AppProps) {
  const code = `
    // On page load or when changing themes, best to add inline in head to avoid FOUC
    // See https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }`;
  return (
    <html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: code,
          }}
        />
      </Head>
      <body class={`bg(gray-100 dark:gray-800) dark:text-gray-100`}>
        <main class="container mx-auto p-4">
          <Component />
        </main>
      </body>
    </html>
  );
}
