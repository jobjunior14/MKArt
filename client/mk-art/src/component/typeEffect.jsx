 import Typewriter from "typewriter-effect";

 export function Type ()
 {
    return (
        <Typewriter
            options={{
                strings: [
                    ' Desinnateur',
                    ' Portraitiste'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    )
 }