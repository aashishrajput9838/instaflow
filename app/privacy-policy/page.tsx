import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-12 md:py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to InstaFlow. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our 
              website or use our application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. The Data We Collect About You</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, provided via social authentication (Google, Facebook/Meta).</li>
              <li><strong>Contact Data:</strong> includes email address.</li>
              <li><strong>Social Media Data:</strong> If you connect your Instagram account, we access data permitted by the Instagram Graph API (such as profile metrics, media count, and engagement statistics) to provide you with analytics services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Meta / Facebook Data Usage</h2>
            <p>
              Our application uses Facebook Login and the Instagram Graph API. The data we retrieve from Meta is 
              used solely for the purpose of displaying your personal analytics and dashboard within InstaFlow. 
              We do not sell, transfer, or share your Instagram profile data with any third-party advertisers. 
              You can revoke this access at any time through your Facebook/Instagram security settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally 
              lost, used, or accessed in an unauthorized way, altered, or disclosed. Your active authentication tokens 
              are managed securely via Firebase Authentication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us 
              at our provided support channels.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
