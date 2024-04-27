import { useState } from 'react';
import Logo from "../assets/search-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";

const Home = () => {
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (password === 'admin') {
            window.location.href = 'http://localhost:9001/';
        } else {
            alert('Incorrect password!');
        }
    };

    return (
        <div className="flex h-[100vh] flex-col">
            <HomeHeader />
            <main className="grow flex justify-center">
                <div className="w-full px-5 flex flex-col items-center mt-10">
                    <img className="w-[172px] md:w-[272px] mb-8" src={Logo} />
                    <SearchInput />
                    {/* <div className="flex gap-2 text-[#3c4043] mt-8">
                        <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                            Search
                        </button>
                    </div> */}

                    <br></br>

                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-9 px-4 mb-4 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <button
                        onClick={handleLogin}
                        className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2"
                    >
                        Admin Login (use "admin" for testing)
                    </button>

                </div>

            </main>
            <Footer />
        </div>
    );
};

export default Home;
