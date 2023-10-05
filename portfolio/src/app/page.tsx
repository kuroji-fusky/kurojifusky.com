import Image from "next/image"

export default function Home() {
  return (
    <main>
      <div className="min-h-[calc(100dvh-5rem)] flex items-center justify-between">
        <div></div>
        <Image
          src="https://res.cloudinary.com/kuroji-fusky-s3/image/upload/fursonas/comms/dougly_Icon2.png"
          alt=""
          width={350}
          height={350}
          sizes="700px (max-width: 800px)"
          quality="80"
          fetchPriority="high"
          style={{ aspectRatio: "1" }}
        />
      </div>
    </main>
  )
}
