/**
 * return detailed display specs from diagonal size(physical), display resolution(render) and coordinates(coord)
 * @param {Object} [Object] it needs keys below:
 * diagonal: [Number] diagonal size [default: 1]
 * resolution: [Object] rendered resolution of display [default: {width: 1, height: 1}]
 * coordinates: [Object] display cooreinates [default: {width: 1, height: 1}]
 * isCm: [Boolean] is disgonal Cm? [default: false]
 */
export const getSpec = ({
  diagonal = 1,
  resolution = { width: 1, height: 1 },
  coordinates = { width: 1, height: 1 },
  isCm = false
}) => {
  const inchPerCm = 2.54
  let result = {}
  let hypotenuse = (isCm) ? diagonal : diagonal * inchPerCm

  result.density = resolution.width / coordinates.width
  result.pow = Math.pow(hypotenuse, 2)
  result.aspectRatio = (resolution.width / resolution.height)
  result.alfa = Math.atan(result.aspectRatio)
  result.alfaAngle = result.alfa * 180 / Math.PI
  result.betaAngle = 180 - 90 - result.alfaAngle
  result.physicalHeight = hypotenuse * Math.cos(result.alfa)
  result.physicalWidth = hypotenuse * Math.sin(result.alfa)
  result.hypotenuse = hypotenuse
  result.inch = diagonal
  result.pixelsPer1Cm = resolution.width / result.physicalWidth
  result.physicalPixelSize = result.physicalWidth / resolution.width
  result.physicalPtSize = result.physicalPixelSize * result.density
  return result
}
