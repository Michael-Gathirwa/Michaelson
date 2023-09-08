gapi.load('auth2', function() {
    gapi.auth2.init({
        client_id: 'YOUR_CLIENT_ID',
    });
    
    var signInButton = document.getElementById('google-signin-button');
    gapi.auth2.getAuthInstance().attachClickHandler(signInButton, {},
        function(googleUser) {
            // Handle sign-in success here
            console.log('Signed in as: ' + googleUser.getBasicProfile().getName());
        },
        function(error) {
            console.error('Error signing in: ' + error);
        }
    );
});
