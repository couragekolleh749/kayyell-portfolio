// app/layout.js
import "./globals.css";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "KayyEll Portfolio",
  description: "KayyEll — Artist • Producer • Hair Stylist",
  openGraph: {
    title: "KayyEll Portfolio",
    description: "KayyEll — Artist • Producer • Hair Stylist",
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
      <body>{children}</body>
    </html>
  );
}






