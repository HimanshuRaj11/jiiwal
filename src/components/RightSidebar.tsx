// components/RightSidebar.tsx
import React from 'react';
import UserCard from './Usercard';
import GameCard from './GameCard';

interface User {
    id: string;
    name: string;
    // Add other user properties if needed
}

interface Game {
    id: string;
    name: string;
    // Add other game properties if needed
}

interface RightSidebarProps {
    suggestedUsers: User[];
    suggestedGames: Game[];
}

const suggestedUsers: User[] = [
    {
        id: "1",
        name: "a1"
    },
];

const suggestedGames: Game[] = [
    {
        id: "1",
        name: "a1"
    },
];

const RightSidebar: React.FC<RightSidebarProps> = () => {
    return (
        <div className="hidden md:block w-64 p-4 top-0 right-0 min-h-screen transition-all duration-300 ease-in-out">
            <h2 className="text-xl font-bold mb-4">Suggested Users</h2>
            <div className="space-y-4">
                {suggestedUsers.map((user: User) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
            <h2 className="text-xl font-bold mt-8 mb-4">Suggested Games</h2>
            <div className="space-y-4">
                {suggestedGames.map((game: Game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
};

export default RightSidebar;