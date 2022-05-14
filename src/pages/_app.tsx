import "src/lib/tailwind.css";
import "../styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Button, MantineProvider, TextInput } from "@mantine/core";
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
              <div className="flex justify-between">
                <Link href="/">
                  <a className="no-underline">
                    <div className="text-xl font-extrabold">ゴリラブログ🦍</div>
                  </a>
                </Link>
                {/* <form
                  // onSubmit={form.onSubmit((values) => handleSubmit(values))}
                  className="mt-2 flex gap-x-2"
                >
                  <TextInput
                    placeholder="searching..."
                    // {...form.getInputProps("search")}
                  />
                  <Button type="submit">検索</Button>
                  <Button
                    type="reset"
                    // onClick={handleClick}
                  >
                    リセット
                  </Button>
                </form> */}
              </div>
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
