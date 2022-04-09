import jsCookie from "js-cookie";
import { useParams } from "react-router";

export var mockData = {
 
  existingUsers: {
    "Tony": "stark",
    "Steve":"rogers",
    "Bruce": "banner",
    "Natasha":"romanov",
    "Clint": "barton"
  } ,

  existingUsersData: {
    "tony": {
      "trips":{
        "cancun": {
          "name": "Cancun",
          "tripMates":["Tony","Steve", "Bruce"],
          "lists": {
            "001": {
              "name": "packing list",
              "items": ["socks", "shoes", "shirt"]
            }
          },
          "albums":{
            "001":{
              "photos": ['../images/stickmanLogo.png','../images/user.png']
            }
          },
          "chat":{
            "msgList": [{
              "sender": "foo",
              "content": "This trip is going to be a blast!",
              "timestamp": "Fri, 08 Apr 2022 22:27:56 GMT"
            }]
          }

        }
      },
      "firstName":"Tony",
      "lastName": "Stark",
      "userName":"Tony",
      "password": "stark",
      "email":"foo@Ironman.com",
      "phone":"210-444-4444"
    },//end of user Tony
    "steve": {
      "trips":{
        "cancun": {
          "name": "Cancun",
          "tripMates":["Tony","Steve", "Bruce"],
          "lists": {
            "001": {
              "name": "packing list",
              "items": ["socks", "shoes", "shirt"]
            }
          },
          "albums":{
            "001":{
              "photos": ['../images/stickmanLogo.png','../images/user.png']
            }
          },
          "chat":{
            "msgList": [{
              "sender": "foo",
              "content": "This trip is going to be a blast!",
              "timestamp": "Fri, 08 Apr 2022 22:27:56 GMT"
            }]
          }

        }
      },
      "firstName":"Steve",
      "lastName": "Rogers",
      "userName":"Steve",
      "password": "Rogers",
      "email":"foo@CapnAmerica.com",
      "phone":"210-555-5555"
    },//end of user Steve
    "bruce": {
      "trips":{
        "cancun": {
          "name": "Cancun",
          "tripMates":["Tony","Steve", "Bruce"],
          "lists": {
            "001": {
              "name": "packing list",
              "items": ["socks", "shoes", "shirt"]
            }
          },
          "albums":{
            "001":{
              "photos": ['../images/stickmanLogo.png','../images/user.png']
            }
          },
          "chat":{
            "msgList": [{
              "sender": "foo",
              "content": "This trip is going to be a blast!",
              "timestamp": "Fri, 08 Apr 2022 22:27:56 GMT"
            }]
          }

        }
      },
      "firstName":"Bruce",
      "lastName": "banner",
      "userName":"Bruce",
      "password": "banner",
      "email":"foo@Hulk.com",
      "phone":"210-666-6666"
    },//end of user Bruce
    "natasha": {
      "trips":{
        
      },
      "firstName":"Natasha",
      "lastName": "Romanov",
      "userName":"Natasha",
      "password": "romanov",
      "email":"foo@BlackWidow.com",
      "phone":"210-777-7777"
    }//end of user Natasha
  }//end of existing user data array  
};


export function getDataMap(map){
  console.log(" MOCKDATA:: USERS OBJECT IS: ",map)
  var userMap = new Map()
  for (const [key, value] of Object.entries(map)) {
  //   console.log(`${key}: ${value}`);
    userMap.set(key,value);
  }
  // let userMap = new Map(JSON.parse(mockData.existingUsers))
  console.log(" MOCKDATA:: USER MAP IS: ", userMap)
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

// export function updateTripMemberList(tripObj){
//   let {trip} = useParams();
//   let x = mockData.existingUsersData[jsCookie.get("username")].trips[trip] = tripObj

//   console.log("NEW TRIP OBJ IS: ",x)
// }