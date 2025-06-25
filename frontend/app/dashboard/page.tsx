"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { Chart } from "@/app/dashboard/components/chart"
import { CustomTable } from "@/app/dashboard/components/table"
import {
  Breadcrumb,
  BreadcrumbItem,
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
import { SectionCards } from "@/components/section-cards"

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
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
            </div>
            <div className="px-4 lg:px-6" >
              <Chart />
            </div>
          </div>
        ) : (
          <div className="p-4 mx-4">
            <CustomTable />
          </div>
        )}

      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardPage