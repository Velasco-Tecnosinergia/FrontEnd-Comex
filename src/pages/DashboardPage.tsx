import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import BarChartCard from "../components/BarChartCard";
import LineChartCard from "../components/LineChartCard";
import PieChartCard from "../components/PieChartCard";
import { lineData } from "../data/lineData";
import Table from "../components/Table";
import { pieData1 } from "../data/pieData1";
import { pieData2 } from "../data/pieData2";
import { pieData3 } from "../data/pieData3";
import { pieData4 } from  "../data/pieData4";

interface DailyStat {
  day: string;
  enter: number;
  exit: number;
  present: number;
}

interface ProcessedStat {
  ID: number;
  EnterTotal: number;
  ExitTotal: number;
  Daily?: DailyStat[];
}

export default function Dashboard() {
  const [cardsData, setCardsData] = useState<ProcessedStat[]>([]);
  const [barChartData, setBarChartData] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/statistics/latest")
      .then(res => {
        console.log("📊 Última estadística:", res.data);
        const processed = res.data.processed_statistics || [];
        setCardsData(processed);

        // 🔹 Buscar la cámara 3 y preparar sus datos diarios
        const cam4 = processed.find((c: ProcessedStat) => c.ID === 4);
        if (cam4?.Daily) {
          const formatted = cam4.Daily.map((d: DailyStat) => ({
            name: d.day,        // etiqueta X
            Llegaron: d.enter,  // azul
            Dejaron: d.exit,    // amarillo
            Presentes: d.present // rojo
          }));
          setBarChartData(formatted);
        }
      })
      .catch(err => {
        console.error("Error cargando estadísticas:", err);
      });
  }, []);

  return (
    <DashboardLayout title="Dashboard de Usuario">
      <h1 className="text-2xl font-bold mb-2 text-indigo-900">Dashboard Principal</h1>

      {/* Cards dinámicas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {cardsData.length > 0 ? (
          cardsData.slice(1, 5).map((cam) => (
            <Card
              key={cam.ID}
              title={`Cámara ${cam.ID}`}
              value={`Entradas: ${cam.EnterTotal}`}
            />
          ))
        ) : (
          <>
            <Card title="Cámara 1" value="-" />
            <Card title="Cámara 2" value="-" />
            <Card title="Cámara 3" value="-" />
            <Card title="Cámara 4" value="-" />
          </>
        )}
      </div>

      {/* Gráficas */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <BarChartCard title="Clientes Presentes (Cámara 3)" data={barChartData} />
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
