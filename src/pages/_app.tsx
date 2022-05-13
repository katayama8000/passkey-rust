import "src/lib/tailwind.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import { AppShell, Navbar, Header } from "@mantine/core";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>🦍katayama blog</title>
      </Head>
      <AppShell
        padding="md"
        header={
          <Header height={60} p="xs">
            <div className="mx-auto max-w-prose">
              <Link href="/">
                <a>
                  <div className="pt-2">ゴリラブログ🦍</div>
                </a>
              </Link>
            </div>
          </Header>
        }
      >
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Component {...pageProps} />
        </MantineProvider>
      </AppShell>
    </>
  );
}

export default MyApp;
