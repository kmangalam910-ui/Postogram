import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostListContext } from "../contextStore/PostListContext";
import { HiCalendar, HiUser, HiHashtag } from "react-icons/hi2";

const Post = ({eachPost}) => {
    const {deletePost} = useContext(PostListContext);

    return (
        <article
            className="animate-fade-up"
            style={{
                background: 'rgba(18, 18, 30, 0.85)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px',
                overflow: 'hidden',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                width: '100%',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5), 0 0 30px rgba(124,58,237,0.12)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.35)';
            }}
        >
            {/* Top accent line */}
            <div style={{
                height: '3px',
                background: 'linear-gradient(90deg, #7C3AED, #06B6D4)',
            }} />

            {/* Post Image */}
            {eachPost.image && eachPost.image !== '/' && (
                <div style={{ overflow:'hidden', maxHeight:'200px', background:'#0a0a10' }}>
                    <img
                        src={eachPost.image}
                        alt={eachPost.title}
                        style={{ width:'100%', objectFit:'cover', display:'block', transition:'transform 0.4s ease' }}
                        onMouseEnter={e => e.currentTarget.style.transform='scale(1.04)'}
                        onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
                    />
                </div>
            )}

            <div style={{ padding: '20px' }}>
                {/* Title + Delete */}
                <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'12px', marginBottom:'12px' }}>
                    <h3 style={{
                        fontSize: '17px', fontWeight: 700,
                        color: '#F1F5F9', lineHeight: 1.3,
                        flex: 1,
                    }}>{eachPost.title}</h3>

                    <button
                        onClick={() => deletePost(eachPost.id)}
                        title="Delete post"
                        style={{
                            flexShrink: 0,
                            width: '32px', height: '32px',
                            borderRadius: '8px',
                            background: 'rgba(239,68,68,0.1)',
                            border: '1px solid rgba(239,68,68,0.2)',
                            color: '#F87171',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '16px',
                            transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background='rgba(239,68,68,0.25)';
                            e.currentTarget.style.borderColor='rgba(239,68,68,0.5)';
                            e.currentTarget.style.transform='scale(1.1)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background='rgba(239,68,68,0.1)';
                            e.currentTarget.style.borderColor='rgba(239,68,68,0.2)';
                            e.currentTarget.style.transform='scale(1)';
                        }}
                    >
                        <MdDelete />
                    </button>
                </div>

                {/* Message */}
                <p style={{
                    fontSize: '14px', lineHeight: 1.65,
                    color: '#94A3B8',
                    marginBottom: '16px',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}>{eachPost.message}</p>

                {/* Tags */}
                {eachPost.tags?.length > 0 && (
                    <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', marginBottom:'16px' }}>
                        {eachPost.tags.map((eachTag) => (
                            <span key={eachTag} style={{
                                display: 'inline-flex', alignItems: 'center', gap:'3px',
                                padding: '3px 10px',
                                borderRadius: '999px',
                                fontSize: '11px', fontWeight: 600,
                                background: 'rgba(124,58,237,0.12)',
                                color: '#A78BFA',
                                border: '1px solid rgba(124,58,237,0.22)',
                                letterSpacing: '0.03em',
                            }}>
                                <HiHashtag style={{ fontSize:'10px' }} />
                                {eachTag.replace(/,$/, '').trim()}
                            </span>
                        ))}
                    </div>
                )}

                {/* Footer meta */}
                <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                }}>
                    <span style={{
                        display: 'flex', alignItems: 'center', gap: '6px',
                        fontSize: '12px', color: '#475569',
                        fontFamily: 'Inter, sans-serif',
                    }}>
                        <HiCalendar style={{ color:'#7C3AED' }} />
                        {eachPost.date}
                    </span>
                    <span style={{
                        display: 'flex', alignItems: 'center', gap: '6px',
                        fontSize: '12px', fontWeight: 600,
                        color: '#94A3B8',
                    }}>
                        <span style={{
                            width:'22px', height:'22px', borderRadius:'50%',
                            background:'linear-gradient(135deg,#7C3AED,#06B6D4)',
                            display:'flex', alignItems:'center', justifyContent:'center',
                            fontSize:'10px', color:'#fff',
                        }}>
                            <HiUser />
                        </span>
                        {eachPost.userId}
                    </span>
                </div>
            </div>
        </article>
    );
}

export default Post;