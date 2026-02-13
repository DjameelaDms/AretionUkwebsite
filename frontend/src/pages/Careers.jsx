import React, { useState } from 'react';
import { ArrowRight, Upload, CheckCircle } from 'lucide-react';
import { handleCareerForm } from '../mock/mockData';
import { useToast } from '../hooks/use-toast';

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    areaOfInterest: '',
    cvFile: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, cvFile: file }));
      setFileName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      const result = handleCareerForm({
        ...formData,
        cvFileName: fileName
      });
      
      toast({
        title: "Registration Successful",
        description: result.message,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        areaOfInterest: '',
        cvFile: null
      });
      setFileName('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-off-white)' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6 font-light" style={{ color: 'var(--aretion-navy)' }}>
              Careers
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Opportunities across ARETION & Company and its operating entities
            </p>
          </div>
        </div>
      </section>

      {/* What We Value */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8" style={{ color: 'var(--aretion-navy)' }}>
              What We Value
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              ARETION & Company and its operating entities value quality, accountability, and professional 
              standards. We welcome individuals who value disciplined delivery, clear documentation, and 
              responsible conduct.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Quality & Excellence',
                'Professional Standards',
                'Responsible Conduct'
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 border text-center"
                  style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}
                >
                  <div 
                    className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: 'var(--aretion-cream)' }}
                  >
                    <CheckCircle size={24} style={{ color: 'var(--aretion-navy)' }} />
                  </div>
                  <h3 className="font-semibold" style={{ color: 'var(--aretion-navy)' }}>
                    {value}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where We Operate */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-cream)' }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center" style={{ color: 'var(--aretion-navy)' }}>
              Where We Operate
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 border" style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--aretion-navy)' }}>
                  United Kingdom
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  London (Registered Office)
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 border" style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--aretion-navy)' }}>
                  Gulf Region
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  King Abdullah Financial District
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6" style={{ color: 'var(--aretion-navy)' }}>
              Current Opportunities
            </h2>
            <div 
              className="rounded-lg p-12 mb-8"
              style={{ backgroundColor: 'var(--aretion-cream)' }}
            >
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                We are currently building our team. Please register your interest below, 
                and we will contact you when relevant opportunities become available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Register Interest Form */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--aretion-cream)' }}>
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-8 md:p-12 border" style={{ borderColor: 'rgba(26, 58, 82, 0.08)' }}>
              <h2 className="mb-8 text-center" style={{ color: 'var(--aretion-navy)' }}>
                Register Your Interest
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--aretion-navy)' }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 transition-all"
                    style={{ 
                      borderColor: 'rgba(26, 58, 82, 0.2)',
                      focusRingColor: 'var(--aretion-steel-blue)'
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--aretion-navy)' }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: 'rgba(26, 58, 82, 0.2)' }}
                  />
                </div>

                {/* Area of Interest */}
                <div>
                  <label 
                    htmlFor="areaOfInterest" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--aretion-navy)' }}
                  >
                    Area of Interest *
                  </label>
                  <select
                    id="areaOfInterest"
                    name="areaOfInterest"
                    required
                    value={formData.areaOfInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: 'rgba(26, 58, 82, 0.2)' }}
                  >
                    <option value="">Please select...</option>
                    <option value="informatics">Informatics</option>
                    <option value="publishing">Publishing</option>
                    <option value="healthcare-consulting">Healthcare Consulting</option>
                    <option value="corporate">Corporate / Group</option>
                  </select>
                </div>

                {/* CV Upload */}
                <div>
                  <label 
                    htmlFor="cvFile" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--aretion-navy)' }}
                  >
                    Upload CV (Optional)
                  </label>
                  <div 
                    className="relative border-2 border-dashed rounded-lg p-6 text-center transition-all hover:border-solid cursor-pointer"
                    style={{ borderColor: 'rgba(26, 58, 82, 0.2)' }}
                  >
                    <input
                      type="file"
                      id="cvFile"
                      name="cvFile"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Upload size={32} style={{ color: 'var(--aretion-steel-blue)', margin: '0 auto 0.5rem' }} />
                    <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                      {fileName || 'Click to upload or drag and drop'}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      PDF, DOC, or DOCX (max 5MB)
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 font-medium rounded transition-all inline-flex items-center justify-center space-x-2"
                  style={{
                    backgroundColor: isSubmitting ? 'var(--aretion-steel-blue)' : 'var(--aretion-navy)',
                    color: 'white',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = 'var(--aretion-steel-blue)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = 'var(--aretion-navy)';
                    }
                  }}
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Register Interest'}</span>
                  {!isSubmitting && <ArrowRight size={18} />}
                </button>

                <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                  By submitting this form, you consent to ARETION & Company storing and processing your 
                  information in accordance with our Privacy Notice.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
