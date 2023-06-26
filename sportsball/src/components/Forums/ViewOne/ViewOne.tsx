import { useParams } from "react-router-dom";

function ViewOne() {
    const { id } = useParams()
    return (<div>
        Post {id}
    </div>
    )
}

export default ViewOne;