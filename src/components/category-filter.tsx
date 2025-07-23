import React from 'react';

import {
  Tab,
  Tabs,
} from '@heroui/react';
import { Icon } from '@iconify/react';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const categories = [
    { key: "all", label: "todos los productos", icon: "lucide:grid" },
    { key: "vegetales", label: "Vegetales", icon: "lucide:carrot" },
    { key: "frutas", label: "Frutas", icon: "lucide:apple" },
    { key: "huevos", label: "Huevos", icon: "lucide:leafy-green" },
    { key: "hierbas", label: "Hierbas", icon: "lucide:flower" },
  ];

  return (
    <div className="w-full sm:w-auto overflow-x-auto">
      <Tabs
        selectedKey={selectedCategory}
        onSelectionChange={(key) => onSelectCategory(key as string)}
        color="success"
        variant="light"
        classNames={{
          base: "overflow-x-auto",
          tabList: "gap-2 w-full sm:w-auto",
        }}
      >
        {categories.map((category) => (
          <Tab
            key={category.key}
            title={
              <div className="flex items-center gap-2">
                <Icon icon={category.icon} />
                <span>{category.label}</span>
              </div>
            }
          />
        ))}
      </Tabs>
    </div>
  );
};
