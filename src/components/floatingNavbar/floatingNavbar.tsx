import Link from "next/link";
import { Tinos } from "next/font/google";
import { BsFire } from "react-icons/bs";

const tinos = Tinos({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-tinos',
});

export function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-md bg-black/50 border border-white/20 rounded-full px-8 py-3 shadow-lg">
        <Link 
          href="/" 
          className={`${tinos.className} text-xl font-bold text-white hover:text-white/80 transition-colors whitespace-nowrap`}
        >
          <div className="flex gap-3 items-center justify-center text-white">
            <BsFire
              className="text-orange-500 drop-shadow-[0_0_15px_rgba(255,255,0,0.8)]"
              size={35}
            />

            <h1 className="text-3xl">Agnikriti</h1>
          </div>
        </Link>
      </div>
    </nav>
  );
}