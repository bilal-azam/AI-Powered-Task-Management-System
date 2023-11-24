// UI Component for User Feedback System
function FeedbackSystemUI({ userId, feedback, onSubmitFeedback }) {
    return (
        <div className="feedback-system-ui">
            <h2>User Feedback</h2>
            <ul>
                {feedback.map((f, index) => (
                    <li key={index}>
                        <p>{f.text}</p>
                    </li>
                ))}
            </ul>
            <form onSubmit={(e) => {
                e.preventDefault();
                const feedback = e.target.feedback.value;
                onSubmitFeedback(userId, feedback);
            }}>
                <textarea name="feedback" required></textarea>
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
}

module.exports = { FeedbackSystemUI };