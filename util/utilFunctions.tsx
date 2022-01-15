export const randomIntFromInterval = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)
export const isBrowser = typeof window !== "undefined";