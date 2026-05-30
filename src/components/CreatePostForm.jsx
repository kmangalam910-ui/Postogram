import { useContext, useRef, useState } from "react";
import { PostListContext } from "../contextStore/PostListContext";
import { HiUser, HiTag, HiPhoto, HiCalendar, HiPencilSquare, HiLockClosed, HiSparkles, HiXMark, HiArrowUpTray } from "react-icons/hi2";
import { MdTitle, MdMessage } from "react-icons/md";

const FieldWrapper = ({ label, icon, children }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            fontSize: '13px', fontWeight: 600,
            color: '#94A3B8', fontFamily: 'Inter, sans-serif',
            letterSpacing: '0.02em',
        }}>
            <span style={{ color: '#7C3AED', fontSize: '14px' }}>{icon}</span>
            {label}
        </label>
        {children}
    </div>
);

const CreatePost = ({ setSelectedTab, user, guestPostCount, onGuestPost, loginDetails }) => {
    const { addPost } = useContext(PostListContext);

    const titleElement    = useRef('');
    const MessageElement  = useRef('');
    const DateElement     = useRef('');
    const userNameElement = useRef('');
    const tagsElement     = useRef();
    const fileInputRef    = useRef(null);

    // Holds the base64 preview of the uploaded image
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => setImagePreview(ev.target.result);
        reader.readAsDataURL(file);
    };

    const clearImage = () => {
        setImagePreview(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const PostFn = (e) => {
        e.preventDefault();

        const postData = {
            id: Math.random(),
            userId: userNameElement.current.value,
            title: titleElement.current.value,
            message: MessageElement.current.value,
            date: DateElement.current.value,
            tags: tagsElement.current.value.split(' '),
            image: imagePreview || '',
        };

        // If guest, record that they used their one free post
        if (!user) onGuestPost();

        setSelectedTab('Home');
        addPost(postData);
        userNameElement.current.value = '';
        titleElement.current.value    = '';
        MessageElement.current.value  = '';
        DateElement.current.value     = '';
        tagsElement.current.value     = '';
        setImagePreview(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    }

    // ── Guest limit reached: show locked screen ──────────────────────────
    const isLocked = !user && guestPostCount >= 1;

    if (isLocked) {
        return (
            <section className="create-post-section">
                <div style={{
                    background: 'rgba(18,18,30,0.9)',
                    border: '1px solid rgba(239,68,68,0.2)',
                    borderRadius: '24px', overflow: 'hidden',
                    backdropFilter: 'blur(24px)',
                    boxShadow: '0 8px 48px rgba(0,0,0,0.5), 0 0 40px rgba(239,68,68,0.05)',
                }}>
                    {/* Top bar — red to signal limit */}
                    <div style={{ height: '4px', background: 'linear-gradient(90deg, #EF4444, #F97316, #7C3AED)' }} />

                    <div className="create-post-locked-body" style={{
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center', textAlign: 'center', gap: '20px',
                    }}>
                        {/* Lock icon with glow */}
                        <div style={{
                            width: '72px', height: '72px', borderRadius: '50%',
                            background: 'rgba(239,68,68,0.1)',
                            border: '2px solid rgba(239,68,68,0.25)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '30px', color: '#F87171',
                            boxShadow: '0 0 30px rgba(239,68,68,0.15)',
                        }}>
                            <HiLockClosed />
                        </div>

                        <div>
                            <h2 style={{
                                fontSize: '22px', fontWeight: 800,
                                color: '#F1F5F9', fontFamily: 'Inter, sans-serif',
                                margin: '0 0 10px',
                            }}>
                                Post Limit Reached
                            </h2>
                            <p style={{
                                fontSize: '15px', color: '#94A3B8',
                                fontFamily: 'Inter, sans-serif', lineHeight: 1.65,
                                maxWidth: '380px', margin: '0 auto',
                            }}>
                                Guest users can publish <strong style={{ color: '#F1F5F9' }}>1 post</strong> only.
                                Sign in to unlock unlimited posting and more features.
                            </p>
                        </div>

                        {/* CTA buttons */}
                        <div style={{ display: 'flex', gap: '12px', marginTop: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <button
                                onClick={() => loginDetails('block')}
                                className="btn-accent"
                                style={{ padding: '13px 32px', fontSize: '15px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}
                            >
                                <HiSparkles />
                                Sign In to Post More
                            </button>
                            <button
                                onClick={() => setSelectedTab('Home')}
                                className="btn-ghost"
                                style={{ padding: '13px 24px', fontSize: '15px', borderRadius: '12px' }}
                            >
                                Back to Feed
                            </button>
                        </div>

                        {/* Info note */}
                        <p style={{
                            fontSize: '12px', color: '#334155',
                            fontFamily: 'Inter, sans-serif',
                            marginTop: '4px',
                        }}>
                            Your guest post is still live on the feed.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    // ── Normal Create Post Form ───────────────────────────────────────────
    return (
        <section className="create-post-section">
            {/* Guest warning banner (1 post remaining) */}
            {!user && guestPostCount === 0 && (
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '12px 18px', marginBottom: '20px',
                    background: 'rgba(251,146,60,0.08)',
                    border: '1px solid rgba(251,146,60,0.25)',
                    borderRadius: '12px',
                    fontFamily: 'Inter, sans-serif',
                }}>
                    <HiLockClosed style={{ color: '#FB923C', fontSize: '18px', flexShrink: 0 }} />
                    <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>
                        <strong style={{ color: '#FB923C' }}>Guest mode:</strong>{' '}
                        You can publish <strong style={{ color: '#F1F5F9' }}>1 post</strong> without signing in.{' '}
                        <button
                            onClick={() => loginDetails('block')}
                            style={{ background: 'none', border: 'none', color: '#A78BFA', cursor: 'pointer', padding: 0, fontSize: '13px', fontWeight: 600 }}
                        >
                            Sign in for unlimited posts →
                        </button>
                    </p>
                </div>
            )}

            {/* Card */}
            <div style={{
                background: 'rgba(18,18,30,0.9)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px', overflow: 'hidden',
                backdropFilter: 'blur(24px)',
                boxShadow: '0 8px 48px rgba(0,0,0,0.5)',
            }}>
                <div style={{ height: '4px', background: 'linear-gradient(90deg,#7C3AED,#9D5BFF,#06B6D4)' }} />

                {/* Card Header */}
                <div className="create-post-card-header" style={{
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex', alignItems: 'center', gap: '12px',
                }}>
                    <div style={{
                        width: '42px', height: '42px', borderRadius: '12px',
                        background: 'linear-gradient(135deg,rgba(124,58,237,0.3),rgba(6,182,212,0.2))',
                        border: '1px solid rgba(124,58,237,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#A78BFA', fontSize: '20px',
                    }}>
                        <HiPencilSquare />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#F1F5F9', margin: 0 }}>Create a Post</h2>
                        <p style={{ fontSize: '13px', color: '#475569', margin: '3px 0 0' }}>
                            {user ? `Posting as ${user.name}` : 'Share something with the community'}
                        </p>
                    </div>
                </div>

                {/* Form Body */}
                <form onSubmit={PostFn} className="create-post-card-body">
                    <div className="create-post-grid">
                        <FieldWrapper label="User Name" icon={<HiUser />}>
                            <input ref={userNameElement} type="text" placeholder={user ? user.name : 'Enter username'} id="user-id" className="post-title" />
                        </FieldWrapper>
                        <FieldWrapper label="Post Title" icon={<MdTitle />}>
                            <input ref={titleElement} type="text" placeholder="Enter post title" id="title" className="post-title" />
                        </FieldWrapper>
                        <FieldWrapper label="Tags" icon={<HiTag />}>
                            <input ref={tagsElement} type="text" placeholder="tag1 tag2 tag3" id="tags" className="post-title" />
                        </FieldWrapper>
                        <FieldWrapper label="Image" icon={<HiPhoto />}>
                            {/* Hidden file input */}
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                id="image"
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                            />
                            {imagePreview ? (
                                /* Preview with clear button */
                                <div style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', border: '1.5px solid rgba(124,58,237,0.35)' }}>
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        style={{ width: '100%', maxHeight: '130px', objectFit: 'cover', display: 'block' }}
                                    />
                                    <button
                                        type="button"
                                        onClick={clearImage}
                                        style={{
                                            position: 'absolute', top: '6px', right: '6px',
                                            width: '26px', height: '26px', borderRadius: '50%',
                                            background: 'rgba(0,0,0,0.65)',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            color: '#fff', cursor: 'pointer',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '14px', transition: 'all 0.2s',
                                        }}
                                        title="Remove image"
                                    >
                                        <HiXMark />
                                    </button>
                                </div>
                            ) : (
                                /* Upload zone */
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    style={{
                                        width: '100%',
                                        padding: '22px 12px',
                                        background: 'rgba(124,58,237,0.05)',
                                        border: '1.5px dashed rgba(124,58,237,0.3)',
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                        display: 'flex', flexDirection: 'column',
                                        alignItems: 'center', gap: '6px',
                                        transition: 'all 0.25s',
                                        color: '#7C3AED',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.background='rgba(124,58,237,0.1)'; e.currentTarget.style.borderColor='rgba(124,58,237,0.55)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.background='rgba(124,58,237,0.05)'; e.currentTarget.style.borderColor='rgba(124,58,237,0.3)'; }}
                                >
                                    <HiArrowUpTray style={{ fontSize: '22px' }} />
                                    <span style={{ fontSize: '12px', fontWeight: 600, fontFamily: 'Inter,sans-serif', color: '#A78BFA' }}>Click to upload</span>
                                    <span style={{ fontSize: '11px', color: '#475569', fontFamily: 'Inter,sans-serif' }}>PNG, JPG, GIF, WEBP</span>
                                </button>
                            )}
                        </FieldWrapper>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <FieldWrapper label="Message" icon={<MdMessage />}>
                            <textarea ref={MessageElement} id="message" rows="5" placeholder="What's on your mind?" className="post-title" style={{ resize: 'vertical' }} />
                        </FieldWrapper>
                    </div>

                    <div className="create-post-date-field" style={{ marginTop: '20px' }}>
                        <FieldWrapper label="Post Date" icon={<HiCalendar />}>
                            <input ref={DateElement} type="date" id="date" className="post-title" />
                        </FieldWrapper>
                    </div>

                    <div className="create-post-buttons">
                        <button type="submit" className="btn-accent" style={{ padding: '13px 32px', fontSize: '15px', borderRadius: '12px' }}>
                            Publish Post
                        </button>
                        <button type="button" onClick={() => setSelectedTab('Home')} className="btn-ghost" style={{ padding: '13px 24px', fontSize: '15px', borderRadius: '12px' }}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default CreatePost;