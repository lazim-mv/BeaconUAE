import Head from "next/head";
import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beacon - Launch and Expand Your Business In UAE with our Expertise",
  description:
    "Beacon is your global business advisory partner who offers you a range of services that enable your business growth and ultimate business transformation. We provide a plethora of services like Business Incorporation, Digital Marketing, Technology, Finance and Accounting, Audit & Taxation and Business Consulting services.",
  openGraph: {
    title: "Beacon - Launch and Expand Your Business In UAE with our Expertise",
    description:
      "Beacon is your global business advisory partner who offers you a range of services that enable your business growth and ultimate business transformation. We provide a plethora of services like Business Incorporation, Digital Marketing, Technology, Finance and Accounting, Audit & Taxation and Business Consulting services.",
    url: "https://bmcglobal.co",
    siteName: "Beacon",
    images: [
      {
        url: "https://bmcglobal.co/linkImageWhatsApp.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://bmcglobal.co/linkImageWhatsApp.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const baseUrl =
    "https://bmcglobal.co/linkImageWhatsApp.png" ||
    "https://beacon-alpha.vercel.app/linkImageWhatsApp.png";
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/GREEN.svg"
          type="image/svg+xml"
          sizes="16x16 32x32 48x48"
        />
      </head>
      <Head>
        <link
          rel="icon"
          href="/GREEN.svg"
          type="image/svg+xml"
          sizes="16x16 32x32 48x48"
        />
        <meta property="og:image" content={baseUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
      </Head>
      <body >{children}</body>
    </html>
  );
}
