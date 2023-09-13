## Explora Cars
![alt text](https://github.com/mumbi-prog/ExploraCars-Client/blob/development/public/explora.jpeg?raw=true)
## Project Description

Explora is a web application that allows travellers to hire cars of their choice for ease in transportation in the destination area. 
Clients can view existing cars model, year, fuel consumption, fuel type, transmission, number of seats and if available. 
Clients are allowed to create their own accounts to keep track of their booking history. The accounts can be deleted at any time by them. Data privacy is respected.

Cars are booked according to location and once booked, they cannot be double booked. 

## Author

This project was developed by the following developers courtesy of Moringa School.
- Sylvia Mumbi
- Donvine Mugendi
- Isaac Ngahu
- Jeff Mwaura
- Maureen Omamo 

Project TM: Rhona Joy and Erick Mong'are Thank you and do enjoy.

## Project Setup Instructions

To set up and run the Explora project locally, follow these steps:
- **FrontEnd repository:** Clone the frontend repository using the following command:
```
git clone git@github.com:mumbi-prog/ExploraCars-Client.git
```
1. Navigate to the project directory: `cd explora-client`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev` or `yarn dev` or `pnpm dev`

> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
   
- **BackEnd repository:**  Clone the backend repository using the following command:
```
git@github.com:mumbi-prog/Explora-cars.git
```
1. Navigate to the project directory: `cd explora-cars`
2. Install dependencies: `bundle install`
3. Set up and seed the database: `rails db:migrate db:seed`
4. Start the server: `rails s`

## FrontEnd Components

1. **Navigation Bar Component**
•	Displays navigation links and handles user authentication status.
2. **Login Component**
•	Allows users to sign up with a new account.
•	Form fields: email, password, full name, age, phone number.
•	Allows users to log in to the site securely using their email and password.
3. **Car List Component**
•	Fetches and displays a list of available cars.
•	Displays basic information about each car.
•	Links to the car details page.
4. **Car Details Component**
•	Displays detailed information about a specific car.
•	Displays car attributes: make, year, price per day, transmission, body type, category, fuel consumption, number of seats, fuel type.
•	Displays availability status (is_rented).
•	Allows users to request a booking for the car.
5. **Booking Component**
•	Fetches and displays the user's rental history.
•	Allows users to see their past and current bookings.
•	Displays booking details: start date, end date, car details, and total price.
6. **Booking Form Component**
•	Allows users to create a new booking.
•	Selects a car and specifies booking dates (start date, end date).
7. **Review Form Component**
•	Allows users to create a review.
•	Allows users to view existing reviews.

## Routes
- **Home ("/")**: Displays a welcome message or introduction.
- **Sign Up/Login ("/login")**: Renders the Sign Up Component.
- **Cars ("/cars")**: Renders the Car List Component.
- **Car Details ("/cars/:id")**: Renders the Car Details Component for a specific car and to add a review.
- **Booking History ("/account")**: Renders the booking history Component.
- **New Booking ("/booking/:id")**: Renders the Booking Form Component for creating a booking.

## Test Your API:

Use tools like ThunderBolt, or Postman, or your frontend application to test your API endpoints and make sure everything is working as expected.

## Deployed Site
Explore our deployed resources🚀 
- Frontend site: [explora-cars.vercel.app](https://explora-cars.vercel.app/)
- API : [explora-api.up.railway.app](https://explora-api.up.railway.app)

## Copyright and License

Explora is licensed under the MIT License. 
You are free to use, modify, and distribute the code as long as you include the appropriate copyright notice and adhere to the terms of the MIT License.

> Note: Data used in the application is for demonstration purposes *only* and should not be used for any real car hire transactions.

GOD Bless You. Happy Coding!!🤗
