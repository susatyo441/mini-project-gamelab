# Mini Project Gamelab

# Website Sambal Bagindo

Mini project untuk UMKM sebagai kriteria penilaian program Studi Independen Backend Developer Batch 6 Gamelab.ID


## Fitur

Website ini terdiri dari halaman guest yang dapat dilihat oleh pengunjung secara umum, dan halaman admin yang hanya dapat diakses oleh administrator.


## Tech Stack

**Client:** Vite, React, Tailwind CSS

**Server:** Node, Express, Sequelize


## Run Locally

Clone the project

```bash
  git clone https://github.com/susatyo441/mini-project-gamelab.git
```

Go to the project directory

```bash
  cd my-project
```

### Client

Go to the font-end directory

```bash
  cd font-end
```

Install dependencies

```bash
  npm install
```

Build the app

```bash
  npm run build
```

Go to the dist folder, use any webserver to deploy the app from there

```bash
  php -S localhost:8080
```

#### OR

If you're on Windows execute run.bat

### Server

Go to the back-end directory

```bash
  cd back-end
```

Install dependencies

```bash
  npm install
```

Copy env file and configure
```bash
  cp .env.example .env
```

Migrate & Seed

```bash
  npm run migrate
  npm run seed
```

Deploy the app

```bash
  npm run dev
```

The default port should be :3000
