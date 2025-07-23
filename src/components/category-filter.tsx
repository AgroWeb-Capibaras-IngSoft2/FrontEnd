import React, { useRef, useState } from 'react';

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
    { key: "all", label: "Todos los productos", icon: "lucide:grid" },
    { key: "Frutas", label: "Frutas", icon: "lucide:apple" },
    { key: "Verduras", label: "Verduras", icon: "lucide:carrot" },
    { key: "Lácteos", label: "Lácteos", icon: "lucide:milk" },
    { key: "Carnes", label: "Carnes", icon: "lucide:beef" },
    { key: "Bebidas", label: "Bebidas", icon: "lucide:cup-soda" },
    { key: "Tubérculos", label: "Tubérculos", icon: "lucide:potato" },
    { key: "Cereales", label: "Cereales", icon: "lucide:wheat" },
    { key: "Especias", label: "Especias", icon: "lucide:sprout" },
    { key: "Huevos", label: "Huevos", icon: "lucide:egg" },
    { key: "Hierbas", label: "Hierbas", icon: "lucide:flower" },
    { key: "Otros", label: "Otros", icon: "lucide:more-horizontal" },
  ];

  const visibleCount = 5;
  const [startIdx, setStartIdx] = useState(0);
  const endIdx = startIdx + visibleCount;
  const canScrollLeft = startIdx > 0;
  const canScrollRight = endIdx < categories.length;

  const handleScrollLeft = () => {
    setStartIdx((prev) => Math.max(0, prev - visibleCount));
  };

  const handleScrollRight = () => {
    setStartIdx((prev) => Math.min(categories.length - visibleCount, prev + visibleCount));
  };

  return (
    <div className="w-full flex items-center gap-2">
      <button
        className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        onClick={handleScrollLeft}
        disabled={!canScrollLeft}
        aria-label="Scroll categories left"
        type="button"
      >
        &#8592;
      </button>
      <div className="flex-1 overflow-x-hidden">
        <Tabs
          selectedKey={selectedCategory}
          onSelectionChange={(key) => onSelectCategory(key as string)}
          color="success"
          variant="light"
          classNames={{
            base: "overflow-x-hidden",
            tabList: "gap-2 w-full sm:w-auto",
          }}
        >
          {categories.slice(startIdx, endIdx).map((category) => (
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
      <button
        className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        onClick={handleScrollRight}
        disabled={!canScrollRight}
        aria-label="Scroll categories right"
        type="button"
      >
        &#8594;
      </button>
    </div>
  );
};
