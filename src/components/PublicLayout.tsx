import { Link, Outlet } from 'react-router-dom'

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="h-16 flex items-center px-4 md:px-8 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 transition-all">
        <div className="font-bold text-primary text-xl flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center text-sm shadow-sm">
            R
          </div>
          RoboSurge Pro
        </div>
        <div className="ml-auto">
          <Link
            to="/dashboard"
            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-slate-50"
          >
            Acesso Aluno
          </Link>
        </div>
      </header>
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
    </div>
  )
}
