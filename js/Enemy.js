import { c } from '../app.js'
import { KineticPlayer } from '../primitives/KineticPlayer.js'

const enemy = new KineticPlayer()
enemy.src = "../assets/Enemy.svg"
enemy.size.set(145 * 1.2, 110 * 1.2)

export default enemy