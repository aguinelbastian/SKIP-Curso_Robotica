import { Link, useLocation } from 'react-router-dom'
import {
  Home,
  BookOpen,
  Calendar as CalendarIcon,
  FileText,
  MessageSquare,
  CheckSquare,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'

const items = [
  { title: 'Início', url: '/dashboard', icon: Home },
  { title: 'Aulas e Material', url: '/aulas', icon: BookOpen },
  { title: 'Simulador', url: '/simulador', icon: CalendarIcon },
  { title: 'Biblioteca', url: '/biblioteca', icon: FileText },
  { title: 'Chat', url: '/chat', icon: MessageSquare },
  { title: 'Avaliações', url: '/avaliacoes', icon: CheckSquare },
]

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-bold text-sm tracking-wider uppercase mb-2 mt-4 px-4">
            RoboSurge Pro
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                    className="data-[active=true]:bg-primary/10 data-[active=true]:text-primary data-[active=true]:font-semibold transition-all duration-200"
                  >
                    <Link to={item.url}>
                      <item.icon className="w-5 h-5 mr-2" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
