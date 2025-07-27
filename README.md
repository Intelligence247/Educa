# Educa - Education Management System

A modern, scalable education management system built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Multi-User System**: Support for Admin, EBT (Educational Board), Student, and other user types
- **School Profile Setup**: Complete 5-step school registration process
- **Modern UI/UX**: Clean, responsive design with consistent branding
- **Scalable Architecture**: Organized folder structure for easy maintenance and expansion

## 🎨 Design System

### Primary Colors
- **Primary Blue**: `#0A3D62` - Main brand color for headers, buttons, and accents
- **Secondary Blue**: `#ADD8E6` - Secondary buttons and highlights
- **Success Green**: `#4CAF50` - Success states and progress indicators
- **Accent Green**: `#3CB371` - Additional success/accent color

### Neutral Colors
- **White**: `#FFFFFF` - Backgrounds and text on dark surfaces
- **Light Gray**: `#F5F5F5` - Form backgrounds and secondary surfaces
- **Gray**: `#808080` - Muted text and borders
- **Dark Gray**: `#333333` - Primary text on light surfaces

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   │   └── setup/         # School setup process
│   ├── admin/             # Admin dashboard pages
│   ├── ebt/               # Educational Board pages
│   ├── student/           # Student portal pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing/login page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── shared/            # Common components used across modules
│   │   ├── Button.tsx     # Button component with variants
│   │   ├── Input.tsx      # Form input component
│   │   ├── Logo.tsx       # Educa logo component
│   │   ├── LoadingScreen.tsx # Loading/splash screen
│   │   ├── ProgressIndicator.tsx # Multi-step progress
│   │   └── SuccessModal.tsx # Success notifications
│   ├── auth/              # Authentication-specific components
│   ├── admin/             # Admin-specific components
│   ├── ebt/               # EBT-specific components
│   └── student/           # Student-specific components
├── lib/                   # Utility libraries and configurations
├── types/                 # TypeScript type definitions
├── hooks/                 # Custom React hooks
└── utils/                 # Helper functions
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd educafrontend
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Pages & Routes

### Public Pages
- `/` - Landing page with login/register
- `/auth/setup` - School profile setup (5-step process)

### Protected Pages (Future)
- `/admin/*` - Admin dashboard and management
- `/ebt/*` - Educational Board portal
- `/student/*` - Student portal

## 🎯 Component Usage

### Button Component
```tsx
import Button from '@/components/shared/Button';

<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

### Input Component
```tsx
import Input from '@/components/shared/Input';

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  required
/>
```

### Logo Component
```tsx
import Logo from '@/components/shared/Logo';

<Logo size="lg" showText={true} />
```

## 🔧 Development

### Adding New User Types
1. Create a new folder in `src/app/` for the user type
2. Create corresponding components in `src/components/`
3. Add routing and authentication logic

### Styling Guidelines
- Use Tailwind CSS classes for styling
- Follow the established color system
- Maintain consistent spacing and typography
- Use the shared components for common UI elements

### Code Style
- Use TypeScript for all components
- Follow React functional component patterns
- Use proper TypeScript interfaces for props
- Implement proper error handling

## 🚀 Deployment

The project is configured for deployment on Vercel:

```bash
npm run build
npm run start
```

## 📄 License

This project is proprietary software for Educa Education Management System.

## 🤝 Contributing

1. Follow the established folder structure
2. Use the shared components when possible
3. Maintain consistent styling with the design system
4. Write proper TypeScript types
5. Test your changes thoroughly
