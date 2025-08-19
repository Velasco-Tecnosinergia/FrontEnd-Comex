import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import BarChartCard from "../components/BarChartCard";
import LineChartCard from "../components/LineChartCard";
import PieChartCard from "../components/PieChartCard";
import { barData } from "../data/barData";
import { lineData } from "../data/lineData";
import Table from "../components/Table";
import { pieData1 } from "../data/pieData1";
import { pieData2 } from "../data/pieData2";
import { pieData3 } from "../data/pieData3";
import { pieData4 } from  "../data/pieData4"

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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        <PieChartCard title="Comex Puebla" data={pieData1} />
        <PieChartCard title="Comex CDMX" data={pieData2} />
        <PieChartCard title="Comex Veracruz" data={pieData3} />
        <PieChartCard title="Comex Guadalajara" data={pieData4} />
      </div>

      {/* Tabla */}
      <div className="pt-8">
        <Table />
      </div>
    </DashboardLayout>
  );
}
