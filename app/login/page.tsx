"use client"
import { supabase } from "@/lib/supabase"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Montserrat } from "next/font/google"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Importamos la misma fuente que en la página principal
const montserrat = Montserrat({ subsets: ["latin"] })

// 1. Definimos las reglas estrictas de validación (Zod)
const formSchema = z.object({
  email: z.string().email({ message: "Por favor, ingresá un correo válido." }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
})

export default function LoginPage() {
  // 2. Inicializamos el estado del formulario
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 3. Función que captura los datos si la validación es exitosa
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    })

    if (error) {
      console.error("Error al iniciar sesión:", error.message)
      alert("Credenciales incorrectas. Revisá tu email y contraseña.")
      return
    }

    console.log("¡Sesión iniciada con éxito!", data)
    alert("¡Bienvenida a TeChocaron!")
  }

  return (
    // Agregamos el degradado azul oscuro y la tipografía Montserrat
    <div className={`min-h-screen bg-gradient-to-br from-blue-900 to-blue-950 flex items-center justify-center p-4 ${montserrat.className}`}>
      
      <Card className="w-full max-w-md shadow-2xl border-none">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-extrabold text-center text-blue-950 tracking-tight">
            TeChocaron
          </CardTitle>
          <CardDescription className="text-center text-slate-600 text-md">
            Ingresá a tu panel de gestión
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-blue-950 font-semibold">Correo electrónico</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="ejemplo@techocaron.com" 
                        className="focus-visible:ring-blue-600" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-blue-950 font-semibold">Contraseña</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="******" 
                        className="focus-visible:ring-blue-600" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold text-md py-6 transition-colors"
              >
                Iniciar Sesión
              </Button>
              
            </form>
          </Form>
        </CardContent>
      </Card>
      
    </div>
  )
}