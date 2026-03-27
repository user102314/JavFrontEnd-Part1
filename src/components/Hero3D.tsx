import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

function Truck({ position, speed, color = "#e0e4e8", delay = 0 }: { position: [number, number, number]; speed: number; color?: string; delay?: number }) {
  const ref = useRef<THREE.Group>(null);
  const wheelRefs = useRef<(THREE.Mesh | null)[]>([]);
  const time = useRef(delay);

  useFrame((_, delta) => {
    if (ref.current) {
      // Mouvement horizontal
      ref.current.position.x += speed * delta;
      if (ref.current.position.x > 9) ref.current.position.x = -9;
      
      // Suspension réaliste
      time.current += delta * 8;
      ref.current.position.y = -0.3 + Math.sin(time.current * 1.5) * 0.04;
      
      // Léger roulis
      const turnFactor = Math.sin(ref.current.position.x * 1.2) * 0.03;
      ref.current.rotation.z = turnFactor;
      
      // Rotation des roues
      wheelRefs.current.forEach((wheel) => {
        if (wheel) {
          wheel.rotation.x += speed * delta * 10;
        }
      });
    }
  });

  return (
    <group ref={ref} position={position} scale={0.35}>
      {/* Cabine avec design moderne */}
      <mesh position={[0.8, 0.35, 0]}>
        <boxGeometry args={[0.8, 0.7, 0.9]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Toit avec rétroviseurs */}
      <mesh position={[0.8, 0.7, 0]}>
        <boxGeometry args={[0.7, 0.1, 0.85]} />
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Pare-brise avant */}
      <mesh position={[1.21, 0.45, 0]} rotation={[0, 0, 0.05]}>
        <boxGeometry args={[0.02, 0.4, 0.75]} />
        <meshStandardMaterial color="#7cb8ff" transparent opacity={0.8} metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Pare-brise latéral */}
      <mesh position={[1.15, 0.45, 0.45]}>
        <boxGeometry args={[0.05, 0.35, 0.3]} />
        <meshStandardMaterial color="#7cb8ff" transparent opacity={0.7} />
      </mesh>
      <mesh position={[1.15, 0.45, -0.45]}>
        <boxGeometry args={[0.05, 0.35, 0.3]} />
        <meshStandardMaterial color="#7cb8ff" transparent opacity={0.7} />
      </mesh>
      
      {/* Conteneur avec bandes décoratives */}
      <mesh position={[-0.6, 0.5, 0]}>
        <boxGeometry args={[2, 1, 1]} />
        <meshStandardMaterial color="#1e3a8a" metalness={0.5} roughness={0.4} />
      </mesh>
      
      {/* Bandes JAF */}
      <mesh position={[0.01, 0.5, 0.51]}>
        <boxGeometry args={[0.7, 0.2, 0.02]} />
        <meshStandardMaterial color="#ffd700" metalness={0.9} emissive="#ffd700" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0.01, 0.3, 0.51]}>
        <boxGeometry args={[0.7, 0.15, 0.02]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} />
      </mesh>
      
      {/* Roues avec jantes */}
      {[[-1.2, -0.1, 0.5], [-1.2, -0.1, -0.5], [0.6, -0.1, 0.5], [0.6, -0.1, -0.5]].map((p, i) => (
        <group key={i}>
          <mesh 
            ref={el => wheelRefs.current[i] = el}
            position={p as [number, number, number]} 
            rotation={[Math.PI / 2, 0, 0]}
          >
            <cylinderGeometry args={[0.17, 0.17, 0.12, 32]} />
            <meshStandardMaterial color="#111" metalness={0.8} roughness={0.3} />
          </mesh>
          <mesh position={[p[0], p[1] + 0.02, p[2]]}>
            <cylinderGeometry args={[0.08, 0.08, 0.13, 8]} />
            <meshStandardMaterial color="#888" metalness={0.9} />
          </mesh>
        </group>
      ))}
      
      {/* Feux arrière */}
      <mesh position={[-1.6, 0.2, 0.51]}>
        <boxGeometry args={[0.1, 0.15, 0.02]} />
        <meshStandardMaterial color="#ff3333" emissive="#ff0000" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-1.6, 0.2, -0.51]}>
        <boxGeometry args={[0.1, 0.15, 0.02]} />
        <meshStandardMaterial color="#ff3333" emissive="#ff0000" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function Plane({ position, speed, altitude = 2.5, color = "#e8ecf0" }: { position: [number, number, number]; speed: number; altitude?: number; color?: string }) {
  const ref = useRef<THREE.Group>(null);
  const propellerRef = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  useFrame((_, delta) => {
    if (ref.current) {
      time.current += delta;
      
      // Mouvement horizontal
      ref.current.position.x += speed * delta;
      if (ref.current.position.x > 11) ref.current.position.x = -11;
      
      // Vol réaliste avec ondulations
      ref.current.position.y = altitude + Math.sin(time.current * 1.2) * 0.1;
      ref.current.position.z = position[2] + Math.sin(time.current * 0.6) * 0.15;
      
      // Inclinaison aérodynamique
      ref.current.rotation.z = Math.sin(time.current * 0.8) * 0.15;
      ref.current.rotation.x = Math.sin(time.current * 1.5) * 0.08;
      ref.current.rotation.y = Math.sin(time.current * 0.5) * 0.05;
      
      // Rotation de l'hélice
      if (propellerRef.current) {
        propellerRef.current.rotation.x += speed * delta * 20;
      }
    }
  });

  return (
    <group ref={ref} position={position} scale={0.32} rotation={[0, -Math.PI / 2, 0]}>
      {/* Fuselage aérodynamique */}
      <mesh>
        <capsuleGeometry args={[0.22, 1.9, 24, 32]} />
        <meshStandardMaterial color={color} metalness={0.85} roughness={0.15} emissive={color === "#ffd700" ? "#ffd700" : undefined} emissiveIntensity={0.1} />
      </mesh>
      
      {/* Cockpit */}
      <mesh position={[1.1, 0.12, 0]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#7cb8ff" metalness={0.9} roughness={0.1} emissive="#7cb8ff" emissiveIntensity={0.2} />
      </mesh>
      
      {/* Ailes principales */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.08, 2.8, 0.55]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Winglets modernes */}
      <mesh position={[1.35, 0, 0]} rotation={[0.3, 0, Math.PI / 2]}>
        <boxGeometry args={[0.08, 0.4, 0.55]} />
        <meshStandardMaterial color="#ffd700" metalness={0.7} />
      </mesh>
      <mesh position={[-1.35, 0, 0]} rotation={[-0.3, 0, Math.PI / 2]}>
        <boxGeometry args={[0.08, 0.4, 0.55]} />
        <meshStandardMaterial color="#ffd700" metalness={0.7} />
      </mesh>
      
      {/* Ailes arrière */}
      <mesh position={[0, 0.25, -0.9]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.5, 0.06, 0.35]} />
        <meshStandardMaterial color={color} metalness={0.7} />
      </mesh>
      
      {/* Dérive verticale */}
      <mesh position={[0, 0.45, -0.85]}>
        <coneGeometry args={[0.18, 0.55, 8]} />
        <meshStandardMaterial color={color} metalness={0.7} />
      </mesh>
      
      {/* Hélice */}
      <group position={[1.65, 0, 0]}>
        <mesh ref={propellerRef}>
          <boxGeometry args={[0.08, 0.9, 0.08]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.95} />
        </mesh>
        <mesh ref={propellerRef}>
          <boxGeometry args={[0.08, 0.08, 0.9]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.95} />
        </mesh>
      </group>
      
      {/* Train d'atterrissage */}
      <mesh position={[0.5, -0.15, 0.3]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[0.5, -0.15, -0.3]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
}

function Container({ position, color = "#1e40af", rotationSpeed = 0.008 }: { position: [number, number, number]; color?: string; rotationSpeed?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  useFrame(() => {
    if (ref.current) {
      time.current += 0.02;
      // Rotation et flottement
      ref.current.rotation.y += rotationSpeed;
      ref.current.rotation.x = Math.sin(time.current) * 0.1;
      ref.current.rotation.z = Math.cos(time.current * 0.8) * 0.05;
      ref.current.position.y = position[1] + Math.sin(time.current * 1.5) * 0.03;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.65, 0.45, 0.35]} />
      <meshStandardMaterial color={color} metalness={0.4} roughness={0.5} emissive={color} emissiveIntensity={0.08} />
      {/* Détails conteneur */}
      <mesh position={[0, 0.23, 0.18]}>
        <boxGeometry args={[0.55, 0.05, 0.02]} />
        <meshStandardMaterial color="#ffd700" metalness={0.6} />
      </mesh>
    </mesh>
  );
}

function Road() {
  const roadLines = useMemo(() => {
    const lines = [];
    for (let i = -12; i <= 12; i += 1.5) {
      lines.push(i);
    }
    return lines;
  }, []);

  return (
    <>
      {/* Base de la route */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[24, 2.5]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.9} metalness={0.1} />
      </mesh>
      
      {/* Lignes centrales */}
      {roadLines.map((x, i) => (
        <mesh key={i} position={[x, -0.48, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.4, 0.08]} />
          <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={0.4} />
        </mesh>
      ))}
      
      {/* Bandes latérales */}
      {[-1.1, 1.1].map((z, i) => (
        <mesh key={`side-${i}`} position={[0, -0.48, z]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[24, 0.1]} />
          <meshStandardMaterial color="#ffaa33" emissive="#ffaa33" emissiveIntensity={0.2} />
        </mesh>
      ))}
      
      {/* Marques au sol JAF */}
      {[-6, -3, 0, 3, 6].map((x, i) => (
        <mesh key={`logo-${i}`} position={[x, -0.47, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.8, 0.3]} />
          <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={0.3} transparent opacity={0.6} />
        </mesh>
      ))}
    </>
  );
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 500;
  
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = Math.random() * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18;
      
      // Couleurs variées
      colors[i * 3] = 0.6 + Math.random() * 0.4;
      colors[i * 3 + 1] = 0.7 + Math.random() * 0.3;
      colors[i * 3 + 2] = 1;
    }
    return { positions, colors };
  }, []);

  useFrame((_, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.rotation.x = Math.sin(Date.now() * 0.0002) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={particles.positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={particles.colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.5} />
    </points>
  );
}

function FloatingLights() {
  const lightsRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (lightsRef.current) {
      lightsRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });
  
  return (
    <group ref={lightsRef}>
      {[...Array(8)].map((_, i) => (
        <pointLight
          key={i}
          position={[Math.sin(i * Math.PI * 2 / 8) * 4, 1 + Math.sin(i) * 0.5, Math.cos(i * Math.PI * 2 / 8) * 4]}
          intensity={0.3}
          color="#93c5fd"
          distance={8}
        />
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow shadow-mapSize={1024} />
      <directionalLight position={[-3, 4, 3]} intensity={0.6} color="#93c5fd" />
      <pointLight position={[0, 3, 2]} intensity={0.5} color="#ffd700" />
      
      <FloatingLights />
      <Road />
      <Particles />
      
      {/* Camions - Flotte JAF */}
      <Truck position={[-7, -0.3, -0.2]} speed={1.3} color="#e0e4e8" delay={0} />
      <Truck position={[-4.5, -0.3, 0.1]} speed={1.1} color="#c0c8d0" delay={1} />
      <Truck position={[-2, -0.3, -0.1]} speed={0.95} color="#e8ecf0" delay={2} />
      <Truck position={[0.5, -0.3, 0.2]} speed={1.2} color="#d0d8e0" delay={0.5} />
      <Truck position={[3, -0.3, -0.2]} speed={1.05} color="#e0e4e8" delay={1.5} />
      <Truck position={[5.5, -0.3, 0.1]} speed={1.15} color="#c8d0d8" delay={2.5} />
      
      {/* Avions - Escadrille JAF */}
      <Plane position={[-8, 3.2, -2.5]} speed={1.6} altitude={3.2} color="#e8ecf0" />
      <Plane position={[-5, 2.8, -3.2]} speed={1.4} altitude={2.8} color="#ffffff" />
      <Plane position={[-2, 3.5, -2.8]} speed={1.3} altitude={3.5} color="#d0e0f0" />
      <Plane position={[1, 4, -3.5]} speed={1.7} altitude={4} color="#ffd700" />
      <Plane position={[4, 3, -2.2]} speed={1.5} altitude={3} color="#e8ecf0" />
      <Plane position={[7, 3.8, -3]} speed={1.8} altitude={3.8} color="#ffffff" />
      
      {/* Conteneurs - Terminal JAF */}
      <Container position={[4.2, -0.3, -0.8]} color="#1e3a8a" rotationSpeed={0.01} />
      <Container position={[4.2, -0.3, 0.3]} color="#2563eb" rotationSpeed={0.008} />
      <Container position={[1.8, -0.3, -0.9]} color="#1e40af" rotationSpeed={0.012} />
      <Container position={[1.8, -0.3, 0.2]} color="#3b82f6" rotationSpeed={0.009} />
      <Container position={[-0.5, -0.3, -0.7]} color="#1e3a8a" rotationSpeed={0.011} />
      <Container position={[-0.5, -0.3, 0.4]} color="#60a5fa" rotationSpeed={0.007} />
      <Container position={[-3, -0.3, -0.6]} color="#2563eb" rotationSpeed={0.013} />
      <Container position={[-3, -0.3, 0.5]} color="#1e40af" rotationSpeed={0.01} />
      <Container position={[-5.5, -0.3, -0.4]} color="#3b82f6" rotationSpeed={0.008} />
      <Container position={[-5.5, -0.3, 0.6]} color="#60a5fa" rotationSpeed={0.012} />
      <Container position={[6.5, -0.3, -0.5]} color="#1e3a8a" rotationSpeed={0.009} />
      <Container position={[6.5, -0.3, 0.4]} color="#2563eb" rotationSpeed={0.011} />
      
      {/* Conteneurs empilés */}
      <group position={[-1.5, 0.05, -1.2]}>
        <Container position={[0, 0, 0]} color="#1e40af" rotationSpeed={0.006} />
        <Container position={[0, 0.5, 0]} color="#2563eb" rotationSpeed={0.007} />
      </group>
      <group position={[5, 0.05, -1.3]}>
        <Container position={[0, 0, 0]} color="#3b82f6" rotationSpeed={0.008} />
        <Container position={[0, 0.5, 0]} color="#60a5fa" rotationSpeed={0.009} />
      </group>
    </>
  );
}

const Hero3D = () => (
  <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.75 }}>
    <Canvas
      camera={{ position: [0, 3, 10], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
      shadows
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  </div>
);

export default Hero3D;