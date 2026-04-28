import React from 'react';
import { motion } from 'framer-motion';

export default function StatCard({ title, value }) {
  return (
    <motion.div
      className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg"
      whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
    >
      <h3 className="text-sm font-medium text-gray-200 mb-2">{title}</h3>
      <p className="text-2xl font-bold text-white">{value}</p>
    </motion.div>
  );
}
