## Getting Started with the Deckur App

This guide will help you set up and run the **Deckur** app from **LMNAs Limited’s Turbo Repo**.

prerequisites:
Required package manager: "PNPM"
Install if not in the system using below command
 npm install -g pnpm


### 1. Clone the Repositories

First, clone the Turbo Repo from the LMNAs Limited GitHub page:

```bash
git clone https://github.com/lmnaslimited/lmnas-turbo.git
```

Then, navigate into the lmnas Turbo and clone the `deckur` app:

```bash
cd lmnas-turbo
pnpm get-app deckur
```

### 2. Install Dependencies

install dependencies using `pnpm`:

```bash
pnpm install
```

### 3. Run the App

You can run the app in development or build mode:

#### Development Mode(prefered)

```bash
pnpm dev
```
(or)

#### Build and Preview

```bash
pnpm build
pnpm start
```


### 4. Generate PDF File

Open a new terminal and navigate to the `deckur` app directory again:

```bash
cd apps/deckur
```

Then run the following command:

```bash
pnpm ts-node scripts/pdf
```

This will generate a `.pdf` file inside the `public/` folder of the app.

---

