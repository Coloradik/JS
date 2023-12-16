let user = {};
user.name = "Ivan";
user.age = "15";
user.city = "Kiev";

delete user.city;
console.log(user);
user['like flowers'] = true

for (key in user) {
    console.log(key);
    console.log(user[key]);
}
