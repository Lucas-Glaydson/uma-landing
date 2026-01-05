import Line from "./Line";

const Founder = () => {
  return (
    <section id="founder" className="
      flex flex-col items-center
      w-full max-w-[1920px] px-4 lg:px-8
      lg:flex-row-reverse lg:justify-evenly
      gap-8 lg:gap-12 lg:py-20
    ">

      <div className="flex flex-col justify-center max-w-2xl lg:text-left">
        <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-center">
          Conheça a nossa fundadora!
        </h1>
        <p className="text-sm lg:text-base leading-relaxed text-center max-w-lg mx-auto lg:mx-0">
          Somos um movimento dedicado à defesa dos direitos de crianças e mães
          afetadas pela Síndrome Congênita do Zika Vírus. Nosso compromisso é
          garantir acesso à saúde, educação, inclusão e apoio social para todas
          as famílias impactadas. Acreditamos na força da união e da empatia
          para transformar realidades, promover dignidade e construir um futuro
          com mais justiça e esperança.
        </p>
      </div>

      <img
        className="
          rounded-2xl w-full max-w-md lg:max-w-lg h-auto
          shadow-2xl
        "
        src="founder.jpg"
        alt="image founder"
      />

      <Line />
    </section>
  );
};

export default Founder;
