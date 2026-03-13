import { useState, useRef, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Send, Paperclip, Search, Circle } from 'lucide-react'

const contacts = [
  { id: 1, name: 'Dr. Roberto Mendes', role: 'Mentor Principal', online: true, avatar: '1' },
  { id: 2, name: 'Suporte Técnico', role: 'Plataforma', online: true, avatar: '2' },
  { id: 3, name: 'Dra. Ana Costa', role: 'Professora Auxiliar', online: false, avatar: '3' },
]

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'them',
      text: 'Olá Dr. Carlos, bem-vindo ao módulo de sutura.',
      time: '10:00',
    },
    {
      id: 2,
      sender: 'me',
      text: 'Obrigado! Tive uma dúvida no uso da pinça Maryland no último exercício.',
      time: '10:05',
    },
    {
      id: 3,
      sender: 'them',
      text: 'Perfeito. Podemos revisar isso na sua próxima sessão de simulador. Vou enviar um vídeo de referência.',
      time: '10:08',
    },
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    const newMsg = {
      id: Date.now(),
      sender: 'me',
      text: input,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    }
    setMessages([...messages, newMsg])
    setInput('')

    // Simulate reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'them',
          text: 'Entendi, vou verificar.',
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        },
      ])
    }, 2000)
  }

  return (
    <div className="max-w-6xl mx-auto h-[calc(100vh-8rem)] flex bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Sidebar Contacts */}
      <div className="w-80 border-r bg-slate-50/50 flex flex-col hidden md:flex shrink-0">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input placeholder="Buscar contato..." className="pl-9 bg-white" />
          </div>
        </div>
        <div className="overflow-y-auto flex-1 p-2 space-y-1">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors"
            >
              <div className="relative">
                <Avatar>
                  <AvatarImage
                    src={`https://img.usecurling.com/ppl/thumbnail?gender=male&seed=${contact.avatar}`}
                  />
                  <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {contact.online && (
                  <Circle className="w-3 h-3 absolute bottom-0 right-0 fill-green-500 text-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">{contact.name}</p>
                <p className="text-xs text-slate-500 truncate">{contact.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="h-16 border-b flex items-center px-6 bg-white shrink-0">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1" />
              <AvatarFallback>RM</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-slate-900">Dr. Roberto Mendes</p>
              <p className="text-xs text-green-600 font-medium">Online</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50 space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-2xl p-4 shadow-sm relative ${
                  msg.sender === 'me'
                    ? 'bg-primary text-primary-foreground rounded-br-sm'
                    : 'bg-white border border-slate-100 text-slate-800 rounded-bl-sm'
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <span
                  className={`text-[10px] mt-2 block text-right ${msg.sender === 'me' ? 'text-primary-foreground/70' : 'text-slate-400'}`}
                >
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="p-4 bg-white border-t">
          <form onSubmit={handleSend} className="flex items-center gap-2">
            <Button type="button" variant="ghost" size="icon" className="text-slate-400 shrink-0">
              <Paperclip className="w-5 h-5" />
            </Button>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-slate-50 border-none shadow-none focus-visible:ring-1 focus-visible:ring-primary"
            />
            <Button type="submit" size="icon" className="shrink-0 bg-primary hover:bg-primary/90">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
