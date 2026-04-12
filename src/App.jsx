import Header from "./components/Header";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div style={{
      maxWidth: "900px",
      margin: "0 auto",
      padding: "20px"
    }}>
      <Header />
      <Projects />
    </div>
  );
}