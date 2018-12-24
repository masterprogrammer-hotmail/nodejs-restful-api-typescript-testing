import * as express from "express";
// import * as fs from "fs";
// import * as users from "./mock/users.json";

// var __dirname = "./mock/";

var user: any = {
  user: {
    name: "",
    password: "",
    profession: "",
    id: 0
  }
};

var users: any = {
  "user1" : {
     "name" : "mahesh",
     "password" : "password1",
     "profession" : "teacher",
     "id": 1
  },
  
  "user2" : {
     "name" : "suresh",
     "password" : "password2",
     "profession" : "librarian",
     "id": 2
  },
  
  "user3" : {
     "name" : "ramesh",
     "password" : "password3",
     "profession" : "clerk",
     "id": 3
  }
}


class App {
  public express;
  public mydata;

  constructor() {
    this.express = express();
    this.mydata = users;

    // var data = fs.readFileSync( "./users.json", 'utf8');
    //   if(data){
    //    mydata2 = data;
    //   } else {
    //    mydata2 = {};
    //   }
      
      this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    
    router.get("/", (req, res) => {
      console.log("ROUTE:: /", req);
      res.json({
        message: "Hello World! -From NodeJs and TypeScript."
      });
    });
    router.get("/listUsers", function(req, res) {
      console.log("ROUTE:: /listUsers", req);
      // fs.readFile( __dirname + "users.json", 'utf8', function (err, data) {
      //    console.log( data );
      //    console.log( err );
      //    res.JSON( data | err );
      // });

      res.end(JSON.stringify(users));
    });
    router.get("/:id", function(req, res) {
      console.log("ROUTE:: /id", req);
      // First read existing users.
      // fs.readFile( __dirname + "users.json", 'utf8', function (err, data) {
      // let data = JSON.parse( JSON.stringify(users) );
        var nuser = users["user" + req.params.id];
      
      //  console.log( JSON.stringify(user));
      res.end(JSON.stringify(nuser));
      // });
    });
    router.post("/addUser", function(req, res) {
      console.log("ROUTE:: /addUser", req);
      // First read existing users.
      // fs.readFile( __dirname + "users.json", 'utf8', function (err, data) {
      //  var data = JSON.parse( JSON.stringify(users) );
      try {

        let nuser = user;

        nuser.name = "user4";
        nuser.password = "password4";
        nuser.profession = "profession4";
        nuser.id = 4;

        users["user4"] = nuser;
        // this.mydata2["user4"] = user["user4"];
      } catch (err) {
        res.end("error");
      }
      
      //  console.log( JSON.stringify(data));
      
      res.end("success");
      // res.json(this.mydata);

      // });
    });
    router.delete("/deleteUser", function(req, res) {
      console.log("ROUTE:: /deleteUser", req);
      // First read existing users.
      // fs.readFile( __dirname + "users.json", 'utf8', function (err, data) {
      // var data = JSON.parse( JSON.stringify(users) );
      // delete this.mydata1["user" + 4];

      //  console.log( JSON.stringify(data));
      res.end("success");
      // });
    });
    this.express.use("/", router);
  }
}

export default new App().express;
