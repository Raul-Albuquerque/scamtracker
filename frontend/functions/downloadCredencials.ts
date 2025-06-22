
import { Credencials } from "@/types/credencials";

export function downloadCredencials({ username, token, url, url_param }: Credencials) {
  const content = `
      Username: ${username}
      Token: ${token}
      URL de acesso: ${url}
      URL Param: ${url_param}

      🛑 Atenção: este token será exibido apenas uma vez.
      Salve este arquivo em um local seguro. Você precisará dele para acessar seu dashboard.
  `

  const blob = new Blob([content], { type: "text/plain" })
  const link = document.createElement("a")
  link.href = URL.createObjectURL(blob)
  link.download = `${username}-credencials.txt`
  link.click()
}