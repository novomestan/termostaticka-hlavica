I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
wuKong.setServoAngel(wuKong.ServoList.S0, 0)
let Merana = 0
let Ziadana = 0
basic.forever(function () {
    Merana = input.temperature()
    I2C_LCD1602.ShowString("Merana  T:", 0, 0)
    I2C_LCD1602.ShowString("Ziadana T:", 0, 1)
    I2C_LCD1602.ShowNumber(Merana, 11, 0)
    I2C_LCD1602.ShowNumber(Ziadana, 11, 1)
})
