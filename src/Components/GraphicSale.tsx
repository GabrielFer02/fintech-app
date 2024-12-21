import React from "react";
import { IVenda } from "../Context/DataContext";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const infoGraphics = [
  {
    data: "2023-05-03",
    pago: 3000,
    processando: 35345,
    falha: 56456,
  },
  {
    data: "2023-05-03",
    pago: 3000,
    processando: 35345,
    falha: 56456,
  },
  {
    data: "2023-05-03",
    pago: 3000,
    processando: 35345,
    falha: 56456,
  },
];

type SaleDay = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: IVenda[]): SaleDay[] {
  return [
    {
      data: "2023-05-03",
      pago: 3000,
      processando: 35345,
      falha: 56456,
    },
  ];
}

const GraphicSale = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={infoGraphics}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#a36af9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#fbcb21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraphicSale;
