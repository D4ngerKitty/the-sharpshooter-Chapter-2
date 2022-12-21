let LEvelsthings = [
tilemap`level2`,
tilemap`level4`,
tilemap`level8`,
tilemap`level9`,
tilemap`level10`,
tilemap`level16`,
tilemap`level28`
]
let Chapter_two_levels = [tilemap`level29`]
forever(function () {
    for (let value20 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (sprites.readDataNumber(value20, "T") == 10) {
            if (tiles.tileAtLocationEquals(value20.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile75`) || tiles.tileAtLocationIsWall(value20.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))) {
                value20.vx = 60
                sprites.setDataNumber(value20, "m", 60)
            }
            if (tiles.tileAtLocationEquals(value20.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile75`) || tiles.tileAtLocationIsWall(value20.tilemapLocation().getNeighboringLocation(CollisionDirection.Right))) {
                value20.vx = -60
                sprites.setDataNumber(value20, "m", -60)
            }
        }
    }
})
