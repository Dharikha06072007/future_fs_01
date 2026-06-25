import { useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

function SculpturalForm() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const { pointer } = useThree()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
      meshRef.current.rotation.x += 0.001
      meshRef.current.position.x += (pointer.x * 0.3 - meshRef.current.position.x) * 0.02
      meshRef.current.position.y += (-pointer.y * 0.2 - meshRef.current.position.y) * 0.02
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <MeshDistortMaterial
          color="#4A5D23"
          emissive="#7B2D3E"
          emissiveIntensity={0.15}
          roughness={0.4}
          metalness={0.3}
          distort={0.15}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

function GlassSphere({ position, size = 0.2 }: { position: [number, number, number]; size?: number }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.03}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.3}
          temporalDistortion={0.1}
          clearcoat={0.3}
          color="#C9A84C"
          metalness={0.1}
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
}

function BrassRing({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame(() => { ref.current.rotation.x += 0.005; ref.current.rotation.z += 0.003 })
  return (
    <mesh ref={ref} position={position} rotation={[0.5, 0.3, 0]}>
      <torusGeometry args={[0.35, 0.05, 16, 48]} />
      <meshStandardMaterial color="#C9A84C" metalness={0.7} roughness={0.3} />
    </mesh>
  )
}

function PolishedStone({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame(() => { ref.current.rotation.y += 0.003 })
  return (
    <Float speed={1.2} floatIntensity={0.3}>
      <mesh ref={ref} position={position}>
        <dodecahedronGeometry args={[0.25]} />
        <meshPhysicalMaterial color="#7B2D3E" metalness={0.2} roughness={0.3} clearcoat={0.5} />
      </mesh>
    </Float>
  )
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#FAF8F5" />
      <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#C9A84C" />
      <pointLight position={[0, 3, 2]} intensity={0.5} color="#7B2D3E" />
      <SculpturalForm />
      <GlassSphere position={[1.2, 0.8, -0.5]} size={0.18} />
      <GlassSphere position={[-1.5, -0.5, 0.3]} size={0.14} />
      <BrassRing position={[0.8, -1, 0.6]} />
      <BrassRing position={[-1, 0.9, -0.4]} />
      <PolishedStone position={[0, -0.2, 1.2]} />
    </>
  )
}

export default function HeroScene3D() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <SceneContent />
      </Canvas>
    </div>
  )
}
