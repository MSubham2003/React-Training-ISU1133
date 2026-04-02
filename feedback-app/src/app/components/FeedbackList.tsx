import { Feedback } from "../actions/feedback";
import "../style/FeedbackList.css";

type Props = {
    feedbacks: Feedback[];
};

export default function FeedbackList({ feedbacks }: Props) {
    return (
        <div className="feedback-container">
            <h2 className="title">Feedback List</h2>

            {feedbacks.length === 0 && (
                <p className="empty">No feedback yet</p>
            )}

            <div className="feedback-grid">
                {feedbacks.map((fb) => (
                    <div key={fb.id} className="card">
                        <div className="card-header">
                            <h4>{fb.name}</h4>
                            <span className="rating">{fb.rating} ⭐</span>
                        </div>

                        <p className="message">{fb.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}