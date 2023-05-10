import anato from "../public/ANATO 2023 .mp4"

const Video = () => {
  return (
      <video autoPlay loop muted className="w-full rounded-xl">
        <source src={anato}/>
      </video>
  )
}

export default Video