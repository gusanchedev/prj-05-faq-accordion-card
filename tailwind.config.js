module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kumbhSans: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        veryDarkDesaturatedBlue: "hsl(238, 29%, 16%)",
        softRed: "hsl(14, 88%, 65%)",
        softViolet: "hsl(273, 75%, 66%)",
        softBlue: "hsl(240, 73%, 65%)",
        veryDarkGrayishBlue: "hsl(237, 12%, 33%)",
        darkGrayishBlue: "hsl(240, 6%, 50%)",
        lightGrayishBlue: "hsl(240, 5%, 91%)",
      },
      backgroundImage: {
        mobile: "url('/images/bg-pattern-mobile.svg')",
        desktop: "url('/images/bg-pattern-desktop.svg')",
        heromobile: "url('/images/illustration-woman-online-mobile.svg')",
        herodesktop: "url('/images/illustration-woman-online-desktop.svg')",
      },
      backgroundPosition: {
        original: 'left -40rem top -20rem',
      }
    },
  },
  plugins: [],
};
