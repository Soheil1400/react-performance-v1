import {Link} from "react-router-dom";

const Home = (): JSX.Element => {
    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <div style={{display: 'flex', flexDirection: 'column', width: 500, padding: 16}}>
                <Link to={'/color-challenge'}>
                    <div style={{border: '2px solid purple', borderRadius: 12, padding: 8, cursor: 'pointer'}}>
                        <h2>
                            🔴🟣🟢 Color Challenge
                        </h2>
                    </div>
                </Link>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: 500, padding: 16}}>
                <Link to={'/todo-list'}>
                    <div style={{border: '2px solid purple', borderRadius: 12, padding: 8, cursor: 'pointer'}}>
                        <h2>
                            📒  Todo List
                        </h2>
                    </div>
                </Link>
            </div>
            {/*<div style={{display: 'flex', flexDirection: 'column', width: 500, padding: 16}}>*/}
            {/*    <Link to={'/blog-post'}>*/}
            {/*        <div style={{border: '2px solid purple', borderRadius: 12, padding: 8, cursor: 'pointer'}}>*/}
            {/*            <h2>*/}
            {/*                🗒️✏️  Blog Post*/}
            {/*            </h2>*/}
            {/*        </div>*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </div>
    )
}

export default Home