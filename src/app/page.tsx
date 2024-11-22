import PostCard from "@/components/PostsCard";
import StorySlider from "@/components/StoryLine";
import Image from "next/image";

// data/dummyPosts.ts
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

const stories = [
  { id: 1, image: '/images/story1.jpg', username: 'user1' },
  { id: 2, image: '/images/story2.jpg', username: 'user2' },
  { id: 3, image: '/images/story3.jpg', username: 'user3' },
  { id: 4, image: '/images/story3.jpg', username: 'user3' },
  { id: 5, image: '/images/story3.jpg', username: 'user3' },
  { id: 6, image: '/images/story3.jpg', username: 'user3' },
  { id: 7, image: '/images/story3.jpg', username: 'user3' },
  { id: 8, image: '/images/story3.jpg', username: 'user3' },
  // Add more stories as needed
];

const dummyPosts: Post[] = [
  {
    id: "1",
    content: "This is the first post content.",
    likes: 10,
    comments: 2,
    imageUrl: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    user: {
      name: "John Doe",
      avatarUrl: "https://example.com/avatar1.jpg"
    }
  },
  {
    id: "2",
    content: "This is the second post content.",
    likes: 20,
    comments: 5,
    imageUrl: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    user: {
      name: "Jane Smith",
      avatarUrl: "https://example.com/avatar2.jpg"
    }
  },
  {
    id: "3",
    content: "This is the third post content.",
    likes: 15,
    comments: 3,
    imageUrl: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    user: {
      name: "Alice Johnson",
      avatarUrl: "https://example.com/avatar3.jpg"
    }
  }
];


export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="p-4">
        <StorySlider stories={stories} />
      </div>
      {
        dummyPosts.map((post) => (
          <PostCard post={post} />
        ))
      }
    </div>
  );
}
