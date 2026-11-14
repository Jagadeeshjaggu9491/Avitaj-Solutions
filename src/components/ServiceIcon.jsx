import {
  Wrench,
  ServerCog,
  ShieldCheck,
  LockKeyhole,
  Cable,
  Network,
  Database,
  Laptop,
  Users,
  Headphones,
  Layers,
  Warehouse,
  LifeBuoy,
  Recycle,
  Cpu,
  Search,
  Code2,
  ShieldAlert,
  FileText,
  Share2,
  ShoppingCart,
  Compass,
} from 'lucide-react';

const ICON_MAP = {
  Wrench,
  ServerCog,
  ShieldCheck,
  LockKeyhole,
  Cable,
  Network,
  Database,
  Laptop,
  Users,
  Headphones,
  Layers,
  Warehouse,
  LifeBuoy,
  Recycle,
  Cpu,
  Search,
  Code2,
  ShieldAlert,
  FileText,
  Share2,
  ShoppingCart,
  Compass,
};

export default function ServiceIcon({ name, size = 24, className = '' }) {
  const IconComponent = ICON_MAP[name] || ServerCog;
  return <IconComponent size={size} className={className} aria-hidden="true" />;
}
