import Button from "./Button";
import PostImage from "../assets/Post.webp";

const Hero = () => {
    return (
        <section style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '72px 24px 48px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
            gap: '64px',
            animation: 'fadeInUp 0.6s ease both',
        }}
        className="max-md:grid-cols-1"
        >
            {/* Left — Text */}
            <div>
                {/* Pill badge */}
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '6px 14px',
                    background: 'rgba(124,58,237,0.12)',
                    border: '1px solid rgba(124,58,237,0.3)',
                    borderRadius: '999px',
                    marginBottom: '24px',
                }}>
                    <span style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#7C3AED', boxShadow:'0 0 8px #7C3AED' }} />
                    <span style={{ fontSize:'12px', fontWeight:600, color:'#A78BFA', letterSpacing:'0.05em', textTransform:'uppercase' }}>
                        Social Platform
                    </span>
                </div>

                <h1 style={{
                    fontSize: 'clamp(32px, 5vw, 56px)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: '-1.5px',
                    marginBottom: '20px',
                    color: '#F1F5F9',
                }}>
                    Share Your{' '}
                    <span style={{
                        background: 'linear-gradient(135deg,#A78BFA 0%,#7C3AED 45%,#06B6D4 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Story
                    </span>
                    {' '}with the World
                </h1>

                <p style={{
                    fontSize: '16px',
                    lineHeight: 1.7,
                    color: '#94A3B8',
                    marginBottom: '36px',
                    maxWidth: '480px',
                }}>
                    A social media post paired with an image, video, or link to provide context, tell a story, or prompt an audience to act. Create stunning posts that resonate.
                </p>

                <div style={{ display:'flex', flexWrap:'wrap', gap:'14px', alignItems:'center' }}>
                    <Button onClick={() => document.getElementById('posts-section')?.scrollIntoView({ behavior: 'smooth' })} />
                </div>

                {/* Stats */}
                <div style={{
                    display: 'flex', gap:'32px', marginTop:'48px',
                    paddingTop: '32px',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                }}>
                    {[['12K+','Posts Created'],['4.8K','Active Users'],['98%','Satisfaction']].map(([num,label]) => (
                        <div key={label}>
                            <p style={{ fontSize:'22px', fontWeight:800, color:'#F1F5F9', lineHeight:1 }}>{num}</p>
                            <p style={{ fontSize:'12px', color:'#475569', marginTop:'4px' }}>{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right — Image */}
            <div style={{ position:'relative' }}>
                {/* Glow blob */}
                <div style={{
                    position:'absolute',
                    inset: '-20px',
                    background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.2) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(30px)',
                    zIndex: 0,
                }} />
                <div style={{
                    position: 'relative', zIndex: 1,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.15)',
                }}>
                    <img
                        src={PostImage}
                        alt="Social Media Post Showcase"
                        style={{ width:'100%', display:'block', objectFit:'cover' }}
                    />
                    {/* Image overlay shimmer */}
                    <div style={{
                        position:'absolute', inset:0,
                        background: 'linear-gradient(180deg, transparent 60%, rgba(10,10,15,0.6) 100%)',
                        pointerEvents:'none',
                    }} />
                </div>
            </div>
        </section>
    );
}

export default Hero;