# Delivery App
This is an App with functional both Front and Back End with a MySQL DB communication via Sequelize, and Express.js for http type requests.

---

## How to:
- I **strongly** recommend you readn and follow these steps in order:

<details>
	<summary>
		<strong>⏳	Requirements</strong>
	</summary>

  - This project was developed with `node v16.9.1` and `npm v8.5.5` and it is recommended to have such versions.

  - The database used was **MySQL** and `MySQL Workbench v8` for development

</details>

<details>
  <summary>
    <strong>🏜 Environment Setup</strong>
  </summary> <br>
  
  This application is made to adapt to each dev's environment, and for that there are two `.env` files that must be adjusted accordingly. Inside each folder, `back-end` and `front-end`, there is a `.env.EXAMPLE` file included. These are made to be renamed into `.env` and edited so that they work on your environment:
  
  - Front-End's **.env.EXAMPLE** : No changes should be necessary, simply rename the file appropriately to `.env`
  
  - Back-End's **.env.EXAMPLE** : Two edits must be made on top of renaming the file to `.env`:
    - On *line 5* change the value **after** `MYSQL_USER=` to your MySQL Workbench's *username*.
    - On *line 6* change the value **after** `MYSQL_PASSWORD=` to your MySQL Workbench's *password*.
</details>

<details>
  <summary>
    <strong>🧩 Installing Dependencies</strong>
  </summary> <br>
  
  - Upon *cloning* the directory, from the root directory, simply run either:
    - `npm install`: Installs all dependencies in *both* **Front End** and **Back End**.
    - `npm run dev:prestart`: Same as above, but also initializes `Sequelize` after installation. Recommended if installing for the first time.
  
  - You can also run `npm install` while inside the `front-end` or `back-end` directories to install their dependencies separately, if you wish to do so. This is not recommended as there are also dependencies that must be installed from the App's *root* directory.
  
</details>

<details>
  <summary>
    <strong>⚡Running The App</strong>
  </summary>
  
  After a successful installation *and* setting up your environment, simply run from **both** `/front-end` and `/back-end`:
  - `npm start`
    - When executed from inside `/front-end` a browser window should open.
    - When executed from inside `/back-end` it will open a port for http requests.
  
  You will need **both** ends running **at the same time** for the App to work!
</details>

<details>
  <summary>
    <strong>🧑‍💻 Scripts</strong>
  </summary>
  
  - These scripts are made to be run from the App's **root** directory:
    - `npm start` : Clears ports `3000` and `3001` and also **reruns sequelize** to setup the Database from scratch. This will initialize a `pm2` process.
    - `npm run dev` : Clears ports `3000` and `3001` and initializes a `pm2` process. In this mode any changes are refreshed to be viewed in real time.
    - `npm stop` : Stops the App and kills any `pm2` instance currently running.
  
  - You can also run `npm start` separately while inside either **front-end** or **back-end** directories, if you wish to do so.
</details>

<details>
  <summary>
    <strong>💁 Credentials</strong>
  </summary>
  
  To properly test the Database, Login and general App functionality you will need to know some usernames and passwords already present within the Database. Of course, you can always make a User yourself by utilizing the button *below* the Login button, which creates a `Customer Account`. But regardless, these are the users present in the DB upon seeding:
  - **Admin**
    - Email: `adm@deliveryapp.com`
    - Password: `--adm2@21!!--`
    - About: This is the administrator of the App, presumably the owner. It can **create** and **delete** new users, be it a Seller or a Customer. Only the Admin is able to create new Sellers. Any new user created or deleted will be updated in real time inside the database. The admin cannot delete itself or create any other Admin for the time being.
  
  - **Seller**
    - Email: `fulana@deliveryapp.com`
    - Password: `fulana@123`
    - About: This is a seller account. It can view and manage its sales. It does **not** have access to the product list for sale for now. Any new sale is can be sent towards this account and it will be updated in real time through the database.
  
  - **Customer**
    - Email: `zebirita@email.com`
    - Password: `$#zebirita#$`
    - About: This is a customer account. It can view the list of Products for sale received from the back-end, add any number of items and send it to its cart, where it can proceed to checkout and confirmation. Upon said confirmation, a new sale will added towards the selected Seller, which will be updated in real time within the Database.
  
</details>
