"use client";

import React, { useEffect, useState } from "react";
import { Firebasedb } from "@/lib/Firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { Table } from "react-bootstrap";

interface NewsI {
  title: string;
  description: string;
  created_at: string;
}
const NewsUpdate = () => {
  const [News, setNews] = useState<NewsI[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const NewData = await getnewsData();
      setNews(NewData);
    };

    fetchData();
  }, []);
  console.log(News);

  return (
    <div>
      <Table striped bordered responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>created at</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(News) &&
            News.length > 0 &&
            News.map((news, index) => (
              <tr key={`in-${index}`}>
                <td>{index + 1}</td>
                <td>{news.title}</td>
                <td>{news.description}</td>
                <td>{news.created_at}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

const getnewsData = async () => {
  const NewsCol = collection(Firebasedb, "news");
  const NewsSnapShot = await getDocs(NewsCol);
  const newsList = NewsSnapShot.docs.map((doc) => {
    const data = doc.data();
    const createdAt =
      data.created_at instanceof Timestamp
        ? data.created_at.toDate().toLocaleString()
        : data.created_at;
    return {
      ...data,
      created_at: createdAt,
    } as NewsI;
  });
  return newsList;
};
export default NewsUpdate;
