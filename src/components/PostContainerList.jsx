import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../contextStore/PostListContext";
import { HiSquares2X2 } from "react-icons/hi2";

const PostContainerList = () => {
    const {postList} = useContext(PostListContext);

    return (
        <section
            id="posts-section"
            className="posts-section-inner"
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 24px 80px',
            }}
        >
            {/* Section header */}
            <div style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                marginBottom: '32px',
                paddingBottom: '20px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
                <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: 'rgba(124,58,237,0.15)',
                    border: '1px solid rgba(124,58,237,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#A78BFA', fontSize: '18px',
                }}>
                    <HiSquares2X2 />
                </div>
                <div>
                    <h2 style={{ fontSize:'18px', fontWeight:700, color:'#F1F5F9', margin:0 }}>
                        Latest Posts
                    </h2>
                    <p style={{ fontSize:'13px', color:'#475569', margin:'2px 0 0' }}>
                        {postList.length} post{postList.length !== 1 ? 's' : ''} shared
                    </p>
                </div>
            </div>

            {/* Grid */}
            {postList.length === 0 ? (
                <div style={{
                    textAlign: 'center', padding: '80px 20px',
                    color: '#334155',
                }}>
                    <div style={{ fontSize:'48px', marginBottom:'16px', opacity:0.4 }}>✦</div>
                    <p style={{ fontSize:'16px', color:'#475569', fontWeight:500 }}>No posts yet. Be the first to share!</p>
                </div>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '24px',
                }}>
                    {postList.map((eachPost) => (
                        <Post key={eachPost.id} eachPost={eachPost} />
                    ))}
                </div>
            )}
        </section>
    );
}

export default PostContainerList;