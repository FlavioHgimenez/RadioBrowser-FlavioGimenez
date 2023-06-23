import { useContext, useEffect } from "react"
import { RadioContext } from "../../provider"

const Radio = () => {

      const { audioRef, radioUrl, handleIsLoading } = useContext(RadioContext)

      const onPlay = () => {
            handleIsLoading(false)
      }

      useEffect(() => {
            if (radioUrl !== "") {
                  audioRef.current.play()
            }
            else {
                  audioRef.current.pause()
            }
      }, [radioUrl, audioRef])

      return (
            <audio
                  src={radioUrl}
                  preload="none"
                  ref={audioRef}
                  onPlaying={onPlay}
            />
      )
}

export default Radio