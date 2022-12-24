let LEvelsthings = [
tilemap`level2`,
tilemap`level4`,
tilemap`level8`,
tilemap`level9`,
tilemap`level10`,
tilemap`level16`,
tilemap`level28`,
tilemap`level46`
]
let Levelthing2 = [tilemap`level45`]
let Text_list = [
["So this all started with I was hired by the not so strong government of Andor to investigate this strange company", "But why was the company weak??", "It was very corrupt, but there is still good people in there and those good people look for the good of the country"],
["TEST", "TEST", "TEST"],
["", "", ""],
["", "", ""]
]
let Textlist2 = [
["So this all started with I was hired by the not so strong government of Andor to investigate this strange company", "But why was the company weak??", "It was very corrupt, but there is still good people in there and those good people look for the good of the country"],
["TEST", "TEST", "TEST"],
["", "", ""],
["", "", ""]
]
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
