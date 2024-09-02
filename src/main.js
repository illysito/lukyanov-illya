import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import bento from './features/bento'

import './styles/style.css'

gsap.registerPlugin(ScrollTrigger)

//------------ FUNCTIONS ------------//
bento()
