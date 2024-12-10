import Link from "next/link";

const Home = () => (
    <div className="p-4">
        <Link href='/profiles' className="pr-4">Profiles Page</Link>
        <Link href='/settings'>Settings Page</Link>
    </div>
);

export default Home;
