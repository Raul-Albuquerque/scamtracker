import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Linkedin, Twitter, X, Youtube } from "lucide-react"
import Image from "next/image"

import { banks } from "@/constants/banks"

export default function DemoPage() {

  const bankKey = "caixa"
  const bank = banks[bankKey]

  return (
    <main className='container max-w-[680px] mx-auto py-6 px-6 bg-neutral-50'>
      <section
        className="flex items-start justify-between py-3"
      >
        <Image src={`/static/images/demoPage/${bank.name}/logo.webp`} alt="logo banco" height={24} width={160} />
        <div className="flex flex-col justify-start items-end text-end">
          <h5 className="text-sm font-semibold">Comprovante de transferência</h5>
          <h6 className="text-[10px] sm:text-xs text-neutral-500 text-end">Transação: PAG20259JADJU1821828183</h6>
          <p className="text-xs text-neutral-500">Solicitação: <span>25/06/2025</span></p>
        </div>
      </section>
      <section className="flex items-center justify-between pt-6">
        <div className="flex flex-col items-start justify-center">
          <h4 className="font-semibold text-sm">Transferência realizada!</h4>
          <h3 className="font-bold text-2xl text-neutral-500">R$ <span>100,00</span></h3>
          <span className="text-sm text-neutral-600">15/07/2025</span>
        </div>
        <Image src={`/static/images/demoPage/${bank.name}/icon.png`} alt="Ícone sucesso" width={160} height={40} />
      </section>
      <section className="pt-3">
        <h2 className="text-md font-semibold text-neutral-600">Conta de origem</h2>
        <Separator />
        <div className="py-3">
          <span className="block text-neutral-400 text-semibold">NOME</span>
          <span>******* Santos da *****</span>
        </div>
        <div className="flex items-center justify-start gap-6">
          <div className="">
            <span className="block text-neutral-400 text-semibold">AGÊNCIA</span>
            <span>1234-5</span>
          </div>
          <div className="">
            <span className="block text-neutral-400 text-semibold">CONTA</span>
            <span>****78**</span>
          </div>
        </div>
      </section>
      <section className="mt-4 pt-4">
        <h2 className="text-md font-semibold text-neutral-600">Conta de destino</h2>
        <Separator />
        <div className="pt-3">
          <span className="block text-neutral-400 text-semibold">NOME</span>
          <span>******* Manoel ***** de *****</span>
        </div>
        <div className="pt-3">
          <span className="block text-neutral-400 text-semibold">BANCO</span>
          <span>BANCO BRADESCO S.A.</span>
        </div>
        <div className="flex items-center justify-start gap-6 pt-3">
          <div className="">
            <span className="block text-neutral-400 text-semibold">AGÊNCIA</span>
            <span>5678-9</span>
          </div>
          <div className="">
            <span className="block text-neutral-400 text-semibold">CONTA</span>
            <span>*32****</span>
          </div>
        </div>
        <div className="py-3">
          <span className="block text-neutral-400 text-semibold">TIPO</span>
          <span>Conta Corrente</span>
        </div>
      </section>
      <section className="pt-14 flex flex-col md:flex-row gap-10 md:gap-2 items-start justify-between">
        <div>
          <Image
            src={`/static/images/demoPage/${bank.name}/logo.webp`}
            alt="ícone banco"
            width={160}
            height={40}
            className="object-contain"
          />
          <div className="text-sm pt-2">
            <p>
              <span>Central de Atendimento:</span> <strong className={`${bank.text}`}>3002 5060</strong>
            </p>
            <span>(capitais e regiões metropolitanas)</span>
            <p>
              <strong className={`${bank.text}`}>0800 879 0002</strong> <span>(demais localidades)</span>
            </p>
          </div>
        </div>
        <div>
          <ul className="flex items-center justify-start gap-2">
            <li className={`${bank.background} text-neutral-50 p-2 rounded-full`}>
              <Facebook />
            </li>
            <li className={`${bank.background} text-neutral-50 p-2 rounded-full`}>
              <Instagram />
            </li>
            <li className={`${bank.background} text-neutral-50 p-2 rounded-full`}>
              <Twitter />
            </li>
            <li className={`${bank.background} text-neutral-50 p-2 rounded-full`}>
              <Youtube />
            </li>
            <li className={`${bank.background} text-neutral-50 p-2 rounded-full`}>
              <Linkedin />
            </li>
          </ul>
          <div className="text-sm pt-2">
            <p>
              <span>Deficiente de fala e audição:</span>
            </p>
            <strong className={`${bank.text}`}>0800 872 8749</strong>
            <p>
              <span>Ouvidoria: </span><strong className={`${bank.text}`}>0800 839 7602</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}