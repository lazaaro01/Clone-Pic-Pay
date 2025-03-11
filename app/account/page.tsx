"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowDown,
  ArrowUp,
  Bell,
  CreditCard,
  DollarSign,
  Home,
  Layers,
  QrCode,
  Search,
  Settings,
  User,
  Wallet,
  X,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export default function AccountPage() {
  const router = useRouter()
  const [balance, setBalance] = useState(1250.75)
  const [showBalance, setShowBalance] = useState(true)
  const [activeTab, setActiveTab] = useState("all")

  // Mock transaction data
  const [transactions, setTransactions] = useState([
    { id: 1, type: "payment", description: "Pagamento - Restaurante", amount: -45.9, date: "Hoje, 12:30" },
    { id: 2, type: "received", description: "Recebido de João Silva", amount: 120.0, date: "Ontem, 15:45" },
    { id: 3, type: "payment", description: "Mercado Livre", amount: -89.99, date: "22/05/2023" },
    { id: 4, type: "received", description: "Transferência recebida", amount: 500.0, date: "20/05/2023" },
    { id: 5, type: "payment", description: "Netflix", amount: -39.9, date: "15/05/2023" },
  ])

  // Form states for dialogs
  const [transferAmount, setTransferAmount] = useState("")
  const [transferRecipient, setTransferRecipient] = useState("")
  const [depositAmount, setDepositAmount] = useState("")
  const [paymentAmount, setPaymentAmount] = useState("")
  const [paymentRecipient, setPaymentRecipient] = useState("")

  const handleTransfer = () => {
    if (!transferAmount || !transferRecipient) {
      toast({
        title: "Erro",
        description: "Preencha todos os campos",
        variant: "destructive",
      })
      return
    }

    const amount = Number.parseFloat(transferAmount)
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Erro",
        description: "Valor inválido",
        variant: "destructive",
      })
      return
    }

    if (amount > balance) {
      toast({
        title: "Saldo insuficiente",
        description: "Você não tem saldo suficiente para esta transferência",
        variant: "destructive",
      })
      return
    }

    // Update balance
    setBalance((prev) => prev - amount)

    // Add transaction
    const newTransaction = {
      id: Date.now(),
      type: "payment",
      description: `Transferência para ${transferRecipient}`,
      amount: -amount,
      date: "Hoje, agora",
    }
    setTransactions((prev) => [newTransaction, ...prev])

    // Reset form
    setTransferAmount("")
    setTransferRecipient("")

    toast({
      title: "Transferência realizada",
      description: `R$ ${amount.toFixed(2)} transferido para ${transferRecipient}`,
    })
  }

  const handleDeposit = () => {
    if (!depositAmount) {
      toast({
        title: "Erro",
        description: "Informe o valor do depósito",
        variant: "destructive",
      })
      return
    }

    const amount = Number.parseFloat(depositAmount)
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Erro",
        description: "Valor inválido",
        variant: "destructive",
      })
      return
    }

    // Update balance
    setBalance((prev) => prev + amount)

    // Add transaction
    const newTransaction = {
      id: Date.now(),
      type: "received",
      description: "Depósito realizado",
      amount: amount,
      date: "Hoje, agora",
    }
    setTransactions((prev) => [newTransaction, ...prev])

    // Reset form
    setDepositAmount("")

    toast({
      title: "Depósito realizado",
      description: `R$ ${amount.toFixed(2)} depositado na sua conta`,
    })
  }

  const handlePayment = () => {
    if (!paymentAmount || !paymentRecipient) {
      toast({
        title: "Erro",
        description: "Preencha todos os campos",
        variant: "destructive",
      })
      return
    }

    const amount = Number.parseFloat(paymentAmount)
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Erro",
        description: "Valor inválido",
        variant: "destructive",
      })
      return
    }

    if (amount > balance) {
      toast({
        title: "Saldo insuficiente",
        description: "Você não tem saldo suficiente para este pagamento",
        variant: "destructive",
      })
      return
    }

    // Update balance
    setBalance((prev) => prev - amount)

    // Add transaction
    const newTransaction = {
      id: Date.now(),
      type: "payment",
      description: `Pagamento - ${paymentRecipient}`,
      amount: -amount,
      date: "Hoje, agora",
    }
    setTransactions((prev) => [newTransaction, ...prev])

    // Reset form
    setPaymentAmount("")
    setPaymentRecipient("")

    toast({
      title: "Pagamento realizado",
      description: `R$ ${amount.toFixed(2)} pago para ${paymentRecipient}`,
    })
  }

  const handleSearch = () => {
    toast({
      title: "Busca",
      description: "Funcionalidade de busca ativada",
    })
  }

  const handleNotifications = () => {
    toast({
      title: "Notificações",
      description: "Você não tem novas notificações",
    })
  }

  const handleSettings = () => {
    toast({
      title: "Configurações",
      description: "Abrindo configurações da conta",
    })
  }

  const handleViewStatement = () => {
    toast({
      title: "Extrato",
      description: "Visualizando extrato completo",
    })
  }

  const handleSignOut = () => {
    toast({
      title: "Saindo",
      description: "Desconectando da sua conta...",
    })

    setTimeout(() => {
      router.push("/login")
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#11C76F] text-white p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <User className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium">Olá,</p>
              <h2 className="font-bold">Maria Silva</h2>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="text-white" onClick={handleSearch}>
              <Search className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white" onClick={handleNotifications}>
              <Bell className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white" onClick={handleSettings}>
              <Settings className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Balance Card */}
      <div className="px-4 -mt-5">
        <Card className="shadow-lg rounded-xl">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-500 font-medium">Saldo PicPay</h3>
              <Button variant="ghost" size="sm" className="text-[#11C76F]" onClick={handleViewStatement}>
                Ver extrato
              </Button>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">
                {showBalance ? `R$ ${balance.toFixed(2).replace(".", ",")}` : "R$ ••••••"}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 rounded-full bg-gray-100"
                onClick={() => setShowBalance(!showBalance)}
              >
                {showBalance ? <X className="h-4 w-4" /> : <DollarSign className="h-4 w-4" />}
              </Button>
            </div>
            <div className="flex space-x-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="flex-1 bg-[#11C76F] hover:bg-[#0FB863] text-white rounded-xl py-5">
                    <ArrowUp className="mr-2 h-5 w-5" />
                    Transferir
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Transferir dinheiro</DialogTitle>
                    <DialogDescription>Preencha os dados para realizar a transferência</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="recipient">Destinatário</Label>
                      <Input
                        id="recipient"
                        placeholder="Nome ou @usuário"
                        value={transferRecipient}
                        onChange={(e) => setTransferRecipient(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="amount">Valor</Label>
                      <Input
                        id="amount"
                        placeholder="R$ 0,00"
                        type="number"
                        step="0.01"
                        min="0.01"
                        value={transferAmount}
                        onChange={(e) => setTransferAmount(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <DialogClose asChild>
                      <Button variant="outline">Cancelar</Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button onClick={handleTransfer}>Transferir</Button>
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="flex-1 bg-[#11C76F] hover:bg-[#0FB863] text-white rounded-xl py-5">
                    <QrCode className="mr-2 h-5 w-5" />
                    Pagar
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Realizar pagamento</DialogTitle>
                    <DialogDescription>Preencha os dados para realizar o pagamento</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="payee">Beneficiário</Label>
                      <Input
                        id="payee"
                        placeholder="Nome ou estabelecimento"
                        value={paymentRecipient}
                        onChange={(e) => setPaymentRecipient(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="payAmount">Valor</Label>
                      <Input
                        id="payAmount"
                        placeholder="R$ 0,00"
                        type="number"
                        step="0.01"
                        min="0.01"
                        value={paymentAmount}
                        onChange={(e) => setPaymentAmount(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <DialogClose asChild>
                      <Button variant="outline">Cancelar</Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button onClick={handlePayment}>Pagar</Button>
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="flex-1 bg-[#11C76F] hover:bg-[#0FB863] text-white rounded-xl py-5">
                    <ArrowDown className="mr-2 h-5 w-5" />
                    Depositar
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Depositar dinheiro</DialogTitle>
                    <DialogDescription>Informe o valor que deseja depositar na sua conta</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="depositAmount">Valor</Label>
                      <Input
                        id="depositAmount"
                        placeholder="R$ 0,00"
                        type="number"
                        step="0.01"
                        min="0.01"
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <DialogClose asChild>
                      <Button variant="outline">Cancelar</Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button onClick={handleDeposit}>Depositar</Button>
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-2 p-4">
        <Button
          variant="ghost"
          className="flex flex-col items-center h-auto py-3 space-y-1"
          onClick={() =>
            toast({
              title: "Cartão",
              description: "Acessando informações do seu cartão",
            })
          }
        >
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <CreditCard className="h-5 w-5 text-[#11C76F]" />
          </div>
          <span className="text-xs">Cartão</span>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-col items-center h-auto py-3 space-y-1"
          onClick={() =>
            toast({
              title: "Carteira",
              description: "Acessando sua carteira digital",
            })
          }
        >
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <Wallet className="h-5 w-5 text-[#11C76F]" />
          </div>
          <span className="text-xs">Carteira</span>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-col items-center h-auto py-3 space-y-1"
          onClick={() =>
            toast({
              title: "Pix",
              description: "Acessando área Pix",
            })
          }
        >
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <Layers className="h-5 w-5 text-[#11C76F]" />
          </div>
          <span className="text-xs">Pix</span>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-col items-center h-auto py-3 space-y-1"
          onClick={() =>
            toast({
              title: "Cobrar",
              description: "Criando uma nova cobrança",
            })
          }
        >
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <DollarSign className="h-5 w-5 text-[#11C76F]" />
          </div>
          <span className="text-xs">Cobrar</span>
        </Button>
      </div>

      {/* Transactions */}
      <div className="flex-1 p-4">
        <Tabs defaultValue="all" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="all">Todas</TabsTrigger>
            <TabsTrigger value="income">Entradas</TabsTrigger>
            <TabsTrigger value="expenses">Saídas</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === "received" ? "bg-green-100" : "bg-red-100"
                    }`}
                  >
                    {transaction.type === "received" ? (
                      <ArrowDown className="h-5 w-5 text-green-600" />
                    ) : (
                      <ArrowUp className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-xs text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <span className={`font-bold ${transaction.type === "received" ? "text-green-600" : "text-red-600"}`}>
                  {transaction.type === "received" ? "+" : "-"}
                  R$ {Math.abs(transaction.amount).toFixed(2).replace(".", ",")}
                </span>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="income" className="space-y-4">
            {transactions
              .filter((t) => t.type === "received")
              .map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <ArrowDown className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-xs text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <span className="font-bold text-green-600">
                    +R$ {Math.abs(transaction.amount).toFixed(2).replace(".", ",")}
                  </span>
                </div>
              ))}
          </TabsContent>
          <TabsContent value="expenses" className="space-y-4">
            {transactions
              .filter((t) => t.type === "payment")
              .map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <ArrowUp className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-xs text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <span className="font-bold text-red-600">
                    -R$ {Math.abs(transaction.amount).toFixed(2).replace(".", ",")}
                  </span>
                </div>
              ))}
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation */}
      <div className="sticky bottom-0 bg-white border-t p-2">
        <div className="flex justify-around">
          <Button
            variant="ghost"
            className="flex flex-col items-center h-auto py-2"
            onClick={() => {
              setActiveTab("all")
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <Home className="h-6 w-6 text-[#11C76F]" />
            <span className="text-xs">Início</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center h-auto py-2"
            onClick={() =>
              toast({
                title: "Carteira",
                description: "Acessando sua carteira digital",
              })
            }
          >
            <Wallet className="h-6 w-6 text-gray-500" />
            <span className="text-xs">Carteira</span>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="flex flex-col items-center h-auto py-2">
                <QrCode className="h-6 w-6 text-gray-500" />
                <span className="text-xs">Pagar</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Realizar pagamento</DialogTitle>
                <DialogDescription>Preencha os dados para realizar o pagamento</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="payee2">Beneficiário</Label>
                  <Input
                    id="payee2"
                    placeholder="Nome ou estabelecimento"
                    value={paymentRecipient}
                    onChange={(e) => setPaymentRecipient(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payAmount2">Valor</Label>
                  <Input
                    id="payAmount2"
                    placeholder="R$ 0,00"
                    type="number"
                    step="0.01"
                    min="0.01"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <DialogClose asChild>
                  <Button variant="outline">Cancelar</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button onClick={handlePayment}>Pagar</Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="ghost" className="flex flex-col items-center h-auto py-2" onClick={handleNotifications}>
            <Bell className="h-6 w-6 text-gray-500" />
            <span className="text-xs">Notificações</span>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="flex flex-col items-center h-auto py-2">
                <User className="h-6 w-6 text-gray-500" />
                <span className="text-xs">Perfil</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Perfil</DialogTitle>
                <DialogDescription>Gerencie sua conta</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 bg-[#11C76F]/20 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-[#11C76F]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Maria Silva</h3>
                    <p className="text-sm text-gray-500">maria.silva@email.com</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() =>
                      toast({
                        title: "Dados pessoais",
                        description: "Acessando seus dados pessoais",
                      })
                    }
                  >
                    <User className="mr-2 h-4 w-4" />
                    Dados pessoais
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() =>
                      toast({
                        title: "Segurança",
                        description: "Acessando configurações de segurança",
                      })
                    }
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Segurança
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={handleSignOut}>
                    <ArrowUp className="mr-2 h-4 w-4 rotate-90" />
                    Sair da conta
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

