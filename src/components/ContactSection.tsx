import React, { useState } from 'react';
import { Send, MessageCircle, Mail, Globe, CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { AuditFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<AuditFormData>({
    fullName: '',
    email: '',
    websiteUrl: '',
    funnelType: 'High-Ticket Coaching',
    primaryChallenge: 'Low Conversion Rate',
    budgetRange: '$1,500 - $3,000',
    timeline: 'Within 2 Weeks',
    projectNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#030612] relative overflow-hidden border-t border-slate-900">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Start Your Redesign Sprint</span>
          </div>

          <h2 className="font-['Outfit'] font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
            Let's Build Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              High-Converting Funnel
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Fill out the form below for a free conversion breakdown and project estimate, or send a direct message on Facebook for an instant reply.
          </p>
        </div>

        {/* Contact Container Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          {/* Left Column: Direct Message Channels & Fast Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#090f2b] to-[#050817] border border-blue-500/30 shadow-2xl space-y-6">
              <h3 className="font-['Outfit'] font-bold text-2xl text-white">
                Instant Chat & Direct Reach
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Prefer a quick chat without forms? Reach out directly on your favorite platform.
              </p>

              {/* Direct Reach Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href="https://m.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5" />
                    <span>Message Me on Messenger</span>
                  </div>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="mailto:darren@darrenleefunnels.com"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold text-sm transition-all hover:border-blue-500/40"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>darren@darrenleefunnels.com</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-800 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Confidentiality & Non-Disclosure Guarantee</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Free 10-Minute Video Audit with Every Inquiry</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>7–14 Day Rapid Deployment Turnaround</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry & Funnel Audit Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#090f2b] to-[#050817] border border-blue-500/30 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-['Outfit'] font-black text-2xl sm:text-3xl text-white">
                    Audit Request Received!
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. I will review your funnel and send over a customized audit and project proposal within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        websiteUrl: '',
                        funnelType: 'High-Ticket Coaching',
                        primaryChallenge: 'Low Conversion Rate',
                        budgetRange: '$1,500 - $3,000',
                        timeline: 'Within 2 Weeks',
                        projectNotes: ''
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm placeholder:text-slate-600 outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alex@yourbrand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm placeholder:text-slate-600 outline-none"
                      />
                    </div>
                  </div>

                  {/* Current URL */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Current Website / Funnel URL (If any)
                    </label>
                    <input
                      type="url"
                      placeholder="https://yourbrand.com or leave blank if starting fresh"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm placeholder:text-slate-600 outline-none"
                    />
                  </div>

                  {/* Funnel Type & Challenge */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Funnel Type
                      </label>
                      <select
                        value={formData.funnelType}
                        onChange={(e) => setFormData({ ...formData, funnelType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 focus:border-blue-500 text-white text-sm outline-none"
                      >
                        <option>High-Ticket Coaching</option>
                        <option>SaaS & AI Landing Page</option>
                        <option>Health & Wellness Protocol</option>
                        <option>B2B Agency / Consulting</option>
                        <option>Online Course / Masterclass</option>
                        <option>E-Commerce / Digital Product</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Primary Bottleneck
                      </label>
                      <select
                        value={formData.primaryChallenge}
                        onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 focus:border-blue-500 text-white text-sm outline-none"
                      >
                        <option>Low Conversion Rate (&lt;2%)</option>
                        <option>High Bounce Rate on Paid Ads</option>
                        <option>Outdated / Amateur Page Design</option>
                        <option>Launching Brand New Offer</option>
                        <option>Need Complete Copy & Strategy</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 focus:border-blue-500 text-white text-sm outline-none"
                      >
                        <option>$500 - $1,500 (Single Page Redesign)</option>
                        <option>$1,500 - $3,000 (Complete Funnel & Copy)</option>
                        <option>$3,000 - $5,000 (Multi-Step & Automations)</option>
                        <option>$5,000+ (Full Enterprise Brand System)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Desired Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 focus:border-blue-500 text-white text-sm outline-none"
                      >
                        <option>Immediate (Ready to start this week)</option>
                        <option>Within 2 Weeks</option>
                        <option>Next Month</option>
                        <option>Just Planning Ahead</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Tell me about your offer & goals
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe what you sell, who your ideal client is, and any specific requirements..."
                      value={formData.projectNotes}
                      onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm placeholder:text-slate-600 outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Analyzing & Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Free Funnel Audit & Proposal</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
