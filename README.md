# Site Unblocker

A simple GUI for the awesome package [GoodbyeDPI](https://github.com/ValdikSS/GoodbyeDPI)

For more information and configuration, please check the original [package](https://github.com/ValdikSS/GoodbyeDPI).

## Screenshots

![Service on](https://raw.githubusercontent.com/subhamayd2/site-unblocker/master/ss.png)

## Installation

Windows installation (`.msi`) is available at the [release](https://github.com/subhamayd2/site-unblocker/releases) section

Installations for other platform will be available soon.

## Run Locally

Clone the project

```bash
git clone https://github.com/subhamayd2/site-unblocker.git
```

Go to the project directory

```bash
cd site-unblocker
```

Install dependencies

```bash
npm install
```

Start React UI

```bash
npm run start
```

In `main.js`, make this change

```js
mainWindow.loadURL("http://localhost:3000"); /* Uncomment this line */
// mainWindow.loadFile(INDEX_PATH); /* Comment this line */
```

Finally, launch the electron window

```bash
electron .
```

## License

[Apache License](https://github.com/subhamayd2/site-unblocker/blob/master/LICENSE)
