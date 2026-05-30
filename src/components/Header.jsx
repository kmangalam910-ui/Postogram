import { useState, useRef, useEffect } from "react";
import { GoSidebarExpand } from "react-icons/go";
import { HiSparkles, HiArrowRightOnRectangle, HiUser, HiEnvelope } from "react-icons/hi2";

const Header = ({ displayShowFn, setSelectedTab, loginDetails, user, handleLogout }) => {
    const [profileOpen, setProfileOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    // Initials fallback when no photo
    const initials = user?.name
        ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
        : '?';

    return (
        <header style={{
            position: 'sticky', top: 0, zIndex: 100,
            background: 'rgba(10, 10, 15, 0.8)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 4px 32px rgba(0,0,0,0.4)',
        }}>
            <div
                className="header-inner"
                style={{
                    maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
                    height: '64px', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', gap: '16px',
                }}
            >
                {/* Logo */}
                <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', flexShrink: 0 }}>
                    <div style={{
                        width: '34px', height: '34px', borderRadius: '10px',
                        background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 4px 14px rgba(124,58,237,0.45)',
                    }}>
                        <HiSparkles style={{ color: '#fff', fontSize: '18px' }} />
                    </div>
                    <span style={{
                        fontSize: '20px', fontWeight: 800, fontFamily: 'Inter, sans-serif',
                        background: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 50%, #06B6D4 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                        letterSpacing: '-0.5px',
                    }}>Postogram</span>
                </a>

                {/* Nav links */}
                <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="d-none d-md-flex">
                    {['Home', 'CreatePost'].map((tab) => (
                        <button key={tab} onClick={() => setSelectedTab(tab)} style={{
                            background: 'transparent', border: 'none', color: '#94A3B8',
                            fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '14px',
                            padding: '8px 16px', borderRadius: '10px', cursor: 'pointer',
                            transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={e => { e.target.style.color='#F1F5F9'; e.target.style.background='rgba(255,255,255,0.06)'; }}
                        onMouseLeave={e => { e.target.style.color='#94A3B8'; e.target.style.background='transparent'; }}
                        >
                            {tab === 'CreatePost' ? 'Create Post' : tab}
                        </button>
                    ))}
                </nav>

                {/* Right actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>

                    {user ? (
                        /* ── Profile Avatar + Dropdown ── */
                        <div ref={dropdownRef} style={{ position: 'relative' }}>
                            {/* Avatar Button */}
                            <button
                                onClick={() => setProfileOpen(o => !o)}
                                style={{
                                    width: '40px', height: '40px', borderRadius: '50%',
                                    border: profileOpen
                                        ? '2px solid #7C3AED'
                                        : '2px solid rgba(124,58,237,0.4)',
                                    background: 'transparent',
                                    cursor: 'pointer', padding: 0, overflow: 'hidden',
                                    boxShadow: profileOpen ? '0 0 0 4px rgba(124,58,237,0.2)' : 'none',
                                    transition: 'all 0.2s',
                                    flexShrink: 0,
                                }}
                                title={user.name}
                            >
                                {user.photo ? (
                                    <img
                                        src={user.photo}
                                        alt={user.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                    />
                                ) : (
                                    <div style={{
                                        width: '100%', height: '100%',
                                        background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#fff', fontWeight: 700, fontSize: '14px',
                                        fontFamily: 'Inter, sans-serif',
                                    }}>
                                        {initials}
                                    </div>
                                )}
                            </button>

                            {/* Dropdown */}
                            {profileOpen && (
                                <div style={{
                                    position: 'absolute', top: 'calc(100% + 10px)', right: 0,
                                    width: '260px',
                                    background: 'rgba(12, 12, 22, 0.98)',
                                    border: '1px solid rgba(255,255,255,0.09)',
                                    borderRadius: '18px',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,58,237,0.15)',
                                    backdropFilter: 'blur(30px)',
                                    WebkitBackdropFilter: 'blur(30px)',
                                    overflow: 'hidden',
                                    animation: 'fadeInUp 0.2s ease both',
                                    zIndex: 200,
                                }}>
                                    {/* Gradient top bar */}
                                    <div style={{ height: '3px', background: 'linear-gradient(90deg, #7C3AED, #9D5BFF, #06B6D4)' }} />

                                    {/* User info section */}
                                    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                                        {/* Large avatar */}
                                        <div style={{
                                            width: '72px', height: '72px', borderRadius: '50%',
                                            border: '2.5px solid rgba(124,58,237,0.5)',
                                            overflow: 'hidden',
                                            boxShadow: '0 0 20px rgba(124,58,237,0.3)',
                                        }}>
                                            {user.photo ? (
                                                <img src={user.photo} alt={user.name} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                                            ) : (
                                                <div style={{
                                                    width:'100%', height:'100%',
                                                    background:'linear-gradient(135deg,#7C3AED,#06B6D4)',
                                                    display:'flex', alignItems:'center', justifyContent:'center',
                                                    color:'#fff', fontWeight:700, fontSize:'24px', fontFamily:'Inter,sans-serif',
                                                }}>
                                                    {initials}
                                                </div>
                                            )}
                                        </div>

                                        {/* Name */}
                                        <div style={{ textAlign: 'center' }}>
                                            <p style={{
                                                fontSize: '16px', fontWeight: 700,
                                                color: '#F1F5F9', fontFamily: 'Inter, sans-serif',
                                                margin: 0,
                                            }}>{user.name}</p>
                                            <p style={{
                                                fontSize: '13px', color: '#64748B',
                                                fontFamily: 'Inter, sans-serif', margin: '4px 0 0',
                                            }}>{user.email}</p>
                                        </div>
                                    </div>

                                    {/* Detail rows */}
                                    <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                        <div style={{
                                            display: 'flex', alignItems: 'center', gap: '10px',
                                            padding: '10px 12px', borderRadius: '10px',
                                            background: 'rgba(255,255,255,0.03)',
                                        }}>
                                            <span style={{ color: '#7C3AED', fontSize: '16px' }}><HiUser /></span>
                                            <div>
                                                <p style={{ fontSize: '11px', color: '#475569', fontFamily: 'Inter,sans-serif', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Name</p>
                                                <p style={{ fontSize: '13px', color: '#CBD5E1', fontFamily: 'Inter,sans-serif', margin: '2px 0 0', fontWeight: 500 }}>{user.name}</p>
                                            </div>
                                        </div>

                                        <div style={{
                                            display: 'flex', alignItems: 'center', gap: '10px',
                                            padding: '10px 12px', borderRadius: '10px',
                                            background: 'rgba(255,255,255,0.03)',
                                        }}>
                                            <span style={{ color: '#06B6D4', fontSize: '16px' }}><HiEnvelope /></span>
                                            <div>
                                                <p style={{ fontSize: '11px', color: '#475569', fontFamily: 'Inter,sans-serif', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Email</p>
                                                <p style={{ fontSize: '13px', color: '#CBD5E1', fontFamily: 'Inter,sans-serif', margin: '2px 0 0', fontWeight: 500 }}>{user.email}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Logout */}
                                    <div style={{ padding: '8px 16px 16px' }}>
                                        <button
                                            onClick={() => { handleLogout(); setProfileOpen(false); }}
                                            style={{
                                                width: '100%', padding: '11px',
                                                background: 'rgba(239,68,68,0.1)',
                                                border: '1.5px solid rgba(239,68,68,0.2)',
                                                borderRadius: '12px',
                                                color: '#F87171', fontFamily: 'Inter,sans-serif',
                                                fontWeight: 600, fontSize: '13px',
                                                cursor: 'pointer', display: 'flex',
                                                alignItems: 'center', justifyContent: 'center',
                                                gap: '8px', transition: 'all 0.2s',
                                            }}
                                            onMouseEnter={e => { e.currentTarget.style.background='rgba(239,68,68,0.2)'; e.currentTarget.style.borderColor='rgba(239,68,68,0.4)'; }}
                                            onMouseLeave={e => { e.currentTarget.style.background='rgba(239,68,68,0.1)'; e.currentTarget.style.borderColor='rgba(239,68,68,0.2)'; }}
                                        >
                                            <HiArrowRightOnRectangle />
                                            Sign Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        /* ── Sign In Button (not logged in) ── */
                        <button
                            onClick={() => loginDetails('block')}
                            className="btn-accent"
                            style={{ padding: '8px 20px', fontSize: '13px', borderRadius: '10px' }}
                        >
                            Sign In
                        </button>
                    )}

                    {/* Mobile menu toggle */}
                    <button
                        onClick={displayShowFn}
                        className="d-md-none"
                        style={{
                            background: 'rgba(124,58,237,0.15)',
                            border: '1.5px solid rgba(124,58,237,0.3)',
                            borderRadius: '10px', color: '#A78BFA',
                            width: '38px', height: '38px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', fontSize: '18px', transition: 'all 0.2s',
                        }}
                    >
                        <GoSidebarExpand />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;