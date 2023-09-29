function saveUserData(userData) {
  return fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => {
      if (response.status === 201) {
        return Promise.resolve();
      } else {
        throw new Error('Возникла ошибка при сохранении данных пользователя');
      }
    });
}
const user = {
  name: 'John Doe',
  job: 'unknown'
};

saveUserData(user)
  .then(() => {
    console.log('Данные о пользователе успешно сохранены');
  })
  .catch(error => {
    console.error(error.message);
  });
