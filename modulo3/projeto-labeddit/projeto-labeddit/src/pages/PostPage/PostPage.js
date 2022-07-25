import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

export default function PostPage() {
    useProtectedPage()
    return (
        <div>
            <h3>
                Post Page
            </h3>
        </div>
    )
}