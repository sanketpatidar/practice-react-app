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

}

export default FxComponent;