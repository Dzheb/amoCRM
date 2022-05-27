//
// функция запроса контактов
function getContacts() {
  $.ajax({
    url: getContactsListQueryUrl,
    method: 'GET',
    Authorization: authCode,
    data: {
      limit: limit,
      with: 'leads',
      page: page,
    },
  })
    .done(function (data) {
      if (!!data) {
        console.log(data);
        return data;
      } else {
        console.log('Контактов нет');
        return false;
      }
    })
    .fail(function (data) {
      console.log('Что-то пошло не так c получением контактов');
      console.log(data);
      return false;
    });

  page++;
}
// getContacts();
// ответ на запрос контактов выглядит примерно так
//
// контакты из ответа на запрос контактов
//
var data_con = {
  _page: 1,
  _links: {
    self: {
      href: 'https://bmd2006.amocrm.ru/api/v4/contacts?page=1&limit=50',
    },
    next: {
      href: 'https://bmd2006.amocrm.ru/api/v4/contacts?page=2&limit=50',
    },
  },
  _embedded: {
    contacts: [
      {
        id: 45137739,
        name: 'Иван Иванов',
        first_name: 'Иван',
        last_name: 'Иванов',
        responsible_user_id: 8124646,
        group_id: 0,
        created_by: 8124646,
        updated_by: 8124646,
        created_at: 1650554744,
        updated_at: 1650554744,
        closest_task_at: null,
        is_deleted: false,
        is_unsorted: false,
        custom_fields_values: [
          {
            field_id: 957683,
            field_name: 'Телефон',
            field_code: 'PHONE',
            field_type: 'multitext',
            values: [
              {
                value: '89219567845',
                enum_id: 1230737,
                enum_code: 'WORK',
              },
            ],
          },
          {
            field_id: 957685,
            field_name: 'Email',
            field_code: 'EMAIL',
            field_type: 'multitext',
            values: [
              {
                value: 'GMT2009@yandex.ru',
                enum_id: 1230749,
                enum_code: 'WORK',
              },
            ],
          },
        ],
        account_id: 30127360,
        _links: {
          self: {
            href: 'https://bmd2006.amocrm.ru/api/v4/contacts/45137739',
          },
        },
        _embedded: {
          tags: [],
          companies: [
            {
              id: 45137737,
              _links: {
                self: {
                  href: 'https://bmd2006.amocrm.ru/api/v4/companies/45137737',
                },
              },
            },
          ],
          leads: [],
        },
      },
      {
        id: 45137825,
        name: 'Сидор Сидоров',
        first_name: 'Сидор',
        last_name: 'Сидоров',
        responsible_user_id: 8124646,
        group_id: 0,
        created_by: 8124646,
        updated_by: 8124646,
        created_at: 1650554880,
        updated_at: 1650554880,
        closest_task_at: null,
        is_deleted: false,
        is_unsorted: false,
        custom_fields_values: [
          {
            field_id: 957683,
            field_name: 'Телефон',
            field_code: 'PHONE',
            field_type: 'multitext',
            values: [
              {
                value: '89112345678',
                enum_id: 1230737,
                enum_code: 'WORK',
              },
            ],
          },
          {
            field_id: 957685,
            field_name: 'Email',
            field_code: 'EMAIL',
            field_type: 'multitext',
            values: [
              {
                value: 'NMR2004@yandex.ru',
                enum_id: 1230749,
                enum_code: 'WORK',
              },
            ],
          },
        ],
        account_id: 30127360,
        _links: {
          self: {
            href: 'https://bmd2006.amocrm.ru/api/v4/contacts/45137825',
          },
        },
        _embedded: {
          tags: [],
          companies: [
            {
              id: 45137823,
              _links: {
                self: {
                  href: 'https://bmd2006.amocrm.ru/api/v4/companies/45137823',
                },
              },
            },
          ],
        },
      },
      {
        id: 45137915,
        name: '',
        first_name: '',
        last_name: '',
        responsible_user_id: 8124646,
        group_id: 0,
        created_by: 8124646,
        updated_by: 8124646,
        created_at: 1650555052,
        updated_at: 1650555052,
        closest_task_at: null,
        is_deleted: false,
        is_unsorted: false,
        custom_fields_values: [
          {
            field_id: 957683,
            field_name: 'Телефон',
            field_code: 'PHONE',
            field_type: 'multitext',
            values: [
              {
                value: '89014562345',
                enum_id: 1230737,
                enum_code: 'WORK',
              },
            ],
          },
          {
            field_id: 957685,
            field_name: 'Email',
            field_code: 'EMAIL',
            field_type: 'multitext',
            values: [
              {
                value: 'bty2004@yandex.ru',
                enum_id: 1230749,
                enum_code: 'WORK',
              },
            ],
          },
          {
            field_id: 957681,
            field_name: 'Должность',
            field_code: 'POSITION',
            field_type: 'text',
            values: [{ value: 'менеджер' }],
          },
        ],
        account_id: 30127360,
        _links: {
          self: {
            href: 'https://bmd2006.amocrm.ru/api/v4/contacts/45137915',
          },
        },
        _embedded: {
          tags: [],
          companies: [
            {
              id: 45137737,
              _links: {
                self: {
                  href: 'https://bmd2006.amocrm.ru/api/v4/companies/45137737',
                },
              },
            },
          ],
          leads: [],
        },
      },
      {
        id: 45141185,
        name: '',
        first_name: '',
        last_name: '',
        responsible_user_id: 8124646,
        group_id: 0,
        created_by: 8124646,
        updated_by: 8124646,
        created_at: 1650556760,
        updated_at: 1650556761,
        closest_task_at: null,
        is_deleted: false,
        is_unsorted: false,
        custom_fields_values: null,
        account_id: 30127360,
        _links: {
          self: {
            href: 'https://bmd2006.amocrm.ru/api/v4/contacts/45141185',
          },
        },
        _embedded: {
          tags: [],
          companies: [
            {
              id: 45141183,
              _links: {
                self: {
                  href: 'https://bmd2006.amocrm.ru/api/v4/companies/45141183',
                },
              },
            },
          ],
          leads: [
            {
              id: 1,
              _links: {
                self: {
                  href: 'https://example.amocrm.ru/api/v4/leads/1',
                },
              },
            },
            {
              id: 3916883,
              _links: {
                self: {
                  href: 'https://example.amocrm.ru/api/v4/leads/3916883',
                },
              },
            },
          ],
        },
      },
    ],
  },
};
//
//
// основной скрипт запросв добавления задач
// 
arr_nolead = id_arr(data_con);
if (arr_nolead.length) {
  // todo request to add tasks
  console.log(form_data(arr_nolead, '2022.05.20'));
  document.getElementById('demo').innerHTML = form_data(arr_nolead);
} else {
  console.log('Нет контактов без сделок');
}
// 1. функция формирования массива id контактов без сделок
// на входе ответ от API на запрос контактов на выходе массив id контактов без сделок
//
function id_arr(data) {
  let nolead_id = [];
  let dat_contacts = data._embedded.contacts;
  for (let i = 0; i < dat_contacts.length; i++) {
    //если в контакте нет объекта leads - записывается id контакта в массив
    if (!Object.keys(dat_contacts[i]._embedded).includes('leads')) {
      nolead_id.push(dat_contacts[i].id);
      console.log('Нет объекта leads');
      console.log('Контакт без сделок!');
      console.log(dat_contacts[i].id);
      // если в контакте есть пустой объект leads - записывается id контакта в массив
    } else if (!dat_contacts[i]._embedded.leads.length) {
      console.log('Есть пустой объект leads');
      nolead_id.push(dat_contacts[i].id);
      console.log('Контакт без сделок!');
      console.log(
        dat_contacts[i]._embedded.leads.length + ' ' + dat_contacts[i].id
      );
    } else {
      // если в контакте есть непустой объект leads id контакта не записывается в массив
      console.log('Есть непустой объект leads');
      console.log(
        dat_contacts[i]._embedded.leads.length + ' ' + dat_contacts[i].id
      );
    }
  }
  console.log(nolead_id);
  return nolead_id;
}
// 2. функция формирование объекта data для запроса добавления задач к контактам без сделок
// на входе массив из id контактов для создания задач на выходе data для запроса добавления задач
function form_data(arr_id, end_date) {
  let arr = [];
  // класс задачи
  class Req_lead {
    constructor(id, comp_date) {
      this.text = 'Контакт без сделок';
      // время для завершения задачи в сек. UNIX format
      this.complete_till = Math.floor(new Date(comp_date).getTime() / 1000);
      this.entity_id = id;
      this.entity_type = 'contacts';
    }
    //
    // формирование массива объектов data
  }
  for (let index = 0; index < arr_id.length; index++) {
    arr.push(new Req_lead(arr_id[index], end_date));
  }
  return JSON.stringify(arr);
}
