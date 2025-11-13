"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isSpanish = pathname?.startsWith("/es");

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href={isSpanish ? "/es" : "/"} className="flex items-center gap-3">
          <Image
            src="/Assets/The One Stop Studio.jpg"
            alt="The One Stop Studio"
            width={40}
            height={40}
            className="rounded"
            priority
          />
          <span className="text-base font-semibold">The One Stop Studio</span>
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link href={isSpanish ? "/es/services" : "/services"} className="hover:underline">
            {isSpanish ? "Servicios" : "All Services"}
          </Link>
          <Link href={isSpanish ? "/es/about" : "/about"} className="hover:underline">
            {isSpanish ? "Sobre Nosotros" : "About Us"}
          </Link>
          <Link href={isSpanish ? "/es/coming-soon" : "/coming-soon"} className="hover:underline">
            {isSpanish ? "Reservar" : "Book"}
          </Link>
          <Link href={isSpanish ? "/" : "/es"} className="rounded-full border px-3 py-1 hover:bg-black/5 dark:hover:bg-white/10">
            {isSpanish ? "English" : "Español"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
