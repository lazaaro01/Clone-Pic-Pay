"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, rememberMe: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would authenticate the user here
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
            <h1 className="text-2xl font-bold">Entrar no PicPay</h1>
            <p className="text-gray-500">Acesse sua conta para continuar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail ou telefone</Label>
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="Digite seu e-mail ou telefone"
                required
                value={formData.email}
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
                  placeholder="Digite sua senha"
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

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="rememberMe" checked={formData.rememberMe} onCheckedChange={handleCheckboxChange} />
                <Label htmlFor="rememberMe" className="text-sm font-normal">
                  Lembrar de mim
                </Label>
              </div>
              <Link href="/forgot-password" className="text-sm text-[#11C76F] hover:underline">
                Esqueci minha senha
              </Link>
            </div>

            <Button type="submit" className="w-full py-6 bg-[#11C76F] hover:bg-[#0FB863] text-white rounded-xl">
              Entrar
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Não tem uma conta?{" "}
              <Link href="/register" className="text-[#11C76F] hover:underline">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

