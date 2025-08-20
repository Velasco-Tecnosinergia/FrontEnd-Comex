// src/data/sucursalesData.ts
export interface SucursalData {
  id: string;
  name: string;
  chart: { name: string; value: number }[];
}

export interface EstadoData {
  estado: string;
  sucursales: SucursalData[];
}

export const sucursalesData: EstadoData[] = [
  {
    estado: "Monterrey",
    sucursales: [
      {
        id: "mt1",
        name: "Sucursal Monterrey 1",
        chart: [
          { name: "Activos", value: 400 },
          { name: "Inactivos", value: 200 },
          { name: "Pendientes", value: 100 },
        ],
      },
      {
        id: "mt2",
        name: "Sucursal Monterrey 2",
        chart: [
          { name: "Activos", value: 300 },
          { name: "Inactivos", value: 150 },
          { name: "Pendientes", value: 50 },
        ],
      },
      {
        id: "mt3",
        name: "Sucursal Monterrey 3",
        chart: [
          { name: "Activos", value: 500 },
          { name: "Inactivos", value: 100 },
          { name: "Pendientes", value: 200 },
        ],
      },
    ],
  },
  {
    estado: "Guadalajara",
    sucursales: [
      {
        id: "gd1",
        name: "Sucursal Guadalajara 1",
        chart: [
          { name: "Activos", value: 600 },
          { name: "Inactivos", value: 200 },
          { name: "Pendientes", value: 150 },
        ],
      },
      {
        id: "gd2",
        name: "Sucursal Guadalajara 2",
        chart: [
          { name: "Activos", value: 400 },
          { name: "Inactivos", value: 300 },
          { name: "Pendientes", value: 100 },
        ],
      },
    ],
  },
  {
    estado: "CDMX",
    sucursales: [
      {
        id: "cd1",
        name: "Sucursal CDMX 1",
        chart: [
          { name: "Activos", value: 450 },
          { name: "Inactivos", value: 250 },
          { name: "Pendientes", value: 80 },
        ],
      },
    ],
  },
];
