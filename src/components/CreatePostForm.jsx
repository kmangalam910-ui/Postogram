import { useContext, useRef } from "react";
import { PostListContext } from "../contextStore/PostListContext";

const CreatePost = ({setSelectedTab}) => {

    const {addPost} = useContext(PostListContext);

    const titleElement = useRef('');
    const MessageElement = useRef('');
    const DateElement = useRef('');
    const userNameElement = useRef('');
    const tagsElement = useRef();
    const imageElement = useRef(''); // Added image element ref

    const PostFn = (e) => {
        e.preventDefault(); // Good practice to prevent layout refresh on form submit
        
        const postData = {
            id: Math.random(),
            userId: userNameElement.current.value,
            title: titleElement.current.value,
            message: MessageElement.current.value,
            date: DateElement.current.value,
            tags: tagsElement.current.value.split(' '),
            image: imageElement.current.value // Included image field inside data object
        };

        setSelectedTab('Home');
        addPost(postData);
        userNameElement.current.value = '';
        titleElement.current.value = '';
        MessageElement.current.value = '';
        DateElement.current.value= '';
        tagsElement.current.value= '';
        imageElement.current.value= ''; // Reset input field after submission
    }

    return <>
        <form onSubmit={PostFn}>
            <div className="flex justify-between">
                <div className="mb-3 mx-20 w-96">
                    <label htmlFor="user-id" className="form-label text-info float-start">User Name</label>
                    <input ref={userNameElement} type="text" placeholder="Enter User Name" className="post-title form-control bg-black text-white" id="user-id"/>
                </div>
                <div className="mb-3 mx-20 w-96">
                    <label htmlFor="title" className="form-label text-info float-start">Post's Title</label>
                    <input ref={titleElement} type="text" placeholder="Enter Post Title" className="post-title form-control bg-black text-white" id="title"/>
                </div>
            </div>
            
            {/* Added layout row containing the new Image URL option */}
            <div className="flex justify-between">
                <div className="mb-3 mx-20 w-96">
                    <label htmlFor="tags" className="form-label text-info float-start">Tags</label>
                    <input ref={tagsElement} type="text" placeholder="Enter Hashtags" className="post-title form-control bg-black text-white" id="tags"/>
                </div>

                <div className="mb-3 mx-20 w-96">
                    <label htmlFor="image" className="form-label text-info float-start">Image URL</label>
                    <input ref={imageElement} type="text" placeholder="Paste image link here (e.g. https://...)" className="post-title form-control bg-black text-white" id="image"/>
                </div>
            </div>

            <div className="mb-3 mx-20">
                <label htmlFor="message" className="post-description form-label text-info float-start">Post Message</label>
                <textarea ref={MessageElement} className="form-control bg-black text-white" id="message" rows="5"></textarea>
            </div>

            <div className="mb-3 mx-20 w-96">
                <label htmlFor="date" className="form-label text-info float-start">Post's Date</label>
                <input ref={DateElement} type="date" className="post-title form-control bg-black text-white" id="date"/>
            </div>

            <button type="submit" className="mx-20 btn btn-info float-start">Post</button>
        </form>
    </>
}

export default CreatePost;