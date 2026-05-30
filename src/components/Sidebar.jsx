import { HiHome, HiPencilSquare, HiXMark } from "react-icons/hi2";
import { HiSparkles } from "react-icons/hi2";

const Sidebar = ({displayState, setSelectedTab, selectedTab, displayHideFn}) => {

    const hideAndTabFn = (event) => {
        setSelectedTab("CreatePost");
        displayHideFn(event);
    }

    const showAndTabFn = (event) => {
        setSelectedTab("Home");
        displayHideFn(event);
    }

    const isVisible = displayState === 'd-flex';

    const navItems = [
        { label: 'Home',        icon: <HiHome />,         fn: showAndTabFn,  tab: 'Home' },
        { label: 'Create Post', icon: <HiPencilSquare />, fn: hideAndTabFn,  tab: 'CreatePost' },
    ];

    return (
        <>
            {/* Backdrop */}
            {isVisible && (
                <div
                    onClick={displayHideFn}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 200,
                        background: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                    }}
                />
            )}

            {/* Drawer */}
            <div style={{
                position: 'fixed',
                top: 0, left: 0,
                width: '280px',
                height: '100vh',
                zIndex: 201,
                background: 'rgba(10, 10, 20, 0.95)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                borderRight: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '4px 0 40px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                padding: '24px 16px',
                gap: '8px',
                transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            }}>
                {/* Header row */}
                <div style={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '4px 8px 16px',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    marginBottom: '8px',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                            width: '30px', height: '30px', borderRadius: '8px',
                            background: 'linear-gradient(135deg,#7C3AED,#06B6D4)',
                            display:'flex', alignItems:'center', justifyContent:'center',
                        }}>
                            <HiSparkles style={{ color:'#fff', fontSize:'15px' }} />
                        </div>
                        <span style={{
                            fontWeight: 700, fontSize: '16px',
                            background: 'linear-gradient(135deg,#A78BFA,#06B6D4)',
                            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
                            backgroundClip:'text',
                        }}>Postogram</span>
                    </div>
                    <button
                        onClick={displayHideFn}
                        style={{
                            background: 'rgba(255,255,255,0.06)', border:'none',
                            borderRadius:'8px', width:'30px', height:'30px',
                            display:'flex', alignItems:'center', justifyContent:'center',
                            color:'#94A3B8', cursor:'pointer', fontSize:'16px',
                            transition:'all 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.color='#F1F5F9'; e.currentTarget.style.background='rgba(255,255,255,0.1)'; }}
                        onMouseLeave={e => { e.currentTarget.style.color='#94A3B8'; e.currentTarget.style.background='rgba(255,255,255,0.06)'; }}
                    >
                        <HiXMark />
                    </button>
                </div>

                {/* Nav Items */}
                <nav style={{ display:'flex', flexDirection:'column', gap:'4px' }}>
                    {navItems.map(item => {
                        const active = selectedTab === item.tab;
                        return (
                            <button
                                key={item.tab}
                                onClick={item.fn}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '12px',
                                    padding: '11px 14px',
                                    borderRadius: '12px',
                                    border: active ? '1.5px solid rgba(124,58,237,0.4)' : '1.5px solid transparent',
                                    background: active
                                        ? 'linear-gradient(135deg,rgba(124,58,237,0.2),rgba(124,58,237,0.08))'
                                        : 'transparent',
                                    color: active ? '#A78BFA' : '#94A3B8',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: active ? 600 : 500,
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    transition: 'all 0.2s ease',
                                    width: '100%',
                                }}
                                onMouseEnter={e => {
                                    if (!active) {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                        e.currentTarget.style.color = '#F1F5F9';
                                    }
                                }}
                                onMouseLeave={e => {
                                    if (!active) {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = '#94A3B8';
                                    }
                                }}
                            >
                                <span style={{ fontSize:'18px', lineHeight:1 }}>{item.icon}</span>
                                {item.label}
                            </button>
                        );
                    })}
                </nav>

                {/* Footer tag */}
                <div style={{ marginTop:'auto', padding:'12px 8px 0' }}>
                    <p style={{
                        fontSize:'11px', color:'#334155',
                        fontFamily:'Inter, sans-serif',
                        textAlign:'center', letterSpacing:'0.03em',
                    }}>© 2025 Postogram</p>
                </div>
            </div>
        </>
    );
}

export default Sidebar;