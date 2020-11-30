import React, { useRef, Suspense } from 'react';
import { Canvas, useLoader, useFrame, ReactThreeFiber, useThree } from 'react-three-fiber';
import { Mesh, TextureLoader, RepeatWrapping } from 'three';
import { OrthographicCamera, Sphere } from 'drei';

import mapConfigs from '../../data/maps';

interface PlanetProps extends ReactThreeFiber.Object3DNode<Mesh, typeof Mesh> {
  planetImageUrl: string;
  radius: number;
  position: [number, number, number];
}

const PlanetRaw: React.FC<PlanetProps> = props => {
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
    <Sphere {...props} ref={mesh} rotation={[0, 0, Math.PI]} args={[props.radius, 16, 16]}>
      <meshStandardMaterial roughness={1} metalness={0} attach="material" map={texture} />
    </Sphere>
  );
};

const Planet = React.memo(PlanetRaw);

class NullRenderErrorCatch extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return null;

    return this.props.children;
  }
}

const CameraRaw: React.FC = () => {
  const { size } = useThree();

  return (
    <OrthographicCamera
      makeDefault
      zoom={size.height / 1024}
      left={0}
      top={0}
      right={1024}
      bottom={1024}
      position={[512, 512, -50]}
      rotation={[Math.PI, 0, 0]}
    >
      {null}
    </OrthographicCamera>
  );
};

const Camera = React.memo(CameraRaw);

const PlanetSpheres = () => {
  // Catch lack of webgl and other faults
  return (
    <NullRenderErrorCatch>
      <Canvas colorManagement noEvents className="planetSelection3DCanvas">
        <Camera />
        <pointLight intensity={0.4} position={[512, 512, -500]} />
        <Suspense fallback={null}>
          {mapConfigs.map(
            ({ id, travelMapConfig }) =>
              travelMapConfig && (
                <Planet
                  key={id}
                  position={[travelMapConfig.x, travelMapConfig.y, 0]}
                  radius={travelMapConfig.radius}
                  planetImageUrl={travelMapConfig.planetTexture}
                />
              )
          )}
        </Suspense>
      </Canvas>
    </NullRenderErrorCatch>
  );
};

export default React.memo(PlanetSpheres);
