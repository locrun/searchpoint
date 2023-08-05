import f from "../controllers/f.js"
import findPoint from "../controllers/findPoint.js"
import { layoutDisplay } from "./layoutDisplay.js"

try {
  const r = {
    x: Math.floor(Math.random() * 101),
    y: Math.floor(Math.random() * 101),
    z: Math.floor(Math.random() * 101),
  }

  const s = { x: 0, y: 0, z: 0 }

  const distance = f(s, r)

  const result = findPoint(r)

  const formattedResult = {
    result,
  }

  layoutDisplay(distance, formattedResult)

  console.log(JSON.stringify(formattedResult))
} catch (error) {
  console.error("An error occurred:", error.message)
}
