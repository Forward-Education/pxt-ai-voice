// serial.writeLine("===================")
// voiceRecognition.init()
// voiceRecognition.setVolume(4)
// voiceRecognition.setMuteMode(voiceRecognition.MUTE.OFF)
// voiceRecognition.setWakeTime(20)
// serial.writeLine("" + (voiceRecognition.getWakeTime()))
// voiceRecognition.playByCMDID(voiceRecognition.checkWord1(voiceRecognition.WakeupWords.W2))
// serial.writeLine("=================")
// basic.forever(function () {
//     voiceRecognition.getCMDID()
//     if (voiceRecognition.checkCMDID()) {
//         serial.writeLine("" + (voiceRecognition.readCMDID()))
//         if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W22)) {
//             serial.writeLine("2222222222")
//         }
//     }
// })