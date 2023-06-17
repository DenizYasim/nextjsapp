"use client";

import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";

// LzXTi0uoFhwPNnfT
//FirstDBlearning

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       throw new Error("Failed to fetch data");
  //       setErr(true);
  //     }

  //     const data = await res.json();

  //     setIsLoading(false);
  //     setData(data);
  //   };
  //   getData();
  // }, []);

  const session = useSession();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/posts`,
    fetcher
  );

  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
