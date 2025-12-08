---
title: AI Projekty
description: LLM fine-tuning, OLLAMA, a demokratizace AI
tags:
  - ai
  - llm
  - open-source
date: 2025-12-08
---

# AI Projekty

## WalterGPT (2024)

### Přehled
Fine-tuning projektu vznikl během Summer School of AI na SSPŠaG. Cílem bylo vytvořit LLM model, který emuluje osobnost **Waltera Whitea** z Breaking Bad.

### Technická implementace

**Base Model**: Llama 3.1 7b  
**Fine-tuning dataset**: Dialog scripty z Breaking Bad + character analysis  
**Quantization**: 4-bit pro provoz na consumer hardware  
**API Server**: Python FastAPI endpoint

### Architektura
```
Client App (React)
  ↓
FastAPI Server
  ↓
Llama 3.1 7b (quantized)
  ↓
Walter White personality layer
```

### Učení
- Fine-tuning proces (LoRA adapters)
- Model quantization technik
- API serving pro LLM modely
- Character consistency v generovaných odpovědích

---

## OllamaCollabApi (2024)

### Problém
Open-source LLM modely vyžadují:
- Výkonný hardware (16GB+ VRAM)
- Technické znalosti (Python, CLI)
- Setup infrastruktury

To vytváří **bariéru vstupu** pro non-tech uživatele.

### Řešení
**OllamaCollabApi** je script, který umožňuje:
- Spustit OLLAMA modely na **Google Collab free tier**
- Zero-setup pro end-usery
- Web UI pro interakci s modely

### Jak to funguje

1. **Uživatel** otevře Google Collab notebook
2. **Spustí** jediný code cell
3. **Získá** public URL s web UI
4. **Vybere** model z OLLAMA databáze
5. **Chat** interface ready

### Tech Stack
- **Backend**: OLLAMA runtime
- **Frontend**: Streamlit web UI
- **Tunneling**: Ngrok / Gradio
- **Hosting**: Google Collab (free T4 GPU)

### Impact
**Demokratizace AI** – Každý s Google účtem může spustit open-source LLM bez jakékoliv instalace.

### GitHub
🔗 [github.com/SamuelPalubaCZ/OllamaCollabApi](https://github.com/SamuelPalubaCZ/OllamaCollabApi)

---

## AI Community Engagement

### Česko-Slovenská AI Komunita

Spolupracuji s:
- **Juraj Bednár** – Crypto-anarchismus & privacy tech
- **Pavol Ľupták** – AI researcher & educator

Organizujeme:
- AI meetupy v Praze
- Workshopy o LLM deployment
- Diskuse o AI ethics & decentralization

### Oblasti zájmu

1. **Open-source AI**
   - Alternativy k proprietárním modelům (GPT-4, Claude)
   - Local-first LLM deployment
   - Privacy-preserving AI

2. **AI v byznysu**
   - Prompt engineering pro produktivitu
   - Custom chatbots pro zákaznickou podporu
   - Workflow automatizace

3. **Decentralizovaná AI**
   - Federated learning
   - Blockchain + AI integration
   - AI governance bez centrální kontroly

---

## Další projekty (WIP)

### ThinkHome AI Assistant
**Status**: V vývoji

Custom AI asistent pro [[projects/thinkhome|ThinkHome]] klienty:
- **Knowledge base**: Interní dokumentace + best practices
- **RAG architecture**: Retrieval-augmented generation
- **Integration**: Slack, MS Teams, Email

**Cíl**: Automatizovat 50% tier-1 support ticketů

### AI Meetup Platform
**Status**: Koncept

Platforma pro organizaci AI meetupů:
- Event scheduling & promotion
- Speaker coordination
- Video hosting & archiv
- Community discussion forum

---

## AI Philosophy

### Principles

1. **Open-source first**
   - Transparency v AI systémech
   - Community-driven development
   - No vendor lock-in

2. **Privacy-preserving**
   - Local-first processing kde možné
   - Minimal data collection
   - User control nad daty

3. **Democratization**
   - Snížení bariér vstupu
   - Vzdělávací content
   - Tools pro non-tech uživatele

### Austrian Economics + AI

**Price signals v AI**:  
Open-source modely fungují jako "free market" alternativa k closed-source monopolům. Decentralizovaná AI infrastructure umožňuje:
- Concurrency mezi modely
- Innovation bez gatekeeping
- User sovereignty

---

← [[projects|Zpět na projekty]] | [[index|Domů]]