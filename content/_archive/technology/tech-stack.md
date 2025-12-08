---
title: Tech Stack & Kompetence
description: Next.js, TypeScript, Linux, AI, a síťová infrastruktura
tags:
  - technology
  - development
  - infrastructure
date: 2025-12-08
---

# Tech Stack & Kompetence

## Frontend Development

### Framework: Next.js 14

**Proč Next.js?**
- **App Router** – Modern file-based routing
- **Server Components** – Performance optimization
- **SSR/SSG hybrid** – Flexibilita pro SEO & speed
- **Vercel integration** – Seamless deployment

**Projects using Next.js**:
- [[projects/thinkhome|ThinkHome]] website
- LibertyLoft platform
- Personal portfolio (tento web)

### Styling: Tailwind CSS

**Utility-first approach**:
```jsx
<div className="flex items-center justify-between p-4 bg-black text-white">
  <h1 className="text-2xl font-bold">ThinkHome</h1>
  <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded">
    Kontakt
  </button>
</div>
```

**Výhody**:
- Rýchlý prototyping
- Konzistentní design system
- Minimální CSS bundle size (PurgeCSS)

### TypeScript

**Type-safe development**:
```typescript
interface Client {
  id: string;
  name: string;
  email: string;
  services: Service[];
}

type Service = "IT Management" | "Cloud" | "Security" | "Hardware";

function getClientServices(client: Client): Service[] {
  return client.services;
}
```

**Benefits**:
- Compile-time error detection
- Better IDE autocomplete
- Self-documenting code

---

## Backend & Infrastructure

### Node.js Ecosystem

**Runtime**: Node.js 20+  
**Package manager**: pnpm (performance)  
**Frameworks**: Express, Fastify (API servers)

### Databases

**PostgreSQL**:
- Hlavní databáze pro [[projects/thinkhome|ThinkHome]]
- ACID compliance
- Advanced indexing

**Supabase**:
- PostgreSQL + real-time subscriptions
- Built-in auth
- Edge Functions

### CMS: Headless Architecture

**Sanity.io**:
- Structured content
- Real-time collaboration
- Custom schemas

**Strapi**:
- Open-source alternativa
- Self-hosted option
- GraphQL/REST API

---

## DevOps & Deployment

### Hosting: Vercel

**Edge Network**:
- Global CDN (300+ locations)
- Automatic SSL
- Zero-config deployment

**DX (Developer Experience)**:
- Git integration (auto-deploy)
- Preview deployments
- Analytics built-in

### Cloudflare

**Services**:
- DNS management
- DDoS protection
- WAF (Web Application Firewall)
- Workers (edge compute)

### Docker & Containerization

**Use cases**:
- Consistent dev environments
- Microservices deployment
- CI/CD pipelines

**Stack**:
```yaml
services:
  web:
    image: node:20-alpine
    volumes:
      - ./src:/app/src
    ports:
      - "3000:3000"
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: ${DB_PASSWORD}
```

---

## Linux & Networking

### Linux Administration

**Distributions**:
- **Ubuntu Server** – Production servers
- **Arch Linux** – Personal machines
- **OpenWrt** – Router firmware

**Skills**:
- Shell scripting (Bash, Zsh)
- Systemd service management
- Firewall configuration (ufw, iptables)
- SSH hardening

### Network Infrastructure

**Ubiquiti / UniFi**:
- Enterprise Wi-Fi design
- VLAN segmentation
- VPN setup (WireGuard)
- Network monitoring (UniFi Controller)

**Projekty**:
- SSPŠaG [[technology/hackathon-organization|HackDays Linux Networks]]
- ThinkHome client deployments

---

## AI & Machine Learning

### LLM Development

**Models používám**:
- **Llama 3.1** (7b, 70b) – Open-source
- **GPT-4** – Commercial projects
- **Claude 3** – Long-context tasks

**Frameworks**:
- **LangChain** – LLM orchestration
- **OLLAMA** – Local model serving
- **FastAPI** – API endpoints

### Projects

- [[projects/ai-projects#waltergpt-2024|WalterGPT]] – Llama 3.1 fine-tuning
- [[projects/ai-projects#ollamacollabapi-2024|OllamaCollabApi]] – Democratization tool

### Prompt Engineering

**Techniques**:
- Chain-of-thought prompting
- Few-shot learning
- RAG (Retrieval-Augmented Generation)

**ThinkHome AI Assistant** (WIP):
```python
from langchain import PromptTemplate, LLMChain

template = """
You are a technical support assistant for ThinkHome.
Client question: {question}
Knowledge base context: {context}

Provide a helpful, professional response.
"""

prompt = PromptTemplate(template=template, input_variables=["question", "context"])
```

---

## Cybersecurity

### Penetration Testing

**Tools**:
- **Nmap** – Network scanning
- **Burp Suite** – Web app testing
- **Metasploit** – Exploitation framework
- **Wireshark** – Packet analysis

**Certifications** (planed):
- eJPT (eLearnSecurity Junior Penetration Tester)
- CEH (Certified Ethical Hacker)

### Security Practices

**Data sanitization**:
- NIST 800-88 standards (ThinkHome hardware lifecycle)

**Authentication**:
- MFA implementation
- OAuth 2.0 / OIDC
- Clerk / Auth0 integration

**Compliance**:
- NIS2 Directive consulting
- GDPR by design

---

## Tools & Workflow

### Editor: VS Code

**Extensions**:
- ESLint + Prettier (code quality)
- Tailwind CSS IntelliSense
- GitHub Copilot
- Docker extension

### Version Control: Git

**Workflow**:
- Feature branches
- Conventional commits
- PR reviews

**Platforms**:
- GitHub (primary)
- GitLab (backup)

### Project Management

**Tools**:
- **Linear** – Issue tracking
- **Notion** – Documentation
- **Figma** – Design collaboration

---

## Learning & Development

### Current Focus (Q1 2025)

1. **Advanced Next.js**
   - Server Actions
   - Streaming RSC
   - Edge runtime optimization

2. **Rust**
   - Systems programming
   - WebAssembly
   - Performance-critical services

3. **Kubernetes**
   - Container orchestration
   - Microservices at scale

### Resources

**Learning platforms**:
- Frontend Masters
- Udemy (selected courses)
- Official documentation (always)

**Communities**:
- Next.js Discord
- /r/webdev
- Czech JavaScript/TypeScript Discord

---

## Hardware

### Development Machine

**Primary**: MacBook Pro 14" (2023)
- M3 Pro chip
- 18GB RAM
- macOS Sonoma

**Secondary**: Custom desktop
- Ryzen 9 5900X
- 32GB RAM
- RTX 3070 (AI training)
- Arch Linux + Windows dual-boot

### Networking Lab

**Home setup**:
- UniFi Dream Machine Pro
- 2x UniFi AP Pro
- Managed switch (VLAN testing)
- Raspberry Pi 4 (network services)

---

← [[technology/hackathon-organization|Hackathony]] | [[index|Domů]]