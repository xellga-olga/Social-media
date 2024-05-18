import Image from 'next/image'
import React from 'react'
import styles from './Sidebar.module.scss'
import Link from 'next/link'
import { MessagesSquare, Phone, Settings, Users2 } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Image alt='Icon' src='/icon.svg' width={50} height={50} />
      <div>
        <Link href='/friends'>
          <Users2 />
        </Link>
        <Link href='/call'>
          <Phone />
        </Link>
        <Link href='/chats'>
          <MessagesSquare />
        </Link>
        <Link href='/settings'>
          <Settings />
        </Link>
      </div>
    </aside>
  )
}
