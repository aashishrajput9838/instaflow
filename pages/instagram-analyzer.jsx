import React, { useState } from 'react';
import UploadArea from '../components/UploadArea';
import AnalyticsDashboard from '../components/AnalyticsDashboard';
import { ToastContainer, toast } from 'react-hot-toast';

export default function InstagramAnalyzer() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (file) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/instagram/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setData(result);
        toast.success('Instagram data processed successfully!');
      } else {
        toast.error(result.message || 'Failed to process file');
      }
    } catch (err) {
      console.error(err);
      toast.error('Network error while uploading');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
        Instagram Analyzer
      </h1>
      <div className="max-w-4xl mx-auto">
        {!data && (
          <UploadArea onUpload={handleUpload} loading={loading} />
        )}
        {loading && (
          <div className="flex justify-center my-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        )}
        {data && <AnalyticsDashboard data={data} />}
      </div>
      <ToastContainer />
    </div>
  );
}
