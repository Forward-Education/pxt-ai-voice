# fwd-voice-ai-kit

Voice AI Kit, by Forward Education.

Find us at [forwardedu.com](https://forwardedu.com/) and [learn.forwardedu.com](https://learn.forwardedu.com/). Learn more about the Voice AI Kit on the [product page](https://forwardedu.com/products/voice-ai-kit-exploration).

### ~ reminder

![works with micro:bit V2 only image](/static/v2/v2-only.png)

These blocks require the [micro:bit V2](/device/v2). If you use them with a V1 micro:bit you will see the 927 error code on the screen.

### ~

## Example Usage

Our learning systems are designed to simplify teaching coding and computer science for educators at all experience levels. Our Voice AI Kit can be used on its own or joined with other kits to access our wider library of sensors, motors, lights, and buttons. Check out our libraries of [lessons](https://learn.forwardedu.com/lesson-library), [projects](https://learn.forwardedu.com/projects/), and [tutorials](https://learn.forwardedu.com/tutorials/). Samples of coding with the Coding For Good Kit can be seen below.

Let's control an imaginary car with our voice. On start we make sure our voice recognition (VR) device will act as expected. On every iteration of the forever loop the program will take note of what's been said. If it recognizes a command then it checks to see if that command has a programmed action to take. In our case the programmed actions are changing the micro:bit LED's to mimic a car's motion. We can give the commands verbally after first awakening the VR device by saying "Hello robot". We can also simulate the commands being said using the play block and the micro:bit buttons. Our code sets pressing A to be the equivalent of saying "Go forward".

```blocks
input.onButtonPressed(Button.A, function () {
    fwdAiVoice.playByCMDID(fwdAiVoice.checkWord3(fwdAiVoice.FixedCommandWords.W22))
})
input.onButtonPressed(Button.AB, function () {
    fwdAiVoice.playByCMDID(fwdAiVoice.checkWord3(fwdAiVoice.FixedCommandWords.W82))
})
input.onButtonPressed(Button.B, function () {
    fwdAiVoice.playByCMDID(fwdAiVoice.checkWord3(fwdAiVoice.FixedCommandWords.W23))
})
fwdAiVoice.init()
fwdAiVoice.setVolume(4)
fwdAiVoice.setMuteMode(fwdAiVoice.MUTE.OFF)
fwdAiVoice.setWakeTime(20)
basic.forever(function () {
    fwdAiVoice.getCMDID()
    if (fwdAiVoice.checkCMDID()) {
        if (fwdAiVoice.readCMDID() == fwdAiVoice.checkWord3(fwdAiVoice.FixedCommandWords.W22)) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        } else if (fwdAiVoice.readCMDID() == fwdAiVoice.checkWord3(fwdAiVoice.FixedCommandWords.W23)) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        } else if (fwdAiVoice.readCMDID() == fwdAiVoice.checkWord3(fwdAiVoice.FixedCommandWords.W82)) {
            basic.clearScreen()
        }
    }
})
```

Let's make some custom voice commands to play music. After waking up the VR device say "Learning command word". Follow the instructions and say "Mario" 3 or more times to successfully learn command 1. The second command learning starts automatically and this time say "Beethoven" 3 or more times. After succcessfully learning command 2 say "Exit Learning". Now in our forever loop we are listening for and acting on those 2 custom commands instead of the pre-programmed ones. You don't have to redo the learning every time you flash the micro:bit. If you want to clear all the commands you can say "I want to delete" and then "Delete All".

Further details can be found on the [DFRobot wiki](https://wiki.dfrobot.com/sen0539-en/docs/21332).

```blocks
fwdAiVoice.init()
fwdAiVoice.setVolume(4)
fwdAiVoice.setMuteMode(fwdAiVoice.MUTE.OFF)
fwdAiVoice.setWakeTime(20)
music.setVolume(40)
basic.forever(function () {
    fwdAiVoice.getCMDID()
    if (fwdAiVoice.checkCMDID()) {
        if (fwdAiVoice.readCMDID() == fwdAiVoice.checkWord2(fwdAiVoice.LearningCommandWords.W5)) {
            music.setTempo(180)
            music.beginMelody(["E5:2", "E5:2", "R:2", "E5:2", "R:2", "C5:2", "E5:4", "G5:4", "R:4", "G4:4", "R:4"], MelodyOptions.Once)
basic.showString("Super Mario")
        } else if (fwdAiVoice.readCMDID() == fwdAiVoice.checkWord2(fwdAiVoice.LearningCommandWords.W6)) {
            music.setTempo(125)
            music.beginMelody(["E4:2", "D#4:2", "E4:2", "D#4:2", "E4:2", "B3:2", "D4:2", "C4:2", "A3:4"], MelodyOptions.Once)
basic.showString("Fur Elise")
        }
    }
})
```

## Supported Targets

- for PXT/microbit

## License

MIT
