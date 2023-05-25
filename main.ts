function mover_pata () {
    hackbitmotors.Servo(hackbitmotors.Servos.S8, 140)
    basic.pause(500)
    hackbitmotors.Servo(hackbitmotors.Servos.S8, 100)
    basic.pause(500)
    hackbitmotors.Servo(hackbitmotors.Servos.S8, 60)
    basic.pause(500)
    hackbitmotors.Servo(hackbitmotors.Servos.S8, 100)
    basic.pause(500)
}
let distanciaObstaculo = 0
hackbitmotors.Servo(hackbitmotors.Servos.S8, 100)
basic.forever(function () {
    distanciaObstaculo = hackbitsensor.us_sonar(
    DigitalPin.P13,
    DigitalPin.P14,
    hackbitsensor.PingUnit.cm
    )
    if (distanciaObstaculo < 5) {
        mover_pata()
    }
})
