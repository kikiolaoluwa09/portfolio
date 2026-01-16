# Kikiolaoluwa Adeniran - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- **Single Page Application** with smooth scrolling navigation
- **Dark Mode Toggle** with seamless theme switching
- **Responsive Design** optimized for all devices
- **Subtle Animations** using Framer Motion
- **Services Section** showcasing web and mobile development
- **Projects Showcase** with GitHub links
- **Work Experience** timeline
- **Contact Integration** with mailto links and LinkedIn
- **Resume Download** functionality

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite with Rolldown

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation and dark mode toggle
│   ├── Hero.jsx        # Home/About section
│   ├── Services.jsx    # Services showcase
│   ├── Projects.jsx    # Projects portfolio
│   ├── Experience.jsx  # Work experience
│   └── Footer.jsx      # Contact and social links
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Customization

- Update personal information in the respective components
- Replace placeholder project data with your actual projects
- Add your personal image to the Hero section
- Update contact links and social media URLs
- Modify the color scheme in `tailwind.config.js` if needed

## License

This project is open source and available under the [MIT License](LICENSE).
