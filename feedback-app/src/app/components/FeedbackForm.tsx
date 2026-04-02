"use client";

import { useState } from "react";
import { addFeedback, Feedback } from "../actions/feedback";
import "../style/FeedbackForm.css";

type Props = {
    onNewFeedback: (fb: Feedback) => void;
};

export default function FeedbackForm({ onNewFeedback }: Props) {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);

        try {
            const saved = await addFeedback(formData);
            onNewFeedback(saved);
        } catch (err) {
            console.error("Failed to submit feedback", err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form action={handleSubmit}>
            <input name="name" placeholder="Your Name" required />
            <textarea name="message" placeholder="Your Feedback" required />

            <select name="rating" required>
                <option value="">Select Rating</option>
                <option value="1">1 ⭐</option>
                <option value="2">2 ⭐</option>
                <option value="3">3 ⭐</option>
                <option value="4">4 ⭐</option>
                <option value="5">5 ⭐</option>
            </select>

            <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
            </button>
        </form>
    );
}