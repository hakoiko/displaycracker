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
  coordinates = { width: 1, height: 1 },
  density = 1,
  resamplingScale = 1,
  renderedPixels = { width: 1, height: 1 },
  physicalPixels = { width: 1, height: 1 },
  isMm = false
}) => {
  const inchPerMm = 25.4
  let result = {}
  let hypotenuse = (isMm) ? diagonal : diagonal * inchPerMm

  result.coordinates = coordinates
  result.density = density || renderedPixels.width / coordinates.width
  result.renderedPixels = (density > 1) ? { width: coordinates.width * density, height: coordinates.height * density } : coordinates
  result.physicalPixels = (resamplingScale === 1) ? { width: result.renderedPixels.width * resamplingScale, height: result.renderedPixels.height * resamplingScale } : result.renderedPixels
  result.aspectRatio = (result.physicalPixels.width / result.physicalPixels.height)
  result.alfa = Math.atan(result.aspectRatio)
  result.alfaAngle = result.alfa * 180 / Math.PI
  result.betaAngle = 180 - 90 - result.alfaAngle
  result.physicalHeight = hypotenuse * Math.cos(result.alfa)
  result.physicalWidth = hypotenuse * Math.sin(result.alfa)
  result.diagonalMm = hypotenuse
  result.diagonalInch = hypotenuse / inchPerMm
  result.pixelsPer1Mm = result.physicalPixels.width / result.physicalWidth
  result.pointsPer1Mm = result.coordinates.width / result.physicalWidth
  result.pixelsPer1Inch = result.pixelsPer1Mm * inchPerMm
  result.physicalPixelSize = result.physicalWidth / result.physicalPixels.width
  result.physicalPtSize = result.physicalPixelSize * result.density
  result.resamplingScale = resamplingScale || result.physicalPixels.width / result.renderedPixels.width
  return result
}
