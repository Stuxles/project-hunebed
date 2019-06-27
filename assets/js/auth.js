//listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        //get data
        user.getIdTokenResult().then(idTokenResult => {
            user.admin = idTokenResult.claims.admin;
            setupUI(user);
            showUserDataEditUser(user);
            showUserDataUserPage(user);
        })
    } else {
        setupUI();
    }
});


