import React, {useState, useEffect} from "react";
import Link from "next/link";
import axios from "axios";
import jwt from "jsonwebtoken";
import {FiLogOut, FiMessageSquare, FiBell} from "react-icons/fi";
import router from "next/router";
import {
    getCookie,
    getdatas,
} from "../componentDatas/userdetails/userdataCookies";

export default function NavHeaderDashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [trending, setTrending] = useState(null);
    const [verified, setVerified] = useState(true);
    const [logout, setLogout] = useState(null);
    const [user, setUser] = useState("");
    const datas = trending;

    const logOut = (e) => {
        e.preventDefault();
        document.cookie = "token= ;"
        router.push("/login");
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("http://localhost:8000/api/hotels");
            setTrending(result.data);
            setIsLoading(false);
        };

        fetchData();
        const auth = getCookie("token");
        const auth2 = getCookie("loginData");

        if (!auth) {
            return router.push("/login");
        }
        setUser(jwt.decode(getCookie("token")));
        setVerified(user.isVerified);
        if(user.isAdmin === true){
            return router.push("/admin/dashboard");
        }

        if (!verified) {
            return router.push("/verification");
        }
    }, []);


    if (isLoading) {

        return <div className="login-back-loading">Loading...</div>;

    }
    localStorage.setItem("email", user?.email);
    return (
        <main>

            <div
                className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
                <Link href="/home">
                    <h2 className="text-3xl hover:cursor-pointer font-extrabold text-primary dark:text-white">
                        Accommod
                    </h2>
                </Link>

                <div className="relative mt-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
            >
              <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              ></path>
            </svg>
          </span>
                    <form action="">
                        <input
                            type="text"
                            className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            placeholder="Search"
                        />
                    </form>
                </div>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <a
                            className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                            href="/home"
                        >
                            <svg
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <span className="mx-4 font-medium">Dashboard</span>
                        </a>

                        <a
                            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                            href="/account"
                        >
                            <svg
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <span className="mx-4 font-medium">Account</span>
                        </a>

                        <a
                            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                            href="https://tawk.to/accommodchats"
                        >
                            <FiMessageSquare/>

                            <span className="mx-4 font-medium">Messages</span>
                        </a>

                        <a
                            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                            href="/account"
                        >
                            <svg
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <span className="mx-4 font-medium">Settings</span>
                        </a>

                        <hr className="my-6 border-gray-200 dark:border-gray-600"/>

                        {/* <a
                            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                            href="/notification"
                        >
                            <FiBell/>

                            <span className="mx-4 font-medium">Notifications</span>
                        </a> */}
                        <form onSubmit={(e) => logOut(e)}>
                            <button
                                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">
                                <FiLogOut/>

                                <span className="mx-4 font-medium">Log Out</span>
                            </button>
                        </form>
                    </nav>

                    <div className="flex items-center px-4 -mx-2">
                        <img
                            className="object-cover mx-2 rounded-full h-9 w-9"
                            src={user?.image}
                            alt="avatar"
                        />

                        <h4 className="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
                            {user?.name}
                        </h4>
                    </div>
                </div>
            </div>
        </main>
    );
}
