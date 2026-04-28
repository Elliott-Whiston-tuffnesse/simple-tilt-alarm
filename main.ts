input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Happy)
    music.play(music.stringPlayable("A G A E F B A C5 ", 120), music.PlaybackMode.LoopingInBackground)
})
