// SvgBurger.jsx
import { motion } from "framer-motion";

export default function SvgBurger({ isOpen, setIsOpen }) {
    return (
        <div
            className="w-10 h-10 cursor-pointer bg-black/20 rounded flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
        >
            <svg width="40" height="40" viewBox="0 0 40 40">
                {/* Top Line */}
                <motion.line
                    x1="8"
                    y1="12"
                    x2="32"
                    y2="12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{
                        x1: isOpen ? 10 : 8,
                        y1: isOpen ? 30 : 12,
                        x2: isOpen ? 30 : 32,
                        y2: isOpen ? 10 : 12,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />

                {/* Middle Line */}
                <motion.line
                    x1="8"
                    y1="20"
                    x2="32"
                    y2="20"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />

                {/* Bottom Line */}
                <motion.line
                    x1="8"
                    y1="28"
                    x2="32"
                    y2="28"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{
                        x1: isOpen ? 10 : 8,
                        y1: isOpen ? 10 : 28,
                        x2: isOpen ? 30 : 32,
                        y2: isOpen ? 30 : 28,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
            </svg>
        </div>
    );
}
