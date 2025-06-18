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
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Access } from "@/types/access"

const data: Access[] = [
  {
    "id": 1,
    "os": "Windows 10",
    "browser": "Chrome 125",
    "ip": "192.168.1.10",
    "city": "São Paulo",
    "state": "SP",
    "country": "Brazil",
    "country_flag_url": "https://flagcdn.com/br.svg",
    "latitude": "-23.5505",
    "longitude": "-46.6333",
    "postal": "01000-000",
    "access_timestamp": 1717300000,
    "url_id": 101
  },
  {
    "id": 2,
    "os": "macOS 13",
    "browser": "Safari 16",
    "ip": "192.168.1.11",
    "city": "New York",
    "state": "NY",
    "country": "USA",
    "country_flag_url": "https://flagcdn.com/us.svg",
    "latitude": "40.7128",
    "longitude": "-74.0060",
    "postal": "10001",
    "access_timestamp": 1717300500,
    "url_id": 102
  },
  {
    "id": 3,
    "os": "Ubuntu 22.04",
    "browser": "Firefox 124",
    "ip": "192.168.1.12",
    "city": "Berlin",
    "state": "BE",
    "country": "Germany",
    "country_flag_url": "https://flagcdn.com/de.svg",
    "latitude": "52.5200",
    "longitude": "13.4050",
    "postal": "10115",
    "access_timestamp": 1717301000,
    "url_id": 103
  },
  {
    "id": 4,
    "os": "iOS 17",
    "browser": "Safari Mobile",
    "ip": "192.168.1.13",
    "city": "Tokyo",
    "state": "Tokyo",
    "country": "Japan",
    "country_flag_url": "https://flagcdn.com/jp.svg",
    "latitude": "35.6895",
    "longitude": "139.6917",
    "postal": "100-0001",
    "access_timestamp": 1717301500,
    "url_id": 104
  },
  {
    "id": 5,
    "os": "Android 13",
    "browser": "Chrome Mobile 124",
    "ip": "192.168.1.14",
    "city": "Sydney",
    "state": "NSW",
    "country": "Australia",
    "country_flag_url": "https://flagcdn.com/au.svg",
    "latitude": "-33.8688",
    "longitude": "151.2093",
    "postal": "2000",
    "access_timestamp": 1717302000,
    "url_id": 105
  },
  {
    "id": 6,
    "os": "Windows 11",
    "browser": "Edge 125",
    "ip": "192.168.1.15",
    "city": "Toronto",
    "state": "ON",
    "country": "Canada",
    "country_flag_url": "https://flagcdn.com/ca.svg",
    "latitude": "43.6510",
    "longitude": "-79.3470",
    "postal": "M5H",
    "access_timestamp": 1717302500,
    "url_id": 106
  },
  {
    "id": 7,
    "os": "Fedora 39",
    "browser": "Firefox 123",
    "ip": "192.168.1.16",
    "city": "Paris",
    "state": "Île-de-France",
    "country": "France",
    "country_flag_url": "https://flagcdn.com/fr.svg",
    "latitude": "48.8566",
    "longitude": "2.3522",
    "postal": "75000",
    "access_timestamp": 1717303000,
    "url_id": 107
  },
  {
    "id": 8,
    "os": "macOS 14",
    "browser": "Chrome 124",
    "ip": "192.168.1.17",
    "city": "Buenos Aires",
    "state": "BA",
    "country": "Argentina",
    "country_flag_url": "https://flagcdn.com/ar.svg",
    "latitude": "-34.6037",
    "longitude": "-58.3816",
    "postal": "C1000",
    "access_timestamp": 1717303500,
    "url_id": 108
  },
  {
    "id": 9,
    "os": "Windows 10",
    "browser": "Brave 124",
    "ip": "192.168.1.18",
    "city": "Cape Town",
    "state": "WC",
    "country": "South Africa",
    "country_flag_url": "https://flagcdn.com/za.svg",
    "latitude": "-33.9249",
    "longitude": "18.4241",
    "postal": "8000",
    "access_timestamp": 1717304000,
    "url_id": 109
  },
  {
    "id": 10,
    "os": "Android 12",
    "browser": "Opera Mobile",
    "ip": "192.168.1.19",
    "city": "Mumbai",
    "state": "MH",
    "country": "India",
    "country_flag_url": "https://flagcdn.com/in.svg",
    "latitude": "19.0760",
    "longitude": "72.8777",
    "postal": "400001",
    "access_timestamp": 1717304500,
    "url_id": 110
  }
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
  },
  {
    accessorKey: "os",
    header: "SO",
  },
  {
    accessorKey: "browser",
    header: "Browser",
  },
  {
    accessorKey: "ip",
    header: "IP",
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
  },
  {
    accessorKey: "postal",
    header: "CEP",
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
      const date = new Date(rawTimestamp as number * 1000)

      const day = String(date.getDate()).padStart(2, "0")
      const month = String(date.getMonth() + 1).padStart(2, "0")
      const year = String(date.getFullYear()).slice(2)
      const hour = String(date.getHours()).padStart(2, "0")
      const minutes = String(date.getMinutes()).padStart(2, "0")

      const formatted = `${day}/${month}/${year} - ${hour}h:${minutes}m`

      return <div className="text-sm">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const access = row.original

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
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="">
              {table.getState().pagination.pageSize} Linhas por página <ChevronDown />
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
    </div>
  )
}
