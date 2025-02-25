# 🧠 RAG Chat System (Frontend)

This is the **React + TypeScript + Vite** frontend for the **Retrieval-Augmented Generation (RAG) Chat System**. It provides a user-friendly interface for uploading files and interacting with an AI-powered chatbot.

---

## 🚀 Features

- 📂 **File Upload** – Upload files to process data.  
- 💬 **AI Chat Interface** – Ask queries related to uploaded content.  
- ⚡ **Fast & Responsive UI** – Built with **React**, **Vite**, and **Tailwind CSS**.  
- 🔄 **Real-time Feedback** – Displays responses instantly.  

---

## 🏗️ Project Structure

```
frontend/
│── src/
│   ├── api/
│   │   ├── api.ts            # Handles API requests
│   │
│   ├── components/
│   │   ├── Chat.tsx          # Chat interface
│   │   ├── FileUpload.tsx    # File upload component
│   │
│   ├── pages/
│   │   ├── Home.tsx          # Main page layout
│   │
│   ├── App.tsx               # Root component
│   ├── main.tsx              # Entry point
│   ├── index.css             # Global styles
│   ├── vite-env.d.ts         # TypeScript environment definitions
│
│── public/                   # Static assets
│── .gitignore                 # Ignored files
│── package.json               # Dependencies and scripts
│── tsconfig.json               # TypeScript configuration
│── vite.config.ts              # Vite configuration
│── README.md                   # Project documentation
```

---

## 📦 Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/rag-chat-frontend.git
   cd rag-chat-frontend
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```
   The app will be available at **`http://localhost:5173`**.

---

## ⚙️ Configuration

- Ensure the **backend** server is running on `http://localhost:8080`.
- Modify `API_BASE_URL` in `src/api/api.ts` if needed.

---

## 🛠️ Built With

- [React](https://react.dev/) – JavaScript library for building UIs  
- [TypeScript](https://www.typescriptlang.org/) – Strongly typed JavaScript  
- [Vite](https://vitejs.dev/) – Fast frontend tooling  
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework  
- [Axios](https://axios-http.com/) – HTTP requests handling  

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork, submit issues, or make pull requests.

---

## 📜 License

This project is licensed under the **MIT License**.

---

🚀 Happy Coding! 🎉