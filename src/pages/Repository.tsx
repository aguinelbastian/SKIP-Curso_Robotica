import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FileText, Search, Download, FileImage, File } from 'lucide-react'

const files = [
  {
    id: 1,
    category: 'manuais',
    name: 'Manual_DaVinci_Xi_BR.pdf',
    type: 'pdf',
    size: '15 MB',
    date: '01/10/2025',
  },
  {
    id: 2,
    category: 'manuais',
    name: 'Guia_Trocateres_V2.pdf',
    type: 'pdf',
    size: '8 MB',
    date: '05/10/2025',
  },
  {
    id: 3,
    category: 'artigos',
    name: 'Estudo_Sutura_Robotica_2025.pdf',
    type: 'pdf',
    size: '3.2 MB',
    date: '12/10/2025',
  },
  {
    id: 4,
    category: 'guias',
    name: 'Esquema_Anatomia_Pelvica.png',
    type: 'img',
    size: '1.5 MB',
    date: '14/10/2025',
  },
]

function FileIcon({ type }: { type: string }) {
  if (type === 'img') return <FileImage className="w-8 h-8 text-secondary" />
  if (type === 'pdf') return <FileText className="w-8 h-8 text-primary" />
  return <File className="w-8 h-8 text-slate-400" />
}

export default function Repository() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Biblioteca Digital</h1>
          <p className="text-slate-500 mt-1">Acesse todos os materiais e documentos do curso.</p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input placeholder="Buscar arquivo..." className="pl-9" />
        </div>
      </div>

      <Tabs defaultValue="todos" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="todos">Todos</TabsTrigger>
          <TabsTrigger value="manuais">Manuais Técnicos</TabsTrigger>
          <TabsTrigger value="artigos">Artigos Científicos</TabsTrigger>
          <TabsTrigger value="guias">Guias Rápidos</TabsTrigger>
        </TabsList>

        {['todos', 'manuais', 'artigos', 'guias'].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-fade-in-up">
              {files
                .filter((f) => tab === 'todos' || f.category === tab)
                .map((file) => (
                  <Card
                    key={file.id}
                    className="group hover:border-primary/50 transition-colors shadow-sm cursor-pointer border-slate-200"
                  >
                    <CardContent className="p-5 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-primary/5 transition-colors">
                          <FileIcon type={file.type} />
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-slate-400 hover:text-primary hover:bg-primary/10"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                      <h3
                        className="font-semibold text-slate-900 text-sm mb-2 line-clamp-2"
                        title={file.name}
                      >
                        {file.name}
                      </h3>
                      <div className="mt-auto pt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
                        <span>{file.size}</span>
                        <span>{file.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}

              {/* Empty State Mock if empty */}
              {files.filter((f) => tab === 'todos' || f.category === tab).length === 0 && (
                <div className="col-span-full py-12 text-center text-slate-500">
                  Nenhum arquivo encontrado nesta categoria.
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
