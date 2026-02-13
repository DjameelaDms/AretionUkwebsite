import React from 'react';
import { BookOpen, Users, Globe } from 'lucide-react';

const Insights = () => {
  const categories = [
    {
      icon: BookOpen,
      title: 'Health Information Systems',
      description: 'Implementation governance, system adoption, and operational readiness'
    },
    {
      icon: Users,
      title: 'Medical Law Research & Public Health',
      description: 'Research notes and perspectives on healthcare governance themes'
    },
    {
      icon: Globe,
      title: 'Programme Updates',
      description: 'Collaboration updates from Nigeria, Cameroon, and Kenya'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-off-white)' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6 font-light" style={{ color: 'var(--aretion-navy)' }}>
              Insights
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Viewpoints and notes across informatics, publishing, and healthcare governance themes
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Our Insights section shares non-confidential commentary, research notes, and operational 
              viewpoints from across the ARETION group. Content reflects our expertise in health 
              information systems, medical law research, and programme delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-cream)' }}>
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center" style={{ color: 'var(--aretion-navy)' }}>
              Insight Categories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-8 text-center border transition-all hover:shadow-md"
                    style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}
                  >
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                      style={{ backgroundColor: 'var(--aretion-cream)' }}
                    >
                      <IconComponent size={28} style={{ color: 'var(--aretion-navy)' }} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--aretion-navy)' }}>
                      {category.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      {category.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div 
              className="rounded-lg p-8 md:p-12 text-center"
              style={{ 
                backgroundColor: 'var(--aretion-navy)',
                color: 'var(--text-light)'
              }}
            >
              <h2 className="mb-4" style={{ color: 'var(--text-light)' }}>
                Articles Coming Soon
              </h2>
              <p className="text-lg leading-relaxed" style={{ opacity: 0.9 }}>
                We are currently preparing insightful articles and commentary across our areas of expertise. 
                Please check back soon for new content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-cream)' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div 
              className="rounded-lg p-6 border-l-4"
              style={{ 
                backgroundColor: 'white',
                borderColor: 'var(--aretion-rust)'
              }}
            >
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--aretion-navy)' }}>Disclaimer:</strong> All insights 
                published on this site are provided for general information purposes only and do not 
                constitute legal, medical, or other professional advice. Readers should seek appropriate 
                professional guidance for specific circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
