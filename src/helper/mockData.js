export var mockData = {
  paragraph: "Hello World",
  tripsList: ["Cancun", "Russia", "Spring Break Bash!"],
  existingUsers: {
    "hello": "world",
    "ufoo":"pbar",
    "sponge": "bob"
  } ,

  existingUsersData: {
    "foo": {
      "trips":{
        "Cancun":{
          tripMates: ["foo","foo2"],
          
        },
        "Russia": {},
        "Spring Break Bash!":{}
      },
      "firstName":"foo",
      "lastName": "bar",
      "userName":"ufoo",
      "password": "pbar",
      "email":"foo@bar.com",
      "phone":"444-444-4444"
    },
    "foo1": {
      "firstName":"foo",
      "lastName": "bar",
      "userName":"ufoo",
      "password": "pbar",
      "email":"foo@bar.com",
      "phone":"444-444-4444"
    },
    "foo2": {
      "firstName":"foo",
      "lastName": "bar",
      "userName":"ufoo",
      "password": "pbar",
      "email":"foo@bar.com",
      "phone":"444-444-4444"
    }

  }
};


export function getDataMap(map){
  console.log(" USERS OBJECT IS: ",map)
  var userMap = new Map()
  for (const [key, value] of Object.entries(map)) {
  //   console.log(`${key}: ${value}`);
    userMap.set(key,value);
  }
  // let userMap = new Map(JSON.parse(mockData.existingUsers))
  console.log("USER MAP IS: ", userMap)
  return userMap;
}

export function addNewUser(userObj){
  //existingUsers
  let userName = userObj.userName
  mockData.existingUsers[userName] = userObj.password
  console.log("Mock data is:", mockData)
  //add user info object
  mockData.existingUsersData[userName] = userObj

  console.log("MOCK USER OBJ IS: ", mockData.existingUsersData)
}

export function isUserFieldBlank(obj){
  let hasBlank = false;
  for (const [key, value] of Object.entries(obj)) {
      //   console.log(`${key}: ${value}`);
        console.log("value is :", value)
        hasBlank = (value === '') || (value.trim() === '');
      }
  console.log("Has blank is : ", hasBlank)
  return hasBlank
}