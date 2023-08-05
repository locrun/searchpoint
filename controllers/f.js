const f = (s, r) => {
  if (!s || !r || typeof s !== "object" || typeof r !== "object") {
    throw new Error("Invalid input for f function")
  }
  const distance = Math.sqrt(
    (s.x - r.x) ** 2 + (s.y - r.y) ** 2 + (s.z - r.z) ** 2
  )
  return distance
}
export default f
