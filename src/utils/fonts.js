import localFont from "next/font/local"

export const yekan = localFont({
  src: [
    {
      path: "../../public/fonts/YekanBakh-Regular.woff2",
      weight: "200",
      style: "normal",
    },

    {
      path: "../../public/fonts/YekanBakh-Bold.woff2",
      weight: "400",
      style: "bold",
    },

    {
      path: "../../public/fonts/YekanBakh-Heavy.woff2",
      weight: "600",
      style: "heavy",
    },

    {
      path: "../../public/fonts/YekanBakh-Fat.woff2",
      weight: "700",
      style: "fat",
    },
  ],
})

export const sans = localFont({
  src: [
    {
      path: "../../public/fonts/SansReg.otf",
      weight: "200",
      style: "normal",
    },

    {
      path: "../../public/fonts/SansBold.otf",
      weight: "400",
      style: "bold",
    },
  ],
})

export const oblong = localFont({
  src: [
    {
      path: "../../public/fonts/oblong.ttf",
      weight: "400",
      style: "normal",
    },
  ],
})

export const ibrand = localFont({
  src: [
    {
      path: "../../public/fonts/ibrand.otf",
      weight: "400",
      style: "normal",
    },
  ],
})
