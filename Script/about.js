function saveFeedback(e){
    e.preventDefault();
    var feedback = {
        'name':'',
        'phoneNum':'',
        'email':'',
        'content':''
    };

    feedback.name = document.getElementById('name').value;
    feedback.email = document.getElementById('email').value;
    feedback.phoneNum = document.getElementById('phoneNumber').value;
    feedback.content = document.getElementById('feedback').value;

    localStorage.setItem('feedback',JSON.stringify(feedback));

    alert('Feedback Received');
}