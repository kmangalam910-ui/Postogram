import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostListContext } from "../contextStore/PostListContext";

const Post = ({eachPost}) => {
    const {deletePost} = useContext(PostListContext);

    return (
        <div className="relative card bg-transparent mb-5 ml-10 max-lg:mt-5 text-white border" style={{width: "80%"}}>
           <div className="card-body">
                <h3 className="card-title text-info font-black relative">
                    {eachPost.title}
                    <span onClick={() => deletePost(eachPost.id)} className="position-absolute hover:cursor-pointer -top-4 -left-4 translate-middle badge rounded-pill bg-danger">
                        <MdDelete/>
                    </span>
                </h3>

                {eachPost.image && (
                    <div className="my-3 overflow-hidden rounded-3 max-h-60 flex justify-center items-center bg-zinc-900">
                        <img 
                            src={eachPost.image} 
                            alt={eachPost.title} 
                            className="w-full h-auto object-cover max-h-60"
                        />
                    </div>
                )}

                <p className="card-text font-bold mt-2">{eachPost.message}</p>
                
                <div className="mt-2 mb-4">
                    {eachPost.tags.map((eachTag) => (
                        <span key={eachTag} className="badge text-black rounded-pill mx-1 text-bg-info">
                            {eachTag.replace(/,$/, '').trim()}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between mt-3 text-info">
                    <span className="float-left w-full text-xs">{eachPost.date}</span>
                    <span className="float-left w-full text-center text-sm font-semibold">{eachPost.userId}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;