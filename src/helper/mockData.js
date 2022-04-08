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
      "firstName":"foo",
      "lastName": "bar",
      "userName":"ufoo",
      "password": "pbar",
      "email":"foo@bar.com"
    }

  }
};


export function getExistingUserMap(){
  console.log(" USERS OBJECT IS: ", mockData.existingUsers)
  var userMap = new Map()
  for (const [key, value] of Object.entries(mockData.existingUsers)) {
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