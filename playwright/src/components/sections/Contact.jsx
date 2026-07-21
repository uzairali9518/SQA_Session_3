import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo } from '../../utils/data';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import MagneticButton from '../ui/MagneticButton';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
    { icon: FaGithub, label: 'GitHub', value: 'uzairali9518', href: personalInfo.github },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'uzair-ali', href: personalInfo.linkedin },
  ];

  return (
    <section id="contact" className="section-padding relative" aria-label="Contact section">
      <div className="container-custom">
        <SectionHeading
          subtitle="Get In Touch"
          title="Contact Me"
          description="Have a project in mind? Let's work together to build something amazing."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <GlassCard className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <MagneticButton
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </MagneticButton>
                {status === 'success' && (
                  <p className="text-success text-sm">Message sent successfully! I&apos;ll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-sm">Failed to send. Please email me directly at {personalInfo.email}</p>
                )}
              </form>
            </GlassCard>
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <GlassCard key={label} className="p-4 flex items-center gap-4" hover={false}>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="text-primary" size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted">{label}</p>
                  {href ? (
                    <a href={href} target={label === 'Email' || label === 'Phone' ? undefined : '_blank'} rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors truncate block">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{value}</p>
                  )}
                </div>
              </GlassCard>
            ))}

            <GlassCard className="p-4 overflow-hidden h-48" hover={false}>
              <div className="w-full h-full rounded-xl bg-white/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="text-sm text-muted">{personalInfo.location}</p>
                  <p className="text-xs text-muted/60 mt-1">Map placeholder</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
