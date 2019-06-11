//listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        //get data
        user.getIdTokenResult().then(idTokenResult => {
            user.admin = idTokenResult.claims.admin;
            setupUI(user);
            showUserData(user);
        })
    } else {
        setupUI();
    }
});


