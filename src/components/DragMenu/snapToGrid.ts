export function snapToGrid(x: number, y: number): [number, number] {
  const snappedX = Math.round(x / 50) * 50
  const snappedY = Math.round(y / 50) * 50
  return [snappedX, snappedY]
}
