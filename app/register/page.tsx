"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would register the user here
    // For demo purposes, we'll just navigate to the account page
    router.push("/account")
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="p-4 border-b">
        <Button variant="ghost" size="icon" asChild className="rounded-full">
          <Link href="/">
            <ArrowLeft className="h-6 w-6" />
            <span className="sr-only">Voltar</span>
          </Link>
        </Button>
      </header>

      <main className="flex-1 flex flex-col justify-center p-6">
        <div className="max-w-md mx-auto w-full space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Criar sua conta</h1>
            <p className="text-gray-500">Preencha seus dados para começar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Digite seu nome completo"
                required
                value={formData.name}
                onChange={handleChange}
                className="py-6 px-4 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
                required
                value={formData.email}
                onChange={handleChange}
                className="py-6 px-4 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Digite seu telefone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="py-6 px-4 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Crie uma senha"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="py-6 px-4 rounded-xl pr-12"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  <span className="sr-only">{showPassword ? "Esconder senha" : "Mostrar senha"}</span>
                </Button>
              </div>
            </div>

            <Button type="submit" className="w-full py-6 bg-[#11C76F] hover:bg-[#0FB863] text-white rounded-xl">
              Criar conta
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Já tem uma conta?{" "}
              <Link href="/login" className="text-[#11C76F] hover:underline">
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

