import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1738986), description: 'Das ist ein tolles Intro. Bitte ansehen' },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: '8ac333d7-45a5-43e5-97c6-1fb49f82abbe.png' },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: '8f759c90-0bdb-4b05-bcfb-e7833c8ce2f6.png' },
  // Left
  { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: '57e9cfc6-0572-4590-97f8-611949652fd1.png' },
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: '3526243e-e952-4632-870d-c605561a2d5f.png' },
  { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: 'e4cb1f3d-d7e7-4460-98a4-629ee7b17fbc.png' },
  // Right
  { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: 'e953dc56-c5f1-4d71-9cf0-3de028e74308.png' },
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: 'f0a172d3-d6e8-4c49-9500-16fda129cfd6.png' },
  { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: '4e92b052-d3fa-4713-aa31-9a1016222ddf.png' }
]

createRoot(document.getElementById('root')).render(
  <Suspense fallback={null}>
    <App images={images} />
  </Suspense>
)
