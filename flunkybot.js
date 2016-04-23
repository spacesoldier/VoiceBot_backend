require(Modules.ASR);
 
var call,
    asr;
 
// Inbound call
VoxEngine.addEventListener(AppEvents.CallAlerting, function (e) {
     
    call = e.call;
    call.answer();
    call.addEventListener(CallEvents.Connected, handleCallConnected);
    call.addEventListener(CallEvents.Disconnected, VoxEngine.terminate);
 
});


var blablabla;

// CallConnected event handler
function handleCallConnected(callevent) {
    // Play prompt
    call.say("Hi, thanks for calling us! Please choose a color you like - red, blue, yellow or green ", Language.RU_RUSSIAN_FEMALE);
    // Init ASR - expect US English input and explicitly specified custom dictionary
    asr = VoxEngine.createASR(ASRLanguage.RUSSIAN_RU, ["red", "blue", "yellow", "green"]);
    // Handle ASREvents.CaptureStarted (fired when system detects voice input and start collecting data for ASR)
    asr.addEventListener(ASREvents.CaptureStarted, function(e) {
            call.stopPlayback();
        });
    // Handle recognition result
    asr.addEventListener(ASREvents.Result, function(asrevent) {
        asr.stop();
        call.say("You've chosen "+asrevent.text+" color. Confidence is "+asrevent.confidence, Language.RU_RUSSIAN_FEMALE);
       
      
      
      
      call.addEventListener(CallEvents.PlaybackFinished, VoxEngine.terminate);
    });
    // Send call media to ASR instance
    call.sendMediaTo(asr);
}