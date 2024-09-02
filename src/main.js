import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import bento from './features/bento'
import bento_logos from './features/bento_logos'
import bento_posters from './features/bento_posters'
import bento_work from './features/bento_work'
import bento_work_variable from './features/bento_work_variable'

import './styles/style.css'

gsap.registerPlugin(ScrollTrigger)

let counter = 0

//------------ FUNCTIONS ------------//
bento()
bento_work()
function bentoWorkVariable() {
  counter++
  bento_work_variable(counter)
  requestAnimationFrame(bentoWorkVariable)
}
requestAnimationFrame(bentoWorkVariable)
bento_posters()
bento_logos()
