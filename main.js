const socialMediaLinks = {
    github: "DiegoMMoraes",
    youtube: "UCPa2EQm0W7eZz16ATZIGO8g",
    instagram: "_diegommoraes",
    facebook: "diego.moraees.1",
    twitter: "_diegommoraes"
    }

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute("class")

        if (social == "youtube") 
            li.children[0].href = `https://www.youtube.com/channel/${socialMediaLinks.youtube}`
        else
            li.children[0].href = `https://www.${social}.com/${socialMediaLinks[social]}`
        
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfo() {
    const url = `https://api.github.com/users/${socialMediaLinks.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        githubLink.href = data.html_url
        githubLink.textContent = data.login
        githubBio.textContent = data.bio
        profileImg.src = data.avatar_url
    })
}

getGitHubProfileInfo()