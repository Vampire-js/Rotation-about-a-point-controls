export class TopdownController {
    constructor(player) {
        this.player = player
        this.rotationAngle = Math.PI / 50
        this.loader = null
        this.init()
    }
    init() {
        document.onkeydown = key => {
            console.log(key.key)
            switch (key.key) {
                case "d":
                    if (this.speed != 0) {
                        this.player.angle += this.rotationAngle
                    }
                    break;

                case "a":

                    if (this.speed != 0) {
                        this.player.angle -= this.rotationAngle
                    }
                    break;
                case "s":
                    this.player.speed = 1
                    break;
            }

        }

        document.onkeyup = key => {
            switch (key.key) {
                case "s":
                    this.player.speed = 0
                    break;
            }
        }

        // if (this.loader != null) {
        //     document.onkeydown = key => {
        //         if(key.key == "Shift"){
        //             this.loader.progress += 0.01

        //         }
        //     }
        //     this.loader.progress -= 0.005
        // }

    }
    update() {
        this.init()
    }
}