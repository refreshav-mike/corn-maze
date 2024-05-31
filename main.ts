scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    currentLevel += 1
    levelSelector(currentLevel)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`FinishLineWest`, function (sprite, location) {
    currentLevel += 1
    levelSelector(currentLevel)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.splash("You've successfully gotten the secret ingredients!", "You've Found The Secret Ending!")
    game.gameOver(true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player2,
    assets.animation`ghostBackwards`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    tiles.setWallAt(location, true)
    info.changeScoreBy(-1)
    levers += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player2,
    assets.animation`ghostLeft`,
    200,
    true
    )
})
function levelSelector (level: number) {
    if (level == 0) {
        tiles.setTilemap(tilemap`Maze_Easy_1`)
        tiles.placeOnRandomTile(player2, assets.tile`EntranceNorth`)
    } else if (level == 1) {
        tiles.setTilemap(tilemap`Maze_Medium_1`)
        tiles.placeOnRandomTile(player2, assets.tile`EntranceWest`)
    } else if (level == 2) {
        tiles.setTilemap(tilemap`Maze_Hard_1`)
        tiles.placeOnRandomTile(player2, assets.tile`EntranceSouth`)
    } else if (level == 3) {
        tiles.setTilemap(tilemap`maze_impossible`)
        tiles.placeOnRandomTile(player2, assets.tile`EntranceEast`)
    } else if (level == 4) {
        music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.LoopingInBackground)
        tiles.setTilemap(tilemap`undergroundLevel`)
        tiles.placeOnRandomTile(player2, sprites.dungeon.floorLightMoss)
        info.setScore(4)
        levers = 0
    } else if (level == 5) {
        tiles.setTilemap(tilemap`level7`)
        tiles.placeOnRandomTile(player2, assets.tile`myTile1`)
        game.splash("You need to find the 10 orbs as quick as possible!", "They'll be the secret ingredient for the apple blossom potluck!")
        info.setScore(10)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`hatch`, function (sprite, location) {
    currentLevel += 1
    levelSelector(currentLevel)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`FinishLineNorth`, function (sprite, location) {
    currentLevel += 1
    levelSelector(currentLevel)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile3`)
    tiles.setWallAt(location, true)
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    info.changeScoreBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player2,
    assets.animation`ghostRight`,
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player2,
    assets.animation`ghostForward`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`FinishLineSouth`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile2`)
    tiles.setWallAt(location, true)
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    info.changeScoreBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`FinishLineEast`, function (sprite, location) {
    currentLevel += 1
    levelSelector(currentLevel)
})
let levers = 0
let currentLevel = 0
let levelCount = 0
let player2: Sprite = null
scene.setBackgroundImage(img`
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dddd66666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dddddd6666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dddddddddddd6666666666666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dddd666dddddddddddddd666666666666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669ddddddddd6dddddddddddddd666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddddddddddddddddd666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddddddddddddddddd666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddddddddddddddddd966666666666666666666666666666666666666666666
    66666666666666ddddddddddddd66666666666666666666666666666666666666666666666666666666666666ddddddddddddd9ddddddddddddd6666666666666666666666666666666666666666666
    66666666666666ddddddddddddd66666666666666666666666666666666666666666666666666666666666dddddddddddddddddddddddddddddd9666666666666666666666666666666666666666666
    6666666666666dddddddddddddd66666666666666666666666666666666666666666666666666666666666dddddd9dddddddddd9ddddddddddddd666666666666666666666666666666666666666666
    66666666666ddddddddddddddddddd96666666666666666666666666666666666666666666666666666dddddddddddddddddddd9dddddddddddddd66666666666666666666666666666666666666666
    6666666666ddddddddddddddddddddddd9666666666666666666666666666666666666666666666666dddddddddddddddddddddddddddddddddddd66666666666666666666666666666666666666666
    6666666669dddddddddddddddddddddddd66666666666666666666666666666666666666666666dddddddddddddddddddddddddddd999ddddddddddd666666666666666666666666666666666666666
    666666666ddddddddddddddddddddddddd6666666666666666666666666666666666666666ddddddddddddddddddddddddddddddd9999ddddddddddd966666666666666666666666666666666666666
    666666666ddddddddddddddddddddddddd6666666666666666666666666666666666666666dddddd9ddddd6ddddddddddddddddd9ddd9dddddddddddd66666666666666666666666666666666666666
    6666669ddddddddddddddddddddddddddd96666666666666666666666666666666666666666ddddd669dddd9dddddddddddddddddddd9999dddddddddd6666666666666666666666666666666666666
    666666ddddddddddddddddddddddddddddddd6666666666666666666666666666666666666666666666ddddd999dddddddddddddddddd999ddddddddd666666ddddd666666666666666666666666666
    6669ddddddddddddddddddddddddddddddddd66666666666666666666666666666666666666666666ddddddddddddddddddddddddd9ddddddddddddddd6666ddddddd66666666666666666666666666
    666ddddddddddd9dddddddddddddddddddddddd666666666666666666666666666666666666666666dddddddddddddddddddddddddd9ddddddddddddddd666dddddddd6666666666666666666666666
    699dddddddddd9dddddddddddddddddddddddddd6666666666666666666666666666666666666dddddddddddddddddddddddddddddd9ddddddddddddddd9ddddddddddd6666dd666666666666666666
    dddddddddddd99dddddddddddddddddddddddddd66666666666666666666666666666666dddddddddddddddddd9d9dddddddddddddd69dddddddddddddddddddddddddd66ddddd66dd6666666666666
    ddddddddd9dddddddddddd99ddddddddddd9dddd66666666666666666666666666666d99dddddddddd999ddd99dd69dd999ddddddd96dddddddddd9ddd996ddddddddddddddddddddd666666666dddd
    ddddddddddddddddddddddddddddddddddddddddddd666666666666666666666ddd6ddddddddddddddd99969ddd9699999dddddd99666dddddddddddd96666ddddddd6dddd9dd666666669ddddddddd
    9dddddddddddddddddddddddddddddddddddddddddd6666666666666666666666666669d9966666d99ddd6669d66666ddddd9999666666ddddddddd9dd666666666666666666666666666dddddddddd
    9ddddddddddddddddddddddddddddddddddddddddddd6666666666666666666666666666666666666666666666666666ddd9666666666666666666666666666666666666666666666666ddddddddddd
    dddddddd99dddddddddddddd69999ddddddddddddddd666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dddd66dddddd99dd
    ddddddddd99dddddddddddddddddddddddddddddddddd966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dddddd66dddddddddd
    ddddddddd9dddddddddddddddddddddddddddddddddddddd666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d66d66dddddd9dddd9dddddd
    ddddddd699dddddddddddddddddddddddddddddddddddddddddddddd666666666666666666666666666666666666666666666666666666666666666666666666666666dddddddddddddddddd9dddddd
    dddd9dddd99ddddddddddddddddddddddddddddddddddddddddddddd666666666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddddddddddddddddd
    ddddddddd669ddddddddddddddddddddddddddddddd9999ddddddddd66666666666ddddddd66666666666666666666666666666666666666666666666666666666666666ddddddddddddddddddddddd
    9dddddddddd99dddddddddddddd99ddddddddddddd666666666666666666666666ddddddddd6666666666666666666666666666666666666666666666666666666666666666dd6ddd96dddddddddddd
    dddddddddddd9999ddddddddddd999ddd99699666666666666666666666666669dddddddddd69dd9dd666666666666666666666666666666666666666666666666666666666666666666ddddddddddd
    ddddd999dddddd66ddddddddddddddddd6666666666666666666666666666666dddddddddddddddddd6666666666666666666666666666666666666666666666666666666666666666666ddddddd99d
    66dd6666dddd6666666666ddddd999666666666666666666666666666666666ddddddddddddddddddd666666666666666666666666666666666666666666666666666666bbeeeecc6666669dddddd66
    66666666666666666666669dddd96666666666666666666666666666666666dddddddddddddddddddd66dd66666666666666666666666666666666666666666666666666bbeeeecc666666666666666
    666666666666666666666666dd66666666666666666666666666666666ddddddddddddddddddddddddddddd6666666666666666666666666666666666666666666666666beeeeecc666666666666666
    6666666666666666666666666666666666666666666666666666666dddddddd9dddddddddddddddddddddddd99666666666666666666666666666666666666bbbbbbbbbbbeeeeeeebbbbbbbbb666666
    6666666666666666666666666666666666666666666666666666666ddddddddddddddddddd9dddddd9dddddddd66666666666666666666666666666666666beeeeeeeeeeeeeeeeeeeeeeeeeeec66666
    666666666666666666666666666666666666666666666666666666dddddddddddddddddddddddddddddddddddddd666666666666666666666666666666667eeeeeeeeeeeeeeeeeeeeeeeeeeeee66666
    6666666666666666666666666666666666666666666666666666dddddddddddd9dddddddddd99dddddddddddddddd66dddd66666666666666666666666667eeeeeeeeeeeeeebbeeeeeeeeeeeee66666
    666666666666666666666666666666666666666666666666666dddddddddddd999dddddddddd9dddddddddddddddddddddd66666666666666666666666667ebddddddeebbeeddeeeeddddddbee66666
    666666666666666666666666666666666666666666666dd666ddddddddddddd9ddddddddddddddddddddddddddddddddddddddddddddd6666666666666667ebdbbbbbccbbeedbeebecbbdbbeee66666
    666666666666666666666666666666666666666666dddddddddddddddddddddddddddddddd9dddddddddddddddd9ddddddddddddddddd6666666666666667ebdccceeeecbbbeeeedbeeedeeeee66666
    666666666666666666666666666666666666666666dddddddddddddddddddddddddddddddd66ddddddddddddddd6dddddddd6666666666666666666666667ebddbbeeeecbddeeeedbeeedeeeee66666
    666666666666666666666666666666666666666666666666666669dddddd66ddddddddddddd9ddddddddddddddd666dddddd6666666666666666666666667ebdbbbeeeeebdbeeeedbeeedeeeee66666
    6666666666666666666666666666666666666666666666666666666d99966666ddddddddddddddddd66666666666666666666666666666666666666666667ebdeeeeeeebbeedbeedbeeedeeeee66666
    666669dd6666666666666666666666666666666666666666666666666666666666d6666669dddd96666666666666666666666666666666666666666666667ebdbbbbeeebbeedbeedbeeedeeeee66666
    6666ddddd66666666666666666666666666666666666666666666666666666666666666669999996666666666666666666666666666666666666666666667ebdddddbeebbeedbeedbeebdeeeee66666
    666dddddddd666666666666666666666666666666666666666666666666666666666666666966666666666666666666666666666666666666666666666667eeeeeeeeeeeeeeeeeeeeeeeeeeeec66666
    66dddddddddd96666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667eeeeeeeeeeeeeeeeeeeeeeeeeeecc66666
    6dddddddddddd666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dddd666666666666666666667eeeeeeeeeeeeeeeeeeeeeeeeeeecc66666
    dddddddd9ddddddddd666666666666666666666666666666666666666666666666666666666669dddd6666666666666666dddddddd666666666666666666ceeeeeeeeeeeeeeeeeeeeeeeeeeecc66666
    dddddd9666dddddddd666666666666666dddd666666666666666666666666666666666666666ddddddd666666d6666ddddddddddddd666666666666666666ccccccccccccccccccccccccccccc66666
    66666666666666d666666666666666666dddddd6666666666666666666666666666666666ddddddddddddd6ddddd66dddddddddddddddd66ddddd6666666666666666666ccccccff6666666666ddd66
    666666666666666666666666666666dddddddddd666666666666666666666666666666666666669dddddd66ddddd69ddddddddddddddddddddddddddd666666666666666cccccccf666666666ddd666
    66666666666666666666666666666666666666666666666666666666666666666d6666666666666666666666666666666666699966696666666666666666666666666666cccecccf666666666666666
    66666666666666666ddd666666666666666666666666666666666666dd66666ddddddddd6666666666666666666666666666666666696666666666666666666666666666cceeeccf666666666666666
    99996666669996666696669996666d66966666666966669999966666dd96966666666666666666666999669666966dd99666666666666666666666666666699966669996cceeeccf699669999666666
    6666d666666696666666669d666d99966666666d996666666666666666666666666666666666999999666666666666d9999d6666666666669999dd6d99996dd966699966eeeeeccf699999999996666
    666666666666666666666b66666666dd6666666db66666d6666666666666666666666666bbb6666666666666dddddddd666666666666d6666666666dd666666666666666eeeeeccf6dddddd6dddd66d
    bbbbbbbbdbbbbbbbb777bbbbbbb77777bbbb7bbd7b7bbb777bb7bbb77bb77777d777d777777b777bbbbbbbbbbb7bbb7777777777bbbbbbbbbbbbbbb7777777777777777beeeeeccf7d7b777d7777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eeeeeccc777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eeeeeccc777777777777777
    77777777777e7777777777777e77777777777777777e777777777777777777777e7777777777777777777777777e77777777777777777e77777777777777777777777777eeeeeccce77777e77777777
    777777777ee777e7777777e777e7777eee777777ee7ce777ee777e77777777777e777777777777777777777777e77e777ee77eee777e7ee77777777777777777d77ee77eeeeeeccfcc77c77777ee777
    7777777eee77ee7777777e777777777e777777777777e777ee777ee7777e77777ee7777e7777777777ee77777777777eeee7777eeeeee777777e7777eeee77ee77e777eeeeeeeccfcccccccccccccc7
    777777ee7e77777777e777e77777777777777e7777e7777777777ee777777e77eee777ee777ee777eee7e777777777ee7777777eeee7777777eee7777ee77eeeeeeeeee77eeeeccfcccc777eeee77e7
    777777ee7777777777e77ee77777777777777e77ee777777e7777777777777e7777e77ee7eeee777e7777e7777777eee77777eee77777777ee7ee7e77ee7777ee7777777ebeeecccccce777ee777777
    7eeeecc777777e777ee7ee777777ee77ee777777ee7777777eeee77777e77777777777eeeeeee777eee777eeeeeeeeeee7e7eeee77eee77eeeeeeeeeeeeee77eeeee7777eeeeeccccc7777eeeeeee77
    eeee777777777c777ee7ee777777777ee7777777e777ee7777ee777777ee777777777777ee77eeee7eeeeecccfccccccceeeccfccfcccccccccccccccccfccccccccccccebeeecccccccccccccc77ee
    7ecc777777777e7e77e777e77777777ee7777777e77eee77777eee7777e7e777777ee77777eeeeeeeccccccccccccceeeeeeeccccc77ecccccccccecc7eeeecfceeecceeebeeeccccccccccc7777eee
    7eee77ee7777777e777e77c777e777eeeeee777777777eeeee77ee7ee777eeeeee77eeeeeeccccccccccceeeeeee777ee777ee77777eeecc7777777e777777eee777eeeeeeeeeecccc77eee7777ccc7
    7eee7ecc777777ee77777ee777eeeeee7eee7eee77e77eeee77777eee7777eeeee7eeeeeccccccccceeeeee777777777777ee77777777ee77777777777777777777777777eeeeccccc77ee77777e777
    7ee77ccce777eeee7777eeeee77ee77777e777ee77ee7ecc777777eeee777eeeecccccccccccceebe777777777777777ee77eee7777777777777777777777777777ee777ebeeeccce77ee777ee7777e
    eee77eee777eecccc777e7ece777e777777777e7777c777777777ee7eeeeeeeeecccccee7eeebb7bb7777777777e7777e777ee7777eee7777777777777777eee777eee77ebeecccc77ecc7777e777ee
    7ee777ee7777eccccccce7777777ee7777eeeeee77777777777eee77eeecccfcfccceee777eb7777b7777777e7eee777e77eee7777eee777777e77777777eee7777ee777ebeeeccce7eee7e77777ee7
    7ee7777777777eeee77eeee777777eeeeeeeeeccccc777ee77e77e7eeeeefffcceeeb77777bb777777777e77eeeee77eee7eee777eeeee77777e777777777ee7777ee7777eeeecccc77eee7e77eee77
    7eee77777e777eeeee77eeee777eeeeeeeee7ee77777777e77e7777e7777cfccceeb777777777777777d7eeeeeeeee7eee777eeeeeee77e777e7eeeee7e77777777777777eeeeecfcce77777777e777
    ee7777777777e7eeeeeeeeee777eee77eeee7ee7777ee77eeeee777e77777cccceee777eee77777777777eeeeeee7eee777777eeeeee77ee77e7ecc77ee777777777777eeeeeeecccc7777ee777777e
    ee7777777e7e7777eeeeecccc777eee7eeee7e7777cccccccccccc77eee77eccccebb7777777777777777eee7eeeeeee777777eeee7777e77eeeeee777e777777777777eeeeeeccccc77e7eee7777ee
    ee7e7777cccc777ee77eeeeeeeeeeee7eeeeeee7eee77eeeeeeeecc7eeee77eceee7777777b777e77e7eecccccccccccccccccc77eeee7eeeee7eee77ee7777777777eeeeeeeeccccc77777eee777ee
    eeeee777ee77777ee7777e7e7eeeeee777777ee7eeeeee77e777eee7eeeee7eee7777eee777777e7777eeccccccccccccccccccccccccccccc77ee777ee77eeee77eeeeeeeeeecccccccccccccccccc
    7ee7777eee7777eeee7777eee77eeee7777777eeeccccce777777ee77eeeee7ee777777777e77ee77eeeeeeeecccccccccccfccccc7eeeeeeee77e77eeeeee777eeeeeeeeeeeecccccccc7eeeeee777
    77e7777eeeeeeeeee7ee777ee7777eeeee7e777eecffccc7777777e77ecccc7777e777777ee777777eebb7eeeeeeecccccccccfccccccccccccccc77eeeee77777eeee77eeeeecccccccc7eeeeee777
    eeeeeeeee7777eeeeeeee777ee7777eeeeeee777eeeeeee777777eeeeecc77ee777ee777eee777ee7ee7eeeee777eebeeccccfccffccccccccccccc7eeeee7ee7eecc777eeebeccccc7ee7eeeee77ee
    ee7eeeeeee777eeeeeecccc7e777eee777eee777eeeeee7777ee7eeeeeccc7eeeeeee77ee777777e77e7eee7777ebbbbeeeeecccccccccccccccccceee77eeee7eeeeeeeeeeeecccfc7eeeeeee777ee
    ee7eeeeeeee7ee77eeeeeeee777eeee77eecc777eeeee777eeee77eeeceeee7eeeeee77eee7e7777eee7e7eee77ebb777bb7beeeeecccccccfcccccccc7eeeeeeeee7eeeeeeeeccccccccccccc777ee
    fccccccccce7ee77eeeeeeec7eeecccccccccccc7ccc7e77eeeee77ee777eeeeeeeee777e7ee77777eeee77eee77777777bbbbbb7eeeecccfffccccccccccccccccccccceeeeeccccccceeeee7ee7ee
    fcccccccccccc77ccccccccccccccccccfcccccc7eeeeeee7eeecc77777eeeeee77777e7e7e777ee77eeeeeeee7777777777777bb7beeceeccccccffcccc77eeeeeeeeeeeeeeeccccc7777ee77ee7ee
    fccccc77eeeeeeee7e7eeccccccccceecfcccccce777eecc77eeffc7777eee77777777777eee7eee77eeeeeeee777777e77777beb77bbebeeeeeeccccccfccc777eecccceeeeeecccc7e7eeeee7777e
    fccccc77ee7d7ee7777eccc777eeeeeeeccceeee77777eeee77eee7e77eeee77777eee77eeeeeeee77777eeecc77777ee7777777b777bebbb777eeccccccccc777eeeeeeeeeeeccccccccccccc77777
    eee77777ee7777e77e7eee7e777e77eeecc777eee77777eeee77777eeeeeee77eeeeee7eee777e777ee777eee77777ee77777777bbbb777777bb7beecccfffcccccccccceeeeeecccccccccccc777ee
    777777eeee7777eeeeeeeeee77e77777eeeeeeeeee777eeeeeee77e7eeee77ee7eeecccccc777777eeee77777777eee777777d777bbb777777777bbeeeccfccccccccccceeeeecccccccccccc777eee
    777eeeeee7777eeecccc777eeeee777777eeeeeeeee7eeeeeeee77e7eee7eeeee77eeeeecc7777777eee7777777eeeee77b77777777777bb77777bbb77eecfcccfcccccceeeeecccccccccccc7eeeee
    77eeeccc7777ee7eeee7777ecc7ee77777eeccccc7eeefccccccccc7ee77eecccc77eeeee777eee777ee777ee77eeeccebbbb77777777bbb7777777bbeeeccfcccccffcceeecececccccccccccccccc
    77eeeee777ee7ee77eeeee77ee7eee777777ecfcc77eefcccccccc77e77eeeeeeeeeeeee7777eccc77eeeeeeeeecc77eceb777777777777777777777beeeecccfcccffcceeececcccc77eeccccccccc
    eecccc7777eeeee77eecccc77eeeeeee77777ecc777ecce77777ee77eeeeeeeecccc7eee77eecfccc777eeeeeeeee77ecce77bbbb7777b77777777b7777eeeeeecccfffceeeeecccc7eeeeeeeeeeeee
    eecfcc777eeeeeeeeecccccc77e7ecccc77777ee77eeee7777777eeeeeeccccccccccccccccccfccc777eeccccc77eeecce77bbbb7777777777777b7777eeebeeccccffceeeeecccccccccc7eeeeeee
    ecfcc77ee7eeccccccc77eeee77eefcccc77777eeeee7777777777eccc7eeee777eeccccccc77eeeccccccccccccccccfce777777777777d777777be77777bbbbeecccfceeeeccccccccfcc77eeeecc
    cfcc7eeeeeeee77eecc777eee77eccccccccc77e7777777eeeeee7eee7eee77777eeeeeecc7777eecccccccccccccccfcee77777777777777777777b777d7b7777eecccceeeeccccccccccc7777eccc
    ccc7777eeeeeee777eee777eccccccccccccc777777777eeeccccccccccc7777777eeeeee7777eeeccccc7eee7eccccfceebb77777777b7bb777777777777bb7777beccceeeecccc777ee77777ecccc
    c77777eeecc777777cccccccccccccccccfcccc777e7eeeeeeeeeeeeeee7777eeeeeeeee77eeee7eeecccccccccccccccebeeb777777777777777bbb77777beb7777eccceeeccccc7777e777777cc7e
    77777eeccc777777ccccccccccc77eeeeeccfcccc777eeeeeeeccccccc7777eeeeeeeee77ecccccccccccccccccfcccceebbeb7777777777777777777d77777777777eccccecccc7e7777e77777e777
    7777eecccc77777eeee7777eeee77eeeeeccccccccccccc77777ecfcc7777eecccccccccccccccccccccccccffccceeeeeb777777777777777777777777ee7777e77777e7eccccc7eee777eeee777ee
    77eeeecc777777eeccc77777cc7eecce77777efccccccc7777777ecc7777eefffccccccccc777eefccccfffffcccebb777777777777beb77beee777777e777777eee77777eccc777eeee77777eeeecf
    7eeccfcc7777eeeccc777777ee7eeee7777777eecccce777777777eee77eecfffccccccccc777eccffcfffffcceeeeb7777bb777777777777b7777777e77777777ee77777eeee777ecccc7777eeeccc
    eecfcce7777eeccc7777e7777eeeee77eee7777ecccc7777eeeee77eeeeeccccccccccccccccccccfffccccceebbbbb777777777777777777777777777777777777ee7777ee777eeecffce7777ecccc
    ccffcc7777eecfcc77eeccc777eee7e7eeeee777eee7777eeefcc7cccccccc77eeeccccccccfcccfffccccceebbebb777777777d777777777bbbb7777777777ee777eee777e77eee77eeccce77eecc7
    ccccc77777ecffc777eeeeee77ee77eecccccc777ee777eeefcccccccccccc77eeecfccccffffccccceeeeebbbbbbb7777777777777777777777777777777777ee777eee77777ee77777eeeeee7ee77
    ffccc777eeeeee77eeeeeeecc7ee77eccccfcc77eee77eeeeccccccccccccccccccccfcccffccccccceeeebb7bbb77b777777777777777e777d77777e77777eebee777eee77eee777777eecccccc777
    cc77eeeeeeccccccccccccccccc7eecccccccccccccccccccccccccccccccccccccccfffcccceeeeeeebbbbbb7b777bb7777777ee7777777777777777777eee77bee77eee77eee7ee7777eecc7ee77e
    c7777eeccccccccccccccccccccccccc777eecccccccccccc77eeeeeeeccccccffcccfffceeeb77beebbb77b777777b7777777eeee77777777777777777eeeb777ee77eeeee7777eeee7777ee7eeeee
    e777eeeccceeeeeeee77eeeeccccccc7777eeeccccccccccccccccccccccccfffffccffccebbb777bbbb7777777b7777777777777ee77e7e7eee7777777eee777eeeee7eeee777eeeeee777eeeeeeee
    777eeecce777eeecc777eeeeeeeeee77777eeccccccccccccccccccccccccfffffcccccceeb777777777777777777777777777777eee7e7eeeeeee7777eeee7eee777eeeeeeeeeeeeeccc777eeeeeec
    77eeeecc77eee7eee7777eeeeeeee7777eeecccccccccccccccccccccfffffcffcceeeeeeb77bbb777777bb7777777777777777777eee77eeee7ee7777777777e77777eeeeeeeeccccccccc7ccccccc
    7eeecccc77eeeeeeee7777eeccc77777eecccc77eeeeeeeeeeffffcccffffcccccebb77ebb7beeebb777bb777777777bbbbb777777eee77eee777eee7777777777777eeccccccccc7eeccccccccccce
    eeeeeeeeeeeeeeecccc777eeccc7777eefffcccccccccccccccffffcffcccccceeeebb777777bebbbbb777777777777b77777777777ee77eeeb777ee777ee777777eeeeeeeee7777777eecccccccc77
    ecccccccccccc77eeecc7777ecc777eeecffcccccccccccccffffffcffccceebbbbb777777777bbbbebeb7777777777777777777777ee7ee7eeb77eeeeee777777eeeeeeeee777777777eecccccc777
    cccfcccccccc77777eccc777eee77eeeecfccccccc7ecccccfffccccceeeeebbb7777777777777b77beee7777777777777777777777eeee77eeeeeeeeeeee7777eeeccccc777777777777ecccccc777
    ccccccccccc7777777ecccc7ecc7cccccccccccccccccfcffffccccccebbbbbbebb777777777777777bee7777777777777777e777e77e7777777eeee7eeeeee7eeccc77eee77777ee7777eee7ee777e
    ccc777eecc777777777eeeeeeccccccccccccccccccccffffccccceeeeeeb777bbeeb777777777b77777777777777b77ee7eeee77ee7e777777777777eeeeeeeeccc777eeee77eeeeee7777eeeeeeee
    ee77777ee777eeee7777eeeeccccccc77777eecfccccffcccccceeeeeeeeebb777bbbbb777777bbb77777b7777777777ee7eeeeeee77e777777777777eeeeeeeeee777eeee777eeeeeee777eeeeeeec
    c77eeeee777eeeccc777eeccccccccc777eeeecfcccccfccccceebbbb77bebb77777bbb777777bb77777777777777bb777777eeeee77ee77777777777eeeeeeee7777eeccc7eeeeeecccceeeeeeeeec
    77eeeeeeeeeeeeeccc77eeeccccccc777eeeeeeffccccccceeeb77bb777bbbbb7777bb77777d7777777d777777777777777e7777eeeeee7777eeee7777eeeeee7777eecccccccc77eccccccccccccff
    ccccccccccccc7ecccc77eecccccccccccccccccffcccceeeeb7777b777bbb777bbbb7777777777b777777777777777eeee777777eeee7777eeccccc77eeeee777eeeccccccccccccccccccccccffcc
    cccccccccccce77ecffcccccccccccccccfcccccffcccceeb7b77bb777777b77777777777777777b77bebb777b7ee77e77777777e7eeeeeeee7efccccccccc777eecccccccccccccccccccccc7ecc77
    ecccc7ccc7eeeeeeecffccccccccccccffffccfffcccceebbbbbbbbbb7777777777777777777777777bebb77777ee77777ee777777eeeeeee77eccccccccc7777ecfcccccccccc777777eeeeeeeee77
    cfc77777eeeeeeeeeeccee7eeeeeeeefffffffffcceeeebb7bb7bbbbb777d777777b77777b77777d777777777777ee777eee77777eeeeeee77eeeeeeeeeccc7eeccccccccccccc7777777e7eeeee777
    fce7777777ee7eecccc77777eeeeeecffffccccccceebbbb77777bb777777777777bb7777e7777d7777777bb77777eeee77777eeee7eeee7eeee7eccc7cccccccccccccccccccccccc7777eeeee7777
    cc77777777eeeeeeee7eee777eecfffffffcccccccceeebbebb777dd777777eb77777eebbeb77777dd77777ee7dd77eeee7eee7eeeeeccccccc7777eeeeeeeeeccc777777777eeeeee7777eee77777e
    e7777777777eee777eeeeee777ecffffcccceeeebbbbeb77bbbbb777beb777bb7777bb7beeebb7777777bb777d77777eeeeeeeeeee7eccccccc77777eeeecccfce7777777777eeecccce777eeee77ee
    777777777777eeeeeccccccc77ecfffccccceeebb77be77777777777eeb7777777777777b7777777beeee7777777eeeeeeeeebeee777eeeeeeeee7777eeecccc7777eeee77777eecccccc777eeeeeee
    777e7eee77777eeecccccccccccccffcceeeeeeb7777bbbb777777777777777777777777777b7777bbee7777777777eee77eeee77777777eeeecce7777eeccc7777eeeeeee77777ecccccc77eeeeeec
    7eeeeecccc7777eefffccccccccccffcebebbbb77777bbeee777777777777777bb7777777777777777777777ee7777eeeeeeee777777d77eeeecccc7777ecc7777eeeccccc77777eccfffcccccccccc
    cccccffcccccc77effccccccfcccccceebbbbbb77777b7bb77bbb7777bb77777777777777777b777777777eeeee77777e77eee777777777eeeecfcce777ee77eeeeeeecccccc777effccffccccccccc
    ccccccffccccc77ecccccccccccccccebbbb77bbbbb7777777bbb777bee77bb77777777777ee7777777777eebeee777ee77ee77777777777eeccfcccc7eee7eeeeee77eeeeeee77eeeecfcccccccccc
    ccccccffccccc7c7eecccfffffccceeebbbbbbbbbbb7d7777777777777777bee777777777beeb777777777eeeeeeee7eeeee77eeeeeeee777ecccfccccccccccccc77777eeeccc7ee77eeeeeeeeeeee
    eccffccccccccccc7ccccfffffcceeeeee7bbbb7777dbb77bb777777777777777777777bee7777777777e77eeeeeee77eeee77eeeccccccccccccccccccccccccc77cce7eeecccccc7777eccccccccc
    cccccc7eeefcccccccccffffffceeeeeee777d7777ddbb7777777777b77777777777777bbb77777777eeeeeeeeeecccccccc7ccccccccccccce7eeeeeeecccccc77ccccccccccccccc777eeeeeeeeee
    ffccc77777eccffccccccfffcceeb77bee7777b7ddd777777dd7bb777777777777777777777777777eeee77eccccccccccccccccfccccccc777777eeeeecc7eeeeeeffccccccccccccc777eeeeecccc
    ccc7777777eecffffcfcccccccceb777777777b777bbbb77b777bb77777777777bb77d777d7777777eb7beee77777eccccccccccccccfcc777777777eeeecccccccccccccccccccccccc777ecccccc7
    cc777777eeeeecfffffcccccccee77b77777777777bb77777777b777b777777777777777777b777eebbbeee7777777eccccccccce7cccc77777777777eeeeeeeecceeeeeeeeeeeeeccccc77eeeeeeee
    c77777eeeeeeeeffffccccceeeee777777777777777777bb7777777bb77777777777777777bee77eeebece777777777eccccccc77777ee7777eeeee777eeeeeccc7777eeeeeeeeeeecccccc77eeeeee
    c777eccccfccccccffccceb7777b77777d777777777777bb7777777777777bb77777777777777eeeeeeec7777ee77777eccccce77777eeee7eeeeeee77eeeeccc7777eeeeeeeeeeeecffccccccccccc
    e77eeecccfcccffffcccebbb777777d777777777777777bb777777777777beeb777bb7beb77777eebbee7777eeeeee777ecccc777eeeeeeeeeeccccc777eeccc7777eeeeeecccccccccffcccccccccc
    ccccccffcfffcccccccccee777777bbbb7777777777777777777b77777777bbb7777777b777bbbeeeee7777eeecccc777eecc777eeeeeeeeeeecfcccccccccc777eeeccccccccccc777eccccccccccc
    cccccffffffccccceeeeeeebbb77beee7777777777777777777bbb777777bb77d77777777777beeeee777eeeeccccccc7cccc77eeeeeeeeeeeeeecccccccccc77eecccccc7eeeee77777eeccccccccc
    cccffffffffcceeeebbebb777777bbee777777777777777777777777777bee7777bbbb7777777becce777eeeeecccccccccc777eccccccccccc77eccccccccc7eecffccc77eeeeeee7777eeccccccc7
    ecfffcfffffcceebbbbb777777777777777777bbe77bb777777777777777777bb77bb77777b7beccc777eee777eecccccccccccccccccccccc7777eccccccccccccccccccccccccccc7777ecccccc77
    cffffcfffccccebbbebeb7777777777d77777777777ee777777777eeb777777777beeeeeeeeeecccc7eeeeee77eeeeeeeeeeeeeecccc77eeeee7777eeeeeeeeeccccccccccccccccccc777eeeeee777
    cffffffcccccebbbbbbbbb777777b7777b777777777eb7777777777bbbbbeb777beeeeeeb77bcccccccccccccccccccccccccccccccc7eeeeeee7777eeccccccccc7eeee77eeecccffcc77eeeecc77e
    ecffffcccccebbbbbbbbbb77beeeb77beeb77777777bb77bbbbbb7777777ee7777bbb77bb7beccccccccccccccccccccccccccccccfcccccccccc777eeccccccccc7eeecccccccccffcccc77eeee7ee
    ecffccccccceebb777bbbbbbbeeee77beeb77777777777beeeeeeb77bb7777777777777777bccccfccccccccccccccccccccccccccffccccccccccc77eeeeeeee777eecccccccccccfffccc7cccc7cc
    cccccccccccceeeebbbeeee77bbbbbbbbb7777777bb777bebbbb777beeb777777777777777bccccccccccfcccfcfccccccccccccccfffcccffffccc7eeeeeeeee77eeccccccccfccccfffcccccccccc
    `)
game.showLongText(" Valley Corn Maze Press A To Start", DialogLayout.Top)
if (true) {
    player2 = sprites.create(assets.image`myImage`, SpriteKind.Player)
    controller.moveSprite(player2)
    levelCount = 0
    currentLevel = 0
    levelSelector(currentLevel)
    scene.cameraFollowSprite(player2)
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
}
forever(function () {
    if (info.score() < 1) {
        tiles.setTileAt(tiles.getTileLocation(52, 53), assets.tile`myTile0`)
        tiles.setTileAt(tiles.getTileLocation(53, 53), assets.tile`myTile0`)
        tiles.setTileAt(tiles.getTileLocation(76, 98), assets.tile`myTile1`)
        tiles.setTileAt(tiles.getTileLocation(77, 98), assets.tile`myTile1`)
    }
    if (levers == 4) {
        game.splash("In the distance, you hear a hatch appear.")
        levers += -1
    }
})
