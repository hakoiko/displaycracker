import * as Utils from '@/components/Utils/Utils'

const spec = {
  diagonal: 2,
  renderedPixels: { width: 100, height: 100 },
  coordinates: { width: 50, height: 50 },
  isCm: false
}

describe('Utils.GetSpec', () => {
  it('check Spec calculation is correct: density', () => {
    expect(Utils.GetSpec(spec).density).toBeCloseTo(2, 0)
  })

  it('check Spec calculation is correct: aspectRatio', () => {
    expect(Utils.GetSpec(spec).aspectRatio).toBeCloseTo(1, 0)
  })

  it('check Spec calculation is correct: alfaAngle', () => {
    expect(Utils.GetSpec(spec).alfaAngle).toBeCloseTo(45, 0)
  })

  it('check Spec calculation is correct: physicalHeight', () => {
    expect(Utils.GetSpec(spec).physicalHeight).toBeCloseTo(35.9, 0.02)
  })

  it('check Spec calculation is correct: physicalWidth', () => {
    expect(Utils.GetSpec(spec).physicalWidth).toBeCloseTo(35.9, 0.02)
  })
})
