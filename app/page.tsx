"use client"
import Link from "next/link"
import { Montserrat } from "next/font/google"
import { CarFront, ShieldCheck, Wrench, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Configuramos la fuente para darle un aspecto más corporativo, limpio y moderno a la app
const montserrat = Montserrat({ subsets: ["latin"] })

export default function HomePage() {
  return (
    <div className={`min-h-screen flex flex-col md:flex-row bg-slate-50 ${montserrat.className}`}>
      
      {/* LADO IZQUIERDO: Bienvenida e Información (Con foto de fondo y capa oscura) */}
      <div 
        className="w-full md:w-1/2 text-white flex flex-col justify-center p-8 lg:p-16 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/taller.jpg')" }}
      >
        {/* Capa oscura semitransparente para que el texto resalte y sea legible */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-950/80 z-0"></div>
        
        <div className="relative z-10 max-w-lg mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            TeChocaron
          </h1>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            Tu taller de confianza. Gestionamos tus siniestros y reparaciones con total transparencia, calidad y rapidez.
          </p>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
            {/* Botón de Correo: Abre el gestor de emails */}
            <Button 
              variant="outline" 
              className="bg-transparent border-blue-400 text-white hover:bg-blue-800 hover:text-white justify-start" 
              asChild
            >
              <a href="mailto:ejemplo@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Escribinos
              </a>
            </Button>
            
            {/* Botón de Teléfono: Llama directamente al número */}
            <Button 
              variant="outline" 
              className="bg-transparent border-blue-400 text-white hover:bg-blue-800 hover:text-white justify-start" 
              asChild
            >
              <a href="tel:+5491135731767">
                <Phone className="mr-2 h-5 w-5" />
                Llamanos
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* LADO DERECHO: Opciones de Ingreso */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-950 mb-2">¡Bienvenido!</h2>
            <p className="text-slate-600">Por favor, elegí cómo querés ingresar al sistema:</p>
          </div>

          <div className="space-y-4">
            {/* Botón Cliente */}
            <Link href="/login" className="block">
              <Card className="hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <CarFront className="h-6 w-6 text-blue-700 group-hover:text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-blue-950">Como Cliente</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    Ingresá tus siniestros, solicitá presupuestos y hacé el seguimiento de tu vehículo desde cualquier lado.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            {/* Botón Admin */}
            <Link href="/login" className="block">
              <Card className="hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <ShieldCheck className="h-6 w-6 text-blue-700 group-hover:text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-blue-950">Como Admin</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    Gestión total del sistema. Administrá turnos, usuarios, presupuestos y supervisá el taller.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            {/* Botón Empleado */}
            <Link href="/login" className="block">
              <Card className="hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Wrench className="h-6 w-6 text-blue-700 group-hover:text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-blue-950">Como Empleado de taller</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    Visualizá los vehículos asignados, actualizá el estado de reparación paso a paso y subí fotos.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}