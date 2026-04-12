export default function Header() {
  return (
    <header style={{
      textAlign: "center",
      padding: "40px 20px"
    }}>
      <h1 style={{ fontSize: "36px" }}>Meu Portfólio</h1>

      <h2 style={{ color: "#555", fontWeight: "normal" }}>
        Desenvolvedor em formação
      </h2>

      <p style={{
        maxWidth: "600px",
        margin: "10px auto",
        lineHeight: "1.6",
        color: "#444"
      }}>
        Sou estudante de Sistemas para Internet, focado em desenvolvimento web e Inteligência Artificial.
        Busco criar soluções simples e eficientes através da tecnologia.
      </p>
    </header>
  );
}