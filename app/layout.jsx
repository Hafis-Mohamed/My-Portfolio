import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Hafis Mohamed | MCA Student & Full Stack Developer",
  description: "Portfolio of Hafis Mohamed, an MCA Student at College of Engineering Trivandrum (CET), passionate about Full Stack Web Development, Mobile Apps, and building practical systems.",
  keywords: ["Hafis Mohamed", "CET Trivandrum", "MCA Student", "Full Stack Developer", "Mobile App Developer", "Software Engineer", "Asmabees Hostel Management System"],
  authors: [{ name: "Hafis Mohamed" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-[#030014] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden antialiased">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_120%,rgba(59,130,246,0.08),rgba(255,255,255,0))]" />
        {children}
      </body>
    </html>
  );
}
