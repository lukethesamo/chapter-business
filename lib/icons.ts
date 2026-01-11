import {
    GraduationCap,
    Building2,
    Briefcase,
    Users,
    Megaphone,
    Target,
    BarChart3,
    Bot,
    Mail,
    Calendar,
    Home,
    Star,
    LineChart,
    UserCheck,
    Ticket,
    Shirt,
    Store,
    Heart,
    Share2,
    Trophy,
    Handshake,
    Sparkles,
    Package,
    ClipboardList,
    type LucideIcon,
} from 'lucide-react';
import type { IconName } from './navigation';

// Map icon name strings to actual Lucide icon components
// This allows us to use string-based icon names for serialization
// while still rendering the actual icon components in client components
export const iconMap: Record<IconName, LucideIcon> = {
    'graduation-cap': GraduationCap,
    'building-2': Building2,
    'briefcase': Briefcase,
    'users': Users,
    'megaphone': Megaphone,
    'target': Target,
    'bar-chart-3': BarChart3,
    'bot': Bot,
    'mail': Mail,
    'calendar': Calendar,
    'home': Home,
    'star': Star,
    'line-chart': LineChart,
    'user-check': UserCheck,
    'ticket': Ticket,
    'shirt': Shirt,
    'store': Store,
    'heart': Heart,
    'share-2': Share2,
    'trophy': Trophy,
    'handshake': Handshake,
    'sparkles': Sparkles,
    'package': Package,
    'clipboard-list': ClipboardList,
};

// Helper function to get icon component from name
export function getIcon(name: IconName): LucideIcon {
    return iconMap[name];
}
