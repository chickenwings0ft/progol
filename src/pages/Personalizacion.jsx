import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Palette, Info, Upload, X, Camera, Wand2, Plus } from 'lucide-react';
import Contact from '../components/Contact';

const defaultColors = [
  { name: 'Rojo Pro', hex: '#DC2626' },
  { name: 'Azul Elite', hex: '#2563EB' },
  { name: 'Verde Club', hex: '#16A34A' },
  { name: 'Negro Mate', hex: '#111827' },
  { name: 'Blanco Pro', hex: '#F9FAFB' },
  { name: 'Amarillo Neón', hex: '#EAB308' },
];

const DEFAULT_LOGO = '/Transparent Logo.svg';

function GoalSVG({ color, customLogo }) {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', maxWidth: 800 }}>
      <ellipse cx="200" cy="225" rx="180" ry="15" fill="#2d5a27" fillOpacity="0.05" />
      <path d="M50 220L110 190M350 220L290 190" stroke={color} strokeWidth="6" strokeLinecap="round" />
      <path d="M110 190H290" stroke={color} strokeWidth="8" strokeLinecap="round" />
      <text x="150" y="191" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="3.5" fill="white" fillOpacity="0.9" textAnchor="middle">PRO GOL</text>
      <text x="250" y="191" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="3.5" fill="white" fillOpacity="0.9" textAnchor="middle">PROGOLSPORTS.COM</text>
      <path d="M57 90C57 75 75 57 110 57H290C325 57 343 75 343 90V213H57V90Z" fill="url(#netPattern)" fillOpacity="0.4" />
      <g opacity="0.3">
        {customLogo && (
          <image href={customLogo} x="145" y="80" width="110" height="80" preserveAspectRatio="xMidYMid meet" />
        )}
      </g>
      <path d="M50 220V100C50 70 80 50 110 50H290C320 50 350 70 350 100V220" stroke={color} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="185" y="42" width="30" height="16" rx="4" fill="rgba(0,0,0,0.1)" />
      <circle cx="200" cy="50" r="3" fill="rgba(255,255,255,0.2)" />
      <path d="M110 46H180M220 46H290" stroke="white" strokeWidth="2" strokeOpacity="0.2" />
      <defs>
        <pattern id="netPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 12" fill="none" stroke="#ccc" strokeWidth="0.5"/>
        </pattern>
      </defs>
    </svg>
  );
}

