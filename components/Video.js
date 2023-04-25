const Video = () => {
  return (
      <video autoPlay loop muted className="w-full rounded-xl">
        <source src={require("../public/ANATO 2023 .mp4")} />
      </video>
  )
}

export default Video