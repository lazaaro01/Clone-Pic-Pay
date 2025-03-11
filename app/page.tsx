import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WelcomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero section */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md mx-auto space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="bg-[#11C76F] p-4 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 11l-5-5-5 5" />
                <path d="M17 18l-5-5-5 5" />
              </svg>
            </div>
          </div>

          {/* Welcome text */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">Bem-vindo ao PicPay</h1>
            <p className="text-gray-500">
              A maneira mais simples de gerenciar seu dinheiro, fazer pagamentos e transferências.
            </p>
          </div>

          {/* Action buttons */}
          <div className="space-y-4 pt-4">
            <Button asChild className="w-full py-6 bg-[#11C76F] hover:bg-[#0FB863] text-white rounded-xl">
              <Link href="/login">Entrar</Link>
            </Button>
            <Button variant="outline" className="w-full py-6 border-[#11C76F] text-[#11C76F] rounded-xl">
              <Link href="/register">Criar conta</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} PicPay Clone. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

