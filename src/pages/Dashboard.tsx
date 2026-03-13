import { Link } from 'react-router-dom'
import useMainStore from '@/stores/main'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CalendarClock, PlayCircle, Award, ChevronRight, FileText } from 'lucide-react'

function CircularProgress({ value }: { value: number }) {
  const radius = 36
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="w-24 h-24 transform -rotate-90">
        <circle
          cx="48"
          cy="48"
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-slate-100"
        />
        <circle
          cx="48"
          cy="48"
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="text-secondary transition-all duration-1000 ease-out"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-xl font-bold text-slate-800">{value}%</span>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const { progress, nextSession } = useMainStore()

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Olá, Dr. Carlos!</h1>
          <p className="text-slate-500 mt-1">Bem-vindo de volta. Aqui está o seu resumo de hoje.</p>
        </div>
        <Button asChild className="hidden md:flex">
          <Link to="/simulador">Agendar Simulador</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="col-span-1 shadow-sm border-slate-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Progresso do Curso
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-6 pt-4">
            <CircularProgress value={progress} />
            <div className="space-y-1">
              <p className="text-sm font-medium text-slate-700">Módulo Atual:</p>
              <p className="text-xs text-slate-500">Fundamentos da Robótica</p>
              <Link
                to="/aulas"
                className="text-primary text-sm font-medium hover:underline inline-flex items-center mt-2"
              >
                Continuar de onde parou <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2 shadow-sm border-slate-200 bg-primary text-white overflow-hidden relative">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <CardHeader className="pb-2 relative z-10">
            <CardTitle className="text-lg font-semibold flex items-center gap-2 text-white/90">
              <CalendarClock className="w-5 h-5 text-secondary" />
              Próxima Sessão no Simulador
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10 flex flex-col justify-center h-[calc(100%-3rem)]">
            {nextSession ? (
              <div className="animate-pulse-soft">
                <p className="text-3xl font-bold mb-1">{nextSession}</p>
                <p className="text-primary-foreground/80 mb-4">
                  Laboratório Central - Sala Da Vinci 02
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-secondary hover:bg-secondary/90 text-white border-none"
                >
                  Ver Detalhes
                </Button>
              </div>
            ) : (
              <div>
                <p className="text-lg mb-4 text-white/80">Nenhuma sessão agendada no momento.</p>
                <Button
                  variant="secondary"
                  asChild
                  className="bg-white text-primary hover:bg-slate-100"
                >
                  <Link to="/simulador">Agendar Agora</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg">Conteúdo Recente</CardTitle>
            <CardDescription>Aulas que você assistiu ou materiais acessados</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                title: 'Anatomia Pélvica Aplicada',
                type: 'video',
                icon: PlayCircle,
                time: 'Ontem',
              },
              {
                title: 'Configuração dos Trocateres',
                type: 'video',
                icon: PlayCircle,
                time: 'Há 2 dias',
              },
              { title: 'Guia de Sutura Robótica', type: 'doc', icon: FileText, time: 'Há 3 dias' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.time}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg">Avisos e Comunicados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 border-l-2 border-slate-100 ml-3 pl-4">
              <div className="relative">
                <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-white" />
                <p className="text-sm font-semibold text-slate-900">Manutenção do Simulador</p>
                <p className="text-xs text-slate-500 mt-1">10 de Out, 09:00</p>
                <p className="text-sm text-slate-600 mt-2">
                  O simulador 01 passará por calibração de rotina amanhã das 14h às 18h. Horários
                  realocados.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white" />
                <p className="text-sm font-semibold text-slate-900">Novo Material Disponível</p>
                <p className="text-xs text-slate-500 mt-1">08 de Out, 15:30</p>
                <p className="text-sm text-slate-600 mt-2">
                  Adicionamos 3 novos artigos sobre pinças hemostáticas na biblioteca.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
