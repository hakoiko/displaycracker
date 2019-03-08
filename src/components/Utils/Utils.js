/**
 * return detailed display specs from diagonal size(physical), display renderedPixels(render) and coordinates(coord)
 * @param {Object} [Object] it needs keys below:
 * diagonal: [Number] diagonal size [default: 1]
 * renderedPixels: [Object] rendered renderedPixels of display [default: {width: 1, height: 1}]
 * coordinates: [Object] display cooreinates [default: {width: 1, height: 1}]
 * isMm: [Boolean] is disgonal Milimeters? [default: false]
 */
export const GetSpec = ({
  diagonal = 1,
  renderedPixels = { width: 1, height: 1 },
  coordinates = { width: 1, height: 1 },
  physicalPixels = { width: 1, height: 1 },
  isMm = false
}) => {
  const inchPerMm = 25.4
  let result = {}
  let hypotenuse = (isMm) ? diagonal : diagonal * inchPerMm

  result.renderedPixels = renderedPixels
  result.coordinates = coordinates
  result.density = renderedPixels.width / coordinates.width
  result.aspectRatio = (physicalPixels.width / physicalPixels.height)
  result.alfa = Math.atan(result.aspectRatio)
  result.alfaAngle = result.alfa * 180 / Math.PI
  result.betaAngle = 180 - 90 - result.alfaAngle
  result.physicalHeight = hypotenuse * Math.cos(result.alfa)
  result.physicalWidth = hypotenuse * Math.sin(result.alfa)
  result.diagonalMm = hypotenuse
  result.diagonalInch = hypotenuse / inchPerMm
  result.pixelsPer1Mm = physicalPixels.width / result.physicalWidth
  result.pointsPer1Mm = result.coordinates.width / result.physicalWidth
  result.pixelsPer1Inch = result.pixelsPer1Mm * inchPerMm
  result.physicalPixelSize = result.physicalWidth / physicalPixels.width
  result.physicalPtSize = result.physicalPixelSize * result.density
  result.resamplingScale = physicalPixels.width / result.renderedPixels.width
  return result
}
