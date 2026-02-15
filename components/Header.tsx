'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 py-4">
      <nav className="container-custom">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[var(--primary)] no-underline">
            Factoring Media
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link 
              href="#comparison" 
              className="text-[var(--navy)] no-underline font-medium hover:text-[var(--primary)] transition-colors"
            >
              比較で探す
            </Link>
            <Link 
              href="#guide" 
              className="text-[var(--navy)] no-underline font-medium hover:text-[var(--primary)] transition-colors"
            >
              ガイド
            </Link>
            <Link 
              href="#faq" 
              className="text-[var(--navy)] no-underline font-medium hover:text-[var(--primary)] transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
