import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/home">Inicio</Link></li>
        <li><Link to="/recipes">Recetas</Link></li>
        <li><Link to="/videos">Rutinas</Link></li>
      </ul>
    </aside>
  );
}
