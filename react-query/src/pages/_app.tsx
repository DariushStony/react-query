import ReactQueryClientProvider from "@/context/ReactQueryClient";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryClientProvider>
      <Component {...pageProps} />
    </ReactQueryClientProvider>
  );
}
