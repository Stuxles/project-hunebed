const userList = document.querySelector('#usertable');
var userRef = db.collection('Users');
var pathArray = window.location.pathname.split( '/' );
// create element & render user
function renderUser(doc) {

    let tr = document.createElement('tr');
    let FirstName = document.createElement('td');
    let LastName = document.createElement('td');
    let Email = document.createElement('td');
    let Roles = document.createElement('td');
    let Edit = document.createElement('td');
    let Button = document.createElement('a');
    let Icon = document.createElement('i');

    tr.setAttribute('data-id', doc.id);
    FirstName.textContent = doc.data().FirstName;
    LastName.textContent = doc.data().LastName;
    Email.textContent = doc.data().Email;
    
    
    //!!!weergeeft de rollen (want rol is een reference in de user collection) en wil geen undefined (niet bestaande/onleesbare) rollen in Users lezen!!!!!
    // niet volledig werkend
    doc.data().Roles.forEach(ref => {
        ref.get().then(role => {
                    
        //stringRol = role.data().Naam;
        Roles.textContent = role.data().Naam;
        })
        
    })
    

    Button.className = 'waves-effect waves-light hb-red-bg btn-floating';
    Icon.className = 'material-icons left'; 
    Icon.textContent = 'edit';
    Button.href = pathArray[3].replace("moderator", "").concat("editUser");
    //set attribute on Button variable with idd as name and doc.id as value
    Button.setAttribute('idd', doc.id); 
    //buttons sends id to editUser page to retrieve user
    Button.addEventListener('click', (e) => {
        var id = e.target.parentElement.getAttribute('idd');
        window.sessionStorage.setItem('idd', doc.id);
        
    })

    tr.appendChild(FirstName);
    tr.appendChild(LastName);
    tr.appendChild(Email);
    tr.appendChild(Roles);
    tr.appendChild(Edit);
    Edit.appendChild(Button);
    Button.appendChild(Icon);

    userList.appendChild(tr);

}

// getting data
userRef.get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderUser(doc);
         
    });
});



