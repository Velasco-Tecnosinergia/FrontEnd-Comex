import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

interface LineChartCardProps {
  title: string;
  data: any[];
}

export default function LineChartCard({ title, data }: LineChartCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow h-80">
      <h3 className="text-indigo-950 mb-0 font-bold">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Clientes" stroke="#016630" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
