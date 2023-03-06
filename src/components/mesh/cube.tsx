import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
import { Mesh } from 'three'

export const Cube = () => {
    const { position } = useControls({
        position: {
            value: { x: 0, y: 0, z: 0 },
            step: 0.01
        }
    })

    const cube = useRef<Mesh>(null!);

    useFrame((state, delta) => {
        cube.current.rotation.y += delta;
        cube.current.rotation.x += delta * 0.2;
    })

    return (
        <>
            <mesh ref={cube} position={[position.x, position.y, position.z]}>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </>
    );
};