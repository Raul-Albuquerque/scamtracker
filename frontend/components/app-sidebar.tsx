"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChartColumnBig,
  SquareActivity
} from "lucide-react"

import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"


type AppSidebarProps = {
  activeItem: string
  setActiveItem: (key: string) => void
} & React.ComponentProps<typeof Sidebar>

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: []
}

export function AppSidebar({
  activeItem,
  setActiveItem,
  ...props
}: AppSidebarProps) {
  const navItems = [
    { key: "overview", title: "Overview", icon: ChartColumnBig },
    { key: "Lista de acessos", title: "Lista de acessos", icon: SquareActivity },
  ]

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link href={"/"} className="py-4 mx-2">
          <Image src={"/static/images/logo-black.svg"} alt="Scamtracker logo" width={120} height={24} />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveItem(item.key)}
              className={`flex items-center gap-2 p-2 text-sm rounded-md hover:bg-muted transition ${activeItem === item.key ? "bg-muted font-semibold" : ""
                }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </button>
          ))}
        </nav>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
