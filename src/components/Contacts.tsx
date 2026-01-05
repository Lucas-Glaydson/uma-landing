const Contacts = () => {
  return (
    <section id="contacts" className="h-72 flex items-center flex-col justify-center gap-5 lg:gap-10 lg:h-62 w-full lg:py-40">
      <article >
        <h1 className="text-center text-2xl lg:text-4xl font-bold">Nos encontre de forma rápida!</h1>
      </article>
      <nav className="flex justify-center items-center gap-4">
        <a href="https://www.instagram.com/uniaodemaesdeanjos.pe/">
          <img src="insta.svg" alt="Instagram" />
        </a>
        <a href="">
          <img src="facebook.svg" alt="Facebook" />
        </a>
        <a href="">
          <img src="whats.svg" alt="Whatsapp" />
        </a>
        <a href="">
          <img src="email.svg" alt="Email" />
        </a>
      </nav>
    </section>
  )
}

export default Contacts;