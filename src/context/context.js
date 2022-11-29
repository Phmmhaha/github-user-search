import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';
// const userUrl = 'https://api.github.com/users/wesbos'
const userUrl = 'https://api.github.com/users/';

// React.createContext() 
const GithubContext = React.createContext();

const GithubProvider = ({children}) => {
    const [error, setError] = useState({ show: false, msg: '' })
    const [loading, setLoading] = useState(false)
    const [githubUser, setGithubUser] = useState(mockUser)
    const [followers, setFollowers] = useState(mockFollowers)
    const [repos, setRepos] = useState(mockRepos)
    const [requests, setRequests] = useState(0)

    // check rate
    const checkRequests = () => {
        axios.get(`${rootUrl}/rate_limit`)
        .then(({ data }) => {  // destructure data in data!
            let { rate: { remaining }} = data;
            setRequests(remaining)
            if (remaining === 0) {
                toggleError(true, 'sorry, you have exceeded your hourly rate limit!')
            }
        })
        .catch(error => console.log(error))   
    }

    const searchUser = async (user) => {
        // toggleError
        setLoading(true);
        const res = await axios.get(`${userUrl}${user}`)
        // .then( ({ data }) => console.log(data) )
        .catch(error => console.log(error))
        // console.log(res)

        // sychronous request axios
        // if (res) {
        //     setLoading(false)
        //     setGithubUser(res.data)
        //     // repos
        //     // https://api.github.com/users/john-smilga/repos?per_page=100
        //     // followers
        //     // https://api.github.com/users/john-smilga/followers
        //     const { login, followers_url} = res.data;
        //     // console.log(login, followers_url)
        //     // repos
        //     axios.get(`${rootUrl}/users/${login}/repos?per_page=100`)
        //     .then(res => setRepos(res.data))
        //     // followers
        //     axios.get(`${followers_url}?per_page=100`)
        //     .then(res => setFollowers(res.data))
        // } 
        
        // asychronous promise requests
        if (res) {
            setLoading(false)
            setGithubUser(res.data)
            const { login, followers_url} = res.data;
            await Promise.allSettled([
                axios.get(`${rootUrl}/users/${login}/repos?per_page=100`),
                axios.get(`${followers_url}?per_page=100`)
            ])
            .then( results => {
                const [repos, followers] = results;
                const status = 'fulfilled';
                if (repos.status === status) {
                    setRepos(repos.value.data)
                }
                if (followers.status === status) {
                    setFollowers(followers.value.data)
                }
            })
            .catch(error => console.log(error))
        }
        else {
            toggleError(true, 'user do not exit...')
        }

    }

    useEffect(() => {
        console.log('app loaded!')
        checkRequests()
        // searchUser()
    }, [])

    const toggleError = (show = false, msg = '') => {
        setError({ show, msg })
    }

    return <GithubContext.Provider value={{
        error,
        loading, 
        setLoading,
        githubUser,
        followers,
        repos, 
        requests,
        searchUser
    }}> {children} </GithubContext.Provider>
}

export { GithubProvider, GithubContext };
