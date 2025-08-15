// src/components/Dashboard.tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const barData = [
  { name: 'Lunes', Llegaron: 5400, Dejaron: 5400 , Presentes: 0},
  { name: 'Martes', Llegaron: 6000, Dejaron: 6000 , Presentes: 0},
  { name: 'Miercoles', Llegaron: 5700, Dejaron: 5700 , Presentes: 0},
  { name: 'Jueves', Llegaron: 6100, Dejaron: 6100 , Presentes: 0},
  { name: 'Viernes', Llegaron: 7500, Dejaron: 7500 , Presentes: 0},
  { name: 'Sabado', Llegaron: 7000, Dejaron: 7000 , Presentes: 0},
  { name: 'Domingo', Llegaron: 4000, Dejaron: 3700 , Presentes: 300},
];

const lineData = [
  { name: 'Ene', Clientes: 100000 },
  { name: 'Feb', Clientes: 101250 },
  { name: 'Mar', Clientes: 90000 },
  { name: 'Abr', Clientes: 95000 },
  { name: 'May', Clientes: 105300 },
  { name: 'Jun', Clientes: 80000 },
  { name: 'Jul', Clientes: 85000 },
  { name: 'Ago', Clientes: 87500 },
  { name: 'Sep', Clientes: 99000 },
  { name: 'Oct', Clientes: 100500 },
  { name: 'Nov', Clientes: 102500 },
  { name: 'Dic', Clientes: 5000 },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-200">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white p-5">
        <h2 className="text-2xl font-bold mb-8">Dashboard COMEX</h2>
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
            <h3 className="text-gray-600">Camara 1</h3>
            <p className="text-2xl font-bold">1,002,500</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600">Camara 2</h3>
            <p className="text-2xl font-bold">1,100,900</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600">Camara 3</h3>
            <p className="text-2xl font-bold">1,050,900</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-600">Camara 4</h3>
            <p className="text-2xl font-bold">987,500</p>
          </div>
        </div>

        {/* Gráficas */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          <div className="bg-white p-4 rounded-lg shadow h-80">
            <h3 className="text-gray-700 mb-4">Clientes Presentes</h3>
            <ResponsiveContainer className="" width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Llegaron" fill="#1A8057" />
                <Bar dataKey="Dejaron" fill="#DEB500" />
                <Bar dataKey="Presentes" fill="#9C1A15" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded-lg shadow h-80">
            <h3 className="text-gray-700 mb-4">Crientes totales</h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Clientes" stroke="#032263" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </main>
    </div>
  );
}
