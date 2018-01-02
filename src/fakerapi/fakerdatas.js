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
  const data = {todoList: [
    {
      'id': 0,
      'title': '閱讀',
      'completed': false
    },
    {
      'id': 1,
      'title': '慢跑',
      'completed': false
    },
    {
      'id': 2,
      'title': '看電影',
      'completed': false
    }
  ]}
  return data
}

module.exports = fakerdatas
