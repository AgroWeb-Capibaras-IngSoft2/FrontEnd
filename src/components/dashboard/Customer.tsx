import React, { useEffect, useState } from "react";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

/*
const data = [
  { name: "Comprador", value: 60 },
  { name: "Vendedor", value: 40 },
];
*/

const COLORS = ["#17C964", "#006FEE", "#aa0000"];
const estadisticasApiUrl = import.meta.env.VITE_API_ESTADISTICAS_URL
export const Customer: React.FC = () => {

  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch(`${estadisticasApiUrl}/users`)
      .then((response) => {

        return response.json();
      })
      .then((data) => {

        const parsedData = [
          { name: "Comprador", value: data.buyer },
          { name: "Vendedor", value: data.seller },
          { name: "Admin", value: data.admin}
        ];
        setApiData(parsedData);
      })
      .catch((error) => console.error("Error fetching or parsing:", error));
  }, []);

  // Custom Tooltip to show % sign
  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
    if (active && payload && payload.length) {
      let value = payload[0].value;
      if (typeof value === 'number') {
        value = Number.isInteger(value) ? value : value.toFixed(4);
      }
      return (
        <div className="bg-white p-2 rounded shadow text-sm border border-gray-200">
          <span className="font-semibold">{payload[0].name}: </span>
          <span>{value}%</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      {/* Card Header */}
      <div className="px-5 py-4 border-b border-gray-100">
        <h4 className="text-lg font-semibold">Tipo de usuario</h4>
      </div>

      {/* Card Body */}
      <div className="p-5">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={apiData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {apiData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
