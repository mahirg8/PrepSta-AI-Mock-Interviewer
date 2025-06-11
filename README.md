# 🎤 PrepSta - AI Job Interview Preparation Platform

---

📋 **Table of Contents**
- 🤖 Introduction
- ⚙️ Tech Stack
- 🔋 Features
- 🤸 Quick Start
- 🕸️ Snippets
- 🔗 Assets
- 🚀 Deployed App
- 🤝 Contributing
- 🙋‍♂️ Author


---

## 🤖 Introduction

Prepwise is a full-stack application built with **Next.js** for the frontend and backend, styled using **Tailwind CSS**, and integrated with **Vapi's voice AI agents** and **Google Gemini** to simulate job interviews and provide real-time feedback.

Authentication and data management are handled by **Firebase**. The UI leverages `shadcn/ui` for elegant and accessible components.

---

## ⚙️ Tech Stack

- Next.js
- Firebase
- Tailwind CSS
- Vapi AI
- Google Gemini
- shadcn/ui
- Zod

---

## 🔋 Features

- 🔐 **Authentication**: Sign Up and Sign In using Firebase Email/Password Auth
- 🎤 **Voice Interviews**: Take interviews using Vapi AI voice agents
- 📊 **Real-Time Feedback**: AI feedback after every response using Google Gemini
- 🧭 **Interview Dashboard**: Manage and track your interviews
- 🖼️ **Modern UI**: Sleek, mobile-responsive, and clean interface
- 🧱 **Reusable Components**: Modular and scalable codebase
- 📄 **Transcripts**: View interview history and detailed feedback

---

## 🤸 Quick Start

### 🔧 Prerequisites

Ensure the following are installed:

- Git
- Node.js
- npm

### 📥 Clone the Repository

```bash
git clone https://github.com/adrianhajdin/ai_mock_interviews.git
cd ai_mock_interviews
```

### 📦 Install Dependencies

```bash
npm install
```

### 🔐 Set Environment Variables

Create a `.env.local` file in the root directory with the following:

```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

> Replace the placeholders with your actual API keys and credentials.

### ▶️ Run the App

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🕸️ Snippets (Code to Copy)

- `globals.css`
- `lib/utils.ts`
- **Generate Interview Questions Prompt**: `/app/api/vapi/generate/route.tsx`
- **Generate Feedback Prompt**: `lib/actions/general.action.ts`
- **Display Feedback**: `app/(root)/interview/[id]/feedback/page.tsx`

---

## 🔗 Assets

All public assets used in this project are stored in the `/public` folder.

---

## 🚀 Deployed App

Visit: `https://prep-sta-ai-mock-interviewer.vercel.app/`


---

## 🤝 Contributing

Contributions are welcome!  
1. Fork the repo  
2. Create a feature branch  
3. Submit a Pull Request

---

## 🙋‍♂️ Author

Developed with ❤️ by [MahirG8](https://github.com/mahirg8)  
Follow me for more awesome AI projects!
