// Функция getUserData
function getUserData(userID) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Пользователь не найден');
      }
      return response.json();
    });
}

// Пример использования функции
getUserData(1)
  .then(userData => {
    console.log(userData);
  })
  .catch(error => {
    console.log(error.message);
  });


// Функция saveUserData
function saveUserData(userData) {
  return fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
}

// Пример использования функции
const user = {
  name: 'John Smith',
  age: 30,
  email: 'john@example.com'
};

saveUserData(user)
  .then(() => {
    console.log('Данные пользователя успешно сохранены');
  })
  .catch(error => {
    console.log(error.message);
  });


// Функция changeStyleDelayed
function changeStyleDelayed(elementId, delay) {
  setTimeout(() => {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.color = 'red';
    }
  }, delay);
}

// Пример использования функции
changeStyleDelayed('myElement', 2000);
