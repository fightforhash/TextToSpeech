import useSpeechRecognition from "../hooks/useSpeechRecognitionHook";

const Main = () => {
    useSpeechRecognition
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
        </>
        ) : (
          <h1>Your browser no speech</h1>
        )}
        </div>
  );
};

export default Main;