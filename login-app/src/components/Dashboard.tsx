// src/components/Dashboard.tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const barData = [
  { name: 'Ene', ventas: 4000, gastos: 2400 },
  { name: 'Feb', ventas: 3000, gastos: 1398 },
  { name: 'Mar', ventas: 2000, gastos: 9800 },
  { name: 'Abr', ventas: 2780, gastos: 3908 },
  { name: 'May', ventas: 1890, gastos: 4800 },
  { name: 'Jun', ventas: 2390, gastos: 3800 },
  { name: 'Jul', ventas: 3490, gastos: 4300 },
];

const lineData = [
  { name: 'Ene', clientes: 400 },
  { name: 'Feb', clientes: 300 },
  { name: 'Mar', clientes: 200 },
  { name: 'Abr', clientes: 278 },
  { name: 'May', clientes: 189 },
  { name: 'Jun', clientes: 239 },
  { name: 'Jul', clientes: 349 },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white p-5">
        <h2 className="text-2xl font-bold mb-8">Mi Dashboard</h2>
        <nav className="space-y-4">
          <a href="#" className="block hover:text-indigo-200">Inicio</a>
          <a href="#" className="block hover:text-indigo-200">Reportes</a>
          <a href="#" className="block hover:text-indigo-200">Configuración</a>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-6">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600">Ventas</h3>
            <p className="text-2xl font-bold">$6,280</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600">Clientes</h3>
            <p className="text-2xl font-bold">1,259</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600">Pedidos</h3>
            <p className="text-2xl font-bold">2,434</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600">Rating</h3>
            <p className="text-2xl font-bold">8.5</p>
          </div>
        </div>

        {/* Gráficas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow h-80">
            <h3 className="text-gray-700 mb-4">Ventas vs Gastos</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="ventas" fill="#4f46e5" />
                <Bar dataKey="gastos" fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded-lg shadow h-80">
            <h3 className="text-gray-700 mb-4">Crecimiento de Clientes</h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="clientes" stroke="#10b981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
