servos.P1.setRange(0, 180)
servos.P0.setAngle(0)
basic.pause(1000)
servos.P1.setAngle(90)
basic.pause(1000)
servos.P1.setAngle(180)
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.ShowString("Merana T:", 0, 0)
I2C_LCD1602.ShowString("Ziadana T:", 0, 1)
I2C_LCD1602.ShowNumber(input.temperature(), 11, 0)
I2C_LCD1602.ShowNumber(25, 11, 1)
