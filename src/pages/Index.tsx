import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CheckCircle2, Stethoscope, Award, MonitorPlay } from 'lucide-react'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10 animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border border-secondary/20 px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary mb-4 shadow-sm">
              Vagas Abertas - Turma 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              A Excelência em <span className="text-primary">Cirurgia Robótica</span> começa aqui.
            </h1>
            <p className="text-lg text-slate-700 max-w-lg leading-relaxed">
              O programa educacional mais completo do{' '}
              <span className="font-semibold text-slate-900">Hospital SOS Cárdio</span>. Teoria
              avançada, simuladores de última geração e mentoria com especialistas globais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="h-12 px-8 text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all bg-primary text-white"
                onClick={() =>
                  document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Inscreva-se Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base bg-white border-slate-200 hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-colors"
              >
                Ver Currículo
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-2xl transform rotate-3 scale-105" />
            <img
              src="https://img.usecurling.com/p/800/600?q=robotic%20surgery&color=blue&dpr=2"
              alt="Cirurgia Robótica"
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover border border-white/20"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Por que escolher o RoboSurge?
            </h2>
            <p className="text-slate-700 text-lg">
              Nossa plataforma oferece uma imersão completa, unindo teoria on-demand com prática
              intensiva em simuladores físicos integrados ao ecossistema SOS Cárdio.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MonitorPlay,
                title: 'Aulas On-Demand',
                desc: 'Acesse módulos teóricos em alta definição, disponíveis 24/7 de qualquer dispositivo.',
              },
              {
                icon: Stethoscope,
                title: 'Prática em Simuladores',
                desc: 'Agende facilmente sessões práticas nos simuladores Da Vinci integrados ao nosso laboratório.',
              },
              {
                icon: Award,
                title: 'Certificação Oficial',
                desc: 'Receba reconhecimento com validade internacional ao concluir todas as etapas do programa.',
              },
            ].map((f, i) => (
              <Card
                key={i}
                className="border border-slate-100 shadow-md hover:shadow-xl hover:border-primary/20 transition-all duration-300 bg-white group"
              >
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <f.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section id="enroll" className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://img.usecurling.com/p/1200/800?q=medical%20technology&color=black')] bg-cover mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/90 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Garanta sua vaga na próxima turma
            </h2>
            <ul className="space-y-5 mb-8">
              {[
                'Acesso imediato à plataforma de estudos',
                'Mentoria com cirurgiões renomados',
                '100 horas de simulador inclusas',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-1">
                    <CheckCircle2 className="text-white w-6 h-6 shrink-0" />
                  </div>
                  <span className="text-lg text-white/90 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="bg-white border-0 text-slate-900 shadow-2xl shadow-black/20 animate-slide-up">
            <CardHeader className="pb-4 border-b border-slate-100 mb-4">
              <CardTitle className="text-2xl font-bold text-center text-slate-900">
                Ficha de Inscrição
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-700 font-semibold">
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  placeholder="Dr. Carlos Silva"
                  className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-primary focus:ring-primary/20"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="crm" className="text-slate-700 font-semibold">
                    CRM
                  </Label>
                  <Input
                    id="crm"
                    placeholder="123456"
                    className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-primary focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="uf" className="text-slate-700 font-semibold">
                    UF
                  </Label>
                  <Input
                    id="uf"
                    placeholder="SP"
                    className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-primary focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-semibold">
                  E-mail Profissional
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="carlos@hospital.com"
                  className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-primary focus:ring-primary/20"
                />
              </div>
              <Link to="/dashboard" className="block pt-2">
                <Button className="w-full h-12 text-lg font-bold hover:scale-[1.02] transition-all bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/25">
                  Completar Inscrição
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
