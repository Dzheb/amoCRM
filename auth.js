var https = require('https');
/**
 * Тело запроса
 */
function login() {
  return new Promise(function(resolve, reject) {
    var body = {
      USER_LOGIN: 'test@test.ru',
      USER_HASH: 'cda34df432332ac00123e4da3be34fds342342fsd',
    };

    var cookieForAmoCrm = [];

    /**
     * Преобразуем объект в строку
     */

    body = JSON.stringify(body);

    var options = {
      host: "yourhostname.amocrm.ru",
      path: "/private/api/auth.php?type=json",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    var request = https.request(options, function(response) {
      /**
       * Срабатывает в момент ответа
       */
      response.on('data', function (chunk) {
        /**
         * Парсим ответ
         * @type {any}
         */
        var responseObj = JSON.parse(chunk);
        
        if (response.statusCode == 200) {
          /**
           * Сохраняем cookie
           */
          cookieForAmoCrm = response.headers['set-cookie'];
          return resolve(responseObj);
        } else {
          return reject(responseObj);
        }
      });
    })

    request.write(body);
    /**
     * заканчиваем формирование запроса и отсылаем запрос
     */
    request.end();

  })
}
// 
login().then(function() {
  console.log('success');
}, function(err) {
  console.log('error');
})
// 
// new CronJob('*/10 * * * *', function () {
//   login().then(function() {
//     console.log('reconnected to amoCrm');
//   }, function(err) {
//     console.log('cant reconnect to amoCrm')
//   })
// }, null, true, 'Europe/Moscow');