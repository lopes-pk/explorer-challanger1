import banner from './banner.png'
import buttonScroll from './setaScroll.png'
import planet1 from './planetOrange.png'
import planet2 from './planetBlue.png'
import planet3 from './planetPink.png'
import Card from './components/Card'
import iconeUsuarioInput from './iconeUsuarioInput.png'
import iconeEmailInput from './iconeEmailInput.png'
import bgPattern from './bgPattern.png'
export default function App() {
  const imagens = [
    {
      imagem: planet1,
      title: 'Não pare nunca',
      text: 'Se você deseja ter sucesso nos estudos, é fundamental que você adote uma mentalidade de não pare nunca. Estudar de forma consistente e contínua é a chave para o progresso e a conquista de seus objetivos.',
    },
    {
      imagem: planet2,
      title: 'Só volta',
      text: 'Se você parou ou perdeu o ritmo em alguma atividade ou projeto, saiba que nunca é tarde para recomeçar. Às vezes, as circunstâncias podem mudar, ou podemos nos sentir desmotivados ou sobrecarregados.',
    },
    {
      imagem: planet3,
      title: 'Siga seu ritmo',
      text: 'Avançar pouco a pouco mantém progresso constante em objetivos, evitando parar ou desistir. Mesmo pequenos passos nos aproximam do destino e motivam a continuidade. Não subestime o poder de cada ação rumo ao objetivo final.',
    },
  ]

  function scrollPage() {
    if (window.scrollY < 668) {
      window.scrollTo({
        top: 668,
        behavior: 'smooth',
      })
    }
  }
  return (
    <>
      <section className="flex h-screen w-full flex-col items-center bg-purple-50 md:relative md:grid md:grid-cols-2">
        <div
          style={{
            background: `url(${banner})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}
          className="h-[370px] w-[364px] bg-no-repeat md:absolute md:right-0 md:top-0 md:h-[600px] md:w-[520px]"
        />
        <div className="mx-auto flex flex-col items-center md:relative md:mb-16 md:items-start">
          <div className="mt-4">
            <h2 className="text-[32px] font-black text-pink-600 md:text-5xl">
              Explore sem limites
            </h2>
            <p className="text-[20px] font-light text-slate-700 md:text-3xl">
              Porque o aprendizado é contínuo
            </p>
          </div>
          <img
            src={buttonScroll}
            alt="Botão para scrollar a página"
            className="mt-8 h-24 w-14 md:absolute md:-bottom-52 md:h-20 md:w-11"
            onClick={scrollPage}
          />
        </div>
      </section>
      <section className="flex h-auto w-full flex-col items-center gap-12 bg-[#312D64] py-11 md:flex-row md:justify-center">
        {imagens.map((item, i) => (
          <Card
            image={item.imagem}
            title={item.title}
            text={item.text}
            key={i}
          />
        ))}
      </section>
      <section className="w-full bg-purple-50 py-6 md:grid md:grid-cols-2 md:py-0">
        <form className="mt-8 md:py-10 md:pr-8">
          <fieldset className="flex flex-col gap-5 px-8 py-10">
            <legend className="text-3xl font-black text-[#B52184]">
              Entre em contato
            </legend>
            <label htmlFor="usuario" className="hidden">
              Usuario
            </label>
            <div className="flex items-center gap-1 rounded-2xl border-2 border-slate-700 py-[12px] pl-2 pr-4">
              <img src={iconeUsuarioInput} alt="Icone do input de usuário" />
              <input
                id="usuario"
                type="text"
                placeholder="Seu nome"
                className="h-full w-full font-semibold outline-none placeholder:text-[#312D64]"
              />
            </div>
            <label htmlFor="email" className="hidden">
              Email
            </label>
            <div className="flex items-center gap-1 rounded-2xl border-2 border-slate-700 py-[12px] pl-2 pr-4">
              <img src={iconeEmailInput} alt="Icone do input de usuário" />
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="font-semibold outline-none placeholder:text-[#312D64]"
              />
            </div>

            <input
              type="text"
              placeholder="Digite sua mensagem aqui..."
              className="h-32 rounded-2xl border-2 border-slate-700 pb-24 pl-2 pr-4 text-[16px] 
              font-semibold
              leading-snug
              outline-none placeholder:text-slate-700 md:h-36"
            />
            <button
              type="submit"
              className="h-11 w-36 rounded-2xl bg-[#312D64] p-2 text-center text-sm capitalize leading-normal text-white "
            >
              Enviar Mensagem
            </button>
          </fieldset>
        </form>
        <div
          style={{
            background: `url(${bgPattern})`,
            backgroundPositionX: '16px',
            backgroundRepeat: 'no-repeat',
          }}
          className="bg- bg-cover"
        />
      </section>
      <footer className="w-full bg-[#312D64] py-8 text-center text-[19.381132125854492px]  text-white">
        © 2023 - Rocketseat Explorer
      </footer>
    </>
  )
}
