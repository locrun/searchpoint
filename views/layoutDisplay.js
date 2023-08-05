export const layoutDisplay = (distance, formattedResult) => {
  if (typeof document !== "undefined") {
    document.getElementById("distance").textContent =
      "Distance between s and r: " + distance
    document.getElementById("searchResult").textContent = JSON.stringify(
      formattedResult,
      null,
      2
    )
  }
}
