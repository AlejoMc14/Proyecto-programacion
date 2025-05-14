"use client";
import React from "react";
import { useLayout } from "../hooks/useLayout";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Aside from "../components/aside.component";
interface Props {
  children: React.ReactNode;

}

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const pathname = usePathname();
  const { title, routes } = useLayout(pathname);

  return (
    <main className="bg-white h-screen flex text-black">
     <Aside />
      
      {/* Sidebar 
      <aside className="w-64 bg-neutral-900 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-8 text-white">DeliveryPro</h1>
          <nav>
            <ul className="flex flex-col gap-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`cursor-pointer font-semibold capitalize ${
                    pathname === route.path ? "text-yellow-300" : "text-neutral-400"
                  } hover:text-yellow-300`}
                >
                  {route.name}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </aside>*/}

      {/* Content Area 
      <section className="flex-1 px-10 py-8 overflow-y-auto">
        {/* Header 
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">{title}</h2>
        </header>
 </section>*/}
        {/* Page content */}
        <div className="bg-white p-6 rounded-lg shadow-lg h-full">
          {children}
        </div>
     
    </main>
  );
}
