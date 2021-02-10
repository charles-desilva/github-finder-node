const searchUser = document.getElementById('searchUser');

const github = new GitHub();
const ui = new UI();

window.onload = ui.clearProfile;

searchUser.addEventListener('keyup', e=>{
    const userText = e.target.value;

    if(userText !== ''){
        // console.log(userText);
        github.getUser(userText)
            .then((data)=>{
                if (data.profile.message === 'Not Found'){
                    // display alert via UI class
                    ui.showAlert("No user found with typed username", "alert alert-danger")
                }else{
                    // display User details via UI Class
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
                
            });
    }else{
        ui.clearProfile();
        //clear User display rea via UI class
    }
})