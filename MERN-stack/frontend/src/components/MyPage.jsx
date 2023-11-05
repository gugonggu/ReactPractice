import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

function MyPage() {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.isLoading && !user.accessToken) {
            navigate("/login");
        }
    }, [user]);

    return (
        <div>
            <form></form>
        </div>
    );
}

export default MyPage;
