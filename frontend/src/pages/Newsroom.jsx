import React from 'react';
import { Calendar } from 'lucide-react';
import { newsroomArticles } from '../mock/mockData';

const Newsroom = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-off-white)' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6 font-light" style={{ color: 'var(--aretion-navy)' }}>
              Newsroom
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Official announcements and updates from ARETION & Company
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center" style={{ color: 'var(--aretion-navy)' }}>
              Press Releases
            </h2>
            <div className="space-y-8">
              {newsroomArticles.map((article) => (
                <article 
                  key={article.id}
                  className="bg-white rounded-lg p-8 border transition-all hover:shadow-md cursor-pointer"
                  style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                    <div className="flex items-center space-x-3">
                      <Calendar size={16} style={{ color: 'var(--aretion-rust)' }} />
                      <span className="text-sm font-medium" style={{ color: 'var(--aretion-rust)' }}>
                        {article.date}
                      </span>
                    </div>
                    <div 
                      className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                      style={{ 
                        backgroundColor: 'var(--aretion-cream)',
                        color: 'var(--aretion-navy)'
                      }}
                    >
                      {article.category}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3" style={{ color: 'var(--aretion-navy)' }}>
                    {article.title}
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {article.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Enquiries */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-cream)' }}>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6" style={{ color: 'var(--aretion-navy)' }}>
              Media Enquiries
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              For press enquiries, interview requests, or additional information
            </p>
            <a 
              href="mailto:contact@aretion.org"
              className="inline-flex items-center space-x-2 px-8 py-4 font-medium rounded transition-all"
              style={{
                backgroundColor: 'var(--aretion-navy)',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--aretion-steel-blue)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--aretion-navy)';
              }}
            >
              Contact Media Relations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsroom;
