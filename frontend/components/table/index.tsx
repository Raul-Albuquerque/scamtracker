import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Access, AccessList } from "@/types/access"

const access: AccessList = [
  {
    "id": 3,
    "os": "test",
    "platform": "plataforma",
    "city": "Cidade",
    "country": "País",
    "location": "Lat e Long",
    "net_provider": "provedor",
    "postal": "19756793",
    "region": "região",
    "hostname": "host",
    "access_timestamp": 1298392813,
  },
  {
    "id": 4,
    "os": "test",
    "platform": "plataforma",
    "city": "Cidade",
    "country": "País",
    "location": "Lat e Long",
    "net_provider": "provedor",
    "postal": "19756793",
    "region": "região",
    "hostname": "host",
    "access_timestamp": 1298392813,
  }
]

export function CustomTable() {
  return (
    <Table>
      <TableCaption>
        <span>Total de </span>
        <strong>{access.length}</strong>
        <span> acessos.</span>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">SO</TableHead>
          <TableHead>Plataforma</TableHead>
          <TableHead>Cidade</TableHead>
          <TableHead className="text-right">País</TableHead>
          <TableHead className="w-[100px]">Localização</TableHead>
          <TableHead>Provedor</TableHead>
          <TableHead>CEP</TableHead>
          <TableHead className="text-right">Hostname</TableHead>
          <TableHead className="text-right">Data/Hora Acesso</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {access.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.os}</TableCell>
            <TableCell>{item.platform}</TableCell>
            <TableCell>{item.city}</TableCell>
            <TableCell className="text-right">{item.country}</TableCell>
            <TableCell className="font-medium">{item.location}</TableCell>
            <TableCell>{item.net_provider}</TableCell>
            <TableCell>{item.postal}</TableCell>
            <TableCell className="text-right">{item.hostname}</TableCell>
            <TableCell className="text-right">{item.access_timestamp}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
