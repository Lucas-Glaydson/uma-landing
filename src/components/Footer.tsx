const Footer = () => {
  return (
    <footer className="w-full bg-primary-color text-white 
    p-4 flex flex-col gap-6 md:flex-row borde
    
    ">
      <div className="flex flex-col gap-6 w-full">
        <div>
          <img className="w-12" src="logo.svg" alt="uma logo" />
        </div>

        <div className="flex gap-9">
          <div>
            <h2 className="text-xl">Navegação:</h2>
            <nav className="flex flex-col text-sm gap-2 underline">
              <a href="#about">Quem somos?</a>
              <a href="#founder">Conheça a nossa fundadora!</a>
              <a href="#contacts">Nos encontre de forma rápida!</a>
            </nav>
          </div>

          <div>
            <h2 className="text-xl">Redes:</h2>
            <nav>

            </nav>
          </div>
        </div>

        <div>
          <h2 className="text-xl ">Informações:</h2>
          <nav className="flex flex-col text-sm gap-1 underline">
            <a href="https://maps.app.goo.gl/xsaCvvkz6kXX85Lv5">Recife, PE - Brasil</a>
          </nav>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-6">
          <div className="w-full h-px bg-white flex justify-center items-center "></div>
          <a target="_blank" href="https://our-landing.vercel.app/" className="text-center underline">© 2025 Brain Five.</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer;