---
title: WalterGPT
description: Fine-tuned LLM pro emulaci Waltera Whitea
tags:
  - ai
  - llm
  - fine-tuning
  - projects
date: 2024-01-01
---

# WalterGPT

Fine-tuning Llama 3.1 7b modelu pro emulaci osobnosti Waltera Whitea z Breaking Bad.

## Přehled

WalterGPT je experimentální projekt demonstrující možnosti fine-tuningu open-source LLM modelů pro specifické use-case – character emulation.

## Technické detaily

| Aspekt | Hodnota |
|--------|---------|
| Base model | Llama 3.1 7B |
| Metoda | LoRA fine-tuning |
| Dataset | Custom Breaking Bad dialogy |
| Inference | OLLAMA |

## Features

- ✅ Character-consistent odpovědi
- ✅ API server pro integraci
- ✅ Client aplikace
- ✅ Prompt templates

## Architektura

```
Client App → API Server → OLLAMA → Fine-tuned Llama 3.1
```

## Status

🟡 **Údržba** – Projekt je funkční, aktivní vývoj pozastaven.

---

→ [[projects/ai/index|AI Projekty]] | [[projects/ai/ollama-collab-api|OllamaCollabApi]]
