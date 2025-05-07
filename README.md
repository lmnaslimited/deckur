## Getting Started with the Deckur App

This guide will help you set up and run the **Deckur** app from **LMNAs Limited’s Turbo Repo**.

### 1. Clone the Repositories

First, clone the Turbo Repo from the LMNAs Limited GitHub page:

```bash
git clone https://github.com/lmnas-limited/turbo-repo.git
```

Then, navigate into the Turbo Repo and clone the `deckur` app:

```bash
cd turbo-repo
git clone https://github.com/lmnas-limited/deckur.git apps/deckur
```

### 2. Install Dependencies

install dependencies using `pnpm`:

```bash
pnpm install
```

### 3. Run the App

You can run the app in development or build mode:

#### Development Mode

```bash
pnpm dev
```

#### Build and Preview

```bash
pnpm build
```

Use this to preview your prepared decks using **React**.

### 4. Generate PPD File

Open a new terminal and navigate to the `deckur` app directory again:

```bash
cd apps/deckur
```

Then run the following command:

```bash
pnpm ts-node scripts/pdf
```

This will generate a `.ppd` file inside the `public/` folder of the app.

---

