import React, {useState, useEffect} from "react";
import router from "next/router";
import Link from "next/link";
import Axios from 'axios';

const Contents = {
    search: "Search",
    dest: "Destination",
    arraival: "Arrival",
    depature: "Depature",
    date: "Date",
    number: "Number of person",

};

const DashboardSearchBoxElements = () => {

    const [data, setData] = React.useState({
        city_name: "",
        checkin: "",
        checkout: "",
        person: "",
    });
    const handleChange = (e) => {
        const newdata = {...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);

    };
    localStorage.setItem("hotel_search_data", JSON.stringify(data));
    console.log(data, "data");
    return (
        <main className="flex sm:flex-col justify-center mx-auto items-center py-2 pb-10 bg-gray-100 ">
            <div className="">
                <form action=""
                      className="flex p-5 sm:flex-col sm:w-screen xsm:w-screen xsm:flex-col fold:flex-col fold:w-screen md:flex-col md:w-screen lg:flex-row lg:w-full lg:justify-center"
                      onSubmit={(e) => searchHotels(e)}>
                    <div className="mx-1">

                        <p className="font-bold text-primary p-2">City</p>
                        <input
                            onChange={(e) => handleChange(e)}
                            className="p-5 rounded shadow-lg  bg-gray-50 md:w-full sm:w-full xsm:w-full fold:w-full"
                            type="city_name"
                            name="city_name"
                            id="city_name"
                            placeholder="Biratnagar"
                        />
                    </div>
                    <div className="mx-1">
                        <p className="font-bold text-primary p-2">{Contents.arraival}</p>
                        <input
                            onChange={(e) => handleChange(e)}
                            className="p-5  rounded shadow-lg bg-gray-50 md:w-full sm:w-full xsm:w-full fold:w-full"
                            type="date"
                            name="checkin"
                            id="checkin"
                        />
                    </div>
                    <div className="mx-1">
                        <p className="font-bold text-primary p-2">{Contents.depature}</p>
                        <input
                            onChange={(e) => handleChange(e)}
                            className="p-5 rounded shadow-lg bg-gray-50 md:w-full sm:w-full xsm:w-full fold:w-full"
                            type="date"
                            name="checkout"
                            id="checkout"
                        />
                    </div>
                    <div className="mx-1">
                        <p className="font-bold text-primary p-2">{Contents.number}</p>
                        <input
                            onChange={(e) => handleChange(e)}
                            className="p-5  rounded shadow-lg bg-gray-50 md:w-full sm:w-full xsm:w-full fold:w-full"
                            type="number"
                            name="person"
                            id="person"
                            placeholder="1"
                        />
                    </div>
                    <div>
                        <p className="p-2 select-none" style={{
                            color: "#f5f5f5",
                        }}>search</p>
                        <Link href="/hotels">
                        <button
                            // onSubmit={(e) => searchHotels(e)}
                            type="submit"
                            className="mx-1  rounded shadow-lg py-5 px-16 bg-pmry text-white font-bold md:w-full sm:w-full xsm:w-full fold:w-full hover:bg-blue-700 hover:transition-all hover:duration-900"
                        >
                            Search
                        </button>
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    );
};

const DashboardSearchBox = () => {
    return (
        <div>
            <DashboardSearchBoxElements/>
        </div>
    );
};

export default DashboardSearchBox;
