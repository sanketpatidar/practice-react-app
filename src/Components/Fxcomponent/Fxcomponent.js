import React from 'react';


function FxComponent() {

    const [githubData, setGithubData] = React.useState({});
    const [user, setUser] = React.useState("")

    const onChangeHandler = e => {
        setUser(e.target.value);
    };

    const submithandler = async (e) => {
        e.preventDefault()
        const profile = await fetch(`https://api.github.com/users/${user}`)
        const profileJson = await profile.json()

        if (profileJson) {
            setGithubData(profileJson);
        }
    }

    return (
        <div>
            <h1>Github users Information</h1>
            <input type='text' name='user' value={user} onChange={onChangeHandler}></input>
            <button type='onSubmit' onClick={submithandler}>Submit</button>

            <ul>
                <img src={githubData.avatar_url} alt={githubData.avatar_url} width='200' height='200' />
                <li>Name : {githubData.name}</li>
                <li>Location: {githubData.location}</li>
                <li>Repositories: <a href={githubData.repos_url}>{githubData.repos_url}</a></li>
                <li>Company: {githubData.company}</li>
                <li>Bio: {githubData.bio}</li>
            </ul>
        </div>
    )





    // const fetchusers = async (user) => {
    //     const api_call = await fetch(`https://api.github.com/users/${user}`);
    // }


    // const [githubData, setGithubData] = React.useState("");
    // console.log(githubData)

    // React.useEffect(() => {
    //     if (!githubData) {
    //         return
    //     }
    //     console.log(githubData)
    // }, [githubData]);

    // fetch("https://api.github.com/users/" + githubData)
    //     .then((response) => {
    //         return response.json()
    //     })
    //     .then((data) => {
    //         console.log(data);
    //     }, [githubData]);


    // return (
    //     <div>
    //         <form onSubmit={(e) => {
    //             e.preventDefault()
    //             setGithubData(e.target.elements.user.value)
    //         }}>
    //             <h1>Function Component</h1>
    //             <input type='text' name='user'></input>
    //             <button type='onSubmit'>Submit</button>
    //         </form>

    //     </div>
    // );

}

export default FxComponent;