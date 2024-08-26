import { TopdownController } from "./controllers/TopdownController.js"

import { Circle } from "./primitives/Circle.js"
import { Loader } from "./primitives/Loader.js"

const canvas = document.getElementById("canvas")
canvas.height = innerHeight
canvas.width = innerWidth
export const c = canvas.getContext("2d")

// const box = new Box()
// box.size.set(10,10)
 
const player = new Circle()
player.rad = 10
player.position.set(canvas.width/2, canvas.height/2)

const loader = new Loader()
loader.progress = 0
loader.position.set(canvas.width/2 - loader.width/2 , canvas.height - 100)

const controller = new TopdownController(player)
controller.loader = loader

const animate = () => {

    requestAnimationFrame(animate)

    c.fillStyle = "white"
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.update()
    controller.update()

    loader.update()


}

animate()