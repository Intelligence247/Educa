import React from 'react';
import { 
  Users, 
  GraduationCap, 
  ClipboardCheck, 
  DollarSign, 
  AlertTriangle 
} from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  color: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  color
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case '👥':
        return <Users className="w-6 h-6" />;
      case '👨‍🏫':
        return <GraduationCap className="w-6 h-6" />;
      case '📋':
        return <ClipboardCheck className="w-6 h-6" />;
      case '💰':
        return <DollarSign className="w-6 h-6" />;
      case '⚠️':
        return <AlertTriangle className="w-6 h-6" />;
      default:
        return <div className="text-xl">{icon}</div>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-dark-gray mb-1">{value}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center text-white`}>
          {getIcon(icon)}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard; 