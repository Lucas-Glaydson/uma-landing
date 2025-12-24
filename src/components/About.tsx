const About = () => {
  return (
    <section className="mt-15 flex flex-col lg:flex-row lg:justify-evenly lg:mt-26 items-center w-full lg:px-5 max-w-[1920px] justify-center gap-5">
      <div className="flex flex-col justify-center max-w-2xl">
        <h1 className="text-center text-2xl lg:text-4xl font-bold">Quem somos?</h1>
        <p className="text-center p-5 text-sm lg:text-base mb-4">Somos um movimento dedicado à defesa dos direitos de crianças e mães afetadas pela Síndrome Congênita do Zika Vírus. Nosso compromisso é garantir acesso à saúde, educação, inclusão e apoio social para todas as famílias impactadas. Acreditamos na força da união e da empatia para transformar realidades, promover dignidade e construir um futuro com mais justiça e esperança.</p>
      </div>
      <img className="md:rounded-xl mt-2 md:max-w-2xl lg:max-w-xl lg:mt-0" src="about-image.jpg" alt="image about us" />
    </section>
  )
};

export default About;