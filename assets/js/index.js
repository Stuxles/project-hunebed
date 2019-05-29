const setupUI = (user) => {
    if (user) {
      //account info
      if(user.admin){
        console.log('user is admin')
      }
        console.log('user logged in: ', user);
    } else {
        console.log('user logged out');
    }
  }