import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { forwardRef, ReactNode } from "react";

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

interface MotionDivProps extends HTMLMotionProps<"div"> {
  children?: ReactNode;
}

export const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(
  (props, ref) => <motion.div ref={ref} {...props} />
);
MotionDiv.displayName = "MotionDiv";

export const MotionSection = forwardRef<HTMLElement, HTMLMotionProps<"section">>(
  (props, ref) => <motion.section ref={ref} {...props} />
);
MotionSection.displayName = "MotionSection";

export const MotionH1 = forwardRef<HTMLHeadingElement, HTMLMotionProps<"h1">>(
  (props, ref) => <motion.h1 ref={ref} {...props} />
);
MotionH1.displayName = "MotionH1";

export const MotionP = forwardRef<HTMLParagraphElement, HTMLMotionProps<"p">>(
  (props, ref) => <motion.p ref={ref} {...props} />
);
MotionP.displayName = "MotionP";

export const MotionSpan = forwardRef<HTMLSpanElement, HTMLMotionProps<"span">>(
  (props, ref) => <motion.span ref={ref} {...props} />
);
MotionSpan.displayName = "MotionSpan";
