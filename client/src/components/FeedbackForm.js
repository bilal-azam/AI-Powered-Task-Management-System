import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/feedback', { feedback });
        setFeedback('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows="4"
                cols="50"
                placeholder="Your feedback..."
            />
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;