import { Filter } from "@/pages/Task/redux/types";

interface MenuItemProps {
  item: {
    id: Filter;
    icon: JSX.Element;
    label: string;
  };
  isSelected: boolean;
  onSelect: (filter: Filter) => void;
}
export const MenuItem: React.FC<MenuItemProps> = ({ item, isSelected, onSelect }) => (
  <li className="w-full">
    <button
      className={`flex flex-col lg:flex-row items-center lg:items-start gap-1 lg:gap-2 px-4 py-3 w-full cursor-pointer transition-colors duration-200 ${
        isSelected ? 'bg-blue-800  text-white' : 'hover:bg-blue-800 hover:text-white'
      }`}
      onClick={() => onSelect(item.id)}
    >
      <div className="flex items-center gap-2">
        {item.icon}
        <span className="hidden lg:inline ">{item.label}</span>
      </div>
    </button>
  </li>
);
