"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A stacked area chart"

const chartData = [
  { day: "Domingo", desktop: 100, mobile: 80 },
  { day: "Segunda", desktop: 120, mobile: 85 },
  { day: "Terça", desktop: 10, mobile: 0 },
  { day: "Quarta", desktop: 160, mobile: 95 },
  { day: "Quinta", desktop: 180, mobile: 100 },
  { day: "Sexta", desktop: 200, mobile: 105 },
  { day: "Sábado", desktop: 220, mobile: 110 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#F4A3A3",
  },
  mobile: {
    label: "Mobile",
    color: "#F2C99D",
  },
} satisfies ChartConfig

export function Chart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Todos os acessos</CardTitle>
        <CardDescription>
          Mostrando todas os acessos da última semana.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={0}
              tickFormatter={(value) => String(value).slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
