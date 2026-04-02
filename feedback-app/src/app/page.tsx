"use client";

import { useState, useEffect } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import { getFeedbacks, Feedback } from "./actions/feedback";

export default function App() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getFeedbacks();
      setFeedbacks(data);
    }
    load();
  }, []);

  function handleNewFeedback(fb: Feedback) {
    setFeedbacks((prev) => [ fb,...prev]);
  }

  return (
    <div className="container">
      <h1>Feedback Form</h1>

      <FeedbackForm onNewFeedback={handleNewFeedback} />

      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}