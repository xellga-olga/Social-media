'use client'

import React from "react";
import cn from "clsx";
import styles from "./Sidebar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Sun } from "lucide-react";
import { MENU } from "./sidebar.data";

import { usePathname } from "next/navigation";



export function Sidebar() {

  const pathname = usePathname()


  return (
    <aside className={styles.sidebar}>
      <Image alt="Icon" src="/icon.svg" width={45} height={45} priority />
      <div>
        {MENU.map((item) => (
          <Link
            href={item.url}
            key={item.url}
            className={cn({
              [styles.active]: pathname === item.url,
            })}
          >
            <item.Icon size={27} />
          </Link>
        ))}
      </div>
      <Sun size={27} />
    </aside>
  );
}
