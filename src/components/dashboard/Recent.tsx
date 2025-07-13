import React from "react";

import { Icon } from "@iconify/react";

const orders = [
  { id: 1, customer: "Donnaruma", total: 65320, status: "Completo" },
  { id: 2, customer: "Could palmer", total: 32000, status: "Procesado" },
  { id: 3, customer: "Luis Enrique", total: 78000, status: "Enviado" },
  { id: 4, customer: "Messi", total: 56000, status: "Completo" },
  { id: 5, customer: "J Balvin", total: 23750, status: "Procesado" },
];

export const Recent: React.FC = () => {
  // Función para obtener el color según el estado
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completo":
        return "bg-green-100 text-green-800";
      case "Procesado":
        return "bg-yellow-100 text-yellow-800";
      case "Enviado":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      {/* Card Header */}
      <div className="px-5 py-4 border-b border-gray-100">
        <h4 className="text-lg font-semibold">Órdenes recientes</h4>
      </div>

      {/* Card Body */}
      <div className="p-0 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                CLIENTE
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                TOTAL
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ESTADO
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Icon icon="lucide:user" className="text-green-600" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {order.customer}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${order.total}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
