import { useEffect, useState } from "react";
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
  const [cardsData, setCardsData] = useState<any[]>([]);

  useEffect(() => {
    const remoteResponse = localStorage.getItem("remote_response");
    const progressResponse = localStorage.getItem("progress_response");
    const finalStatistics = localStorage.getItem("final_statistics");

    console.log("📌 Remote Response:", remoteResponse ? JSON.parse(remoteResponse) : null);
    console.log("📌 Progress Response:", progressResponse ? JSON.parse(progressResponse) : null);
    console.log("📊 Final Statistics:", finalStatistics ? JSON.parse(finalStatistics) : null);

    if (finalStatistics) {
      const parsed = JSON.parse(finalStatistics);
      const passengerInfos = parsed?.Response?.Data?.PassengerFlowInfos || [];
      setCardsData(passengerInfos.slice(1, 5)); // solo las primeras 4 cámaras
    }
  }, []);

  return (
    <DashboardLayout title="Dashboard de Usuario">
      <h1 className="text-2xl font-bold mb-2 text-indigo-900">Dashboard Principal</h1>

      {/* Cards dinámicas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {cardsData.length > 0 ? (
          cardsData.map((info: any, idx: number) => (
            <Card
              key={idx}
              title={`Cámara ${info.ID}`}
              value={info.EnterCountList[0]}
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
