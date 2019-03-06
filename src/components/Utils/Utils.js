/**
 * return detailed display specs from diagonal size(physical), display resolution(render) and coordinates(coord)
 * @param {Object} [Object] it needs keys below:
 * diagonal: [Number] diagonal size [default: 1]
 * resolution: [Object] rendered resolution of display [default: {width: 1, height: 1}]
 * coordinates: [Object] display cooreinates [default: {width: 1, height: 1}]
 * isMm: [Boolean] is disgonal Milimeters? [default: false]
 */
export const getSpec = ({
  diagonal = 1,
  resolution = { width: 1, height: 1 },
  coordinates = { width: 1, height: 1 },
  isMm = false
}) => {
  const inchPerMm = 25.4
  let result = {}
  let hypotenuse = (isMm) ? diagonal : diagonal * inchPerMm

  result.resolution = resolution
  result.coordinates = coordinates
  result.density = resolution.width / coordinates.width
  result.aspectRatio = (resolution.width / resolution.height)
  result.alfa = Math.atan(result.aspectRatio)
  result.alfaAngle = result.alfa * 180 / Math.PI
  result.betaAngle = 180 - 90 - result.alfaAngle
  result.physicalHeight = hypotenuse * Math.cos(result.alfa)
  result.physicalWidth = hypotenuse * Math.sin(result.alfa)
  result.diagonalMm = hypotenuse
  result.diagonalInch = hypotenuse / inchPerMm
  result.pixelsPer1Mm = resolution.width / result.physicalWidth
  result.pointsPer1Mm = result.coordinates.width / result.physicalWidth
  result.pixelsPer1Inch = result.pixelsPer1Mm * inchPerMm
  result.physicalPixelSize = result.physicalWidth / resolution.width
  result.physicalPtSize = result.physicalPixelSize * result.density
  return result
}
