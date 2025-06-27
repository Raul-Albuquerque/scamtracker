import { BankInfo } from "@/types/bank"

export const banks: Record<string, BankInfo> = {
  santander: {
    name: "santander",
    background: "bg-red-600",
    text: "text-red-600"
  },
  nubank: {
    name: "nubank",
    background: "bg-violet-900",
    text: "text-violet-900"
  },
  caixa: {
    name: "caixa",
    background: "bg-[#0072AD]",
    text: "text-[#0072AD]"
  },
  inter: {
    name: "inter",
    background: "bg-orange-500",
    text: "text-orange-500"
  },
}