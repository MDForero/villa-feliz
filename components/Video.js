const Video = () => {
  return (
    <div>
        <video src={require("../public/video.mp4")} width={320} height={320}/>
    </div>
  )
}

export default Video