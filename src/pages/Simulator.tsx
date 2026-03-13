import { useState } from 'react'
import useMainStore from '@/stores/main'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Clock, Info, CalendarCheck } from 'lucide-react'
import { toast } from 'sonner'
import { ptBR } from 'date-fns/locale'

const timeSlots = [
  { time: '08:00', available: false },
  { time: '10:00', available: true },
  { time: '14:00', available: true },
  { time: '16:00', available: true },
  { time: '18:00', available: false },
]

export default function Simulator() {
  const { setNextSession } = useMainStore()
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleBook = () => {
    if (date && selectedSlot) {
      const formattedDate = date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' })
      setNextSession(`${formattedDate}, ${selectedSlot}`)
      setIsDialogOpen(false)
      setSelectedSlot(null)
      toast.success('Agendamento Confirmado', {
        description: `Sua sessão no simulador foi marcada para ${formattedDate} às ${selectedSlot}.`,
      })
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/10 text-primary rounded-xl">
          <CalendarCheck className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Agendamento de Simulador</h1>
          <p className="text-slate-500">Selecione uma data para reservar seu horário de prática.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-7 gap-8">
        <Card className="md:col-span-3 shadow-sm border-slate-200">
          <CardContent className="p-6 flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              locale={ptBR}
              className="rounded-md border-0 pointer-events-auto"
              disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0)) || d.getDay() === 0}
            />
          </CardContent>
        </Card>

        <Card className="md:col-span-4 shadow-sm border-slate-200">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Horários Disponíveis</CardTitle>
            <CardDescription>
              {date
                ? date.toLocaleDateString('pt-BR', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                  })
                : 'Selecione uma data'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {date ? (
              <div className="grid grid-cols-2 gap-4 animate-fade-in">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot.time}
                    variant={slot.available ? 'outline' : 'secondary'}
                    className={`h-16 text-base justify-start px-4 gap-3 ${
                      !slot.available
                        ? 'opacity-50 grayscale cursor-not-allowed'
                        : 'hover:border-primary hover:text-primary transition-all'
                    }`}
                    disabled={!slot.available}
                    onClick={() => {
                      setSelectedSlot(slot.time)
                      setIsDialogOpen(true)
                    }}
                  >
                    <Clock className="w-5 h-5 text-slate-400" />
                    <div className="flex flex-col items-start">
                      <span>{slot.time}</span>
                      <span className="text-xs font-normal text-slate-500">
                        {slot.available ? 'Disponível' : 'Ocupado'}
                      </span>
                    </div>
                  </Button>
                ))}
              </div>
            ) : (
              <div className="h-40 flex items-center justify-center text-slate-400 flex-col gap-2">
                <Info className="w-8 h-8 opacity-50" />
                <p>Nenhuma data selecionada.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirmar Agendamento</DialogTitle>
            <DialogDescription>
              Você está prestes a agendar uma sessão prática no Simulador Da Vinci.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-slate-50 p-4 rounded-lg border my-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-500">Data:</span>
              <span className="font-medium">{date?.toLocaleDateString('pt-BR')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Horário:</span>
              <span className="font-medium text-primary">{selectedSlot}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Local:</span>
              <span className="font-medium">Lab. Central - Sala 2</span>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleBook}>Confirmar Reserva</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
