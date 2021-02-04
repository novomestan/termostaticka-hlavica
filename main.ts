input.onButtonPressed(Button.A, function () {
    Ziadana = Ziadana + 0.1
    ZobrazZT()
})
function ZobrazZT () {
    I2C_LCD1602.ShowString("    ", 11, 1)
    I2C_LCD1602.ShowNumber(Ziadana, 11, 1)
}
input.onButtonPressed(Button.B, function () {
    Ziadana = Ziadana - 0.1
    ZobrazZT()
})
function ZobrazMT () {
    Merana = input.temperature()
    I2C_LCD1602.ShowNumber(Merana, 11, 0)
}
let Merana = 0
let Ziadana = 0
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
let Servo = 0
wuKong.setServoAngel(wuKong.ServoList.S0, Servo)
for (let index = 0; index < 9; index++) {
    basic.pause(100)
    Servo = Servo + 10
    wuKong.setServoAngel(wuKong.ServoList.S0, Servo)
}
Ziadana = 25
I2C_LCD1602.ShowString("Merana  T:", 0, 0)
I2C_LCD1602.ShowString("Ziadana T:", 0, 1)
ZobrazZT()
basic.forever(function () {
    ZobrazMT()
})
