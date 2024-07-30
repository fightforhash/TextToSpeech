import useSpeechRecognition from "../hooks/useSpeechRecognitionHook";

const Main = () => {
    const{
        text,
        startListening,
        stopListening,
        isListening,
        hasRecognitionSupport,
    } = useSpeechRecognition();
    
    
    return( 
    <div>
        {hasRecognitionSupport ? (
        <>
          <div>
            <button onClick = {startListening} >Start Listening</button>
          </div>

          <div>
            <button onClick = {stopListening} > Stop Listening</button>
          </div>
          
          {isListening ? <div>Your browser is currently listening your voice </div> : null}
          {text}
        </>
        ) : (
          <h1>Your browser has no speech support</h1>
        )}
        </div>
  );
};

export default Main;