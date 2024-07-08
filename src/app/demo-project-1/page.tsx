"use client";

import { useEffect } from 'react';
import Script from 'next/script';
import Head from 'next/head';

function ARView() {
  const glbUrl = "https://firebasestorage.googleapis.com/v0/b/vr-ar-visualizator.appspot.com/o/models%2Fpixelverse.glb?alt=media&token=0503ae84-a1bd-4b11-996f-9934985da13f";
  const usdzUrl = ""; // Si tienes el URL del archivo USDZ, puedes añadirlo aquí
  const isInteriorModel = false; // Cambia esto si es necesario

  useEffect(() => {
    if (!glbUrl) {
      // Aquí podrías redirigir a una página de error si lo deseas
    }
  }, [glbUrl]);

  if (!glbUrl) {
    return null;
  }

  return (
    <>
      <Head>
        <title>AR View</title>
        <meta
          name="description"
          content="AR View Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <Script src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" type="module" />
          <model-viewer
            src={glbUrl}
            auto-rotate
            autoplay
            camera-controls
            shadow-intensity="1"
            {...(isInteriorModel ? { 'camera-orbit': '0deg 75deg 0m' } : {})}
            {...(isInteriorModel ? { 'min-camera-orbit': 'auto auto 0m' } : {})}
            ar
            ar-modes="scene-viewer webxr quick-look"
            style={{ width: '100%', height: '100%' }}
            ios-src={usdzUrl}
          >
            <button
              slot="ar-button"
              id="ar-button"
              style={{
                position: 'absolute',
                top: '2rem',
                borderRadius: '18px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'inline-flex',
                alignItems: 'center',
                minWidth: '180px',
                whiteSpace: 'nowrap',
                
                background: 'white',
              }}
            >
              <a id="default-ar-button"  className="fab" aria-label="View in your space" style={{ transform: 'scale(0.8)' }}>
                {/* Acá va tu SVG */}
              </a>
              <p style={{ marginBottom: '0px', marginLeft: '0.3rem', marginRight: '0.3rem', color: 'black' }}>
                Ver en tu espacio
              </p>
            </button>
          </model-viewer>
        </div>
      </div>
    </>
  );
}

export default ARView;
