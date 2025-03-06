export default function Start({ setStartGame }) {
    return (
        <div className="start">
            <h1>Let's Go</h1>
            <button className="startButton" onClick={() => setStartGame(true)}>
                Start
            </button>
        </div>
    );
}
