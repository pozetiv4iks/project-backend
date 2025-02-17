import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    number: {type: Number, required: true},
    gender: {type: String, required: true},
    age: {type: Number, required: true},
    status: {type: String, required: true, default: 'user'},
})

export default mongoose.model('User', User)

/* 
4. Проверка уникальности перед сохранением

Если вы хотите вручную проверить уникальность перед сохранением, вы можете выполнить запрос к базе данных.

Пример:

javascript
Copy
const email = 'john.doe@example.com';

User.findOne({ email })
  .then(existingUser => {
    if (existingUser) {
      console.log('User with this email already exists');
    } else {
      const newUser = new User({
        name: 'John Doe',
        email,
        password: 'securepassword'
      });

      return newUser.save();
    }
  })
  .then(() => console.log('User saved successfully'))
  .catch(err => console.error('Error saving user:', err));

*/