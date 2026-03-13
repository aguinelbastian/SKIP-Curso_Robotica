import { useState } from 'react'
import useMainStore from '@/stores/main'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { PlayCircle, CheckCircle, Download, FileText, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

const modules = [
  {
    id: 'm1',
    title: 'Módulo 1: Fundamentos',
    lessons: [
      { id: 'lesson-1', title: 'Introdução ao Sistema Da Vinci', duration: '15:00' },
      { id: 'lesson-2', title: 'Ergonomia e Posicionamento', duration: '22:30' },
      { id: 'lesson-3', title: 'Tipos de Pinças', duration: '18:45' },
    ],
  },
  {
    id: 'm2',
    title: 'Módulo 2: Técnicas Básicas',
    lessons: [
      { id: 'lesson-4', title: 'Dissecção Simples', duration: '25:00' },
      { id: 'lesson-5', title: 'Sutura Intracorpórea', duration: '40:00' },
    ],
  },
]

export default function Classroom() {
  const { completedLessons, markLessonComplete } = useMainStore()
  const [activeLesson, setActiveLesson] = useState('lesson-3')
  const [isPlaying, setIsPlaying] = useState(false)

  const handleComplete = () => {
    markLessonComplete(activeLesson)
    toast.success('Aula concluída com sucesso!', {
      description: 'Seu progresso foi atualizado no sistema.',
    })
  }

  const isCompleted = completedLessons.includes(activeLesson)

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-8rem)] flex flex-col md:flex-row gap-6">
      {/* Video & Main Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto space-y-6">
        <div className="rounded-xl overflow-hidden shadow-lg bg-black aspect-video relative group">
          <img
            src="https://img.usecurling.com/p/1280/720?q=robotic%20surgery%20machine&color=gray"
            className={cn(
              'w-full h-full object-cover opacity-60 transition-opacity',
              isPlaying && 'opacity-30',
            )}
            alt="Video Thumbnail"
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Button
                variant="ghost"
                size="icon"
                className="w-20 h-20 rounded-full bg-secondary/90 hover:bg-secondary text-white hover:scale-110 transition-transform"
                onClick={() => setIsPlaying(true)}
              >
                <PlayCircle className="w-12 h-12" />
              </Button>
            </div>
          )}
          {isPlaying && (
            <div className="absolute inset-x-0 bottom-0 h-1 bg-slate-800">
              <div className="h-full bg-secondary w-1/3 animate-pulse" />
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Tipos de Pinças e Aplicações</h1>
            <p className="text-slate-500">Módulo 1 • Prof. Dr. Silva</p>
          </div>
          <Button
            onClick={handleComplete}
            disabled={isCompleted}
            variant={isCompleted ? 'outline' : 'default'}
            className={cn(isCompleted && 'text-emerald-600 border-emerald-200 bg-emerald-50')}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4 mr-2" /> Aula Concluída
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 mr-2" /> Marcar como Concluída
              </>
            )}
          </Button>
        </div>

        <Tabs defaultValue="notes" className="flex-1">
          <TabsList className="grid w-full grid-cols-2 max-w-sm">
            <TabsTrigger value="notes">Minhas Anotações</TabsTrigger>
            <TabsTrigger value="resources">Materiais</TabsTrigger>
          </TabsList>
          <TabsContent value="notes" className="mt-4">
            <Textarea
              placeholder="Digite suas anotações aqui. Elas são salvas automaticamente..."
              className="min-h-[200px] resize-none border-slate-200 focus-visible:ring-primary shadow-sm"
            />
          </TabsContent>
          <TabsContent value="resources" className="mt-4 space-y-3">
            {[1, 2].map((i) => (
              <Card
                key={i}
                className="p-4 flex items-center justify-between shadow-sm hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-slate-500">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Guia_Referencia_Pincas_V{i}.pdf</p>
                    <p className="text-xs text-slate-500">2.4 MB • Adicionado em 10/10/2025</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                  <Download className="w-4 h-4" />
                </Button>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      {/* Sidebar Modules */}
      <Card className="w-full md:w-80 h-fit md:sticky top-0 shrink-0 border-slate-200 shadow-sm flex flex-col">
        <div className="p-4 border-b bg-slate-50 rounded-t-xl font-semibold">Conteúdo do Curso</div>
        <div className="overflow-y-auto p-2">
          <Accordion type="multiple" defaultValue={['m1']} className="w-full">
            {modules.map((mod) => (
              <AccordionItem value={mod.id} key={mod.id} className="border-none">
                <AccordionTrigger className="hover:no-underline hover:bg-slate-50 px-3 py-3 rounded-md text-sm font-semibold">
                  {mod.title}
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-2">
                  <div className="space-y-1 pl-2">
                    {mod.lessons.map((lesson) => {
                      const isDone = completedLessons.includes(lesson.id)
                      const isActive = activeLesson === lesson.id
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => setActiveLesson(lesson.id)}
                          className={cn(
                            'w-full text-left px-3 py-2 text-sm rounded-md flex gap-3 transition-colors',
                            isActive
                              ? 'bg-primary/10 text-primary font-medium'
                              : 'hover:bg-slate-50 text-slate-600',
                          )}
                        >
                          <div className="mt-0.5 shrink-0">
                            {isDone ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            ) : (
                              <PlayCircle
                                className={cn(
                                  'w-4 h-4',
                                  isActive ? 'text-primary' : 'text-slate-400',
                                )}
                              />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="block truncate">{lesson.title}</span>
                            <span className="text-xs opacity-70 mt-0.5">{lesson.duration}</span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Card>
    </div>
  )
}
