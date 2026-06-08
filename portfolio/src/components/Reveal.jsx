import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Reveal({ children, width = "100%", delay = 0.25 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
