// PostContainerList.jsx
import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../contextStore/PostListContext";

const PostContainerList = () => {
    const {postList} = useContext(PostListContext);

    {/* Swapped "items-center" with "items-start" so image cards don't deform text-only cards */}
    return (
        <div className="grid items-center md:grid-cols-2 xl:grid-cols-3 sm:gap-20 max-sm:grid-cols-1">
            {postList.map((eachPost) => <Post key={eachPost.id} eachPost={eachPost} />)}
        </div>
    );
}

export default PostContainerList;