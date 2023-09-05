## Explora Cars

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

FrontEnd -> `git clone git@github.com:mumbi-prog/ExploraCars-Client.git`
BackEnd -> `git@github.com:mumbi-prog/Explora-cars.git`
Live Site link: https://explora-cars-production.up.railway.app/customers

# Change to project directory

`cd ExploraCars-Client`
`cd Explora-Cars`

# Install the required dependencies

`npm install`
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Start the development server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# FrontEnd Components

1. Navigation Bar Component
•	Displays navigation links and handles user authentication status.
2. Sign Up Component
•	Allows users to sign up with a new account.
•	Form fields: email, password, full name, age, phone number.
3. Log In Component
•	Allows users to log in to the site securely.
•	Form fields: email, password.
4. Car List Component
•	Fetches and displays a list of available cars.
•	Displays basic information about each car.
•	Links to the car details page.

5. Car Details Component
•	Displays detailed information about a specific car.
•	Displays car attributes: make, year, price per day, transmission, body type, category, fuel consumption, number of seats, fuel type.
•	Displays availability status (is_rented).
•	Allows users to request a booking for the car.
6. Rental History Component
•	Fetches and displays the user's rental history.
•	Allows users to see their past and current bookings.
•	Displays booking details: start date, end date, car details, and total price.
7. Booking Form Component
•	Allows users to create a new booking.
•	Selects a car and specifies booking dates (start date, end date).

# Routes
Home ("/"): Displays a welcome message or introduction.
Sign Up ("/signup"): Renders the Sign Up Component.
Log In ("/login"): Renders the Log In Component.
Cars ("/cars"): Renders the Car List Component.
Car Details ("/cars/:id"): Renders the Car Details Component for a specific car.
Rental History ("/rentals"): Renders the Rental History Component.
New Booking ("/rentals/new"): Renders the Booking Form Component for creating a booking.
Profile ("/profile"): Renders the Profile Component.

# Test Your API:

Use tools like ThunderBolt, or Postman, or your frontend application to test your API endpoints and make sure everything is working as expected.

# Live Site Deployment

Deploy your backend to a production server using platforms like Heroku or AWS or Vercel or Netlify.
Live Site
You can access the live version of the Transaction Tracker application on GitHub Pages by visiting the following link: https://explora-cars-production.up.railway.app/customers

# Copyright and License

Explora is licensed under the Moringa License. 
You are free to use, modify, and distribute the code as long as you include the appropriate copyright notice and adhere to the terms of the Moringa License.

Please note that the data used in the application is for demonstration purposes only and should not be used for any real car hire transactions.

GOD Bless You. Happy Coding!!

