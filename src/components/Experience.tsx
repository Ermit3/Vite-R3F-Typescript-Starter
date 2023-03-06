
import { OrbitControls } from "@react-three/drei";

// Components
import { Cube } from "./mesh/cube";

export const Experience = () => {

    return (
        <>
            <OrbitControls />

            <Cube />
        </>
    );
};