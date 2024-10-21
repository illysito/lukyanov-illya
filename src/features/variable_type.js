import { gsap } from 'gsap'
import SplitType from 'split-type'

function variable_type(counter, contactHeader) {
  // VARIABLES
  // let workHeaderArray = []
  let contactHeaderArray = []
  let amplitude = 100
  let speed = 0.03
  let offset = 0.65
  let min_weight = 300
  let max_weight = 500
  let w_weightVariation = amplitude * Math.sin(counter * speed)
  let w_weight = gsap.utils.mapRange(
    -amplitude,
    amplitude,
    min_weight,
    max_weight,
    w_weightVariation
  )
  let o_weightVariation = amplitude * Math.sin(offset + counter * speed)
  let o_weight = gsap.utils.mapRange(
    -amplitude,
    amplitude,
    min_weight,
    max_weight,
    o_weightVariation
  )
  let r_weightVariation = amplitude * Math.sin(2 * offset + counter * speed)
  let r_weight = gsap.utils.mapRange(
    -amplitude,
    amplitude,
    min_weight,
    max_weight,
    r_weightVariation
  )
  let k_weightVariation = amplitude * Math.sin(3 * offset + counter * speed)
  let k_weight = gsap.utils.mapRange(
    -amplitude,
    amplitude,
    min_weight,
    max_weight,
    k_weightVariation
  )

  // VARIABLE TYPE WORK
  // workHeader.forEach((item) => {
  //   const chars = new SplitType(item, { types: 'chars' }).chars
  //   workHeaderArray = workHeaderArray.concat(chars)
  // })
  // let w = workHeaderArray[0]
  // let o = workHeaderArray[1]
  // let r = workHeaderArray[2]
  // let k = workHeaderArray[3]

  // gsap.set(w, {
  //   fontVariationSettings: `'wght' ${w_weight}`,
  //   ease: 'linear',
  // })
  // gsap.set(o, {
  //   fontVariationSettings: `'wght' ${o_weight}`,
  //   ease: 'linear',
  // })
  // gsap.set(r, {
  //   fontVariationSettings: `'wght' ${r_weight}`,
  //   ease: 'linear',
  // })
  // gsap.set(k, {
  //   fontVariationSettings: `'wght' ${k_weight}`,
  //   ease: 'linear',
  // })

  // VARIABLE TYPE CONTACTO
  contactHeader.forEach((item) => {
    const chars = new SplitType(item, { types: 'chars' }).chars
    contactHeaderArray = contactHeaderArray.concat(chars)
  })
  let c = contactHeaderArray[0]
  let o2 = contactHeaderArray[1]
  let n = contactHeaderArray[2]
  let t = contactHeaderArray[3]
  let a = contactHeaderArray[4]
  let c2 = contactHeaderArray[5]
  let t2 = contactHeaderArray[6]
  let o3 = contactHeaderArray[7]

  gsap.set(c, {
    fontVariationSettings: `'wght' ${w_weight}`,
    ease: 'linear',
  })
  gsap.set(o2, {
    fontVariationSettings: `'wght' ${o_weight}`,
    ease: 'linear',
  })
  gsap.set(n, {
    fontVariationSettings: `'wght' ${r_weight}`,
    ease: 'linear',
  })
  gsap.set(t, {
    fontVariationSettings: `'wght' ${k_weight}`,
    ease: 'linear',
  })
  gsap.set(a, {
    fontVariationSettings: `'wght' ${k_weight}`,
    ease: 'linear',
  })
  gsap.set(c2, {
    fontVariationSettings: `'wght' ${r_weight}`,
    ease: 'linear',
  })
  gsap.set(t2, {
    fontVariationSettings: `'wght' ${o_weight}`,
    ease: 'linear',
  })
  gsap.set(o3, {
    fontVariationSettings: `'wght' ${w_weight}`,
    ease: 'linear',
  })
}

export default variable_type
