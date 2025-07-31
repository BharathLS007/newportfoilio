import { useEffect, useRef, useState } from "react";

function VantaNet() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    function handleResize() {
      if (vantaEffect && typeof vantaEffect.resize === "function") {
        vantaEffect.resize();
      }
    }

    if (!vantaEffect && window.VANTA && window.VANTA.NET) {
      const effect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x23153c,
        color: 0xff3f81,
        points: 10,
        maxDistance: 20,
        spacing: 15,
        showDots: true,
      });
      setVantaEffect(effect);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
style={{
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  zIndex: -1
}}

    />
  );
}

export default VantaNet;
