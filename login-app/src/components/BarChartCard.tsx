import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

interface BarChartCardProps {
  title: string;
  data: any[];
}

export default function BarChartCard({ title, data }: BarChartCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow h-80">
      <h3 className="text-gray-700 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
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
  );
}
