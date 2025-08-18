import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import BarChartCard from "../components/BarChartCard";
import LineChartCard from "../components/LineChartCard";
import { barData } from "../data/barData";
import { lineData } from "../data/lineData";
import Table from "../components/Table";

export default function Dashboard() {
  return (
    <DashboardLayout title="Dashboard de Usuario">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card title="Camara 1" value="1,002,500" />
        <Card title="Camara 2" value="1,100,900" />
        <Card title="Camara 3" value="1,050,900" />
        <Card title="Camara 4" value="987,500" />
      </div>

      {/* Gráficas */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <BarChartCard title="Clientes Presentes" data={barData} />
        <LineChartCard title="Clientes Totales" data={lineData} />
      </div>

      {/* Tabla */}
      <div className="pt-8">
        <Table />
      </div>
    </DashboardLayout>
  );
}
