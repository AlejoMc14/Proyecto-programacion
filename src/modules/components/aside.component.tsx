import React from 'react'
import { useLayout } from '../hooks/useLayout';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Aside() {
   const pathname = usePathname();
    const { title, routes } = useLayout(pathname);
  return (
    <aside className="w-1/4 py-10 px-4 bg-neutral-800 rounded-lg my-20 h-fit">
      <h2 className="text-white text-3xl font-bold mb-3">{title}</h2>
      
      <nav>
        <ul className="flex flex-col gap-4">
          {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`block px-4 py-2 rounded-lg font-medium ${
                  pathname === route.path
                    ? "bg-yellow-300 text-black"
                    : "text-neutral-300 hover:bg-neutral-700"
                }`}
              >
                {route.name}
              </Link>
          ))}
        </ul>
      </nav>
    </aside>
    
  );
}
