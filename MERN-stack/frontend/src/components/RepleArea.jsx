import RepleList from "./RepleList";
import RepleUpload from "./RepleUpload";

import { useSelector } from "react-redux";

function RepleArea({ postId }) {
    const user = useSelector((state) => state.user);

    return (
        <div>
            {user.accessToken && <RepleUpload postId={postId} />}
            <RepleList postId={postId} />
        </div>
    );
}

export default RepleArea;
