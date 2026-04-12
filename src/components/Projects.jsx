export default function Projects() {

  const projetos = [
    {
      id: 1,
      title: "Sistema de Catering",
      description: "Projeto de banco de dados"
    },
    {
      id: 2,
      title: "Análise UI/UX",
      description: "Estudo sobre aplicativos"
    }
  ];

  return (
    <section>
      <h2>Meus Projetos</h2>

      {projetos.map(projeto => (
        <div key={projeto.id}>
          <h3>{projeto.title}</h3>
          <p>{projeto.description}</p>
        </div>
      ))}

    </section>
  );
}