# Code Snippets Manager

A modern web application for managing and editing code snippets with a beautiful Monaco editor integration. Built with Next.js, TypeScript, and Prisma.

## 🚀 Features

- Monaco Editor integration for a professional code editing experience
- Dark theme support
- Real-time code editing and saving
- Modern UI with Tailwind CSS
- Type-safe development with TypeScript
- Database integration with Prisma

## 🛠️ Tech Stack

- **Framework:** Next.js 15.2.0
- **Language:** TypeScript
- **Editor:** Monaco Editor (@monaco-editor/react)
- **Database:** Prisma ORM
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Development Tools:** ESLint, Turbopack

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- npm or yarn
- Git

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   cd snippets
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory and add your database configuration.

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Project Structure

```
src/
├── actions/     # Server actions and API routes
├── app/         # Next.js app directory
├── components/  # React components
└── lib/         # Utility functions and configurations
```

## 🛠️ Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
