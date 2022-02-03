const Feedback = ({ onLeaveFeedback, options }) => {
    return (
        <div>
            {/* <p>Please leave feedback</p> */}
            {Object.keys(options).map((el) => <input key={el} type="button" value={el} onClick={onLeaveFeedback}></input>
            )}

            {/* <input type="button" value="good" onClick={onLeaveFeedback}></input>
    <input type="button" value="neutral" onClick={onLeaveFeedback}></input>
    <input type="button" value="bad" onClick={onLeaveFeedback}></input> */}
        </div>

    );
};

export default Feedback;