export default function Sidebar() {
  return (
    <aside className="w-64 bg-indigo-700 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">Dashboard COMEX</h2>
      <nav className="space-y-4">
        <a href="#" className="block hover:text-indigo-200">Inicio</a>
        <a href="#" className="block hover:text-indigo-200">Reportes</a>
        <a href="#" className="block hover:text-indigo-200">Configuración</a>
      </nav>
    </aside>
  );
}
