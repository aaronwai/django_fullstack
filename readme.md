# Step 1 : basic setup

1. virtualenv django_rest, pythyon 3.12.11
2. nvm use 24.14.1
3. npx create-react-app frontend (prefer to use old react setup rahter than vite, that can save the config of vite.config.js)

/===================================
When building a React project, `npx create-react-app (CRA)` and Vite represent two different generations of build tools with distinct design philosophies and performance characteristics. Below I'll break down their differences, pros, and cons in detail to help you make an informed choice.

### 1. Core Differences

| Aspect               | `create-react-app (CRA)`                   | Vite                                              |
| -------------------- | ------------------------------------------ | ------------------------------------------------- |
| **Build Tool Core**  | Based on Webpack + Babel                   | Based on ESBuild (dev) + Rollup (production)      |
| **Dev Server**       | Rebundles entire project on file change    | Uses native ES modules (no bundling in dev)       |
| **Startup Speed**    | Slow (10-30s for medium projects)          | Blazing fast (1-3s even for large projects)       |
| **Hot Update (HMR)** | Slow (full/partial rebundle)               | Instant (only updates changed module)             |
| **Configuration**    | "Zero-config" (eject to customize)         | Explicit config (vite.config.js), fully flexible  |
| **Default Features** | Batteries-included (testing, linting, PWA) | Minimal core (add plugins as needed)              |
| **Bundle Size**      | Larger (Webpack's default optimization)    | Smaller (Rollup's tree-shaking is more efficient) |
| **Learning Curve**   | Low (no config needed)                     | Slightly higher (basic config understanding)      |

### 2. Pros & Cons

#### A. `npx create-react-app`

##### ✅ Pros

- **Zero Configuration**: Out-of-the-box setup with no need to learn Webpack/Babel config – perfect for beginners.
- **Official Support**: Maintained by the React team, guaranteed compatibility with React's latest features.
- **Full Feature Set**: Includes Jest (testing), ESLint (linting), PWA support, and environment variables out of the box.
- **Stability**: Mature and battle-tested, minimal breaking changes in updates.
- **Community**: Massive ecosystem – most React tutorials/docs use CRA as the default.

##### ❌ Cons

- **Slow Performance**:
  - Dev server startup takes significant time (especially for larger projects).
  - Hot module replacement (HMR) is laggy (seconds to reflect changes).
- **Limited Customization**:
  - To modify Webpack/Babel config, you must run `npm run eject` (irreversible) or use `react-app-rewired`.
  - Ejecting exposes complex config files, which is overwhelming for beginners.
- **Bloated Dependencies**: Includes many unused packages (e.g., testing tools if you don't need them).
- **Slow Updates**: Lags behind modern build tool features (e.g., ESBuild, SWC).

#### B. Vite

##### ✅ Pros

- **Extreme Speed**:
  - Dev server starts in milliseconds (ESBuild is 10-100x faster than Babel/Webpack).
  - HMR is instant – changes reflect in <100ms even for large projects.
- **Flexible Configuration**:
  - Simple `vite.config.js` (intuitive API, no complex Webpack syntax).
  - Easy to add plugins (e.g., for TypeScript, CSS modules, PWA).
- **Optimized Production Build**:
  - Uses Rollup (superior tree-shaking) for smaller bundle sizes.
  - Built-in code splitting and asset optimization.
- **Modern Tooling**:
  - Supports ES modules natively (no need for Webpack's bundling in dev).
  - Built-in support for TypeScript, JSX, CSS preprocessors (Sass/Less).
- **Lightweight**: Minimal core dependencies, no bloat.

##### ❌ Cons

- **Less "Batteries Included"**:
  - No built-in testing/linting (need to add Vitest/Jest, ESLint manually).
  - Requires extra setup for advanced features (e.g., PWA, i18n).
- **Smaller (but growing) Ecosystem**:
  - Fewer tutorials/docs compared to CRA (though rapidly improving).
  - Some Webpack-specific plugins don't work with Vite (need Vite alternatives).
- **Minor Compatibility Edge Cases**:
  - Rare issues with legacy libraries that don't support ES modules.

### 3. Practical Setup Examples

#### A. Create React App (CRA)

```bash
# Basic setup
npx create-react-app my-cra-app
cd my-cra-app
npm start # Dev server (slow startup)
npm run build # Production build (Webpack-based)
```

#### B. Vite + React

```bash
# Basic setup (npm 7+)
npm create vite@latest my-vite-app -- --template react
cd my-vite-app
npm install
npm run dev # Dev server (instant startup)
npm run build # Production build (Rollup-based)
```

### 4. When to Choose Which?

#### Choose CRA if:

- You're a **complete beginner** (no config needed, maximum stability).
- You need official React team support and minimal setup for small projects.
- You rely heavily on CRA's built-in tools (Jest, ESLint) and don't want to configure them manually.

#### Choose Vite if:

- You value **speed** (dev server/HMR performance is critical).
- You need flexibility to customize build config (without ejecting).
- You're building medium/large React projects (Vite scales far better).
- You want modern tooling and smaller production bundles.

---

### summary

1. **Performance**: Vite is drastically faster than CRA (dev startup/HMR) due to ESBuild/Rollup vs Webpack/Babel.
2. **Flexibility**: Vite offers full config control (no eject), while CRA is locked down (eject is irreversible).
3. **Use Case Fit**: CRA is best for absolute beginners (zero config), Vite is better for most modern React projects (speed + flexibility).

/=====================================================

# step 2 : clean up react app

1. replace public/favicon.ico with our own favicon
2. https://favicon.io/ build our own favicon
3. remove src/app related files and clear up app.js content and place something in it for the time being

```js app.js
function App() {
  return <div>my app</div>;
}

export default App;
```

4. src/index.html clear up

```html index.html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

    <title>Proshop App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

5. remove everything inside `src/index.css` and add our own later

# step 3 : create components

1. inside src folder, create `components` folder
2. create Header.jsx and Footer.jsx

```jsx
const Header = () => {
  return <header>Header</header>;
};

export default Header;
```

```jsx
const Footer = () => {
  return <footer>Footer</footer>;
};
```

3. add the components into App.js

```js
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

# step 4: setup bootstrap for react

1. we are using old bootstrap for react to save time for the theme https://bootswatch.com/
2. we pick up lux theme from bootswatch, download the css file
3. go to react-bootstrap https://react-bootstrap.github.io/docs/getting-started/introduction
4. install react-bootstrap and bootstrap
   `npm install react-bootstrap bootstrap`
5. copy the downloaded css file to `src/bootstrap.min.css`
6. add the import into index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
```

7. refresh the page, the font should be changed

# step 5 : adding bootstrap into react

1. add container into App.js

```js
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

2. modify the footer

```jsx
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy: ProShop</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
```

3. update the index.css, so that the footer is at the bottom of the page

```css
main {
  min-height: 100vh;
}
```

4. copy the navbar component from https://react-bootstrap.github.io/components/navbar/ and add into header.jsx

```jsx Header.jsx
import { Container, Navbar, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/cart'>Cart</Nav.Link>
              <Nav.Link href='/login'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
```

in case there is wraning for css, regarding bootstrap.min.css.map, make sure at the bottom of the index.css remove the last line related to css.map

5. add font-awesome cdn link for icons into index.html

```jsx
import { Container, Navbar, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart'></i>Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user'></i>Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
```
