import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconBrain, IconLock, IconCoin, IconShieldLock, IconNetwork, IconDeviceAnalytics } from "@tabler/icons-react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StatCardProps {
  number: string;
  label: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="w-full md:w-64 p-6 rounded-[20px] bg-white/5 border border-white/10">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function StatCard({ number, label, description }: StatCardProps) {
  return (
    <div className="p-8 rounded-[20px] bg-white/5 border border-white/10 text-center">
      <div className="text-4xl font-bold text-primary mb-2">{number}</div>
      <div className="text-xl font-semibold text-white mb-2">{label}</div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function DetailedFeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-8 rounded-[20px] bg-white/5 border border-white/10">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className="p-6 rounded-[20px] bg-white/5 border border-white/10">
      <h3 className="text-xl font-semibold text-white mb-4">{question}</h3>
      <p className="text-gray-400 leading-relaxed">{answer}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          <div className="relative container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="max-w-md lg:max-w-xl mx-auto lg:mx-0">
                    <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-white mb-8">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-primary to-orange-500">
                        Monetize
                      </span>{" "}
                      your data securely
                    </h1>
                    <p className="text-xl text-gray-200 mb-8">
                      aloshy.🅰🅸 is a blockchain-based protocol that makes it easy to share and monetize data securely, with full control and privacy. Built for the future of AI—where access to trusted, high-quality data is critical.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <BackgroundGradient className="rounded-[20px]">
                        <button className="relative text-white px-8 py-4 rounded-[20px] bg-black/90 hover:bg-black/70 transition duration-200">
                          Get Started
                        </button>
                      </BackgroundGradient>
                      <button className="text-white px-8 py-4 rounded-[20px] border border-gray-700 hover:bg-white/10 transition duration-200">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div className="flex flex-wrap gap-4">
                    <FeatureCard
                      icon={<IconBrain className="w-8 h-8" />}
                      title="AI-Ready Data"
                      description="High-quality, trusted data ready for AI model training and inference"
                    />
                    <FeatureCard
                      icon={<IconLock className="w-8 h-8" />}
                      title="Privacy-First"
                      description="Advanced cryptography ensures your data remains private and secure"
                    />
                    <FeatureCard
                      icon={<IconCoin className="w-8 h-8" />}
                      title="Data Monetization"
                      description="Turn your data into revenue streams while maintaining control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Market Opportunity
                </h2>
                <p className="text-xl text-gray-400">
                  Join the future of secure data exchange and monetization
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <StatCard
                  number="$200B+"
                  label="Total Addressable Market by 2030"
                  description="Global AI and data exchange market potential at the intersection of AI infrastructure and data monetization"
                />
                <StatCard
                  number="$20B"
                  label="Serviceable Available Market"
                  description="Focused on healthcare, finance, and AI agent ecosystems requiring secure data exchange"
                />
                <StatCard
                  number="$400M"
                  label="Annual Revenue Potential"
                  description="Realistic capture of the market within 5-10 years with our protocol adoption"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Why Choose aloshy.🅰🅸?
                </h2>
                <p className="text-xl text-gray-400">
                  Advanced features for secure data monetization and AI collaboration
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <DetailedFeatureCard
                  icon={<IconShieldLock className="w-8 h-8" />}
                  title="Multi-Party Computation"
                  description="Leverage advanced MPC cryptography for secure data collaboration without exposing raw data, enabling compliant cross-border exchange even in regulated industries."
                />
                <DetailedFeatureCard
                  icon={<IconNetwork className="w-8 h-8" />}
                  title="Blockchain Security"
                  description="Immutable records and decentralized control ensure transparent and secure data transactions with verifiable consent and usage tracking."
                />
                <DetailedFeatureCard
                  icon={<IconDeviceAnalytics className="w-8 h-8" />}
                  title="AI-Ready Infrastructure"
                  description="Purpose-built for AI model training and inference with high-quality data streams that maintain privacy while enabling powerful machine learning applications."
                />
                <DetailedFeatureCard
                  icon={<IconBrain className="w-8 h-8" />}
                  title="Agent Economy Ready"
                  description="Built for integration with autonomous AI agent ecosystems, enabling secure agent-to-agent data exchange and collaboration across networks."
                />
                <DetailedFeatureCard
                  icon={<IconLock className="w-8 h-8" />}
                  title="Regulatory Compliance"
                  description="Designed with healthcare, finance, and cross-border regulations in mind, ensuring data exchange meets the strictest compliance requirements."
                />
                <DetailedFeatureCard
                  icon={<IconCoin className="w-8 h-8" />}
                  title="Tokenized Data Economy"
                  description="Create new revenue streams through secure data licensing, while maintaining ownership and control through advanced token economics."
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-400">
                  Everything you need to know about aloshy.🅰🅸
                </p>
              </div>
              <div className="space-y-8">
                <FaqItem
                  question="What is aloshy.🅰🅸?"
                  answer="aloshy.🅰🅸 is a blockchain-based protocol that enables secure data sharing and monetization. It's designed specifically for AI applications and regulated industries, allowing data owners to maintain control while earning from their valuable data."
                />
                <FaqItem
                  question="How does the data monetization work?"
                  answer="Through our platform, you can securely share your data with AI companies and researchers. Smart contracts ensure transparent revenue sharing, while our MPC technology keeps your data private and secure."
                />
                <FaqItem
                  question="Is my data secure?"
                  answer="Yes, we use advanced cryptographic techniques including Multi-Party Computation (MPC) and blockchain technology to ensure your data remains private and secure while still being useful for AI training."
                />
                <FaqItem
                  question="Who can use aloshy.🅰🅸?"
                  answer="aloshy.🅰🅸 is designed for both data providers (individuals and organizations) and data consumers (AI companies, researchers, enterprises). We particularly focus on regulated industries like healthcare and finance, and AI agent ecosystems needing cross-border data collaboration."
                />
                <FaqItem
                  question="How does aloshy.🅰🅸 work?"
                  answer="Our protocol uses advanced cryptography and blockchain technology to create secure data exchange channels. Data providers maintain control and privacy while making their data available for monetization through our marketplace. AI systems and enterprises can access high-quality, compliant data while ensuring regulatory requirements are met."
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <BackgroundGradient className="rounded-[30px]">
                <div className="relative overflow-hidden rounded-[30px] px-8 py-16 bg-black/90">
                  <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      Join the Future of AI Data Exchange
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                      aloshy.🅰🅸 is building core infrastructure for the AI economy. Join us and be part of a projected $200B+ market opportunity in secure, private data monetization.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <BackgroundGradient className="rounded-[20px]">
                        <button className="relative text-white px-8 py-4 rounded-[20px] bg-black/90 hover:bg-black/70 transition duration-200">
                          Early Access
                        </button>
                      </BackgroundGradient>
                      <a href="#features" className="text-white px-8 py-4 rounded-[20px] border border-gray-700 hover:bg-white/10 transition duration-200">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 