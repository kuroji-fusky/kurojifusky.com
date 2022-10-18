export default function WIPFiller() {
  return (
    <>
      <style>
        {`
          .under-construction {
						--strip1: #25063cc2; 
						--strip2: #470f71c2;

            background-image: linear-gradient(
              40deg,
              var(--strip1) 25%,
              var(--strip2) 25%,
              var(--strip2) 50%,
              var(--strip1) 50%,
              var(--strip1) 75%,
              var(--strip2) 75%,
              var(--strip2) 100%
            );
            background-size: 77.79px 65.27px;
						padding: 1rem;
						border-radius: 12px;
          }
        `}
      </style>
      <div className="under-construction">Under construction; my website is still incomplete and utter garbage lol</div>
    </>
  )
}
