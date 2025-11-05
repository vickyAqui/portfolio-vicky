# 🎨 Guia de Personalização do Portfólio

## 📝 Como Personalizar

### 1. Informações Pessoais

Edite os arquivos para adicionar suas informações:

#### **Navbar.jsx** (linha 14)
```jsx
Seu Nome  // Altere para seu nome
```

#### **Hero.jsx**
- **Linha 19**: Adicione sua foto de perfil (substitua o emoji 👤)
- **Linha 24**: Seu nome
- **Linha 27**: Seu título/cargo
- **Linha 30**: Sua descrição pessoal
- **Linhas 46-58**: Links das suas redes sociais (GitHub, LinkedIn, Email)

#### **About.jsx**
- **Linhas 27-32**: Informações sobre localização, disponibilidade e formação
- **Linhas 40-51**: Texto sobre você
- **Linhas 56-68**: Estatísticas (número de projetos, clientes, anos de experiência)

#### **Skills.jsx**
- **Linhas 4-33**: Edite suas habilidades e níveis de proficiência
- **Linha 82**: Lista de tecnologias que você trabalha

#### **Projects.jsx**
- **Linhas 3-50**: Edite os projetos com:
  - Título do projeto
  - Descrição
  - Tecnologias usadas
  - Links (demo e GitHub)

#### **Contact.jsx**
- **Linha 91**: Seu email
- **Linha 103**: Seu telefone
- **Linha 115**: Sua localização
- **Linhas 122-144**: Links das redes sociais

#### **Footer.jsx**
- **Linha 9**: Seu nome
- **Linha 11**: Sua descrição breve
- **Linhas 53-88**: Links das redes sociais

---

## 🚀 Como Hospedar Gratuitamente

### Opção 1: Vercel (Recomendado)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Instale o Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. No diretório do projeto, execute:
   ```bash
   vercel
   ```
4. Siga as instruções e pronto!

**OU use a interface web:**
- Faça push do código para GitHub
- Conecte o repositório na Vercel
- Deploy automático!

### Opção 2: Netlify

1. Crie uma conta em [netlify.com](https://netlify.com)
2. Instale o Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Build o projeto:
   ```bash
   npm run build
   ```
4. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

**OU arraste e solte:**
- Faça build: `npm run build`
- Arraste a pasta `dist` para netlify.com

### Opção 3: GitHub Pages

1. Instale o gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Adicione no `package.json`:
   ```json
   {
     "homepage": "https://seu-usuario.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Crie um repositório no GitHub

4. Configure o vite.config.js:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/'
   })
   ```

5. Deploy:
   ```bash
   npm run deploy
   ```

### Opção 4: Railway

1. Crie conta em [railway.app](https://railway.app)
2. Conecte seu repositório GitHub
3. Deploy automático!

---

## 🎨 Dicas de Personalização Avançada

### Mudar Cores do Tema

No Tailwind, você usa cores como `blue-600`, `indigo-100`, etc.
Para mudar o esquema de cores, substitua em todos os arquivos:

- `blue-600` → `purple-600` (cor principal)
- `blue-50` → `purple-50` (cor clara)
- `indigo-600` → `violet-600` (cor secundária)

### Adicionar Animações

Instale framer-motion:
```bash
npm install framer-motion
```

Exemplo de uso:
```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Seu conteúdo
</motion.div>
```

### Adicionar Ícones

Instale react-icons:
```bash
npm install react-icons
```

Uso:
```jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa'
```

### Configurar Formulário de Contato

Use EmailJS (gratuito):
1. Crie conta em [emailjs.com](https://emailjs.com)
2. Instale: `npm install @emailjs/browser`
3. Configure no Contact.jsx

---

## 📱 Testar Responsividade

Teste em diferentes tamanhos:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1024px+

Use DevTools do navegador (F12) para simular dispositivos.

---

## ✅ Checklist Antes de Publicar

- [ ] Substituir todos os "Seu Nome"
- [ ] Adicionar links reais das redes sociais
- [ ] Adicionar seus projetos reais
- [ ] Atualizar email e telefone
- [ ] Personalizar cores (opcional)
- [ ] Testar em mobile
- [ ] Verificar links quebrados
- [ ] Otimizar imagens (se adicionar)

---

## 🆘 Precisa de Ajuda?

Se tiver dúvidas, me pergunte! Estou aqui para ajudar! 😊
