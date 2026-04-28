import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { FiUpload } from 'react-icons/fi';

export default function UploadArea({ onUpload, loading }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        onUpload(acceptedFiles[0]);
      }
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/zip': ['.zip'] },
    maxSize: 50 * 1024 * 1024, // 50MB
  });

  return (
    <div className="flex flex-col items-center">
      <motion.div
        {...getRootProps()}
        className={`w-full max-w-md p-8 border-2 border-dashed rounded-xl cursor-pointer transition-colors duration-300 ${
          isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300 dark:border-gray-600'
        } bg-white dark:bg-gray-800 glassmorphism`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <input {...getInputProps()} disabled={loading} />
        <div className="flex flex-col items-center text-center">
          <FiUpload className="text-4xl text-primary mb-4" />
          <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
            {isDragActive ? 'Drop the ZIP file here …' : 'Drag & drop your Instagram Data ZIP here, or click to select'}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Maximum size: 50 MB</p>
        </div>
      </motion.div>
    </div>
  );
}
