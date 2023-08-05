import f from "./f.js"

// Описание:
// Этот алгоритм выполняет поиск точки в пространстве, которая находится на минимальном
//расстоянии от заданной точки r.

// Для поиска используется алгоритм бинарного поиска.

// Алгоритм начинает сравнивать расстояние между точками на границах интервала [0, 100].
// Затем он делит интервал на две половины и сравнивает расстояние на середине интервала.

// В зависимости от значения расстояний, алгоритм сдвигает границы интервала и
// продолжает делить его пополам,пока левая граница не станет равной правой границе.

// В результате выполнения алгоритма мы получаем случайную точку x, y, z,
//которая находится на минимальном расстоянии от r.

const findPoint = (r) => {
  if (!r || typeof r !== "object") {
    throw new Error("Invalid input for findPoint function")
  }
  let left = 0
  let right = 100
  let mid

  let calls = 0
  let search_points = []

  while (left < right) {
    mid = Math.floor((left + right) / 2)
    const point = { x: left, y: mid, z: mid }
    const distance1 = f({ x: left, y: mid, z: mid }, r)
    const distance2 = f({ x: right, y: mid, z: mid }, r)
    calls += 2

    if (distance1 < distance2) {
      right = mid
    } else {
      left = mid + 1
    }
    search_points.push(point)
  }

  const result = {
    random_point: { x: left, y: mid, z: mid },
    search_points,
    calls,
  }

  return result
}
export default findPoint
