# musicandimages

This was made for a Frontend Technical Assessment.

# Technologies

This project was build using next.js and tailwindcss. It calls public apis of
deezer and unsplash to retrieve music and images.

The file structure is all under musicapp/app/

The pages work using next.js and its built in page router using folders and page.js files.
As for the API calls, seperate services are made for the deezer api and unsplash api, which then both get called in an apiUtil.
This util is what is ultimately called on in the frontend using a useEffect, and then rendered onto the page.

# Run this project

To clone this repository run the command in your terminal with an IDE

`git clone https://github.com/kevinxiao27/musicandimages.git`

To start this in your local environment

Change to the project directory

`cd musicapp/`

Install npm packages

`npm i`

And run the project in a developer environment

`npm run dev`
