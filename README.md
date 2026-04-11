# Train Scheduling Backend Documentation

## API Endpoints

### 1. User Authentication
- **POST** `/api/auth/register`
- **POST** `/api/auth/login`

### 2. Train Management
- **GET** `/api/trains`
- **GET** `/api/trains/:id`
- **POST** `/api/trains`
- **PUT** `/api/trains/:id`
- **DELETE** `/api/trains/:id`

### 3. Booking Management
- **GET** `/api/bookings`
- **GET** `/api/bookings/:id`
- **POST** `/api/bookings`
- **DELETE** `/api/bookings/:id`

## Database Design

### Entities
1. **User**
   - Fields: `id`, `username`, `password`, `email`, `created_at`
2. **Train**
   - Fields: `id`, `train_number`, `route`, `capacity`, `created_at`
3. **Booking**
   - Fields: `id`, `user_id`, `train_id`, `seats_booked`, `created_at`

### Relationships
- A **User** can have multiple **Bookings**.
- A **Train** can have multiple **Bookings**.

## Implementation Details

### Languages and Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for Authentication

### Key Features
- User registration and login
- CRUD operations for trains
- Booking management capabilities

### How to Run the Project
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.
