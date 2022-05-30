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
    <strong>🧑‍💻 Scripts</strong>
  </summary>
  
  - These scripts are made to be run from the App's **root** directory:
    - `npm start` : Clears ports `3000` and `3001` and also **reruns sequelize** to setup the Database from scratch. This will initialize a `pm2` process.
    - `npm run dev` : Clears ports `3000` and `3001` and initializes a `pm2` process. In this mode any changes are refreshed to be viewed in real time.
    - `npm stop` : Stops the App and deletes any `pm2` instance currently running.
  
  - You can also run `npm start` separately while inside either **front-end** or **back-end** directories, if you wish to do so.
</details>
