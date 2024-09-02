import { gsap } from 'gsap'
import SplitType from 'split-type'

function bento_work_variable(counter) {
  // VARIABLES
  const workHeader = document.querySelectorAll('.bento__work-header')
  let workHeaderArray = []
  let amplitude = 100
  let speed = 0.03
  let offset = 0.65
  let min_weight = 300
  let max_wight = 500
  let w_weightVariation = amplitude * Math.sin(counter * speed)
  let w_weight = gsap.utils.mapRange(
    -amplitude,
    amplitude,
    min_weight,
    max_wight,
    w_weightVariation
  )
  let o_weightVariation = amplitude * Math.sin(offset + counter * speed)
  let o_weight = gsap.utils.mapRange(
    -amplitude,
    amplitude,
    min_weight,
    max_wight,
    o_weightVariation
  )
  let r_weightVariation = amplitude * Math.sin(2 * offset + counter * speed)
  let r_weight = gsap.utils.mapRange(
    -amplitude,
    amplitude,
    min_weight,
    max_wight,
    r_weightVariation
  )
  let k_weightVariation = amplitude * Math.sin(3 * offset + counter * speed)
  let k_weight = gsap.utils.mapRange(
    -amplitude,
    amplitude,
    min_weight,
    max_wight,
    k_weightVariation
  )

  // VARIABLE TYPE WORK
  workHeader.forEach((item) => {
    const chars = new SplitType(item, { types: 'chars' }).chars
    workHeaderArray = workHeaderArray.concat(chars)
  })
  let w = workHeaderArray[0]
  let o = workHeaderArray[1]
  let r = workHeaderArray[2]
  let k = workHeaderArray[3]

  gsap.set(w, {
    fontVariationSettings: `'wght' ${w_weight}`,
    ease: 'linear',
  })
  gsap.set(o, {
    fontVariationSettings: `'wght' ${o_weight}`,
    ease: 'linear',
  })
  gsap.set(r, {
    fontVariationSettings: `'wght' ${r_weight}`,
    ease: 'linear',
  })
  gsap.set(k, {
    fontVariationSettings: `'wght' ${k_weight}`,
    ease: 'linear',
  })
}

export default bento_work_variable
