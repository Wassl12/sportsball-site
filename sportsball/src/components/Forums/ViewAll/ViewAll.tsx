import { Link } from "react-router-dom";
import { angryBuckeye, angryRollTide, angryWolverine, relievedWolverine } from './constants'

function ViewAll() {
    const mockPosts = [
        {
            author: 'BuckeyeFan1975', message: angryBuckeye, timestamp: Date.UTC(2020, 1), id: 1
        },
        {
            author: 'RollTide1957', message: angryRollTide, timestamp: Date.UTC(2020, 2), id: 2
        },
        { author: 'Joe', message: angryWolverine, timestamp: Date.UTC(2020, 3), id: 3 },
        { author: 'Joe', message: relievedWolverine, timestamp: Date.UTC(2020, 4), id: 4 },
        { author: 'Liam', message: 'Sports', timestamp: Date.UTC(2020, 5), id: 5 },
    ];

    return (
        <div className="card-body">
            {mockPosts.map((post) => {
                return <div className="card" style={{ width: '100%' }} key={post.id}>
                    <div className="card-body">
                        <h5 className="card-title">{post.author}</h5>
                        <p className="card-text">{post.message}</p>
                        <Link to={`view/${post.id.toString()}`} className="btn btn-dark" style={{ width: "5em" }}>View</Link>
                    </div>
                </div>;

            })}
        </div>
    )
}

export default ViewAll;