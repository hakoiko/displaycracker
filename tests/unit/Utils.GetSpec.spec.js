import * as Utils from '@/components/Utils/Utils'

const spec = {
  diagonal: 2,
  resolution: { width: 100, height: 100 },
  coordinates: { width: 50, height: 50 },
  isCm: false
}

describe('Utils.getSpec', () => {
  it('check Spec calculation is correct: density', () => {
    expect(Utils.getSpec(spec).density).toBeCloseTo(2, 0)
  })

  it('check Spec calculation is correct: aspectRatio', () => {
    expect(Utils.getSpec(spec).aspectRatio).toBeCloseTo(1, 0)
  })

  it('check Spec calculation is correct: alfaAngle', () => {
    expect(Utils.getSpec(spec).alfaAngle).toBeCloseTo(45, 0)
  })

  it('check Spec calculation is correct: physicalHeight', () => {
    expect(Utils.getSpec(spec).physicalHeight).toBeCloseTo(3.59, 0.2)
  })

  it('check Spec calculation is correct: physicalWidth', () => {
    expect(Utils.getSpec(spec).physicalWidth).toBeCloseTo(3.59, 0.2)
  })
})
