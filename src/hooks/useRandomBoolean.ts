export default function useRandomBoolean(probability?: number) {
  return Math.random() >= probability! ?? 0.5
}
