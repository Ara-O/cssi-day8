const passcode = document.querySelector("#passcode");
const findMessage = document.querySelector("#viewMsg");
const message = document.querySelector("#message");

function getMessages() {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
            Object.values(data).forEach(val => {
                console.log(val.secret)
                if (Number(passcode.value) === val.secret) {
                    console.log(val)
                    message.innerHTML = "<h3>" + val.message + '</h3>';
                } else {
                   console.log('No match')
                };
            });
    })
}




//  const passcodeInput = document.querySelector('#passcodeInput');
//  passcodeInput.style.display = 'none';
