import { gsap } from 'gsap'

let currentConfig = 0
let currentConfig2 = 0
let currentConfig3 = 0

function typeDance(t, hero_array, hero_array_2) {
  let averageWidth = 40

  if ((t - 30) % 60 == 0) {
    currentConfig++
    if (currentConfig == 4) {
      currentConfig = 0
    }
  }
  if ((t - 49) % 60 == 0) {
    currentConfig2++
    if (currentConfig2 == 4) {
      currentConfig2 = 0
    }
  }
  if (t % 60 == 0) {
    currentConfig3++
    if (currentConfig3 == 4) {
      currentConfig3 = 0
    }
  }

  console.log(currentConfig)
  const configs = [
    [2.5, 0.5, 1.5, 0.5, 0.5, 0.5, 0.5, 0.5, 2.5, 0.5, 1.8, 0.3, 0.1, 1.8],
    [0.5, 0.5, 2.5, 2.1, 0.5, 0.5, 2.5, 0.5, 0.5, 0.5, 0.3, 0.3, 1.6, 1.8],
    [2.1, 0.5, 0.5, 0.8, 1.8, 0.3, 0.5, 0.5, 0.5, 2.5, 2, 1.5, 0.3, 0.2],
    [0.3, 2.5, 0.3, 0.4, 1, 1.5, 0.5, 2.5, 0.5, 0.5, 0.2, 2, 0.3, 1.5],
  ]

  // La palabra DERIVA hace un total de 6 averageWidth
  let D_WDTH_RATE = configs[currentConfig][0] * averageWidth
  let E_WDTH_RATE = configs[currentConfig][1] * averageWidth
  let R_WDTH_RATE = configs[currentConfig][2] * averageWidth
  let I_WDTH_RATE = configs[currentConfig][3] * averageWidth
  let V_WDTH_RATE = configs[currentConfig][4] * averageWidth
  let A_WDTH_RATE = configs[currentConfig][5] * averageWidth
  D_WDTH_RATE = gsap.utils.mapRange(0, 100, 63.6, 137.3, D_WDTH_RATE)
  E_WDTH_RATE = gsap.utils.mapRange(0, 100, 63.6, 137.3, E_WDTH_RATE)
  R_WDTH_RATE = gsap.utils.mapRange(0, 100, 63.6, 137.3, R_WDTH_RATE)
  I_WDTH_RATE = gsap.utils.mapRange(0, 100, 63.6, 137.3, I_WDTH_RATE)
  V_WDTH_RATE = gsap.utils.mapRange(0, 100, 63.6, 137.3, V_WDTH_RATE)
  A_WDTH_RATE = gsap.utils.mapRange(0, 100, 63.6, 137.3, A_WDTH_RATE)

  // La palabra JAZZ hace un total de 4 averageWidth
  let J_WDTH_RATE = configs[currentConfig2][6] * averageWidth
  let AA_WDTH_RATE = configs[currentConfig2][7] * averageWidth
  let Z_WDTH_RATE = configs[currentConfig2][8] * averageWidth
  let ZZ_WDTH_RATE = configs[currentConfig2][9] * averageWidth
  J_WDTH_RATE = gsap.utils.mapRange(0, 100, 63.6, 137.3, J_WDTH_RATE)
  AA_WDTH_RATE = gsap.utils.mapRange(0, 100, 63.6, 137.3, AA_WDTH_RATE)
  Z_WDTH_RATE = gsap.utils.mapRange(0, 100, 63.6, 137.3, Z_WDTH_RATE)
  ZZ_WDTH_RATE = gsap.utils.mapRange(0, 100, 63.6, 137.3, ZZ_WDTH_RATE)

  // La palabra FEST hace un total de 4 averageWidth
  let F_WDTH_RATE = configs[currentConfig3][10] * averageWidth
  let EE_WDTH_RATE = configs[currentConfig3][11] * averageWidth
  let S_WDTH_RATE = configs[currentConfig3][12] * averageWidth
  let T_WDTH_RATE = configs[currentConfig3][13] * averageWidth
  F_WDTH_RATE = gsap.utils.mapRange(0, 100, 63.6, 137.3, F_WDTH_RATE)
  EE_WDTH_RATE = gsap.utils.mapRange(0, 100, 63.6, 137.3, EE_WDTH_RATE)
  S_WDTH_RATE = gsap.utils.mapRange(0, 100, 63.6, 137.3, S_WDTH_RATE)
  T_WDTH_RATE = gsap.utils.mapRange(0, 100, 63.6, 137.3, T_WDTH_RATE)

  const D = hero_array[0]
  const E = hero_array[1]
  const R = hero_array[2]
  const I = hero_array[3]
  const V = hero_array[4]
  const A = hero_array[5]

  const J = hero_array_2[0]
  const AA = hero_array_2[1]
  const Z = hero_array_2[2]
  const ZZ = hero_array_2[3]

  const F = hero_array_2[4]
  const EE = hero_array_2[5]
  const S = hero_array_2[6]
  const T = hero_array_2[7]

  const easing = 'power4.Out'

  //prettier-ignore
  gsap.to(D, { fontVariationSettings: `'wdth' ${D_WDTH_RATE}`, ease: `${easing}` })
  gsap.to(E, { fontVariationSettings: `'wdth' ${E_WDTH_RATE}`, ease: easing })
  gsap.to(R, { fontVariationSettings: `'wdth' ${R_WDTH_RATE}`, ease: easing })
  gsap.to(I, { fontVariationSettings: `'wdth' ${I_WDTH_RATE}`, ease: easing })
  gsap.to(V, { fontVariationSettings: `'wdth' ${V_WDTH_RATE}`, ease: easing })
  gsap.to(A, { fontVariationSettings: `'wdth' ${A_WDTH_RATE}`, ease: easing })

  gsap.to(J, { fontVariationSettings: `'wdth' ${J_WDTH_RATE}` })
  gsap.to(AA, { fontVariationSettings: `'wdth' ${AA_WDTH_RATE}` })
  gsap.to(Z, { fontVariationSettings: `'wdth' ${Z_WDTH_RATE}` })
  gsap.to(ZZ, { fontVariationSettings: `'wdth' ${ZZ_WDTH_RATE}` })

  gsap.to(F, { fontVariationSettings: `'wdth' ${F_WDTH_RATE}` })
  gsap.to(EE, { fontVariationSettings: `'wdth' ${EE_WDTH_RATE}` })
  gsap.to(S, { fontVariationSettings: `'wdth' ${S_WDTH_RATE}` })
  gsap.to(T, { fontVariationSettings: `'wdth' ${T_WDTH_RATE}` })
}

export default typeDance
