// app/layout.js
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://kayyell-portfolio.vercel.app"),
  title: "Kayy Ell Portfolio",
  description: "Kayy Ell — Artist • Producer • Hair Stylist",
  openGraph: {
    title: "Kayy Ell Portfolio",
    description: "Kayy Ell — Artist • Producer • Hair Stylist",
    images: ["/hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="lnuGfw3s93mXRYup1eLm7FEJzReZhtT-awsZLx-pNVM"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}







