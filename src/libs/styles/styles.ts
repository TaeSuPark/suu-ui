import { cva } from "class-variance-authority"

// text variants

// font-size
const fontValues = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
}

// font-weight
const fontWeightValues = {
  400: "font-normal",
  500: "font-medium",
  700: "font-bold",
}

// color

const colorValues = (type: "text" | "bg") => {
  return {
    inherit: `${type}-inherit`,
    transparent: `${type}-transparent`,
    current: `${type}-current`,
    black: `${type}-black`,
    white: `${type}-white`,
    [`gray-lighter`]: `${type}-gray-300`,
    [`gray-main`]: `${type}-gray-400`,
    [`gray-darker`]: `${type}-gray-500`,
    [`red-lighter`]: `${type}-red-300`,
    [`red-main`]: `${type}-red-400`,
    [`red-darker`]: `${type}-red-500`,
    [`orange-lighter`]: `${type}-orange-300`,
    [`orange-main`]: `${type}-orange-400`,
    [`orange-darker`]: `${type}-orange-500`,
    [`yellow-lighter`]: `${type}-yellow-300`,
    [`yellow-main`]: `${type}-yellow-400`,
    [`yellow-darker`]: `${type}-yellow-500`,
    [`green-lighter`]: `${type}-green-300`,
    [`green-main`]: `${type}-green-400`,
    [`green-darker`]: `${type}-green-500`,
    [`blue-lighter`]: `${type}-blue-300`,
    [`blue-main`]: `${type}-blue-400`,
    [`blue-darker`]: `${type}-blue-500`,
    [`indigo-lighter`]: `${type}-indigo-300`,
    [`indigo-main`]: `${type}-indigo-400`,
    [`indigo-darker`]: `${type}-indigo-500`,
    [`purple-lighter`]: `${type}-purple-300`,
    [`purple-main`]: `${type}-purple-400`,
    [`purple-darker`]: `${type}-purple-500`,
    [`pink-lighter`]: `${type}-pink-300`,
    [`pink-main`]: `${type}-pink-400`,
    [`pink-darker`]: `${type}-pink-500`,
  }
}

// space
type SpaceType =
  | "p"
  | "px"
  | "py"
  | "pt"
  | "pr"
  | "pb"
  | "pl"
  | "m"
  | "mx"
  | "my"
  | "mt"
  | "mr"
  | "mb"
  | "ml"
  | "gap-x"
  | "gap-y"
  | "gap"

const spaceValues = (type: SpaceType) => {
  return {
    0: `${type}-0`,
    2: `${type}-0.5`,
    4: `${type}-1`,
    6: `${type}-1.5`,
    8: `${type}-2`,
    10: `${type}-2.5`,
    12: `${type}-3`,
    14: `${type}-3.5`,
    16: `${type}-4`,
    20: `${type}-5`,
    24: `${type}-6`,
    28: `${type}-7`,
    32: `${type}-8`,
    36: `${type}-9`,
    40: `${type}-10`,
    44: `${type}-11`,
    48: `${type}-12`,
    56: `${type}-14`,
    64: `${type}-16`,
  }
}

const flexBoxCommon = {
  direction: {
    default: "flex-row",
    row: "flex-row",
    column: "flex-col",
  },
  align: {
    default: "items-start",
    start: "items-start",
    center: "items-center",
    end: "items-end",
  },
  justify: {
    default: "justify-start",
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  },
  p: spaceValues("p"),
  px: spaceValues("px"),
  py: spaceValues("py"),
  pt: spaceValues("pt"),
  pr: spaceValues("pr"),
  pb: spaceValues("pb"),
  pl: spaceValues("pl"),
  m: spaceValues("m"),
  mx: spaceValues("mx"),
  my: spaceValues("my"),
  mt: spaceValues("mt"),
  mr: spaceValues("mr"),
  mb: spaceValues("mb"),
  ml: spaceValues("ml"),
}

export const FlexBoxVariants = cva(`flex`, {
  variants: {
    ...flexBoxCommon,
    gap: spaceValues("gap"),
    gapX: spaceValues("gap-x"),
    gapY: spaceValues("gap-y"),
  },
  defaultVariants: {
    direction: "default",
    align: "default",
    justify: "default",
  },
})

export const HStackVariants = cva(`flex`, {
  variants: {
    ...flexBoxCommon,
    gap: spaceValues("gap-x"),
  },
  defaultVariants: {
    direction: "row",
    align: "default",
    justify: "default",
  },
})

export const VStackVariants = cva(`flex`, {
  variants: {
    ...flexBoxCommon,
    gap: spaceValues("gap-y"),
  },
  defaultVariants: {
    direction: "column",
    align: "default",
    justify: "default",
  },
})

export const TypographyVariants = cva(``, {
  variants: {
    typoColor: colorValues("text"),
    size: fontValues,
    weight: fontWeightValues,
    whiteSpace: {
      normal: "whitespace-normal",
      nowrap: "whitespace-nowrap",
      pre: "whitespace-pre",
      preLine: "whitespace-pre-line",
      preWrap: "whitespace-pre-wrap",
    },
  },
  defaultVariants: {
    typoColor: "black",
    size: "base",
    weight: 400,
    whiteSpace: "normal",
  },
})
