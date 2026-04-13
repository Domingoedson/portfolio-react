import './App.css'

function App() {
  const projetos = [
    {
      id: 1,
      titulo: "Portfólio Web",
      descricao: "Site pessoal desenvolvido com HTML, CSS e JavaScript."
    },
    {
      id: 2,
      titulo: "Sistema de Cadastro",
      descricao: "Projeto simples com lógica de programação."
    }
  ]

  return (
    <>
      {/* Topo */}
      <div className="topo">
        <h1>Meu Portfólio</h1>
      </div>

      <div className="container">
        {/* Sobre mim */}
        <section className="sobre">
          <h2>Sobre mim</h2>
          <p>
            Sou estudante de Sistemas para Internet, focado em desenvolvimento web e
            Inteligência Artificial. Busco criar soluções simples e eficientes através da tecnologia.
          </p>
        </section>

        {/* Projetos */}
        <section>
          <h2>Meus Projetos</h2>

          <div className="projetos">
            {projetos.map((item) => (
              <div key={item.id} className="card">
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
                <button>Ver projeto</button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Rodapé */}
      <footer className="rodape">
        <p>© 2026 - Meu Portfólio</p>
      </footer>
    </>
  )
}

export default App