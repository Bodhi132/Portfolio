import React from 'react'
import { Html,useProgress } from '@react-three/drei'

const Loader = () => {

    const {progress} = useProgress()

  return (
    <Html>
        <span>
            <p>
                {progress.toFixed(2)}%
            </p>
        </span>
    </Html>
  )
}

export default Loader