export default function Personalizacion() {
  const [selectedColor, setSelectedColor] = useState(defaultColors[0].hex);
  const [customLogo, setCustomLogo] = useState(DEFAULT_LOGO);
  const [detectedColor, setDetectedColor] = useState(null);
  const fileInputRef = useRef(null);
  const colorPickerRef = useRef(null);

  const extractDominantColor = (img) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 50; canvas.height = 50;
    ctx.drawImage(img, 0, 0, 50, 50);
    const imageData = ctx.getImageData(0, 0, 50, 50).data;
    const colorCounts = {};
    let maxCount = 0;
    let dominantHex = defaultColors[0].hex;

    for (let i = 0; i < imageData.length; i += 4) {
      const r = imageData[i], g = imageData[i+1], b = imageData[i+2], a = imageData[i+3];
      if (a < 200) continue;
      if (r > 245 && g > 245 && b > 245) continue;
      if (r < 10 && g < 10 && b < 10) continue;
      const qr = Math.floor(r / 10) * 10, qg = Math.floor(g / 10) * 10, qb = Math.floor(b / 10) * 10;
      const hex = `#${((1 << 24) + (qr << 16) + (qg << 8) + qb).toString(16).slice(1)}`;
      colorCounts[hex] = (colorCounts[hex] || 0) + 1;
      if (colorCounts[hex] > maxCount) { maxCount = colorCounts[hex]; dominantHex = hex; }
    }
    setDetectedColor(dominantHex);
    setSelectedColor(dominantHex);
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomLogo(url);
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => extractDominantColor(img);
      img.src = url;
    }
  };

  const removeLogo = () => {
    setCustomLogo(DEFAULT_LOGO);
    setDetectedColor(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setSelectedColor(defaultColors[0].hex);
  };

  const isCustomColor = !defaultColors.some(c => c.hex === selectedColor) && selectedColor !== detectedColor;

  return (
    <>
      <section style={{ background: '#fff', padding: '120px 0 60px' }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: 8 }}>
              <Palette size={12} color="#c9a84c" />
              <span className="eyebrow-text" style={{ fontSize: 10 }}>Personalizador Inteligente</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 900, color: '#111', lineHeight: 1.1, marginBottom: 24, textTransform: 'uppercase' }}>
              TU <span className="gold">PROGOL.</span>
            </h1>

            <div style={{ 
              background: '#fcfcfc', border: '1px solid #eee', padding: '0 40px 40px', borderRadius: 8, marginBottom: 40,
              position: 'relative', overflow: 'hidden'
            }}>
              <GoalSVG color={selectedColor} customLogo={customLogo} />
              
              <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, alignItems: 'center' }}>
                {defaultColors.map((c) => (
                  <button key={c.name} onClick={() => { setSelectedColor(c.hex); setDetectedColor(null); }}
                    style={{
                      width: 44, height: 44, borderRadius: '50%', background: c.hex,
                      border: selectedColor === c.hex && !detectedColor ? '3px solid #c9a84c' : '2px solid #fff',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer',
                      transition: 'all 0.2s', transform: selectedColor === c.hex && !detectedColor ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                ))}

                {detectedColor && (
                  <button onClick={() => setSelectedColor(detectedColor)}
                    style={{
                      width: 44, height: 44, borderRadius: '50%', background: detectedColor,
                      border: selectedColor === detectedColor ? '3px solid #c9a84c' : '2px solid #fff',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer', position: 'relative',
                      transition: 'all 0.2s', transform: 'scale(1.1)'
                    }}
                  >
                    <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#c9a84c', color: '#fff', padding: '2px 8px', borderRadius: 10, fontSize: 8, fontWeight: 900, whiteSpace: 'nowrap' }}>
                      LOGO
                    </div>
                  </button>
                )}

                {/* Minimalist Plus Button for Custom Color */}
                <div style={{ position: 'relative' }}>
                  <button 
                    onClick={() => colorPickerRef.current.click()}
                    style={{
                      width: 44, height: 44, borderRadius: '50%', 
                      background: isCustomColor ? selectedColor : '#f0f0f0',
                      border: isCustomColor ? '3px solid #c9a84c' : '2px solid #fff',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.2s'
                    }}
                  >
                    <Plus size={20} color={isCustomColor ? '#fff' : '#aaa'} />
                  </button>
                  <input 
                    type="color" ref={colorPickerRef} value={selectedColor} 
                    onChange={(e) => { setSelectedColor(e.target.value); setDetectedColor(null); }} 
                    style={{ visibility: 'hidden', position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} 
                  />
                </div>
              </div>
              
              <p style={{ marginTop: 24, fontSize: 11, fontWeight: 900, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                {isCustomColor ? `COLOR PERSONALIZADO: ${selectedColor}` : 'ELIGE UN COLOR O SUBE TU LOGO'}
              </p>
            </div>

            <div style={{ maxWidth: 600, margin: '0 auto 40px' }}>
              <div style={{ border: '2px dashed #eee', padding: '32px', borderRadius: 4, background: '#fafafa', textAlign: 'center', position: 'relative' }}>
                {customLogo === DEFAULT_LOGO ? (
                  <div onClick={() => fileInputRef.current.click()} style={{ cursor: 'pointer' }}>
                    <Upload size={32} color="#aaa" style={{ marginBottom: 12 }} />
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#111', marginBottom: 4 }}>Sube tu escudo y detectaremos el color</p>
                    <p style={{ fontSize: 12, color: '#aaa' }}>La portería se pintará automáticamente</p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
                    <div style={{ position: 'relative' }}>
                      <img src={customLogo} alt="Logo Club" style={{ height: 80, width: 'auto', objectFit: 'contain', background: '#fff', padding: 8, borderRadius: 4, border: '1px solid #eee' }} />
                      <button onClick={removeLogo} style={{ position: 'absolute', top: -12, right: -12, background: '#111', color: '#fff', border: 'none', borderRadius: '50%', width: 24, height: 24, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}><X size={14} /></button>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <Wand2 size={16} color="#c9a84c" />
                        <p style={{ fontSize: 14, fontWeight: 800, color: '#111' }}>Color principal detectado</p>
                      </div>
                      <p style={{ fontSize: 12, color: '#666', lineHeight: 1.5 }}>Hemos identificado el color más puro de tu logo para aplicarlo a la portería.</p>
                    </div>
                  </div>
                )}
                <input type="file" ref={fileInputRef} onChange={handleLogoUpload} accept="image/*" style={{ display: 'none' }} />
              </div>
            </div>

            <div style={{ background: '#fdf8ea', padding: '24px', borderLeft: '4px solid #c9a84c', display: 'flex', gap: 16, textAlign: 'left', maxWidth: 600, margin: '0 auto' }}>
              <Info size={24} color="#c9a84c" style={{ flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: '#8b7027', fontWeight: 500, lineHeight: 1.6 }}>
                ¿Buscas un acabado corporativo específico? Usa el botón "+" para elegir cualquier color o sube tu logo para una detección inteligente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
