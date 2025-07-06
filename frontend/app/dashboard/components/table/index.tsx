"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Access } from "@/types/access"
import { DetailsDialog } from "@/components/dialogs"

const data: Access[] = [
  {
    id: 1,
    os: "Windows",
    browser: "Chrome",
    ip: "192.168.0.1",
    city: "São Paulo",
    state: "SP",
    country: "Brasil",
    country_flag_url: "https://flagcdn.com/br.svg",
    country_emoji: "🇧🇷",
    latitude: -23.5505,
    longitude: -46.6333,
    postal: "01000-000",
    access_timestamp: 1718800000,
    url_id: 101,
  },
  {
    id: 2,
    os: "macOS",
    browser: "Safari",
    ip: "203.0.113.2",
    city: "Lisboa",
    state: "Lisboa",
    country: "Portugal",
    country_flag_url: "https://flagcdn.com/pt.svg",
    country_emoji: "🇵🇹",
    latitude: 38.7169,
    longitude: -9.1399,
    postal: "1000-001",
    access_timestamp: 1718800050,
    url_id: 102,
  },
  {
    id: 3,
    os: "Linux",
    browser: "Firefox",
    ip: "198.51.100.3",
    city: "Paris",
    state: "Île-de-France",
    country: "França",
    country_flag_url: "https://flagcdn.com/fr.svg",
    country_emoji: "🇫🇷",
    latitude: 48.8566,
    longitude: 2.3522,
    postal: "75000",
    access_timestamp: 1718800100,
    url_id: 103,
  },
  {
    id: 4,
    os: "Android",
    browser: "Chrome",
    ip: "203.0.113.4",
    city: "Madrid",
    state: "Madrid",
    country: "Espanha",
    country_flag_url: "https://flagcdn.com/es.svg",
    country_emoji: "🇪🇸",
    latitude: 40.4168,
    longitude: -3.7038,
    postal: "28001",
    access_timestamp: 1718800200,
    url_id: 104,
  },
  {
    id: 5,
    os: "iOS",
    browser: "Safari",
    ip: "192.0.2.5",
    city: "Berlim",
    state: "Berlim",
    country: "Alemanha",
    country_flag_url: "https://flagcdn.com/de.svg",
    country_emoji: "🇩🇪",
    latitude: 52.52,
    longitude: 13.405,
    postal: "10115",
    access_timestamp: 1718800300,
    url_id: 105,
  },
  {
    id: 6,
    os: "Windows",
    browser: "Edge",
    ip: "198.51.100.6",
    city: "Londres",
    state: "Inglaterra",
    country: "Reino Unido",
    country_flag_url: "https://flagcdn.com/gb.svg",
    country_emoji: "🇬🇧",
    latitude: 51.5074,
    longitude: -0.1278,
    postal: "EC1A 1BB",
    access_timestamp: 1718800400,
    url_id: 106,
  },
  {
    id: 7,
    os: "macOS",
    browser: "Firefox",
    ip: "203.0.113.7",
    city: "Nova York",
    state: "NY",
    country: "Estados Unidos",
    country_flag_url: "https://flagcdn.com/us.svg",
    country_emoji: "🇺🇸",
    latitude: 40.7128,
    longitude: -74.006,
    postal: "10001",
    access_timestamp: 1718800500,
    url_id: 107,
  },
  {
    id: 8,
    os: "Linux",
    browser: "Chrome",
    ip: "198.51.100.8",
    city: "Toronto",
    state: "Ontário",
    country: "Canadá",
    country_flag_url: "https://flagcdn.com/ca.svg",
    country_emoji: "🇨🇦",
    latitude: 43.651,
    longitude: -79.347,
    postal: "M5H 2N2",
    access_timestamp: 1718800600,
    url_id: 108,
  },
  {
    id: 9,
    os: "Android",
    browser: "Edge",
    ip: "203.0.113.9",
    city: "Tóquio",
    state: "Tóquio",
    country: "Japão",
    country_flag_url: "https://flagcdn.com/jp.svg",
    country_emoji: "🇯🇵",
    latitude: 35.6895,
    longitude: 139.6917,
    postal: "100-0001",
    access_timestamp: 1718800700,
    url_id: 109,
  },
  {
    id: 10,
    os: "iOS",
    browser: "Safari",
    ip: "192.0.2.10",
    city: "Sydney",
    state: "Nova Gales do Sul",
    country: "Austrália",
    country_flag_url: "https://flagcdn.com/au.svg",
    country_emoji: "🇦🇺",
    latitude: -33.8688,
    longitude: 151.2093,
    postal: "2000",
    access_timestamp: 1718800800,
    url_id: 110,
  },
]

export const columns: ColumnDef<Access>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => {
      const id = row.getValue("id") as number
      return <span className="ms-4">{id}</span>
    },
  },
  {
    accessorKey: "ip",
    header: "IP",
  },
  {
    accessorKey: "browser",
    header: "Browser",
  },
  {
    accessorKey: "os",
    header: "SO",
  },
  {
    accessorKey: "city",
    header: "Cidade",
  },
  {
    accessorKey: "state",
    header: "Estado",
  },
  {
    accessorKey: "country",
    header: "País",
    cell: ({ row }) => {
      const access = row.original
      return (
        <div>
          {access.country_emoji} {access.country}
        </div>
      )
    },
  },

  {
    accessorKey: "access_timestamp",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Horário
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => {
      const rawTimestamp = row.getValue("access_timestamp")
      const date = new Date((rawTimestamp as number) * 1000)
      const day = date.getDate()
      const month = date.toLocaleString("pt-BR", { month: "short" })
      const year = date.getFullYear()
      let hours = date.getHours()
      const minutes = String(date.getMinutes()).padStart(2, "0")
      const isPM = hours >= 12
      hours = hours % 12 || 12
      const period = isPM ? "pm" : "am"

      const formatted = `${day} ${month} ${year} - ${hours}:${minutes}${period}`

      return <div className="text-sm">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Eye />
              <span>Detalhes</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function CustomTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center justify-end gap-4 w-full pb-4">
        <h3 className="text-2xl font-semibold tracking-tight mr-auto">
          Lista de acessos
        </h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="">
              Opções de colunas <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                const text =
                  column.id === "access_timestamp" ? "Horário" : column.id
                const className =
                  column.id.length <= 2 ? "uppercase" : "capitalize"
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className={className}
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {text}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="">
              {table.getState().pagination.pageSize} Linhas por página{" "}
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup
              value={String(table.getState().pagination.pageSize)}
              onValueChange={(value) => table.setPageSize(Number(value))}
            >
              {[5, 10, 20, 50].map((size) => (
                <DropdownMenuRadioItem key={size} value={String(size)}>
                  {size} Linhas
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="hover:bg-neutral-100 cursor-pointer"
                  onClick={() => setIsDialogOpen(true)}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          <span>Total de </span>
          <strong>{table.getFilteredRowModel().rows.length}</strong>
          <span> acessos</span>
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Próximo
          </Button>
        </div>
      </div>
      <DetailsDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  )
}
