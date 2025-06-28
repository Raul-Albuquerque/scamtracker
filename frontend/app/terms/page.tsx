import { Header } from "@/components/header";

export default function TermsPage() {

  return (
    <>
      <Header />
      <main className='container mx-auto py-6 px-4 text-start flex flex-col items-start justify-start gap-3'>
        <section>
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-balance">
            Termos de Uso
          </h1>
          <p className="mt-2">
            <strong>Última atualização: </strong><span>27/06/2025.</span>
          </p>
          <p className="mt-3">
            Seja bem-vindo ao SCAMTRACKER! Antes de utilizar a plataforma, leia atentamente os Termos de Uso abaixo.
          </p>
        </section>
        <section>
          <h2 className="scroll-m-20 border-b text-2xl font-semibold tracking-tight mt-4">
            1. Objetivo do Projeto
          </h2>
          <p className="mt-2">
            Este aplicativo foi desenvolvido com fins exclusivamente educacionais
            e de portfólio. Seu propósito é demonstrar conceitos técnicos e
            auxiliar na conscientização sobre golpes de engenharia social,
            muito comuns em plataformas de compra e venda de produtos.
          </p>
        </section>
        <section>
          <h2 className="scroll-m-20 border-b text-2xl font-semibold tracking-tight mt-4">
            2. Funcionamento da Plataforma
          </h2>
          <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
            <li>
              O usuário pode gerar uma URL personalizada e um token de acesso.
            </li>
            <li>
              Através dessa URL, dados básicos de acesso (como IP, localização e agente
              de navegação) são registrados e apresentados no painel do usuário.
            </li>
            <li>
              A plataforma oferece uma página de demonstração (demo) que simula um
              ambiente de comprovante bancário fictício. Essa página não representa
              instituições reais e não deve ser usada para fins de engano.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="scroll-m-20 border-b text-2xl font-semibold tracking-tight mt-4">
            3. Responsabilidade do Usuário
          </h2>
          <p className="mt-2">Ao utilizar o aplicativo, você concorda que:</p>
          <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
            <li>
              Não utilizará a plataforma para fins ilegais, fraudulentos,
              maliciosos ou que possam causar dano a terceiros.
            </li>
            <li>
              Não usará o app para enganar, extorquir, induzir ou manipular pessoas.
            </li>
            <li>
              É integralmente responsável por qualquer uso que fizer da
              plataforma, inclusive consequências legais decorrentes de abusos.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="scroll-m-20 border-b text-2xl font-semibold tracking-tight mt-4">
            4. Isenção de Responsabilidade
          </h2>
          <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
            <li>
              O autor do projeto não é responsável por qualquer uso indevido da
              ferramenta por parte dos usuários.
            </li>
            <li>
              O projeto não coleta, armazena ou compartilha dados pessoais
              identificáveis de forma intencional.
            </li>
            <li>
              Todos os dados coletados são exibidos apenas no painel
              vinculado ao token gerado e não são divulgados publicamente.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="scroll-m-20 border-b text-2xl font-semibold tracking-tight mt-4">
            5. Limitação de Garantia
          </h2>
          <p className="mt-2">
            Este projeto é fornecido "no estado em que se encontra" e não há
            garantias de disponibilidade, estabilidade ou precisão dos dados fornecidos.
          </p>
        </section>
        <section>
          <h2 className="scroll-m-20 border-b text-2xl font-semibold tracking-tight mt-4">
            6. Modificações e Encerramento
          </h2>
          <p className="mt-2">
            O autor poderá, a qualquer momento, modificar ou descontinuar o
            funcionamento da plataforma, sem necessidade de aviso prévio.
          </p>
        </section>
        <section>
          <h2 className="scroll-m-20 border-b text-2xl font-semibold tracking-tight mt-4">
            7. Aceitação dos Termos
          </h2>
          <p className="mt-2">
            Ao utilizar qualquer funcionalidade do aplicativo, você declara ter
            lido, compreendido e aceitado integralmente estes Termos de Uso.
          </p>
        </section>
      </main>
    </>
  )
}