basic.forever(function () { 
    basic.showNumber(sonar.ping( 
        DigitalPin.P1, 
        DigitalPin.P2, 
        PingUnit.Centimeters 
    )) 
    if (sonar.ping( 
        DigitalPin.P1, 
        DigitalPin.P2,
        PingUnit.Centimeters
    ) < 10 ) { 
        music.play(music.stringPlayable 
        ("-G - G - - - - - ",120),
        music.PlaybackMode.UntilDone) 
    } 
})