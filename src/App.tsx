import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { StoreProvider } from '@/stores/main'

import PublicLayout from '@/components/PublicLayout'
import AuthLayout from '@/components/AuthLayout'

import Index from './pages/Index'
import Dashboard from './pages/Dashboard'
import Classroom from './pages/Classroom'
import Simulator from './pages/Simulator'
import Chat from './pages/Chat'
import Repository from './pages/Repository'
import Assessments from './pages/Assessments'
import NotFound from './pages/NotFound'

const App = () => (
  <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
    <StoreProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" richColors />
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Index />} />
          </Route>

          {/* Authenticated Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/aulas" element={<Classroom />} />
            <Route path="/simulador" element={<Simulator />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/biblioteca" element={<Repository />} />
            <Route path="/avaliacoes" element={<Assessments />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </StoreProvider>
  </BrowserRouter>
)

export default App
