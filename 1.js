function getUserData(userID) {
  return fetch(`https://reqres.in/api/users/${userID}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Пользователь с указанным ID не найден');
      }
    })
    .then(data => data);
}
getUserData(1)
  .then(user => {
    console.log(user);
    // Выводит объект с данными о пользователе
  })
  .catch(error => {
    console.error(error.message);
    // Выводит сообщение об ошибке, если пользователь с указанным ID не найден
  });
