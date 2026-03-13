import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { FileQuestion, CheckCircle2, AlertCircle, Clock } from 'lucide-react'

const exams = [
  { id: 1, title: 'Avaliação: Módulo 1', status: 'completed', score: 95, questions: 20 },
  { id: 2, title: 'Avaliação: Módulo 2', status: 'available', score: null, questions: 25 },
  { id: 3, title: 'Avaliação Final Prática', status: 'locked', score: null, questions: 50 },
]

export default function Assessments() {
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null)
  const [step, setStep] = useState(0)

  if (activeQuiz) {
    return (
      <div className="max-w-3xl mx-auto py-8 animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Avaliação: Módulo 2</h2>
          <div className="flex items-center gap-2 text-amber-600 font-medium bg-amber-50 px-3 py-1.5 rounded-full">
            <Clock className="w-4 h-4" /> 44:59
          </div>
        </div>

        <Progress value={(step / 5) * 100} className="mb-8" />

        {step < 5 ? (
          <Card className="shadow-md border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl">Questão {step + 1} de 5</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-slate-800">
                Qual é a principal vantagem da visão 3D estereoscópica no sistema robótico em
                comparação com a laparoscopia convencional?
              </p>
              <RadioGroup className="space-y-3">
                {[
                  'Menor custo de manutenção',
                  'Percepção de profundidade aprimorada',
                  'Redução do tempo cirúrgico geral',
                  'Eliminação da necessidade de trocateres',
                ].map((opt, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 border p-4 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    <RadioGroupItem value={opt} id={`opt-${i}`} />
                    <Label
                      htmlFor={`opt-${i}`}
                      className="flex-1 cursor-pointer font-normal text-base"
                    >
                      {opt}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-end pt-4 border-t">
              <Button onClick={() => setStep(step + 1)} className="px-8">
                {step === 4 ? 'Finalizar Avaliação' : 'Próxima'}
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="text-center py-12 shadow-md">
            <CardContent className="space-y-4 flex flex-col items-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold">Avaliação Concluída!</h3>
              <p className="text-slate-500">Sua nota foi calculada com sucesso.</p>
              <div className="text-4xl font-bold text-primary mt-4">88%</div>
              <Button className="mt-8" onClick={() => setActiveQuiz(null)}>
                Voltar para Avaliações
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Avaliações e Certificação
        </h1>
        <p className="text-slate-500 mt-1">
          Realize os testes teóricos para liberar seu certificado.
        </p>
      </div>

      <div className="grid gap-4">
        {exams.map((exam) => (
          <Card
            key={exam.id}
            className={`shadow-sm border-l-4 ${
              exam.status === 'completed'
                ? 'border-l-emerald-500'
                : exam.status === 'available'
                  ? 'border-l-primary'
                  : 'border-l-slate-300 opacity-70'
            }`}
          >
            <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-full ${
                    exam.status === 'completed'
                      ? 'bg-emerald-100 text-emerald-600'
                      : exam.status === 'available'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  <FileQuestion className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{exam.title}</h3>
                  <p className="text-sm text-slate-500">
                    {exam.questions} questões de múltipla escolha
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto mt-4 sm:mt-0 justify-between sm:justify-end">
                {exam.status === 'completed' && (
                  <div className="text-right">
                    <p className="text-sm text-slate-500">Sua Nota</p>
                    <p className="text-xl font-bold text-emerald-600">{exam.score}%</p>
                  </div>
                )}
                {exam.status === 'available' && (
                  <Button onClick={() => setActiveQuiz(exam.id)} className="shadow-sm">
                    Iniciar Teste
                  </Button>
                )}
                {exam.status === 'locked' && (
                  <div className="flex items-center text-sm text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
                    <AlertCircle className="w-4 h-4 mr-2" /> Bloqueado
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
