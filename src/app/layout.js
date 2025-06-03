import {
  Playfair_Display,
  Bebas_Neue,
  Oswald,
  Anton,
  Lato,
  Source_Code_Pro,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});
const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
const source = Source_Code_Pro({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "D'nice Investments",
  description: "Luxury loan sourcing consultancy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={[
          playfair.variable,
          bebas.variable,
          oswald.variable,
          anton.variable,
          lato.variable,
          source.variable,
          "antialiased",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}
