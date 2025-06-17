"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { Chart } from "@/components/chart"
import { CustomTable } from "@/components/table"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const DashboardPage = () => {
  const [activeItem, setActiveItem] = useState("overview")

  return (
    <SidebarProvider>
      <AppSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="capitalize">{activeItem}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {activeItem === "overview" ? (
          <div className="max-w-5xl mx-4">
            <Chart />
          </div>
        ) : (
          <div className="max-w-5xl mx-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-5">
              Lista de acessos
            </h3>
            <CustomTable />
          </div>
        )}

      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardPage