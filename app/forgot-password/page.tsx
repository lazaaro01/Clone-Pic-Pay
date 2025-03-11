"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "E-mail enviado",
        description: "Verifique sua caixa de entrada para redefinir sua senha.",
      })
      setIsSubmitting(false)
      router.push("/login")
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="p-4 border-b">
        <Button variant="ghost" size="icon" asChild className="rounded-full">
          <Link href="/login">
            <ArrowLeft className="h-6 w-6" />
            <span className="sr-only">Voltar</span>
          </Link>
        </Button>
      </header>

      <main className="flex-1 flex flex-col justify-center p-6">
        <div className="max-w-md mx-auto w-full space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Esqueceu sua senha?</h1>
            <p className="text-gray-500">Digite seu e-mail e enviaremos instruções para redefinir sua senha.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-6 px-4 rounded-xl"
              />
            </div>

            <Button
              type="submit"
              className="w-full py-6 bg-[#11C76F] hover:bg-[#0FB863] text-white rounded-xl"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar instruções"}
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Lembrou sua senha?{" "}
              <Link href="/login" className="text-[#11C76F] hover:underline">
                Voltar para o login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

