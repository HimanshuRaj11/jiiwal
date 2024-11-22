// components/PostCard.tsx
import React from 'react';
import { FaThumbsUp, FaComment, FaShareAlt } from 'react-icons/fa'; // Importing icons from react-icons
import { HiDotsVertical } from 'react-icons/hi';
interface Post {
    id: string;
    content: string;
    likes: number;
    comments: number;

    imageUrl: string; // Added imageUrl property
    user: {
        name: string;
        avatarUrl: string;
    };
}

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 transition-transform transform hover:scale-105">
            <div className="flex items-center px-4 py-2">
                <img className="w-10 h-10 object-cover rounded-full" src={post.user.avatarUrl} alt="User avatar" />
                <div className="mx-3">
                    <h2 className="text-gray-800 font-semibold">{post.user.name}</h2>
                </div>
                <div className="ml-auto">
                    <button className="text-gray-400 hover:text-gray-600">
                        <HiDotsVertical />
                    </button>
                </div>
            </div>
            <div className="px-4 py-2">
                <p className="text-gray-700">{post.content}</p>
            </div>
            <div className="px-4 py-2">
                <img className="w-full h-auto object-cover" src={post.imageUrl} alt="Post image" /> {/* Added image */}
            </div>
            <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
                <div className="flex items-center">
                    <button className="flex items-center text-gray-600 hover:text-blue-500">
                        <FaThumbsUp className="w-5 h-5 mr-1" />
                        <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center ml-4 text-gray-600 hover:text-blue-500">
                        <FaComment className="w-5 h-5 mr-1" />
                        <span>{post.comments}</span>
                    </button>
                </div>


                <button className="text-gray-600 hover:text-blue-500">
                    <FaShareAlt className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default PostCard;