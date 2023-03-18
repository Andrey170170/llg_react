import React from "react";
import {useGLTF, useTexture} from "@react-three/drei";

export function Model(props) {
    const { nodes, materials } = useGLTF("/llg_react/AndreyTry.glb");
    const [
        faceBaseColor,
        faceNormal,
    ] = useTexture([
        "/llg_react/Face/Face1_BaseColor.png",
        "/llg_react/Face/Face1_Normal.png",
    ])
    faceBaseColor.flipY = false;
    faceNormal.flipY = false;
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["38_Outer_05_0_0"].geometry}
                material={materials["38_Outer_0.5_0_0"]}
                position={[0, 0, 0.64]}
                scale={1.12}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["24_BaseWires_03_0_0"].geometry}
                material={materials["24_BaseWires_0.3_0_0"]}
                position={[0, 0, 0.64]}
                scale={1.12}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["38_Inner_05_0_0"].geometry}
                material={materials["38_Inner_0.5_0_0"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Eye.geometry}
                material={materials["Eye1.001"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hair.geometry}
                material={materials.Hair}
                rotation={[0.15, -0.06, 0.16]}
                scale={[0.45, 0.52, 0.55]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Face_LOD4.geometry}
                material={materials.Face1}
            >
                <meshStandardMaterial
                    map={faceBaseColor}
                    normalMap={faceNormal}
                />
            </mesh>
        </group>
    );
}

useGLTF.preload("/llg_react/AndreyTry.glb");