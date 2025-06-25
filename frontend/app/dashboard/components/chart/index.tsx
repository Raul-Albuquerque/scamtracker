"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An interactive area chart"

const chartData = [
  { date: "2025-06-01", desktop: 120, mobile: 300, tablet: 80 },
  { date: "2025-06-02", desktop: 130, mobile: 280, tablet: 75 },
  { date: "2025-06-03", desktop: 110, mobile: 310, tablet: 90 },
  { date: "2025-06-04", desktop: 140, mobile: 290, tablet: 85 },
  { date: "2025-06-05", desktop: 125, mobile: 305, tablet: 95 },
  { date: "2025-06-06", desktop: 135, mobile: 315, tablet: 100 },
  { date: "2025-06-07", desktop: 128, mobile: 298, tablet: 88 },
  { date: "2025-06-08", desktop: 145, mobile: 320, tablet: 92 },
  { date: "2025-06-09", desktop: 138, mobile: 310, tablet: 89 },
  { date: "2025-06-10", desktop: 0, mobile: 0, tablet: 0 },
  { date: "2025-06-11", desktop: 150, mobile: 330, tablet: 99 },
  { date: "2025-06-12", desktop: 155, mobile: 340, tablet: 100 },
  { date: "2025-06-13", desktop: 0, mobile: 0, tablet: 0 },
  { date: "2025-06-14", desktop: 158, mobile: 335, tablet: 101 },
  { date: "2025-06-15", desktop: 162, mobile: 350, tablet: 103 },
  { date: "2025-06-16", desktop: 168, mobile: 355, tablet: 105 },
  { date: "2025-06-17", desktop: 172, mobile: 360, tablet: 107 },
  { date: "2025-06-18", desktop: 170, mobile: 358, tablet: 106 },
  { date: "2025-06-19", desktop: 175, mobile: 365, tablet: 108 },
  { date: "2025-06-20", desktop: 180, mobile: 370, tablet: 110 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    color: "var(--primary)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--primary)",
  },
  tablet: {
    label: "Tablet",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function Chart() {
  const isMobile = useIsMobile()

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2025-06-20")
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - 7)
    return date >= startDate && date <= referenceDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Acessos por dispositivos</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total dos últimos 7 dias
          </span>
          <span className="@[540px]/card:hidden">Últimos 7 dias</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value="7d"
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="7d">Últimos 7 dias</ToggleGroupItem>
          </ToggleGroup>
          <Select value="7d">
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="7d" className="rounded-lg">
                Últimos 7 dias
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <div className="relative overflow-x-auto pb-4">
          <div className="min-w-[800px]">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-[250px] w-full"
            >
              <AreaChart data={filteredData} className="" margin={{ left: 30, right: 30 }}>
                <defs>
                  <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--chart-1)"
                      stopOpacity={1.0}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--chart-1)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                  <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--chart-2)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--chart-2)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                  <linearGradient id="fillTablet" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--chart-5)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--chart-5)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={10}
                  interval={0}
                  tickFormatter={(value) => {
                    const date = new Date(value)
                    return date.toLocaleDateString("pt-BR", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                />
                <ChartTooltip
                  cursor={false}
                  defaultIndex={isMobile ? -1 : 10}
                  content={
                    <ChartTooltipContent
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("pt-BR", {
                          month: "short",
                          day: "numeric",
                        })
                      }}
                      indicator="dot"
                    />
                  }
                />
                <Area
                  dataKey="mobile"
                  type="natural"
                  fill="url(#fillMobile)"
                  stroke="var(--chart-2)"
                  stackId="a"
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="url(#fillDesktop)"
                  stroke="var(--chart-1)"
                  stackId="a"
                />
                <Area
                  dataKey="tablet"
                  type="natural"
                  fill="url(#fillTablet)"
                  stroke="var(--chart-5)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-100 to-transparent pointer-events-none" />
        </div>
      </CardContent>
    </Card>
  )
}
