# Synapse Agent

> **⚠️ Proyecto de Aprendizaje**: Este repositorio fue creado como un proyecto de práctica para explorar y aprender sobre AI Agents utilizando Langbase. Sirvió como base de conocimiento para futuros desarrollos más robustos.

## 📋 Descripción

Synapse Agent es un agente de IA conversacional desarrollado con **Langbase** que implementa un sistema de soporte inteligente con capacidades de recuperación de información (RAG - Retrieval Augmented Generation). El proyecto demuestra cómo construir un agente que puede responder preguntas utilizando una base de conocimientos personalizada.

## 🎯 Objetivo del Proyecto

Este proyecto fue desarrollado con los siguientes propósitos:

- **Aprender** los fundamentos de AI Agents y arquitecturas serverless
- **Experimentar** con Langbase y sus capacidades de memoria
- **Implementar** un sistema RAG básico pero funcional
- **Sentar las bases** para proyectos más complejos en el futuro

## 🏗️ Arquitectura

El proyecto utiliza una arquitectura simple pero efectiva:

```
┌─────────────────┐
│  User Query     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Memory Agent    │ ◄── Recupera información relevante
│ (RAG Retrieval) │     de la base de conocimientos
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ AI Support      │ ◄── Genera respuesta contextualizada
│ Agent           │     con citaciones
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Response       │
└─────────────────┘
```

### Componentes Principales

1. **Memory Agent**: Realiza búsqueda semántica en la base de conocimientos
2. **AI Support Agent**: Genera respuestas contextualizadas basadas en la información recuperada
3. **Knowledge Base**: Memoria de Langbase que almacena documentación y FAQs

## 🛠️ Stack Tecnológico

- **Runtime**: Node.js con TypeScript
- **Framework de AI**: Langbase SDK
- **Arquitectura**: Serverless-ready
- **Gestión de Variables**: dotenv

## 📁 Estructura del Proyecto

```
synapse-agent/
├── src/
│   ├── index.ts           # Punto de entrada alternativo
│   ├── create-memory.ts   # Utilidad para crear memorias
│   └── upload-docs.ts     # Utilidad para subir documentos
├── docs/
│   └── langbase.faq.txt   # Base de conocimientos
├── agents.ts              # Lógica de los agentes
├── index.ts               # Punto de entrada principal
├── create-pipe.ts         # Configuración de pipes
├── package.json
└── tsconfig.json
```

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/JaredMcCarthy/synapse-agent.git
cd synapse-agent

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env y añadir tu LANGBASE_API_KEY
```

## ⚙️ Configuración

Crea un archivo `.env` en la raíz del proyecto:

```env
LANGBASE_API_KEY=tu_api_key_aquí
```

## 💻 Uso

### Ejecutar el agente

```bash
# Modo desarrollo
npm run dev

# Compilar TypeScript
npm run build

# Ejecutar versión compilada
npm start
```

### Ejemplo de Uso

```typescript
import {runMemoryAgent, runAiSupportAgent} from "./agents";

async function main(){
    const query = 'How do i upgrade to individual plan?'

    // Recuperar información relevante
    const chunks = await runMemoryAgent(query)

    // Generar respuesta
    const completion = await runAiSupportAgent({
        chunks,
        query,
    });

    console.log('Completion:', completion);
}

main()
```

## 🔑 Características Principales

### 1. Recuperación Inteligente (RAG)
- Búsqueda semántica en base de conocimientos
- Top-K retrieval configurable (actualmente K=4)
- Sistema de citaciones automáticas

### 2. Generación Contextualizada
- Respuestas basadas únicamente en la información disponible
- Citaciones con números de referencia [1], [2], etc.
- Listado de fuentes al final de cada respuesta

### 3. Sistema de Prompts
- Sistema prompt dinámico que incluye contexto recuperado
- Instrucciones claras para mantener precisión
- Manejo de casos donde no hay información disponible

## 📚 Aprendizajes Clave

Durante el desarrollo de este proyecto se exploraron:

- ✅ Integración con SDKs de AI (Langbase)
- ✅ Implementación de sistemas RAG
- ✅ Gestión de contexto en LLMs
- ✅ Arquitectura de agentes conversacionales
- ✅ TypeScript para proyectos de IA
- ✅ Patrones de diseño para AI Agents

## ⚠️ Limitaciones Conocidas

- **Proyecto de Aprendizaje**: No está optimizado para producción
- **Alcance Limitado**: Desarrollado como POC (Proof of Concept)
- **Sin Tests**: No incluye suite de testing
- **Escalabilidad**: No ha sido probado en escenarios de alto volumen

## 🔮 Próximos Pasos

Este proyecto sirvió como base de aprendizaje. Los próximos desarrollos incluirán:

- Arquitecturas más robustas y escalables
- Sistemas multi-agente
- Implementaciones personalizadas más allá de frameworks

## 📄 Licencia

ISC

## 👤 Autor

**Jared McCarthy**

- GitHub: [@JaredMcCarthy](https://github.com/JaredMcCarthy)

---

**Nota**: Este proyecto representa un paso en el viaje de aprendizaje sobre AI Agents. El código está disponible como referencia y para demostrar conceptos básicos de implementación.