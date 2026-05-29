import Button from "./Button";

const Hero = () => {
    return <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-4 fw-bold lh-1 text-info">A Simple Solution to Pain Point</h1>
                <p className="lead text-white">A social media post description (or caption) is text paired with an image, video, or link to provide context, tell a story, or prompt an audience to act. Effective captions typically consist of a strong hook, emojis, mentions, 3-5 relevant hashtags, and a clear call-to-action (CTA). </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <button type="button" className="btn h-14 btn-info btn-lg px-4 me-md-2 fw-bold">Have Some Posts</button>
                    <Button type="button" className="btn btn-outline-info btn-lg px-4">Explore</Button>
                </div> 
            </div>
            <div className="col-lg-4 offset-lg-1 mb-10 p-0 overflow-hidden shadow-lg">
                <img className="rounded-lg-3" src="src/assets/Post.webp" alt="" width="720"/>
            </div>
        </div>
    </div>
}

export default Hero;