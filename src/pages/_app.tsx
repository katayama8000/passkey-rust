import "src/lib/tailwind.css";
import "../styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { AppShell, Header } from "@mantine/core";
import Link from "next/link";
import "swiper/css/bundle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>🦍katayama blog</title>
      </Head>
      <AppShell
        padding="md"
        className="bg-gray-200"
        header={
          <Header height={60} p="xs">
            <div className="mx-auto max-w-6xl">
              <Link href="/">
                <a className="no-underline">
                  <div className="text-xl font-extrabold">ゴリラブログ🦍</div>
                </a>
              </Link>
            </div>
          </Header>
        }
      >
        <main>
          <MantineProvider withGlobalStyles withNormalizeCSS>
            <Component {...pageProps} />
          </MantineProvider>
        </main>
      </AppShell>
    </>
  );
}

export default MyApp;
