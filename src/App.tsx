import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Perf } from 'r3f-perf'

import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas>
      <Perf position={'top-left'} />
      <Experience />
    </Canvas>
  );
}

export default App;