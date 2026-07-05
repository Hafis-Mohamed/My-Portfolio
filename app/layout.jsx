import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Hafis Mohamed | MCA Student & Full Stack Developer",
  description:
    "Portfolio of Hafis Mohamed, an MCA Student at College of Engineering Trivandrum (CET), passionate about Full Stack Web Development, Mobile Apps, and building practical systems.",
  keywords: [
    "Hafis Mohamed",
    "CET Trivandrum",
    "MCA Student",
    "Full Stack Developer",
    "Mobile App Developer",
    "Software Engineer",
    "Asmabees Hostel Management System",
  ],
  authors: [{ name: "Hafis Mohamed" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#070711] text-slate-200 font-sans overflow-x-hidden antialiased">
        {/* Fixed atmospheric backdrop */}
        <div className="fixed inset-0 -z-10 bg-[#070711]" />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_75%_60%_at_50%_-10%,rgba(129,140,248,0.16),transparent_60%)]" />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_55%_50%_at_50%_115%,rgba(34,211,238,0.10),transparent_60%)]" />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_40%_40%_at_85%_30%,rgba(244,114,182,0.08),transparent_60%)]" />
        {children}
      </body>
    </html>
  );
}
