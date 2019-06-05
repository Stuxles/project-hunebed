const setupUI = (user) => {
    if (user) {
      //account info
      if(user.admin){
        console.log('user is admin')
      }
        const loggedIn = true;
    } else {
      const loggedIn = false;
    }
  }