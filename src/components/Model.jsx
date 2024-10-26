import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

function CustomModel({ modelPath }) {
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color = new THREE.Color(0xffffff);
        child.material.metalness = 1;
        child.material.roughness = 0;
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
}

const Model = () => {
  const models = [
    { path: "/assets/model/tesla_cybertruck.glb", name: "Tesla Cybertruck" },
    { path: "/assets/model/tesla_2018_model_3.glb", name: "Tesla Model 3" },
    { path: "/assets/model/tesla_model_x.glb", name: "Tesla Model X" },
    { path: "/assets/model/tesla_model_y_2021.glb", name: "Tesla Model Y" },
    { path: "/assets/model/model4.glb", name: "Model 4" },
  ];

  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  const changeModel = () => {
    setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length);
  };

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%', fontFamily:'modelsfont' }}>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: "absolute" }}>
        <color attach="background" args={["#101010"]} />

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <directionalLight position={[-5, -10, -5]} intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color={"#ffffff"} />

        <PresentationControls speed={1.5}>
          <Stage environment={null}>
            <CustomModel modelPath={models[currentModelIndex].path} scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>

      <div style={{ position: 'absolute', top: '20px', left: '30px', zIndex: 1, fontSize: '24px', color: 'white' }}>
        {models[currentModelIndex].name}
      </div>

      <button
        onClick={changeModel}
        style={{ position: 'absolute', top: '50px', left: '30px', marginTop: "20px" ,padding: '20px 100px', zIndex: 1, fontSize: '20px', fontWeight: '700', background: '#ffffffaa'}}
      >
        Change Model
      </button>
    </div>
  );
};

export default Model;
