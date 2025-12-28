#classificados app - backend

#Configure MongoDB
If using Windows, MongoDB is installed at C:\Program Files\MongoDB by default.
Add C:\Program Files\MongoDB\Server\<version_number>\bin to the Path environment variable.
This change enables MongoDB access from anywhere on your development machine.

#1. Start the MongoDB
Enter the backend / folder through a Terminal and execute the command;
	mongod --dbpath Database
Note: In this case the Database/ folder is the <data_directory_path>

#2. Run The API
Open terminal in \backend\ClassifiedsAPI\ClassifiedsAPI and execute the comand;
	dotnet run
OR
Open Visual Studio and click in Run (In this case, if you want to test the frontend, you must to set the port in frontend/src/services/api.js)

#3. Test the web API
Navigate to;
	GET (List);
	http://localhost:<port>/api/classifieds -> Get all Classifieds
	http://localhost:<port>/api/classifieds/{id here} -> Get Classifieds by Id
	
	POST (Create);
	/api/classifieds/api/Classifieds
	
	example;
	{
		"title": "test POST Create",
		"description": "this is a Create test"
	}
	
	PUT (UPDATE);
	/api/Classifieds/{id}
	example;
	{
		"id": "string",
		"title": "string",
		"description": "string",
		"date": "string"
	}
	
	DELETE;
	/api/Classifieds/{id}

-------------
I developed this project based on this Tutorial;
https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mongo-app?view=aspnetcore-5.0&tabs=visual-studio#configure-json-serialization-options


#Learn;
Cors;
https://docs.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-5.0#enable-cors-with-attributes
