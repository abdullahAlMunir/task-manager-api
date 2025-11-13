📚 Task Manager API

📝 Overview

This is a robust, scalable backend API designed for managing user tasks and to-do lists. Built using Node.js and the Express.js framework, it provides a clean, RESTful interface for creating, retrieving, updating, and deleting tasks.

✨ Features

RESTful Endpoints: Standardized routes for full CRUD operations on tasks.

Data Persistence: Uses a database (e.g., MongoDB, PostgreSQL) for persistent storage. (Note: Adjust this bullet point based on the actual database you use.)

Flexible Structure: Tasks include fields like title, description, due date, and completion status.

Environment Variables: Secure configuration using .env files.

🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites

You will need the following software installed on your system:

Node.js (LTS version recommended)

npm (comes with Node.js)

Database installed and running (e.g., MongoDB, if applicable)

Installation

Clone the repository:

git clone [https://github.com/abdullahAlMunir/task-manager-api.git](https://github.com/abdullahAlMunir/task-manager-api.git)
cd task-manager-api


Install dependencies:

npm install


Set up Environment Variables:
Create a file named .env in the root of the project directory. This file should contain your configuration settings (e.g., database connection string, port number, etc.).

# Example .env file content
PORT=3000
DATABASE_URL="mongodb://localhost:27017/taskmanager"
# Add any other secret keys or configurations here


Start the server:

npm start
# or if using nodemon for development:
# npm run dev


The API should now be running at http://localhost:3000 (or the port defined in your .env file).

💡 API Endpoints

The API follows a standard RESTful structure. Below are the core endpoints:

        Method                  |Endpoint                           |Description                                        |Access                                        |Success Response

        POST                     /Registration                      Creates a new user.                                 Public                                          201 Created

        POST                     /login                             Retrieves all tasks.                                Public                                          200 OK (Array of tasks)

        GET                      /VerifyEmail                       Retrieves a single task by ID.                      Private                                         200 OK (Single task object)

        POST                     /VerificationCode                  Updates an existing task.                           Private                                         200 OK

        POST                     /ResetPassword                     Resets password                                     Private                                         204 No Content

        GET                      /ProfileDetails                    Shows user profile data                             Private                                                  

        PUT                      /ProfileUpdate                     Updates user profile                                Private                                               

        POST                     /CreateTask                        Creates a new task.                                 Private                                               

        patch                    /UpdatedTaskStatus/:id/:status     Updates task status                                 Private                                               

        GET                      /TaskListByStatus/:status          Shows Task List according to Status                 Public                                               

        DELETE                   /DeleteTask/:id                    Deletes a task by ID.                               Private                                               

        GET                      /CountTask                         Counts number of tasks available in the database.   Public                                               
        


🧪 Postman Collection
    To quickly test all API endpoints and environments, you can import the provided Postman collection files.
        1. Download: Find the Task_Manager_API.postman_collection.json and any associated environment files (.postman_environment.json) in the root of this repository.
        2. Import: In Postman, click File > Import and select the downloaded file(s).
        3. Use Environment: Ensure the corresponding environment (if provided) is selected in the environment dropdown menu in the top right corner of Postman. This environment typically includes the baseURL variable (http://localhost:3000).

🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License

Distributed under the MIT License. See LICENSE for more information.

📧 Contact

Maintainer: Abdullah Al Munir
GitHub: https://www.github.com/abdullahAlMunir
Project Link: https://www.google.com/search?q=https://github.com/abdullahAlMunir/task-manager-api

Built with ❤️ using Node.js and Express.js.