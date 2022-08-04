import Container from "@/components/base/Container";
import { Canvas } from "@react-three/fiber";

export default function test() {
  return (
    <Container noWrapper>
      <div className="w-screen h-screen">
        <Canvas
          shadows={true}
          className="bg-neutral-700"
          camera={{
            position: [-6, 7, 7]
          }}
        >
          <ambientLight color={"white"} intensity={0.1} />
          <light position={[0, 5, 0]} />
          {/* light lol */}
          <mesh position={[0, 3, 0]}>
            <pointLight castShadow />
            <sphereBufferGeometry args={[0.2, 69, 10]} />
            <meshPhongMaterial emissive={"yellow"} />
          </mesh>
          {/* Floor */}
          <mesh position={[0, -1, 0]} recieveShadow castShadow>
            <boxBufferGeometry />
            <meshPhysicalMaterial color="white" />
          </mesh>
        </Canvas>
      </div>
    </Container>
  )
};
