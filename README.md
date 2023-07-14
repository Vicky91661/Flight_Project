This is base mode js project template ,which anyone can use as it has been prepared ,
by keeping some of the most important code principles and project management recommendations.
Feel free to change anything.

`src` -> Inside the src folder all the actual source code regarding the project will
reside, this will not include any kind of tests.(You might want to make separate tests folder).

Lets take a look inside `src` folder

- `config` -> Inside this folder anything and everthing regarding any configuarations or setup of 
a library or module will be done . For Example :: Setting ups `dotenv` so that we can use the environment variables anywhere in a clearner fashion, this is done in the `server-config.js` . One more example can be to setup your logging librabry that can help to prepare meaningful logs, so configuration for this librabry should also be done here.

- `routes` -> In the routes folder , we register a route and the correspondiing middleware and controllers to it.

- `middelewares` -> they are just going to intercept the incoming requests where we can write our validatiors, authenticators etc.

- `controllers` -> they are king of last middlewares as post them you call you bussiness layer to execute
the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the bussiness layer,and once bussiness layer return an output , we structure the API response in controllers and send the output.

- `repositories` -> this folder constains all the logic using which we interact the DB by writing queries, all the raw queries  or ORM queries will go here .

- `serives` -> contains the business logic and interacts with repositories for data from the database.

- `utils` -> contains helper method, error classes etc.

### SetUp the Project

-Download this template from github and open it in your favourite text editor.
- In the root directory create a `.env`file and add the following env variables 
```
    PORT = <Port number of your choice>
```
ex:
```
    PORT=3000
```

go inside the `src` folder and execute the following command:

```
    npx sequelizer init
```

-By executing the above command you will get migration and seeder folder along with a config.json inside the config folder

-If you are setting up your development environment, then write the username of your db , password of your database and in dialect mention whatever db you are using for ex:  mySQl , mariadb etc

-if you are setting up test or production envirmnment, make sure you also replace the host with the hosted db url.

-To run the server execute
```
    npm run dev
```