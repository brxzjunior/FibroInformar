/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F5F2FA',
          100: '#ECE5F5',
          200: '#D9CCE9',
          300: '#BFA7D8',
          400: '#9B7CC0',
          500: '#7D5BA6',
          600: '#65448D',
          700: '#4D3270', // Roxo Consciência (WCAG AAA)
          800: '#382352',
          900: '#241535',
        },
        sage: {
          50: '#F0F6F3',
          100: '#DEEBE4',
          200: '#BED7CA',
          300: '#94BEAC',
          400: '#6AA38B',
          500: '#45856C', // Verde Movimento e Fisioterapia
          600: '#336B54',
          700: '#25523F',
          800: '#1A3B2D',
        },
        warm: {
          50: '#FDF6F2',
          100: '#FAECE3',
          200: '#F4D5C3',
          500: '#C95F3E', // Terracota acolhedor
          600: '#AA4A2C',
          700: '#8B361C',
        },
        calm: {
          bg: '#FAF8F5',      // Fundo acolhedor anti-fotofobia
          surface: '#FFFFFF', // Superfície de leitura
          card: '#FFFFFF',
          border: '#E8E4DC',
          text: '#292524',    // Preto quente confortável
          muted: '#635E59',   // Texto secundário legível
          subtle: '#8C857E',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(45, 35, 60, 0.05), 0 1px 4px -1px rgba(45, 35, 60, 0.03)',
        'card': '0 4px 16px -4px rgba(45, 35, 60, 0.08), 0 2px 6px -2px rgba(45, 35, 60, 0.04)',
        'elevated': '0 10px 25px -5px rgba(45, 35, 60, 0.1), 0 8px 10px -6px rgba(45, 35, 60, 0.04)',
      },
      minHeight: {
        'touch': '48px',
      },
      minWidth: {
        'touch': '48px',
      }
    },
  },
  plugins: [],
}
