scene.onOverlapTile(SpriteKind.Player, assets.tile`FinishLineWest`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`FinishLineNorth`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`FinishLineSouth`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`FinishLineEast`, function (sprite, location) {
    game.gameOver(true)
})
// Set up the scene and tilemap
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`Maze_Easy_1`)
// Create the player sprite
let player2 = sprites.create(img`
    . . . . . . f f f f f f . . . . . . 
    . . . . f f e e e e e e f f . . . . 
    . . . f e e e d d d d e e e f . . . 
    . . f e e d d f d d f d d e e f . . 
    . f e e d d d d d d d d d d e e f . 
    . f e d d d d f f f f d d d d e f . 
    . f e d d d d f d d f d d d d e f . 
    . f e d d d d d d d d d d d d e f . 
    . f e d d d d d d d d d d d d e f . 
    . f e d d d d d d d d d d d d e f . 
    . f e e d d d d d d d d d d e e f . 
    . . f e e d d d d d d d d e e f . . 
    . . . f e e e d d d d e e e f . . . 
    . . . . f f e e e e e e f f . . . . 
    . . . . . . f f f f f f . . . . . . 
    `, SpriteKind.Player)
// Enable player movement with buttons
controller.moveSprite(player2)
tiles.placeOnRandomTile(player2, assets.tile`EntranceNorth`)
scene.cameraFollowSprite(player2)
