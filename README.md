# Football App

This project is a simple mobile UI for displaying football matches. It fetches data from the [Football API](https://core-sport-api.zarebin.ir/api/football/fixtures/) and presents it in a mobile-friendly interface.
it has fixed dock on the bottom, on dock provided five button either of them redirect to specific page.
only implement matches page to show all mathes you can select a date.
## Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
Change into the project directory:

bash
Copy code
cd football-app
Install dependencies:

bash
Copy code
yarn install
Running the App
bash
Copy code
yarn dev
This will start the development server. Open your browser and visit http://localhost:3000 to view the app.

## Features
- Displays football in a mobile-friendly interface.
- Utilizes the Football API to fetch data.
### Folder Structure
- app/: Contains Next.js pages.
- components/: Contains components that is used in entire app.
- constants/: Contains some constant value.
- hook/: a resuable component to fetch data.
- assets/: Contains all fonts and images.
Feel free to modify the project structure to suit your preferences.

## API Reference

#### Get all items

```http
  GET https://core-sport-api.zarebin.ir/api/football/fixtures/
```

#### Get item

```http
  GET /api/items/?date=${date}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `date`      | `string` | **Required**. date of item to fetch |

#### example

make request into this format 'date=2024-01-25'

https://core-sport-api.zarebin.ir/api/football/fixtures/?date=2024-01-25