$(document).ready(function() {
var db = new PouchDB('http://localhost:5984/framework');
var map={
    _id: "mapsetting",
    "longtitude": 5.890489,
    "laititude": 45.394547,
    "eval":"star",
    "markers":[{
        "name":"First marker",
        "longtitude": 5.891623,
        "laititude": 45.395306,
        "data": "here are data of marker 1"
    },{
        "name":"Second marker",
        "longtitude": 5.891042,
        "laititude": 45.391842,
        "data": "here are data of marker 2"
    },{
        "name":"Third marker",
        "longtitude": 5.890284,
        "laititude": 45.394431,
        "data": "here are data of marker 3"
    },{
        "name":"Fourth marker",
        "longtitude": 5.890450,
        "laititude": 45.398661,
        "data": "here are data of marker 4"
    }],
    "steps":[{
        "content": "Analysez et évaluez chaque emplacement",
    },{
        "content": "Choisissez un emplacement"
    }],
    "groups":[{
        "name":"awesome",
        "student":"3"
    },{
        "name":"cool",
        "student":"3"
    },{
        "name":"smart",
        "student":"4"
    }]
};

var note_1={
    _id:"note_1",
    "notes":[{
        "player":1,
        "location":1,
        "content":"a nice place"
    },{
        "player":1,
        "location":1,
        "content":"I like here!"
    },{
        "player":2,
        "location":1,
        "content":"player 2 location 1"
    },{
        "player":2,
        "location":2,
        "content":"player 2 location 2"
    },{
        "player":3,
        "location":2,
        "content":"player 3 location 2"
    }]
}
var note_2={
    _id:"note_2",
    "notes":[]
}
var note_3={
    _id:"note_3",
    "notes":[]
}
var note_4={
    _id:"note_4",
    "notes":[]
}

var vote_1={
    _id: "vote_1",
    "votes":[{
        "player":1,
        "location":1,
        "vote":1,
        "id": "1/1"
    },{
        "player":2,
        "location":2,
        "vote:":1,
        "id": "2/2"
    }]
}
var vote_2={
    _id: "vote_2",
    "votes":[]
}
var vote_3={
    _id: "vote_3",
    "votes":[]
}
var vote_4={
    _id: "vote_4",
    "votes":[]
}
db.put(vote_1).then(function (response) {
  // handle response
}).catch(function (err) {
  console.log(err);
});


    // console.log(data.markers);
    // // var mydoc = JSON.parse(data);
    // db.get('mapsetting').then(function(doc) {
    //   return db.remove(doc);
    // }).then(function (result) {
    //   // handle result
    //   db.put(data);
    // }).catch(function (err) {
    //   console.log(err);
    // });
})