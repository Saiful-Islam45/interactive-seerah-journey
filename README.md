# Interactive Seerah Journey

An immersive, high-performance web application designed to provide an interactive journey through the Seerah (biography of Prophet Muhammad ﷺ) with a modern, premium aesthetic.

## 🚀 Project Overview

This project is a full-stack application featuring a highly interactive frontend and a robust backend. The design focuses on a **glassmorphism** aesthetic, providing a sleek, "alive" user experience with micro-animations and responsive layouts.

### 🏗️ Architecture & Tech Stack

#### **Frontend**
- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript
- **Key Features**: Glassmorphism UI, Responsive Dashboard, Interactive Sidebar, AI Assistant Widget.

#### **Backend**
- **Framework**: [Django](https://www.djangoproject.com/) (Python)
- **Database**: SQLite (default for development)
- **Architecture**: Modular Django apps (e.g., `events`).

---

## 📂 Project Structure

```text
.
├── frontend/                # Next.js Application
│   ├── src/
│   │   ├── app/             # App Router pages and layouts
│   │   ├── components/      # React components
│   │   │   ├── layout/      # Layout-specific components (Sidebar, Nav)
│   │   │   ├── ui/          # Generic UI components
│   │   │   └── widgets/     # Specialized widgets (AIAssistantWidget)
│   │   └── ...
│   └── package.json         # Frontend dependencies and scripts
│
├── backend/                 # Django Application
│   ├── src/
│   │   ├── seerah_backend/  # Core Django configuration
│   │   ├── events/          # Events/Milestones application logic
│   │   └── manage.py        # Django management script
│   └── venv/                # Python virtual environment
│
└── README.md                # Project overview (this file)
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- Python 3.x
- npm or yarn

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Access the app at `http://localhost:3000`.

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend/src
   ```
2. Activate the virtual environment:
   ```bash
   source ../venv/bin/activate
   ```
3. Install dependencies (if requirements.txt exists):
   ```bash
   pip install -r requirements.txt
   ```
4. Run migrations and start server:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

---

## 🤖 AI System Guidelines (for Enhancement & Debugging)

To effectively work on this codebase, AI agents should:
1.  **Maintain Aesthetic Consistency**: Follow the existing glassmorphism patterns (translucent backgrounds, blurs, subtle borders, and smooth transitions).
2.  **Component Architecture**: Reuse generic UI components from `frontend/src/components/ui` and build feature-specific logic in `widgets`.
3.  **Type Safety**: Always use TypeScript in the frontend and maintain strict typing for props and state.
4.  **Backend Integration**: Check `backend/src/events` for business logic related to Seerah milestones.
5.  **Responsiveness**: Ensure all new UI elements are mobile-first and adapt gracefully to different screen sizes.

---

## 📝 License
[Insert License Here]
