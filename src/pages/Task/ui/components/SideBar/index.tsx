import { AppstoreAddOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Filter } from '../../../redux/types';
import { MenuItem } from './MenuItem';

interface SideBarProps {
  onFilter: (filter: Filter) => void;
}

const MENU_ITEMS = [
  {
    id: 'all' as Filter,
    icon: <AppstoreAddOutlined className="text-green-500" />,
    label: 'All Tasks',
  },
  {
    id: 'completed' as Filter,
    icon: <CheckCircleOutlined className="text-green-500" />,
    label: 'Completed',
  },
  {
    id: 'in_progress' as Filter,
    icon: <CloseCircleOutlined className="text-red-500" />,
    label: 'Incomplete',
  },
];

export const SideBar: React.FC<SideBarProps> = ({ onFilter }) => {
  const [selected, setSelected] = useState<Filter>('all');

  const handleSelect = (filter: Filter) => {
    setSelected(filter);
    onFilter(filter);
  };

  return (
    <aside className="flex flex-col w-16 lg:w-1/6 bg-white border-r border-gray-200">
      <ul className="w-full bg-white rounded-lg mt-2">
        {MENU_ITEMS.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            isSelected={selected === item.id}
            onSelect={handleSelect}
          />
        ))}
      </ul>
    </aside>
  );
};
