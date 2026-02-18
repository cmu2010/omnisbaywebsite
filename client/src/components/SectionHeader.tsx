import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, className = "", light = false }: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-16 ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-gray-900'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-lg md:text-xl ${light ? 'text-blue-100' : 'text-gray-500'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
