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
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary mb-4">
              Vagas Abertas - Turma 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              A Excelência em <span className="text-primary">Cirurgia Robótica</span> começa aqui.
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              O programa educacional mais completo para cirurgiões. Teoria avançada, simuladores de
              última geração e mentoria com especialistas globais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="h-12 px-8 text-base shadow-lg hover:scale-105 transition-transform"
                onClick={() =>
                  document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Inscreva-se Agora
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white">
                Ver Currículo
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3 scale-105" />
            <img
              src="https://img.usecurling.com/p/800/600?q=robotic%20surgery&color=blue&dpr=2"
              alt="Cirurgia Robótica"
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover"
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
            <p className="text-slate-600">
              Nossa plataforma oferece uma imersão completa, unindo teoria on-demand com prática
              intensiva em simuladores físicos.
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
                className="border-none shadow-md hover:shadow-lg transition-shadow bg-slate-50/50"
              >
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <f.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                  <p className="text-slate-600">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section id="enroll" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://img.usecurling.com/p/1200/800?q=technology&color=black')] bg-cover mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Garanta sua vaga na próxima turma
            </h2>
            <ul className="space-y-4 mb-8">
              {[
                'Acesso imediato à plataforma de estudos',
                'Mentoria com cirurgiões renomados',
                '100 horas de simulador inclusas',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary w-6 h-6 shrink-0" />
                  <span className="text-lg text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="bg-white text-slate-900 shadow-2xl animate-slide-up">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-center">Ficha de Inscrição</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" placeholder="Dr. Carlos Silva" className="h-11" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="crm">CRM</Label>
                  <Input id="crm" placeholder="123456" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="uf">UF</Label>
                  <Input id="uf" placeholder="SP" className="h-11" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail Profissional</Label>
                <Input id="email" type="email" placeholder="carlos@hospital.com" className="h-11" />
              </div>
              <Link to="/dashboard" className="block pt-4">
                <Button className="w-full h-12 text-lg font-medium hover:scale-[1.02] transition-transform">
                  Completar Inscrição (Mock Login)
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
