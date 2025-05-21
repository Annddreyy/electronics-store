import { TopPart } from './TopPart/TopPart';
import { Nav } from './Nav/Nav';
import { BottomNav } from './BottomNav/BottomNav';

export const Header: React.FC = () => {
    return (
        <>
            <TopPart />
            <Nav />
            <BottomNav />
        </>
    );
};
