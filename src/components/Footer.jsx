import { HiSparkles } from "react-icons/hi2";

const Footer = () => {
    const links = ['Home', 'Features', 'Pricing', 'FAQs', 'About'];

    return (
        <footer style={{
            background: 'rgba(8, 8, 14, 0.8)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            marginTop: 'auto',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '40px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
            }}>
                {/* Brand */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                        width: '28px', height: '28px', borderRadius: '8px',
                        background: 'linear-gradient(135deg,#7C3AED,#06B6D4)',
                        display:'flex', alignItems:'center', justifyContent:'center',
                        color:'#fff', fontSize:'14px',
                    }}>
                        <HiSparkles />
                    </div>
                    <span style={{
                        fontSize: '16px', fontWeight: 800,
                        fontFamily: 'Inter, sans-serif',
                        background: 'linear-gradient(135deg,#A78BFA,#06B6D4)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>Postogram</span>
                </div>

                {/* Nav links */}
                <nav style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'4px' }}>
                    {links.map(link => (
                        <a
                            key={link}
                            href="#"
                            style={{
                                padding: '6px 14px',
                                borderRadius: '8px',
                                fontSize: '13px',
                                fontWeight: 500,
                                color: '#475569',
                                fontFamily: 'Inter, sans-serif',
                                textDecoration: 'none',
                                transition: 'color 0.2s, background 0.2s',
                            }}
                            onMouseEnter={e => { e.target.style.color='#A78BFA'; e.target.style.background='rgba(124,58,237,0.08)'; }}
                            onMouseLeave={e => { e.target.style.color='#475569'; e.target.style.background='transparent'; }}
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                {/* Divider */}
                <div style={{ width:'100%', height:'1px', background:'rgba(255,255,255,0.05)' }} />

                {/* Copyright */}
                <p style={{
                    fontSize: '12px', color: '#334155',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.02em',
                }}>
                    © 2025 Postogram, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;