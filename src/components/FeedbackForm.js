// UI Component for User Feedback Form
function FeedbackForm() {
    return (
        <div className="feedback-form">
            <h2>Submit Your Feedback</h2>
            <form>
                <textarea placeholder="Your feedback"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

module.exports = { FeedbackForm };