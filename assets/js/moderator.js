const userList = document.querySelector('#usertable');

// create element & render user
function renderUser(doc) {

    let tr = document.createElement('tr');
    let FirstName = document.createElement('td');
    let LastName = document.createElement('td');
    let email = document.createElement('td');
    let Roles = document.createElement('td');
    let Edit = document.createElement('td');
    let Button = document.createElement('a');
    let Icon = document.createElement('i');

    tr.setAttribute('data-id', doc.id);
    FirstName.textContent = doc.data().FirstName;
    LastName.textContent = doc.data().LastName;
    email.textContent = doc.data().email;
    Roles.textContent = doc.data().Roles;
    Button.className = 'waves-effect waves-light hb-red-bg btn-floating';
    Icon.className = 'material-icons left'; 
    Icon.textContent = 'edit';

    tr.appendChild(FirstName);
    tr.appendChild(LastName);
    tr.appendChild(email);
    tr.appendChild(Roles);
    tr.appendChild(Edit);
    Edit.appendChild(Button);
    Button.appendChild(Icon);

    userList.appendChild(tr);

    // deleting data
    // Edit.addEventListener('click', (e) => {
    //     e.stopPropagation();
    //     let id = e.target.parentElement.getAttribute('data-id');
    //     db.collection('Users').doc(id).delete();
    // });
}

// getting data
db.collection('Users').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderUser(doc);
        //console.log(doc.data())
    });
});

// real-time listener
// db.collection('Users').orderBy('Firstname').onSnapshot(snapshot => {
//     let changes = snapshot.docChanges();
//     changes.forEach(change => {
//         console.log(change.doc.data());
//         if(change.type == 'added'){
//             renderUser(change.doc);
//         } else if (change.type == 'removed'){
//             let tr = userList.querySelector('[data-id=' + change.doc.id + ']');
//             userList.removeChild(tr);
//         }
//     });
// });