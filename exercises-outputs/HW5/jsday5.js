// Created a phoneBook array to store all contact info
var phoneBook = [];

// Function to validate contact number
function isContactNumberValid(userNumber) {
    var phoneRegex = /^(09|\+639)\d{9}$/; // PH phone number regex
    return phoneRegex.test(userNumber);
};

// Function to validate name
function isNameValid(userName) {
    var nameRegex = /^[a-zA-Z ]+$/; // letters only
    return nameRegex.test(userName);
};


// Function to add new contact
function addContact(userName, userNumber) {
    var contactObject = {
        contactName: userName,
        contactNumber: userNumber
    };

    // Add the value to the array and display a message
    phoneBook.push(contactObject);
    alert('Contact added, phonebook updated');
};


// Function to submit a new contact info
function submitContact() {
    var nameInput = document.getElementById('userName').value;
    var numberInput = document.getElementById('userNumber').value;

    // Check if both input fields are empty
    if (nameInput == '' || numberInput.length == '') {
        alert('Both fields are required. DO NOT ADD NEW CONTACT');

    } else if (!isNameValid(nameInput)) {
        alert('Please enter a valid name.');

    } else if (!isContactNumberValid(numberInput)) {
        alert('Please enter a 11-digit number starting with 09 or +639.');

    } else {
        // Call the addContact function
        addContact(nameInput, numberInput);

        // Clear the input fields
        document.getElementById('userName').value = '';
        document.getElementById('userNumber').value = '';
    };
};


// Function to view saved contact info(s)
function viewContacts() {
    // console.log(phoneBook);

    // Check if there are saved contact info
    if (phoneBook.length == 0) {
        // If empty display alert message
        alert('There are no saved contacts');

    } else {
        // Else create display contact info from phoneBook array
        var contactTable = document.getElementById("contactTable");
        var contactList = document.getElementById('contactList');
        contactList.innerHTML = '';
        
        /* Using a for loop to create new rows and cells to display
           contactName and contactNumber
        */
        for (var i = 0; i < phoneBook.length; i++) {
            var contact = phoneBook[i];
            var row = contactTable.insertRow(1);
            var nameCell = row.insertCell(0);
            var numberCell = row.insertCell(1);
        
            nameCell.textContent = contact.contactName;
            numberCell.textContent = contact.contactNumber;
        };
    }; 
};