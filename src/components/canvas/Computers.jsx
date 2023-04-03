import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import Loader from '../Loader'
import { useState,useEffect } from 'react'

const Computers = ({isMobile}) => {
    const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh scale={0.7}>
        <hemisphereLight intensity={0} groundColor="grey"/>
        <spotLight
            position={[-20,50,10]}
            angle={1}
            penumbra={1}
            intensity={2}
            castShadow
            shadow-mapSize={1024}
        />
        <primitive
            object={computer.scene} 
            scale={isMobile ? 0.9 :1.2}
            position={isMobile ? [1.2, -1.3, 1] :[0,-2,0.4]}
            rotation={[0, -0.8 , 0.1]}
        />
    </mesh>
  )
}

const ComputerCanvas = () =>{

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {

        const mediaQuery = window.matchMedia('(max-width:930px)')

        setIsMobile(mediaQuery.matches)

        const handleMediaQueryChange = (event) =>{
            setIsMobile(event.matches)
        }

        mediaQuery.addEventListener('change',handleMediaQueryChange)

        return () =>{
            mediaQuery.removeEventListener('change',handleMediaQueryChange)
        }

    }, [])
    

    return(
        <Canvas>
            <Suspense 
                fallback={<Loader/>}
                shadows
                camera={{position:[20, 3, 5],fov:60}}
                gl={{preserveDrawingBuffer:true}}
            >
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile}/>
            </Suspense>
            <Preload all />
        </Canvas>
    )

}

export default ComputerCanvas