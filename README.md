# Documentação do Clone do PicPay

## Introdução

Este projeto visa criar uma réplica simplificada do PicPay, uma plataforma popular de pagamentos e transferências de dinheiro, utilizando as tecnologias **Next.js** para o frontend, **Tailwind CSS** para o estilo, com ênfase na **experiência do usuário (UX/UI)** e o **deploy na Vercel**. O objetivo é oferecer uma interface intuitiva e moderna, proporcionando uma experiência de usuário similar à do aplicativo original.

---

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de interfaces modernas, escaláveis e rápidas, aproveitando recursos como Server-Side Rendering (SSR) e Static Site Generation (SSG).
- **Tailwind CSS**: Framework de CSS utilitário para estilização rápida e eficiente, permitindo a criação de interfaces responsivas e flexíveis.
- **Vercel**: Plataforma de deploy que permite a publicação simples e rápida do aplicativo Next.js.

---

## Estrutura do Projeto

A estrutura do projeto foi organizada de maneira a facilitar a manutenção, escalabilidade e organização do código.


---

## Funcionalidades

### 1. **Tela de Login**
- O usuário pode se autenticar utilizando o número de telefone e senha.
- Exibição de erros e feedbacks caso as credenciais estejam incorretas.

### 2. **Tela de Cadastro**
- Cadastro do usuário utilizando informações básicas (nome, e-mail, telefone).
- Validação de entradas utilizando expressões regulares e mensagens de erro claras.

### 3. **Tela de Carteira**
- Exibição do saldo atual e histórico de transações.
- Capacidade de visualizar o saldo total, pagamentos realizados e recebidos.

### 4. **Tela de Transações**
- A tela de transações permite ao usuário enviar dinheiro para outro usuário.
- A interface facilita o envio de valores, permitindo a digitação rápida e fácil.
- Feedbacks visuais e sonoros são fornecidos em cada etapa do processo.

---

## UX/UI

### Design e Experiência do Usuário

O foco principal deste projeto é proporcionar uma experiência de usuário limpa, intuitiva e responsiva. Para isso, seguimos algumas diretrizes:

- **Design Simples e Intuitivo**: A interface é simples e fácil de usar, com as opções mais comuns acessíveis com poucos toques.
- **Feedbacks Visuais**: Cada interação, como um pagamento ou erro de autenticação, fornece feedback visual imediato para o usuário.
- **Responsividade**: O layout foi projetado para se adaptar a diferentes tamanhos de tela, garantindo que a aplicação funcione bem tanto em dispositivos móveis quanto em desktops.
- **Navegação Clara**: A navegação foi pensada para ser simples e intuitiva, com barras de navegação fáceis de entender e usar.

### Fluxo do Usuário

1. O usuário acessa a **Home** e pode se logar ou se cadastrar facilmente.
2. Após o login, o usuário é redirecionado para a **Carteira**, onde pode visualizar seu saldo e transações recentes.
3. Se o usuário desejar enviar dinheiro, ele acessa a **Tela de Transações**, insere o valor e recebe feedback visual de confirmação.
4. O design de cada página foi pensado para ser minimalista, com poucos elementos distrativos e um foco nas ações principais do usuário.

---

## Implementação do Frontend

### Configuração do Tailwind CSS

1. Instale as dependências do Tailwind CSS:
   ```bash
   npm install tailwindcss postcss autoprefixer
