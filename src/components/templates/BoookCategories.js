"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import Layout from "@/app/layout/Layout";
import Sidebar from "../module/Sidebar";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BookCategories() {
  const [info, setInfo] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const token = Cookies.get("authToken");

      if (!token) {
        toast.error("You're not logged in");
        return;
      }

      const res = await fetch(
        "https://stg-core.bpapp.net/api/BookCategory/GetAllBookCategories",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      setInfo(data.data); // ✅ Fix: Set info directly to data.data
      setProducts(data.data);
      console.log(data.data); // ✅ Fix: Log the new data instead of `info`
    } catch (error) {
      toast.error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <Sidebar />
      <div className="max-w-[800] mx-auto">
        <div className="relative flex flex-col w-full h-full text-slate-700 bg-white shadow-md rounded-xl">
          <div className="relative mx-4 mt-4 text-slate-700  rounded-none bg-clip-border">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-800">
                Book Categories
              </h3>
            </div>
          </div>

          <div className="p-0">
            {info.length > 0 ? ( // ✅ Fix: Check if `info` has data
              <table className="w-full mt-4 text-left table-auto min-w-max">
                <thead>
                  <tr>
                    <th className="p-4 border-y border-slate-200 ">
                      <div className="inline border-solid p-2 rounded">
                        <FontAwesomeIcon
                          icon={faMagnifyingGlass}
                          size="lg"
                          style={{ color: "blue" }}
                        />
                      <input placeholder="search categories" className="pl-2"/>
                      </div>

                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {info.map((item, index) => (
                    <tr key={index} className="border-b border-slate-200">
                      <td className="p-4 flex justify-between">
                        {item.title}
                        <div>
                          <button className="px-2">edit</button>
                          <button className="px-2">delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex justify-center items-center h-64">
                <PropagateLoader size={40} color="#023047" />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BookCategories;
