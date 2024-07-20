function displayData() {
    const dataContainer = document.getElementById('data-container');
    fetch('dummy_data.txt')
        .then(response => response.text())
        .then(data => {
            dataContainer.textContent = data;
        })
        .catch(error => {
            dataContainer.textContent = 'Error loading data';
            console.error('Error:', error);
        });
}

// Including dummy data directly in the JS file
const creditCardNumbers = [
    '4111 1111 1111 1111',
    '5500 0000 0000 0004',
    '3400 0000 0000 009'
];

const ssns = [
    '123-45-6789',
    '987-65-4321',
    '111-22-3333'
];

const emails = [
    'example1@example.com',
    'example2@example.com',
    'example3@example.com'
];

console.log('Credit Card Numbers:', creditCardNumbers);
console.log('Social Security Numbers:', ssns);
console.log('Emails:', emails);
