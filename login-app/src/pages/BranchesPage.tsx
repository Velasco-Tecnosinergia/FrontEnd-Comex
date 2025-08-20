// src/pages/Sucursales.tsx
import { useState } from "react";
import BranchesLayout from "../layouts/BranchesLayout";
import PieChartCard from "../components/PieChartCard";
import StateCard from "../components/StateCard";
import { sucursalesData } from "../data/sucursales";

export default function Sucursales() {
  const [selectedEstados, setSelectedEstados] = useState<string[]>([]);

  const toggleEstado = (estado: string) => {
    setSelectedEstados((prev) =>
      prev.includes(estado) ? prev.filter((e) => e !== estado) : [...prev, estado]
    );
  };

  return (
    <BranchesLayout>
      <h1 className="text-2xl font-bold mb-6">Sucursales por Estado</h1>

      {/* Cards con checkboxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {sucursalesData.map((estado) => (
          <StateCard
            key={estado.estado}
            estado={estado.estado}
            sucursalesCount={estado.sucursales.length}
            checked={selectedEstados.includes(estado.estado)}
            onToggle={toggleEstado}
          />
        ))}
      </div>

      {/* Mostrar gráficos de sucursales seleccionadas */}
      {sucursalesData.map(
        (estado) =>
          selectedEstados.includes(estado.estado) && (
            <div key={estado.estado} className="mb-10">
              <h2 className="text-xl font-bold mb-4">{estado.estado}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {estado.sucursales.map((sucursal) => (
                  <PieChartCard
                    key={sucursal.id}
                    title={sucursal.name}
                    data={sucursal.chart}
                  />
                ))}
              </div>
            </div>
          )
      )}
    </BranchesLayout>
  );
}
