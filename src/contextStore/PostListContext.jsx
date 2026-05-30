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

const defaultPost = () => [{
    id: Math.random(),
    userId: "Mangalam",
    title: "Century wishes",
    message: "Sanju Samson made history on April 23, 2026, by becoming the first-ever Chennai Super Kings (CSK) batter to score a century against the Mumbai Indians (MI). His unbeaten 101 off 54 balls featured 10 fours and 6 sixes. This masterclass drove CSK to a massive 207/6 at the Wankhede Stadium, eventually securing a dominant 103-run victory",
    date: "April 23, 2026",
    tags: ['CSK', 'Sanju Samson', 'Century'],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYhfG1RT4XSOmTrZhlCOViuo4HX8ECEt1ynQ&s"
}]

// Normal Function

const PostListProvider = ({children}) => {

    const [postList, dispatch] = useReducer(reducerFn, [] , () => {
            const savedPosts = localStorage.getItem("localPosts");
            try {
                const parsed = savedPosts ? JSON.parse(savedPosts) : null;
                return Array.isArray(parsed) ? parsed : defaultPost();
            } catch {
                return defaultPost();
            }
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