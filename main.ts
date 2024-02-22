basic.forever(function () {
    music.setTempo(62)
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C - C - C - C - ", 276), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
    }
    if (input.buttonIsPressed(Button.B)) {
        music.setTempo(60)
        music.play(music.stringPlayable("D E C A G B C5 B ", 120), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    }
})
