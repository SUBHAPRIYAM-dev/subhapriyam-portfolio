import { useState, type FormEvent } from "react";
import { personalData } from "../data/personal";
import { soundManager } from "../utils/sound";
import { GithubIcon, LinkedinIcon } from "../components/ui/SocialIcons";
import { FileText, Send, CheckCircle2, Copy } from "lucide-react";

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    soundManager.playClick();
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    soundManager.playClick();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest">06 / CONTACT</span>
          <div className="h-[1px] w-12 bg-cyan-400/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-none mb-4 sm:mb-6">
              LET'S BUILD <span className="text-cyan-400">SOMETHING.</span>
            </h2>

            <p className="text-sm sm:text-lg text-gray-300 font-light mb-6 sm:mb-8">
              Have an idea, project, or opportunity? Feel free to reach out directly or send a message using the form.
            </p>

            {/* Quick Copy Email Card */}
            <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-cyan-500/20 mb-6 sm:mb-8 flex items-center justify-between">
              <div className="truncate max-w-[80%]">
                <span className="font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase block">DIRECT EMAIL</span>
                <span className="font-mono text-xs sm:text-sm font-bold text-white truncate block">{personalData.email}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => soundManager.playHover()}
                data-cursor="COPY"
                className="p-2.5 sm:p-3 rounded-xl glass-panel border border-white/10 text-cyan-400 hover:border-cyan-400 transition-all shrink-0"
                title="Copy Email Address"
              >
                {copiedEmail ? <CheckCircle2 size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Social / Link Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                data-cursor="GITHUB"
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass-panel border border-white/10 text-xs font-mono text-gray-300 hover:text-cyan-300 hover:border-cyan-400 transition-all flex items-center gap-2"
              >
                <GithubIcon size={15} /> GITHUB
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                data-cursor="LINKEDIN"
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass-panel border border-white/10 text-xs font-mono text-gray-300 hover:text-cyan-300 hover:border-cyan-400 transition-all flex items-center gap-2"
              >
                <LinkedinIcon size={15} /> LINKEDIN
              </a>

              <a
                href={personalData.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                onClick={() => soundManager.playClick()}
                data-cursor="RESUME"
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass-panel border border-white/10 text-xs font-mono text-gray-300 hover:text-cyan-300 hover:border-cyan-400 transition-all flex items-center gap-2"
              >
                <FileText size={15} /> RESUME
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 w-full">
            <div className="glass-panel p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl">
              {formSubmitted ? (
                <div className="py-8 sm:py-12 text-center flex flex-col items-center gap-4">
                  <div className="p-3 sm:p-4 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">MESSAGE SENT SUCCESSFULLY</h3>
                  <p className="text-xs font-mono text-gray-400 max-w-xs">
                    Thank you for reaching out. Subhapriyam will review your message shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="font-mono text-[11px] sm:text-xs text-gray-400 uppercase block mb-1.5 sm:mb-2">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[11px] sm:text-xs text-gray-400 uppercase block mb-1.5 sm:mb-2">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[11px] sm:text-xs text-gray-400 uppercase block mb-1.5 sm:mb-2">MESSAGE</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={() => soundManager.playHover()}
                    data-cursor="SEND"
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-black font-mono font-extrabold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                  >
                    SEND MESSAGE <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
