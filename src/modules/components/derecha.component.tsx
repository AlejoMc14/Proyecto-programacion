'user client';
import React from 'react'
import Image from 'next/image';
import ProfileUser from '../profileUser/component/profileUser.component';
export default function derechaComponent() {
  return (
    <aside className="flex flex-col w-1/4 px-4 py-5 bg-neutral-900 my-20 rounded-lg">
      <div className="flex flex-col gap-5 items-center h-1/2">
        <div className="bg-neutral-700 p-3 rounded-md">
       <img
  src="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg"
  alt="logo"
  width={150}
  height={150}
/>

        </div>
        <h1 className="text-white font-bold text-2xl text-center">
          Sergio Muñoz
        </h1>
        <span className="bg-neutral-700 p-2 rounded-lg">
          <h2>Admin</h2>
        </span>
      </div>
      <div className="flex flex-col items-center gap-5 h-1/2">
        <ProfileUser/>
      </div>
    </aside>
  );
}
