import { useEffect } from 'react';

const useCursorGlow = () => {
  useEffect(() => {
    let rafId = null;
    let pendingEvent = null;

    const updatePosition = () => {
      if (!pendingEvent) {
        return;
      }

      const xPercent = (pendingEvent.clientX / window.innerWidth) * 100;
      const yPercent = (pendingEvent.clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty('--cursor-x', `${xPercent}%`);
      document.documentElement.style.setProperty('--cursor-y', `${yPercent}%`);
      rafId = null;
    };

    const onMouseMove = (event) => {
      pendingEvent = event;

      if (rafId === null) {
        rafId = window.requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);
};

export default useCursorGlow;