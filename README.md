# 🚀 Ilustrator - Portfolio

This is the portfolio of a digital ilustrator.

## 🛠️ Tech Stack

- **Framework:** [Astro 5](https://astro.build/) - For optimized performance and great developer experience.
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - Using the latest version for modern utility-first styling.
- **Icons:** [Astro Icon](https://github.com/natemoo-re/astro-icon) - High-performance icon management.
- **Testing:** [Playwright](https://playwright.dev/) - Ensuring component reliability.
- **Linting & Formatting:** ESLint & Prettier - Maintaining code quality and consistency.

## 📁 Project Structure

```text
├── public/             # Static assets
│   ├── fonts/          # Custom web fonts
│   └── img/            # Project and profile images
├── src/
│   ├── assets/         # Optimizable Assets
|   |   └── imgs /
│   ├── components/     # Reusable UI components
│   │   ├── atoms/
│   │   ├── molecules/
│   │   └── organisms/
│   ├── data /          # Important web info
│   ├── icons/          # Custom SVG icons
│   ├── layouts/        # Page layouts (Base, Project, etc.)
│   ├── pages/          # Site routes and views
│   ├── styles/         # Global CSS and Tailwind directives
│   └── utils/          # Reusable functions
├── tests               # Page tests
├── package.json        # Project metadata and dependencies
└── astro.config.mjs    # Astro configuration
```

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (latest LTS recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:jairo-cereceda/portfolio-ilustradora.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd portfolio-ilustradora
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

### Development

Run the local development server:

```bash
npm run dev
```

Open `http://localhost:4321` in your browser to see the result.

## 📜 Available Scripts

| Script            | Description                            |
| :---------------- | :------------------------------------- |
| `npm run dev`     | Starts the local development server.   |
| `npm run build`   | Builds the site for production.        |
| `npm run preview` | Previews the production build locally. |
| `npm run lint`    | Runs ESLint to check for code issues.  |
| `npm run format`  | Formats code using Prettier.           |
| `npm run test`    | Runs tests using Playwright.           |

## 🌐 Deployment (GitHub Pages)

> This site is deployed and hosted on [Vercel](https://portfolio-ilustradora.vercel.app/).

## ✒️ Author

**Jairo Cereceda Berciano**

- **GitHub:** [@jairo-cereceda](https://github.com/jairo-cereceda)
- **LinkedIn:** [Jairo Cereceda Berciano](https://www.linkedin.com/in/jairo-cereceda-berciano/)
