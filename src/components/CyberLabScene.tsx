import React, { useRef, useState, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Text, Box } from '@react-three/drei';
import * as THREE from 'three';
import { easing } from 'maath';

// Helper for smooth numerical transitions
const outCubic = (t: number) => 1 - Math.pow(1 - t, 3);

interface PositionProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

// Laptop Component (using Box as placeholder for now, can be replaced with GLTF model)
const Laptop: React.FC<PositionProps> = ({ position, rotation, scale }) => {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (group.current) {
      // Hover animation
      group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
      // Slight rotation
      group.current.rotation.y += 0.005;
      // Mouse interaction parallax
      easing.dampE(group.current.rotation, [rotation[0] + state.pointer.y * 0.1, rotation[1] + state.pointer.x * 0.1, rotation[2]], 0.25, delta);
    }
  });

  // Laptop screen content (Burp Suite simulation)
  const BurpSuiteScreen = () => (
    <Html transform position={[0, 0.15, -0.1]} rotation-x={-Math.PI / 2} scale={0.2}>
      <div className="w-[300px] h-[200px] bg-gray-900 text-[#00FFB3] font-mono text-[8px] p-2 rounded-sm overflow-hidden border border-[#00FFB3]/50 shadow-lg" style={{ transform: 'rotateX(90deg)' }}>
        <div className="flex justify-between mb-1">
          <span>BURP SUITE // PROXY</span>
          <span>ACTIVE</span>
        </div>
        <div className="h-px bg-[#00FFB3]/50 mb-1" />
        <div className="flex justify-between">
          <span>GET /api/users HTTP/1.1</span>
          <span className="text-[#7B61FF]">200 OK</span>
        </div>
        <div className="flex justify-between">
          <span>POST /auth/login HTTP/1.1</span>
          <span className="text-[#00E5FF]">401 UNAUTHORIZED</span>
        </div>
        <div className="flex justify-between">
          <span>PATCH /profile HTTP/1.1</span>
          <span className="text-[#7B61FF]">200 OK</span>
        </div>
        <div className="h-px bg-[#00FFB3]/50 mt-1 mb-1" />
        <div className="text-[#00E5FF] animate-pulse">VULNERABILITY: SQL INJECTION DETECTED!</div>
        <div className="text-[#00FFB3]">Endpoints: 124 | Findings: 7 | Reports: 3</div>
      </div>
    </Html>
  );

  return (
    <group ref={group} position={position} rotation={rotation} scale={[scale, scale, scale]}>
      {/* Placeholder for laptop body */}
      <Box args={[1.5, 0.1, 1]} position={[0, -0.05, 0]}>
        <meshStandardMaterial color="#222" />
      </Box>
      <Box args={[1.4, 0.8, 0.05]} position={[0, 0.4, -0.5]}>
        <meshStandardMaterial color="#333" />
      </Box>
      {/* If GLTF is used, uncomment this: */}
      {/* <primitive object={scene} /> */}
      <BurpSuiteScreen />
      {/* Soft blue glow underneath */}
      <mesh position={[0, -0.2, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color="#00E5FF" transparent opacity={0.2} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
};

// Floating JWT Token
interface TokenProps {
  position: [number, number, number];
  rotationSpeed: number;
  text: string;
}

const JWTToken: React.FC<TokenProps> = ({ position, rotationSpeed, text }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += rotationSpeed;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <planeGeometry args={[0.8, 0.3]} />
      <meshBasicMaterial color="#0A0F1C" transparent opacity={0.6} side={THREE.DoubleSide} />
      <Text
        position={[0, 0, 0.01]}
        fontSize={0.08}
        color="#00E5FF"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </mesh>
  );
};

// API Traffic Hologram
interface TrafficProps {
  start: [number, number, number];
  end: [number, number, number];
  speed?: number;
  color: string;
}

const APITraffic: React.FC<TrafficProps> = ({ start, end, color }) => {
  const ref = useRef<THREE.Line>(null);
  const materialRef = useRef<THREE.LineBasicMaterial>(null);
  const [offset] = useState(() => Math.random() * Math.PI * 2);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.opacity = 0.5 + Math.sin(state.clock.elapsedTime * 2 + offset) * 0.3;
    }
  });

  const geometry = useMemo(() => {
    const points = [
      new THREE.Vector3(...start),
      new THREE.Vector3(...end),
    ];
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [start, end]);

  return (
    <line ref={ref} geometry={geometry}>
      <lineBasicMaterial ref={materialRef} color={color} transparent linewidth={2} />
    </line>
  );
};

// OWASP Card
const OWASPCard: React.FC<TokenProps> = ({ position, rotationSpeed, text }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += rotationSpeed;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <planeGeometry args={[0.6, 0.2]} />
      <meshBasicMaterial color="#0A0F1C" transparent opacity={0.7} side={THREE.DoubleSide} />
      <Text
        position={[0, 0, 0.01]}
        fontSize={0.06}
        color="#7B61FF"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </mesh>
  );
};

// Certification Badge
interface BadgeProps {
  position: [number, number, number];
  rotationSpeed: number;
  text: string;
  glowColor: string;
}

