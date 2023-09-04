// Refactor Feedback Form UI for Better UX
function FeedbackForm() {
    return (
        <div className="feedback-form">
            <h2>We Value Your Feedback</h2>
            <form>
                <textarea placeholder="Your feedback"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

module.exports = { FeedbackForm };