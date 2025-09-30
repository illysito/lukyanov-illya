import { gsap } from 'gsap'
import SplitType from 'split-type'

function variable_type_carlota(counter, contactHeader) {
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
  let h = contactHeaderArray[0]
  let o = contactHeaderArray[1]
  let l = contactHeaderArray[2]
  let a = contactHeaderArray[3]
  let c = contactHeaderArray[4]
  let a2 = contactHeaderArray[5]
  let r = contactHeaderArray[6]
  let l2 = contactHeaderArray[7]
  let o2 = contactHeaderArray[8]
  let t = contactHeaderArray[9]
  let a3 = contactHeaderArray[10]

  gsap.set(h, {
    fontVariationSettings: `'wght' ${w_weight}`,
    ease: 'linear',
  })
  gsap.set(o, {
    fontVariationSettings: `'wght' ${o_weight}`,
    ease: 'linear',
  })
  gsap.set(l, {
    fontVariationSettings: `'wght' ${r_weight}`,
    ease: 'linear',
  })
  gsap.set(a, {
    fontVariationSettings: `'wght' ${k_weight}`,
    ease: 'linear',
  })
  gsap.set(c, {
    fontVariationSettings: `'wght' ${k_weight}`,
    ease: 'linear',
  })
  gsap.set(a2, {
    fontVariationSettings: `'wght' ${r_weight}`,
    ease: 'linear',
  })
  gsap.set(r, {
    fontVariationSettings: `'wght' ${o_weight}`,
    ease: 'linear',
  })
  gsap.set(l2, {
    fontVariationSettings: `'wght' ${w_weight}`,
    ease: 'linear',
  })
  gsap.set(o2, {
    fontVariationSettings: `'wght' ${r_weight}`,
    ease: 'linear',
  })
  gsap.set(t, {
    fontVariationSettings: `'wght' ${o_weight}`,
    ease: 'linear',
  })
  gsap.set(a3, {
    fontVariationSettings: `'wght' ${w_weight}`,
    ease: 'linear',
  })
}

export default variable_type_carlota
