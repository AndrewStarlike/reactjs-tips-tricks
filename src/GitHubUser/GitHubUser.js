import React from "react";

function GitHubUser({data}) {
    if (data) return (
        <>
            <p>GitHub ID {data.id}</p>
        </>
    )
    return null;
}

export default GitHubUser;