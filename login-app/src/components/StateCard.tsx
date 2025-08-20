import { FaCity } from "react-icons/fa";

interface StateCardProps {
  estado: string;
  sucursalesCount: number;
  checked: boolean;
  onToggle: (estado: string) => void;
}

export default function StateCard({
  estado,
  sucursalesCount,
  checked,
  onToggle,
}: StateCardProps) {
  return (
    <div
      onClick={() => onToggle(estado)}
      className={`cursor-pointer p-6 rounded-xl shadow-lg flex items-center justify-between transition-all
        ${
          checked
            ? "bg-indigo-200 border-2 border-indigo-500"
            : "bg-white hover:bg-gray-200 border border-gray-300"
        }`}
    >
      {/* Lado izquierdo con icono + nombre + cantidad */}
      <div className="flex items-center gap-3">
        <FaCity
          className={`text-xl ${checked ? "text-indigo-600" : "text-gray-600"}`}
        />
        <div>
          <span className="font-semibold text-lg">{estado}</span>
          <p className="text-sm text-gray-500">{sucursalesCount} sucursales</p>
        </div>
      </div>

      {/* Checkbox (solo visual, ya que toda la card es clickable) */}
      <input
        type="checkbox"
        checked={checked}
        readOnly
        className="w-5 h-5 accent-indigo-600 cursor-pointer"
      />
    </div>
  );
}
