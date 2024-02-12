let lastRenderTime = 0
const SNAKE_SPEED = 1

function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
        return
    }
    window.requestAnimationFrame(main)
    console.log('Render')
    lastRenderTime = currentTime

    update()
    draw()
}
    

window.requestAnimationFrame(main)

function update() {

}

function draw() {
    
}