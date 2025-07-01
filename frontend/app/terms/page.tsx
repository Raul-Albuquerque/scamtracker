import { Header } from "@/components/header"
import { termsOfUse } from "@/data/terms"

export default function TermsPage() {
  const { sections } = termsOfUse

  return (
    <>
      <Header page="terms" />
      <main className="container mx-auto py-6 px-4 text-start flex flex-col items-start justify-start gap-3">
        <section>
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-balance">
            {termsOfUse.title}
          </h1>
          <p className="mt-2">
            <strong>Última atualização: </strong>
            <span>{termsOfUse.modifiedDate}</span>
          </p>
          <p className="mt-3">{termsOfUse.greeting}</p>
        </section>
        {sections.map((section, index) => (
          <article key={index}>
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-4">
              {section.heading}
            </h2>
            {section.content.map((content, index) => (
              <p className="mt-2" key={index}>
                {content}
              </p>
            ))}
          </article>
        ))}
      </main>
    </>
  )
}
