# QSlay QR Code Generator

A modern, user-friendly web application for generating customized QR codes. Built with React, TypeScript, and styled with TailwindCSS and shadcn/ui components.

## 🌟 Features

- **Simple URL to QR Code**: Enter any URL and instantly generate a QR code
- **Customizable Colors**: Choose custom colors for both the QR code pattern (foreground) and background
- **Visual Preview**: See your QR code in real-time as you make changes
- **Download Ready**: Generated QR codes are displayed as images ready for download
- **Modern UI**: Clean, responsive interface with smooth animations
- **Fast Generation**: Quick QR code generation using a reliable API

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js and npm installed on your machine. If not, [install Node.js with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/faizulr/qslay-qr-generator.git
   cd qslay-qr-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to the URL shown in your terminal (typically `http://localhost:5173`)

## 🎯 How to Use

1. **Enter a URL**: Type or paste any URL into the input field
2. **Customize Colors** (Optional):
   - Click on the "Vibe Color (Foreground)" picker to change the QR code pattern color
   - Click on the "Chill Color (Background)" picker to change the background color
3. **Generate**: Click the "SLAY IT 🔥" button
4. **Download**: Right-click on the generated QR code image and save it

## 🛠️ Built With

- **[React](https://react.dev/)** - UI framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
qslay-qr-generator/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── services/       # API services (QR code generation)
│   ├── lib/            # Utility functions
│   └── hooks/          # Custom React hooks
├── public/             # Static assets
└── ...
```

## 🔧 Configuration

The QR code generation uses a backend API. The API endpoint is configured in:
- `src/services/qrApi.ts`

The current implementation uses the QSlay backend API for generating QR codes.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built using the [QSlay](https://qslay.onrender.com/) platform
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons and styling with TailwindCSS

---

**Made with ❤️ by [faizulr](https://github.com/faizulr)**