const CertificationBadge: React.FC<BadgeProps> = ({ position, rotationSpeed, text, glowColor }) => {
  const ref = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const [offset] = useState(() => Math.random() * Math.PI * 2);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += rotationSpeed;
      // Gentle pulse
      if (materialRef.current) {
        materialRef.current.opacity = 0.7 + Math.sin(state.clock.elapsedTime * 2 + offset) * 0.2;
      }
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <planeGeometry args={[0.7, 0.4]} />
      <meshBasicMaterial ref={materialRef} color="#0A0F1C" transparent opacity={0.8} side={THREE.DoubleSide} />
      <Text
        position={[0, 0, 0.01]}
        fontSize={0.07}
        color={glowColor}
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
      {/* Neon glow effect */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[0.75, 0.45]} />
        <meshBasicMaterial color={glowColor} transparent opacity={0.15} blending={THREE.AdditiveBlending} />
      </mesh>
    </mesh>
  );
};

// Animated Counter
interface CounterProps {
  position: [number, number, number];
  label: string;
  initialValue: number;
  targetValue: number;
  color: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ position, label, initialValue, targetValue, color }) => {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    let start: number | null = null;
    const duration = 2000; // milliseconds

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / duration;
      const easedProgress = outCubic(Math.min(progress, 1)); // Use custom cubic easing

      const newValue = initialValue + (targetValue - initialValue) * easedProgress;
      setCurrentValue(Math.floor(newValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrentValue(targetValue);
      }
    };

    requestAnimationFrame(animate);
  }, [initialValue, targetValue]);

  useFrame((state) => {
    if (ref.current) {
      // Slight hover/pulse
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.02;
    }
  });

  return (
    <group ref={ref} position={position}>
      <Text fontSize={0.1} color={color} anchorX="left" anchorY="middle" position={[0, 0.05, 0]}>
        {label}
      </Text>
      <Text fontSize={0.15} color={color} anchorX="left" anchorY="middle" position={[0, -0.05, 0]}>
        {currentValue.toLocaleString()}
      </Text>
    </group>
  );
};

// Main CyberLab Scene Content
const CyberLabSceneContent = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (group.current) {
      // Mouse parallax for the entire lab
      easing.damp3(group.current.position, [state.pointer.x * 0.5, state.pointer.y * 0.5, 0], 0.25, delta);
      easing.dampE(group.current.rotation, [state.pointer.y * 0.05, state.pointer.x * 0.05, 0], 0.25, delta);
    }
  });

  return (
    <group ref={group}>
      {/* Laptop */}
      <Laptop position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]} scale={1} />

      {/* JWT Tokens */}
      <JWTToken position={[-1.2, 0.8, -0.5]} rotationSpeed={0.01} text="Header.Payload.Signature" />
      <JWTToken position={[1.5, -0.7, 0.8]} rotationSpeed={-0.008} text="eyJhbGciOiJIUzI1Ni..." />

      {/* API Traffic Holograms */}
      <APITraffic start={[-0.5, 0.5, -0.8]} end={[0.5, 0.8, -0.8]} speed={0.01} color="#00FFB3" />
      <APITraffic start={[-0.8, -0.3, 0.5]} end={[0.8, -0.6, 0.5]} speed={0.009} color="#00FFB3" />
      <Text position={[-0.6, 0.6, -0.8]} fontSize={0.07} color="#00FFB3">GET /api/users</Text>
      <Text position={[0.9, -0.5, 0.5]} fontSize={0.07} color="#00FFB3">POST /auth/login</Text>

      {/* OWASP Top 10 Cards */}
      <OWASPCard position={[-1.8, -0.2, 0.2]} rotationSpeed={0.007} text="A01 Broken Access Control" />
      <OWASPCard position={[1.8, 0.3, -0.2]} rotationSpeed={-0.006} text="A03 Injection" />

      {/* Certification Badges */}
      <CertificationBadge position={[-0.5, -1.0, 0.3]} rotationSpeed={0.005} text="JWPT Certified" glowColor="#00E5FF" />
      <CertificationBadge position={[0.5, 1.0, -0.3]} rotationSpeed={-0.004} text="ACP Certified" glowColor="#7B61FF" />

      {/* Security Research Indicators */}
      <AnimatedCounter position={[-2.0, 1.5, 0]} label="Vulnerabilities Found:" initialValue={0} targetValue={127} color="#00E5FF" />
      <AnimatedCounter position={[2.0, -1.5, 0]} label="Endpoints Enumerated:" initialValue={0} targetValue={843} color="#7B61FF" />

      {/* Research Workspace Objects (simplified for now) */}
      <Text position={[-2.5, -0.8, -0.2]} fontSize={0.1} color="#FFFFFF">Terminal // Kali</Text>
      <Text position={[2.5, 0.8, 0.2]} fontSize={0.1} color="#FFFFFF">Security Report</Text>
    </group>
  );
};

// Main component to export
const CyberLabBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#0A0F1C']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00E5FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#7B61FF" />
        <Suspense fallback={null}>
          <CyberLabSceneContent />
        </Suspense>
        {/* <OrbitControls /> // Uncomment for debugging camera controls */}
      </Canvas>
    </div>
  );
};

export default CyberLabBackground;