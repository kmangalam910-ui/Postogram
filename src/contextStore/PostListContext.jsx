import { createContext, useReducer, useEffect } from "react";

// Context
export const PostListContext = createContext({
    postList: [],
    addPost:  () => {},
    deletePost: () => {}
});

// Pure Function
const reducerFn = (currentStatus, action) => {
    let status = currentStatus;
    if(action.type === 'DELETE_POST') {
        const newList = currentStatus.filter((post) => post.id !== action.payload.postId)
        status = newList;

    } else if(action.type === 'ADD_POST'){
        const postDataObj = action.payload.postData;
        const postList = [postDataObj, ...currentStatus];
        status = postList;
    }

    return status;
}


// Normal Function

const PostListProvider = ({children}) => {

    const [postList, dispatch] = useReducer(reducerFn, [] , () => {
            const savedPosts = localStorage.getItem("localPosts");
            return savedPosts ? JSON.parse(savedPosts) : null;
        });

        useEffect(() => {
            localStorage.setItem("localPosts", JSON.stringify(postList));
        }, [postList]);

    const addPost = (postData) => {
        dispatch({
            type: 'ADD_POST',
            payload: {
                postData
            }
        })
        alert('Hit OK button to confirm your post');
    };

    const deletePost = (postId) => {
        dispatch({
            type: 'DELETE_POST',
            payload: {
                postId
            }
        });
        alert('Your post will delete permanently');
    };


    return <PostListContext.Provider value={{
        postList,
        addPost,
        deletePost
    }}>
        {children}
    </PostListContext.Provider>
};


export default PostListProvider;