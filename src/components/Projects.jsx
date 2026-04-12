export default function Projects() {

  const projetos = [
    {
      id: 1,
      nome: "Portfólio Web",
      descricao: "Site pessoal desenvolvido com HTML, CSS e JavaScript."
    },
    {
      id: 2,
      nome: "Sistema de Cadastro",
      descricao: "Projeto simples com lógica de programação."
    }
  ];

  return (
    <section style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Meus Projetos</h2>

      <div style={{
        display: "grid",
        gap: "20px",
        marginTop: "20px",
        justifyContent: "center"
      }}>
        {projetos.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #eee",
              padding: "20px",
              width: "320px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              textAlign: "left",
              transition: "0.3s"
            }}
          >
            <h3>{item.nome}</h3>
            <p style={{ color: "#555" }}>{item.descricao}</p>

            <button style={{
              marginTop: "10px",
              padding: "8px 12px",
              border: "none",
              background: "#000",
              color: "#fff",
              borderRadius: "6px",
              cursor: "pointer"
            }}>
              Ver projeto
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}