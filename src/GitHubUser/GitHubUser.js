import React, {useState, useEffect} from "react";

function GitHubUser({name}) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${name}`)
            .then(response => response.json())
            .then(setData)
            .catch(console.error);
    }, [data]);

    if (data) return (
        <>
            <p>GitHub ID {data.id ? data.id : data.message}</p>
        </>
    )
    return null;
}

export default GitHubUser;