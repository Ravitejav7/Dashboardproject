import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import NewsFilter from "../components/NewsFilter";
import NewsChart from "../components/NewsChart";
import PayoutTable from "../components/PayoutTable";
import ExportButtons from "../components/ExportButtons";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

const Dashboard = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [payouts, setPayouts] = useState(getLocalStorage("payouts") || {});

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get("/api/news");
        setNews(response.data.articles);
        setFilteredNews(response.data.articles);
      } catch {
        alert("Failed to load news data.");
      }
    }
    fetchNews();
  }, []);

  useEffect(() => {
    setLocalStorage("payouts", payouts);
  }, [payouts]);

  return (
    <Layout>
      <h1>Dashboard</h1>
      <NewsFilter news={news} setFilteredNews={setFilteredNews} />
      <NewsChart news={filteredNews} />
      <PayoutTable news={filteredNews} payouts={payouts} setPayouts={setPayouts} />
      <ExportButtons news={filteredNews} payouts={payouts} />
    </Layout>
  );
};

export default Dashboard;
