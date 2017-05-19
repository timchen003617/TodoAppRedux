/**
 * for json-server
 * step1: npm install -g json-server
 * step2: cd src
 * step3: json-server fakerapi/fakerdatas.js -p 3004
 * readme: https://github.com/typicode/json-server#add-custom-routes
 * author Tim Chen
 */
const faker = require('faker')

faker.locale = 'zh_TW'
const fakerdatas = () => {
  const data = {todoList: []}
  data.todoList.push(
    {
      'id': 0,
      'title': faker.lorem.sentence(),
      'completed': false
    }
  )

  data.todoList.push(
    {
      'id': 1,
      'title': faker.lorem.sentence(),
      'completed': true
    }
  )
  return data
}

module.exports = fakerdatas
