import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import CustomCursor from '../components/CustomCursor';
import ScrollProgress from '../components/ScrollProgress';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ARBackground from '../components/ARBackground'; // <-- Added here
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata = {
  title: 'Rana Zeeshan | AI Engineer & Cloud Architect',
  description: 'Portfolio of Rana Zeeshan - Certified Azure AI Apps and Agents Developer and AWS Solutions Architect.',
  icons: { icon: '/favicon.svg' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-surface-900 text-slate-300 font-sans antialiased selection:bg-brand-500 selection:text-surface-950 overflow-x-hidden min-h-screen ambient-glow relative">
        <ARBackground /> {/* <-- Global interactive AR/Cyber mesh */}
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}