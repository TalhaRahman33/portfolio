import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Folio",
  description: "The code for my personal website and portfolio, built to showcase my work, experience, and passion for development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

<head>
  <meta charSet="utf-8" />

  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content="Portfolio " name="keywords" />
  <meta content="Portfolio " name="description" />
  {/* Favicon */}
  <link href="img/favicon.ico" rel="icon" />
  {/* Google Fonts */}
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Solway:400,700&display=swap"
    rel="stylesheet"
  />
  {/* CSS Libraries */}
  <link
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
  <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
  {/* Template Stylesheet */}
  <link href="css/style.css" rel="stylesheet" />
</head>


      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}



          {/* <!-- JavaScript Libraries --> */}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
        <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></Script>
        <Script src="lib/typed/typed.min.js"></Script>
        <Script src="lib/easing/easing.min.js"></Script>
        <Script src="lib/stickyjs/sticky.js"></Script>
        <Script src="lib/superfish/hoverIntent.js"></Script>
        <Script src="lib/superfish/superfish.min.js"></Script>
        <Script src="lib/waypoints/waypoints.min.js"></Script>
        <Script src="lib/counterup/counterup.min.js"></Script>
        <Script src="lib/owlcarousel/owl.carousel.min.js"></Script>
        <Script src="lib/isotope/isotope.pkgd.min.js"></Script>
        <Script src="lib/lightbox/js/lightbox.min.js"></Script>

        {/* <!-- Template JavaScript --> */}
        <Script src="js/main.js"></Script>
      </body>
    </html>
  );
}
