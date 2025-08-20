import BranchesLayout from "../layouts/BranchesLaout";
import Card from "../components/Card";
import PieChartCard from "../components/PieChartCard";
import { branchData } from "../data/branchData";

export default function Branches() {
  return (
    <BranchesLayout>
      {/* Título */}
      <h1 className="text-2xl font-bold mb-6">Sucursales</h1>

      {/* Cards de información rápida */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card title="Sucursal CDMX" value="1,200 Clientes" />
        <Card title="Sucursal Monterrey" value="980 Clientes" />
        <Card title="Sucursal Guadalajara" value="1,050 Clientes" />
      </div>

      {/* Gráfica de pastel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PieChartCard title="Distribución de Clientes por Sucursal" data={branchData} />
      </div>
    </BranchesLayout>
  );
}
