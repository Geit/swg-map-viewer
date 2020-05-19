import React, { useRef, Suspense } from 'react';
import { Canvas, useLoader, useFrame, ReactThreeFiber, useThree } from 'react-three-fiber';
import { Mesh, TextureLoader, RepeatWrapping, OrthographicCamera } from 'three';

import mapConfigs from '../../data/maps';

interface PlanetProps extends ReactThreeFiber.Object3DNode<Mesh, typeof Mesh> {
  planetImageUrl: string;
  radius: number;
  position: [number, number, number];
}

const Planet: React.FC<PlanetProps> = props => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<ReactThreeFiber.Object3DNode<Mesh, typeof Mesh>>();

  const texture = useLoader(TextureLoader, props.planetImageUrl);

  texture.wrapT = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(1, 1);

  useFrame(() => {
    // @ts-ignore
    mesh.current.rotation.y -= 0.0035;
  });

  return (
    <mesh {...props} ref={mesh} rotation={[0, 0, Math.PI]}>
      <sphereBufferGeometry attach="geometry" args={[props.radius, 16, 16]} />
      <meshStandardMaterial roughness={0} metalness={0.2} attach="material" map={texture} />
    </mesh>
  );
};

const CameraViewportManager = () => {
  const three = useThree();

  if (three.camera instanceof OrthographicCamera) {
    three.camera.left = 0;
    three.camera.top = 0;
    three.camera.right = 1024;
    three.camera.bottom = 1024;
    three.camera.position.z = 50;
    three.camera.updateProjectionMatrix();
  }

  return null;
};

const PlanetSpheres = () => {
  return (
    <Canvas colorManagement orthographic noEvents className="planetSelection3DCanvas">
      <CameraViewportManager />
      <pointLight intensity={0.4} position={[512, 512, -900]} />
      <Suspense fallback={null}>
        {mapConfigs.map(({ id, travelMapConfig }) => (
          <Planet
            key={id}
            position={[travelMapConfig.x, travelMapConfig.y, 0]}
            radius={travelMapConfig.radius}
            planetImageUrl={travelMapConfig.planetTexture}
          />
        ))}
      </Suspense>
    </Canvas>
  );
};

export default PlanetSpheres;
