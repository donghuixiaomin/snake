input.onButtonPressed(Button.A, function () {
    if (可否按鍵 == 1) {
        蛇頭.turn(Direction.Left, 90)
        可否按鍵 = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (可否按鍵 == 1) {
        蛇頭.turn(Direction.Right, 90)
        可否按鍵 = 0
    }
})
let 移動後 = 0
let 移動前 = 0
let 蛇頭: game.LedSprite = null
let 可否按鍵 = 0
可否按鍵 = 1
蛇頭 = game.createSprite(2, 2)
蛇頭.set(LedSpriteProperty.Brightness, 100)
let food = game.createSprite(randint(0, 1), randint(0, 4))
food.set(LedSpriteProperty.Brightness, 255)
let run = 1000
let lost = 0
game.setScore(0)
basic.forever(function () {
    basic.pause((randint(0, 4) + 4) * 1000)
    food.set(LedSpriteProperty.X, randint(0, 4))
    food.set(LedSpriteProperty.Y, randint(0, 4))
})
basic.forever(function () {
    移動前 = 蛇頭.get(LedSpriteProperty.X) + 蛇頭.get(LedSpriteProperty.Y)
    basic.pause(run)
    蛇頭.move(1)
    可否按鍵 = 1
    移動後 = 蛇頭.get(LedSpriteProperty.X) + 蛇頭.get(LedSpriteProperty.Y)
    if (移動後 == 移動前) {
        basic.showIcon(IconNames.House)
        lost = lost + 1
        if (lost == 3) {
            game.gameOver()
        }
        蛇頭.set(LedSpriteProperty.X, 2)
        蛇頭.set(LedSpriteProperty.Y, 2)
        蛇頭.set(LedSpriteProperty.Direction, 90)
    }
    if (蛇頭.isTouching(food)) {
        game.addScore(1)
        food.set(LedSpriteProperty.X, randint(0, 4))
        food.set(LedSpriteProperty.Y, randint(0, 4))
    }
})
