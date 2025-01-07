# O'Coffee

## How to Run the Project

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/o-coffee.git
cd o-coffee
```

### Step 2: Build and Run Docker Containers

use Docker COmpose to build and start the project:

```bash
docker-compose up --build
```

### Step 3: Access the Application

Once the containers are running:

The application will be available at <http://localhost:3000>.
The PostgreSQL database will be accessible on port 5433.

Step 4: Verify Initialization
Check that the database has been populated using the SQL script provided in ./data/ocoffee-dataset.sql.
Step 5: Stop the Application
To stop the application and remove the containers:

```bash
docker-compose down -v
```

#### Technologies Used

Backend: Node.js, Express
Frontend: HTML, CSS, JavaScript
Database: PostgreSQL
Containerization: Docker, Docker Compose
