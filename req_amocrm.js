var https = require('https');
    alert("мы здесь");
    const limit = 25;
    let page = 1;
    let getContactsListQueryUrl = 'https://bmd2006.amocrm.ru/api/v4/contacts';
    let postTaskQueryUrl = 'https://bmd2006.amocrm.ru/api/v4/tasks';
    let authQueryUrl = 'https://bmd2006.amocrm.ru/oauth2/access_token';
    let authID = 'bmd2006';
    let authSecret = '2006';
    let authCode = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ0YzJhM2ExY2M4OTk0MjQ0YWJiM2RlM2NlYTMwNDI3MmI3OGI5YjYwMGY0NTZkOGM1NWMxODdjYWJhZmIwYjA2MmIzNGEwYWU1NWQ2YTlhIn0.eyJhdWQiOiIyMTZjOGU4Yy1jZjU2LTQ2YzgtOTdkOS03YzUwZDIxMGRiYTQiLCJqdGkiOiJkNGMyYTNhMWNjODk5NDI0NGFiYjNkZTNjZWEzMDQyNzJiNzhiOWI2MDBmNDU2ZDhjNTVjMTg3Y2FiYWZiMGIwNjJiMzRhMGFlNTVkNmE5YSIsImlhdCI6MTY1MTA4MzM2MiwibmJmIjoxNjUxMDgzMzYyLCJleHAiOjE2NTExNjk3NjIsInN1YiI6IjgxMjQ2NDYiLCJhY2NvdW50X2lkIjozMDEyNzM2MCwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImNybSIsIm5vdGlmaWNhdGlvbnMiXX0.JZ602F31mBUCuXdlBL8nch0SIzWM42DVDVmTtPRpjlpoTGIIiZ5qhL9Uoo3BMnFPtDdf_svJ5V3DqO54LO786XO2oHBXMcOsp_LK7NgrLTVyWgdhAxoJxysmcE1WhH_UcRI3an_niEIkA1WOrtK8C3bTy23eHTjeHm21-2zZkoqRG9jMoVfJX2bTi4kfA5EKGlvr1UnYja-hPESPJKEQbq7ZMSdvMBm-rRcNnN9pL__eZv1xFdelCVrye7gzwR7LSJtj_KXQi3kO4yZwgwL3YJs7HHPzZ3P80L6r4R0HHiFCUiIAcbvaEf9IFRseZJBd8lnDasZLgsNcnUk1te0lzQ';

    
    function getContacts() {
        $.ajax({
            url: getContactsListQueryUrl,
            method: 'GET',
            data: {
                limit: limit,
                with: 'leads',
                page: page
            }
        }).done(function(data) {
            if (!!data) {
                console.log(data)
    
            } else {
                console.log('Контактов нет');
                return false;
            }
        }).fail(function(data) {
            console.log('Что-то пошло не так c получением контактов');
            console.log(data);
            return false;
        })
    
        page++;
    }
    getContacts();

//     [
//       {
//           "task_type_id": 1,
//           "text": "Контакт без сделок",
//           "complete_till": 1588885140,
//           "entity_id": 9785993,
//           "entity_type": "leads",
//           "request_id": "example"
//       }
//   ]