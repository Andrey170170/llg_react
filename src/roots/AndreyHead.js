import {Canvas} from "@react-three/fiber";
import {CameraControls, Environment, OrbitControls, Stage} from "@react-three/drei"
import {Model} from "../models/Model";

export function AndreyHead(props) {
    return (
        <div {...props}>
            <Canvas shadows camera={{position: [25, 10, 50], fov: 50}}>
                <CameraControls makeDefault/>
                <Stage intensity={0.5} environment="city" shadows={{type: 'accumulative', bias: -0.001}}
                       adjustCamera={false}>
                    <Model/>
                </Stage>
                <OrbitControls autoRotate autoRotateSpeed={10} enableZoom={false} makeDefault
                               minPolarAngle={Math.PI / 3} maxPolarAngle={2 * Math.PI / 3}/>
                <Environment background preset="sunset" blur={0.8}/>

            </Canvas>
        </div>
    )
}