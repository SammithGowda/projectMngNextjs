"use client";
import { Home, LockIcon, LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "src/app/redux";

const Sidebar = () => {
  const [showProject, setShowProject] = useState(true);
  const [priority, setPriority] = useState(true);
  const sidebarClassname = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 z-40 dark:bg-black overflow-y-auto bg-white w-64`;
  return (
    <div className={sidebarClassname}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            {" "}
            EDLIST
          </div>
        </div>
        {/* Team */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700 ">
          <Image src="/bosch.png" alt="logo" width={40} height={40} />
          <div className="text-md font-bold tracking-wide dark:text-gray-200">
            <h3>BOSCH TEAM</h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-400" />
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>
        {/* NAVBBAR LINKS */}
        <nav className="z-10 w-full">
          <SideBarLink
            icon={Home}
            href="/"
            lable="Home"
          />
        </nav>
      </div>
    </div>
  );
};

interface SideBarLinkProps{
  href:string,
  icon:LucideIcon,
  lable:string,
  // isCollapsed:boolean
}
const SideBarLink = ({
  href,
  icon:Icon,
  lable,
  // isCollapsed
}:SideBarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === '/' && href === '/dashboard')
  const screeWidth = window.innerWidth;
    const dispatch = useAppDispatch()
    const isSidebarCollapsed = useAppSelector((state)=>state.global.isSidebarCollapsed);
  return (
    <Link href={href} className="w-full">
      <div className={`relative flex cursor-pointer items-center gap-3 transition-colors
         hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-600 ${
          isActive?"bg-gray-100 text-white drak:bg-gray-600":""
         }
        `}>
          {isActive && (
            <div className="left-0 right-0 h-[100%] w-[5px] bg-blue-200">
            </div>
            )}
            <Icon className="h-6' w-6 text-gray-800 dark:text-gray-100"/>
            <span className='font-medium text-gray-800 dark:text-gray-100'>{lable}</span>
      </div>
    </Link>
  )
}

export default Sidebar;
