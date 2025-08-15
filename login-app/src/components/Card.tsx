interface CardProps {
  title: string;
  value: string | number;
}

export default function Card({ title, value }: CardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-gray-600">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
