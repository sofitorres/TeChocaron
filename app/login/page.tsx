"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

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
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Datos capturados y listos para enviar:", values)
    // Acá inyectaremos la conexión a Supabase
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-slate-900">
            Ingresar a TeChocaron
          </CardTitle>
          <CardDescription className="text-center">
            Accedé a tu panel de gestión de siniestros
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* 4. Envolvemos nuestro form nativo con el componente de shadcn */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                      <Input placeholder="ejemplo@techocaron.com" {...field} />
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
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Iniciar Sesión
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}