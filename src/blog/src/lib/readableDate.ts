export default function readableDate(d: Date) {
  const deezNuts = new Date(d)
  const formattedDate = deezNuts.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })

  return formattedDate
}
