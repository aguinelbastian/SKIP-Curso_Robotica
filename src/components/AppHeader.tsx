import { Bell, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from 'react-router-dom'

export function AppHeader() {
  return (
    <header className="flex h-16 items-center border-b bg-white px-4 md:px-6 shrink-0 gap-4 shadow-sm z-10 sticky top-0">
      <SidebarTrigger className="md:hidden" />

      <div className="flex-1 flex items-center max-w-md bg-slate-50 rounded-md px-3 border focus-within:ring-1 focus-within:ring-primary transition-all">
        <Search className="w-4 h-4 text-muted-foreground shrink-0" />
        <Input
          placeholder="Buscar aulas, documentos..."
          className="border-none shadow-none bg-transparent h-9 focus-visible:ring-0 px-2"
        />
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <Button variant="ghost" size="icon" className="relative text-slate-500 hover:text-primary">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-white animate-pulse" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 rounded-full ml-2 p-0 bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <span className="text-primary font-bold text-xs">DR</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Dr. Carlos Silva</p>
                <p className="text-xs leading-none text-muted-foreground">CRM 123456-SP</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perfil e Configurações</DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/" className="w-full cursor-pointer text-destructive">
                Sair da plataforma
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
