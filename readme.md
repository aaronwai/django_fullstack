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

```js app.js
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>  // keep this div for now, later replace with router
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

```js index.js
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

# Step 6 : add dump data for api test

1. create a products.js at the src folder for the time being

```js
const products = [
  {
    _id: "1",
    name: "Airpods Wireless Bluetooth Headphones",
    image: "/images/airpods.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: "2",
    name: "iPhone 11 Pro 256GB Memory",
    image: "/images/phone.jpg",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 0,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: "3",
    name: "Cannon EOS 80D DSLR Camera",
    image: "/images/camera.jpg",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: "4",
    name: "Sony Playstation 4 Pro White Version",
    image: "/images/playstation.jpg",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "5",
    name: "Logitech G-Series Gaming Mouse",
    image: "/images/mouse.jpg",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "6",
    name: "Amazon Echo Dot 3rd Generation",
    image: "/images/alexa.jpg",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
];

export default products;
```

2. copy images inside `public/images`
3. create `src/screens` folder for pages
4. create HomeScreen.jsx, add the dump data and key with product._id

```jsx homescreen.jsx
import { Row, Col } from "react-bootstrap";
import products from "../products";
const HomeScreen = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <h3>{product.name}</h3>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
```

5. insert HomeScreen into App.js
6. the items are displayed onn the screen

# Step 7 : create a product component to display the product

1. refactor the App.jsx, insert homescreen inside

```jsx app.jsx
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
  );
}

export default App;

```
2. for the homescreen, insert a product component
```jsx homescreen.jsx
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />   // insert product component
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;

```
3. create Product.jsx inside components folder

```jsx
import { Card } from "react-bootstrap";
const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='div'>
          <div className='my-3'>
            // this line will be replace by component later, for now just make
            sure it works
            <strong>
              {product.rating} from {product.numReviews} reviews
            </strong>
          </div>
        </Card.Text>
        <Card.Title as='h3'>${product.price}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Product;
```
3. update app.jsx for the product component
```jsx
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
function App() {
  return (
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
  );
}

export default App;
```
# step 8 : rating component

1. we will be re-using this component later
2. refactor the product component

```jsx product.jsx
import { Card } from "react-bootstrap";
import Rating from "./Rating";
const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='div'>
          <div className='my-3'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color='#f8e825'
            />
          </div>
        </Card.Text>
        <Card.Title as='h3'>${product.price}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Product;
```

3. create Rating.jsx inside components folder

```jsx rating.jsx
const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? "fas fa-star"
              : value >= 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
          }
        ></i>
      </span>

      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? "fas fa-star"
              : value >= 1.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
          }
        ></i>
      </span>

      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? "fas fa-star"
              : value >= 2.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
          }
        ></i>
      </span>

      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? "fas fa-star"
              : value >= 3.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
          }
        ></i>
      </span>

      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? "fas fa-star"
              : value >= 4.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
          }
        ></i>
      </span>

      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
```

4. update the index.css for the rating component

```css index.css
main {
  min-height: 100vh;
}

h3 {
  padding: 1rem 0;
}
.rating span {
  margin: 0.1rem;
}
```

# step 9 : react router

1. demo is based on react router 6
   `npm install react-router-dom@6.23.0`
2. react router bootstrap
   `npm install react-router-bootstrap@0.26.2`
3. refector App.js for react router

```jsx app.jsx
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
```

# Short Answer: **NO, you do NOT need `exact` in React Router 6**

This is one of the **biggest changes** from React Router 5 → 6.

## Why you don’t need `exact` anymore:
- In **React Router 5**, you had to use `exact` for the root path `/` to prevent it from matching EVERY route (like `/about`, `/product`, etc.).
- In **React Router 6**, **all routes match exactly by default**.

Your current code:
```jsx
<Route path='/' element={<HomeScreen />} />
```
This will **only match the homepage** (`/`), and nothing else. Perfect as-is.

---

## When would you use partial matching?
Only if you want **nested routes** (like `/products/123`), you use a trailing `*` wildcard:
```jsx
// This matches /products + /products/123 + /products/edit
<Route path="/products/*" element={<Products />} />
```

But for your simple root route — **no `exact` required**.


4. add src/screens/ProductScreen.jsx for product pages for the time being

```jsx
import React from "react";

const ProductScreen = () => {
  return <div>ProductScreen</div>;
};

export default ProductScreen;
```

5. refactor App.js for product page

```jsx
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
```

6. click any product will route to `/product/1` which is working
7. we don't want to render the product page for every click, so we need to change all the <a> to <Link> using react-router-dom for quick rendering, refactor Product.jsx
   `href` to `to`

```jsx
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <div className='my-3'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color='#f8e825'
            />
          </div>
        </Card.Text>
        <Card.Title as='h3'>${product.price}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Product;
```

8. refacor Header.jsx for the navbar links for cart and login

```jsx header.jsx
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>  // add wrapper for the link
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
```

# step 10 : product page

1. update the productscreen file, for react router 6, we need to use `useParams` to get the parms part of the value, testing by clicking the image and should return the product name the we can refactor to add the jsx code

```jsx productscreen.jsx
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";
const ProductScreen = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);   // from the route params find the id and get the product name
  return <div>{product.name}</div>;
};

export default ProductScreen;
```

2. refactor the product page to add the product details

```jsx  productscreen.jsx
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";
import { use } from "react";
const ProductScreen = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>

            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

            <ListGroup.Item>Description: {product.description} </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    ${product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='w-100 py-2'
                  type='button'
                  disabled={product.countInStock === 0}  // disabled if out of stock
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
```

3. we can now switch to backend

# step 11 : backend

1. create backend folder under the main project root and mkvirtualenv django_rest
2. python version 3.12.11
3. cd backend
4. pip install django
5. django-admin startproject config .
6. python manage.py runserver
7. create first app `python manage.py startapp base`
8. register the app in settings.py

```py settings.py
"""

Generated by 'django-admin startproject' using Django 6.0.3.

"""

from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'django-insecure-b5jpidk)f%w%gmy$pb^2)+-dvvnmo_*s-97l=n8dvw130lajl-'

DEBUG = True

ALLOWED_HOSTS = []

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'base.apps.BaseConfig',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

STATIC_URL = 'static/'

```

9. add global url inside config/urls.py

```py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('base.urls')),
    path('admin/', admin.site.urls),
]

```

10. create urls.py inside base folder

```py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),

]
```

11. create views.py inside base folder

```py
from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
def getRoutes(request):
    return JsonResponse('Hello World', safe=False)
```

12. test the api by `localhost:8000/`
13. add all the api routes inside the getRoutes function, replace the testing string with the routes

```py
from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
def getRoutes(request):
    routes = [
        'api/products',
        'api/products/create',
        'api/products/upload',
        'api/products/<id>/reviews',
        'api/products/top',
        'api/products/<id>',
        'api/products/delete/<id>',
        'api/products/<update>/<id>',
    ]
    return JsonResponse(routes, safe=False)
```

14. update the global url inside config/urls.py to `path('api/', include('base.urls'))`

```py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/', include('base.urls')),
    path('admin/', admin.site.urls),
]

```

15. copy the products.js from the frontend folder to the base folder, rename to python dictionary file format

```py
products = [
  {
    '_id': '1',
    'name': 'Airpods Wireless Bluetooth Headphones',
    'image': '/images/airpods.jpg',
    'description':
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    'brand': 'Apple',
    'category': 'Electronics',
    'price': 89.99,
    'countInStock': 10,
    'rating': 4.5,
    'numReviews': 12,
  },
  {
    '_id': '2',
    'name': 'iPhone 11 Pro 256GB Memory',
    'image': '/images/phone.jpg',
    'description':
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    'brand': 'Apple',
    'category': 'Electronics',
    'price': 599.99,
    'countInStock': 0,
    'rating': 4.0,
    'numReviews': 8,
  },
  {
    '_id': '3',
    'name': 'Cannon EOS 80D DSLR Camera',
    'image': '/images/camera.jpg',
    'description':
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    'brand': 'Cannon',
    'category': 'Electronics',
    'price': 929.99,
    'countInStock': 5,
    'rating': 3,
    'numReviews': 12,
  },
  {
    '_id': '4',
    'name': 'Sony Playstation 4 Pro White Version',
    'image': '/images/playstation.jpg',
    'description':
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    'brand': 'Sony',
    'category': 'Electronics',
    'price': 399.99,
    'countInStock': 11,
    'rating': 5,
    'numReviews': 12,
  },
  {
    '_id': '5',
    'name': 'Logitech G-Series Gaming Mouse',
    'image': '/images/mouse.jpg',
    'description':
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    'brand': 'Logitech',
    'category': 'Electronics',
    'price': 49.99,
    'countInStock': 7,
    'rating': 3.5,
    'numReviews': 10,
  },
  {
    '_id': '6',
    'name': 'Amazon Echo Dot 3rd Generation',
    'image': '/images/alexa.jpg',
    'description':
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    'brand': 'Amazon',
    'category': 'Electronics',
    'price': 29.99,
    'countInStock': 0,
    'rating': 4,
    'numReviews': 12,
  },
]

```

16. back to base/view.py add the products data and function to display the products items

```py
from django.http import JsonResponse
from . products import products
# Create your views here.
def getRoutes(request):
    routes = [
        'api/products',
        'api/products/create',
        'api/products/upload',
        'api/products/<id>/reviews',
        'api/products/top',
        'api/products/<id>',
        'api/products/delete/<id>',
        'api/products/<update>/<id>',
    ]
    return JsonResponse(routes, safe=False)

def getProducts(request):
    return JsonResponse(products, safe=False)
```

17. update base/urls.py

```py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path("products/", views.getProducts, name="products"),
]

```

# Step 12 : setup rest framework

1. `pip install djangorestframework`
2. include the rest framework in settings.py

```py

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'base.apps.BaseConfig',
    'rest_framework',
]

```

3. https://www.django-rest-framework.org/api-guide/views/#check_throttlesself-request , we are using functional api views
4. update base/urls.py for single product

```py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path("products/", views.getProducts, name="products"),
    path("products/<str:pk>/", views.getProduct, name="product"),
]
```

5. update base/views.py

```py
from . products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/products',
        'api/products/create',
        'api/products/upload',
        'api/products/<id>/reviews',
        'api/products/top',
        'api/products/<id>',
        'api/products/delete/<id>',
        'api/products/<update>/<id>',
    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    return Response(products)

@api_view(['GET'])
def getProduct(request,pk):
    product = None
    for i in products:
        if i['_id'] == pk:
            product = i
            break
    return Response(product)
```

6. testing the api by `localhost:8000/api/products/`
7. testing the api by `localhost:8000/api/products/1/`

# step 13 : frontend axios setup

1. open second terminal for frontend and turn on nvm
2. install axios `npm install axios`
3. refactor /src/screens/HomeScreen.jsx, replace the hard coded products data, add axios fetch inside useEffect

```jsx
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";
import { useEffect, useState } from "react";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("http://127.0.0.1:8000/api/products");
      setProducts(data);
    }
    fetchProducts();
  }, []);   // first time loaded thaen update the component
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
```

4. ### Does Django 5.2 Block CORS?
   **Short answer**: Django 5.2 (like all Django versions) **does not block CORS by default** – but it also does **not include built-in support for handling CORS requests**. This means:

- By default, Django will reject cross-origin requests (e.g., your React frontend at `http://localhost:3000` calling a Django API at `http://localhost:8000`) because browsers enforce the **Same-Origin Policy**.
- This is not "blocking" per se – it’s Django not sending the required CORS headers, so the browser rejects the response.

### How to Fix CORS in Django 5.2

To allow cross-origin requests from your React app, you need to use the `django-cors-headers` package (the official/recommended solution for Django CORS):

#### Step 1: Install the Package

```bash
# Install django-cors-headers (compatible with Django 5.2)
pip install django-cors-headers
```

#### Step 2: Configure Django Settings

Update your `settings.py` to enable CORS:

```python
# settings.py

# Add corsheaders to INSTALLED_APPS (before your app)
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',  # Add this line
    'your_app_name',  # Your app (e.g., 'api')
]

# Add corsheaders middleware (MUST come before CommonMiddleware)
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # Add this line (first in middleware!)
    'django.middleware.common.CommonMiddleware',  # Keep this
    # ... rest of your middleware (e.g., CsrfViewMiddleware, AuthenticationMiddleware)
]

# Configure CORS allowed origins (critical!)
# Option 1: Allow only your React frontend (RECOMMENDED for production)
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # Your React dev server
    "http://127.0.0.1:3000",
    # Add your production frontend URL later (e.g., "https://yourfrontend.com")
]

# Option 2: Allow all origins (ONLY for development – NEVER use in production!)
# CORS_ALLOW_ALL_ORIGINS = True
```

#### Step 3: Test the Setup

1. Restart your Django server:
   ```bash
   python manage.py runserver
   ```
2. Make a request from your React app (using Axios) to your Django API – the CORS error should disappear.

### Key Details About Django 5.2 and CORS

1. **No Built-in CORS**: Django core has no `CorsMiddleware` – `django-cors-headers` is the de facto standard (maintained by the Django community).
2. **Middleware Order Matters**: `CorsMiddleware` must be placed **before** `CommonMiddleware` in the `MIDDLEWARE` list (it needs to process the request before other middleware).
3. **Security Best Practices**:
   - Never use `CORS_ALLOW_ALL_ORIGINS = True` in production (exposes your API to any website).
   - Restrict `CORS_ALLOWED_ORIGINS` to only your frontend domain(s).
   - For production, add HTTPS URLs (e.g., `https://your-frontend.com`) to `CORS_ALLOWED_ORIGINS`.
4. **Additional Config (Optional)**:
   If you need to allow credentials (e.g., cookies for authentication), add:
   ```python
   # settings.py
   CORS_ALLOW_CREDENTIALS = True
   ```

### What If You Still See CORS Errors?

1. Double-check the `MIDDLEWARE` order (CorsMiddleware first).
2. Verify `CORS_ALLOWED_ORIGINS` includes the exact URL of your React app (e.g., `http://localhost:3000` – no trailing slash!).
3. Clear your browser cache (old CORS headers may be cached).
4. Ensure Django is running on the correct port (default: 8000) and your React app is pointing to it.

### Summary

1. **Django 5.2 does not block CORS intentionally** – it simply lacks built-in CORS headers, so browsers reject cross-origin requests by default.
2. **Fix CORS with `django-cors-headers`**: Install the package, add it to `INSTALLED_APPS` and `MIDDLEWARE`, and whitelist your React origin(s).
3. **Security**: Always restrict `CORS_ALLOWED_ORIGINS` to your frontend domain(s) (never allow all origins in production).

This setup will let your React app communicate with your Django 5.2 API without CORS errors.

5. back to django side, `pip install django-cors-headers=4.0.0`
   https://pypi.org/project/django-cors-headers/

6. follow the doc, add the app and middleware inside the settings.py
   make sure the coreheaders middleware is before the common middleware

```py

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    "corsheaders",
    'base.apps.BaseConfig',
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CORS_ALLOW_ALL_ORIGINS = True
```

7. frontend side can load the data from backend api
8. refactor the frontend to remove the https://127.0.0.1:8000/ and place it inside the package.json file as proxy, stop and restart the npm server

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "proxy": "http://127.0.0.1:8000",
  "private": true,
  "dependencies": {
    "@testing-library/dom": "^10.4.1",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.2",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.13.6",
    "bootstrap": "^5.3.8",
    "react": "^19.2.4",
    "react-bootstrap": "^2.10.10",
    "react-dom": "^19.2.4",
    "react-router-bootstrap": "^0.26.2",
    "react-router-dom": "^6.23.0",
    "react-scripts": "^5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

```jsx homescreen.jsx
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";
import { useEffect, useState } from "react";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    }
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
```

# step 14 : refactor ProductScreen

1. refactor the productscreen for fetching id

```jsx
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";
// import products from "../products";
const ProductScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    }
    fetchProduct();
  }, []);
  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>

            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

            <ListGroup.Item>Description: {product.description} </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    ${product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='w-100 py-2'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
```

# step 15 : backend model

1. create product model, review model inside the /base/models.py

```py model.py
from django.db import models

from django.contrib.auth.models import User
# Create your models here.
class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    brand = models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    taxPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=True)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(auto_now_add=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.createdAt)

class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)

class ShippingAddress(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postalCode = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.address)
```

2. update the base/admin.py

```py
from django.contrib import admin
from .models import Product, Order, OrderItem, ShippingAddress, Review
# Register your models here.

admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
admin.site.register(Review)
```

3. for image related fields, need to install pillow
4. `pip install pillow`
5. we can make migration by `python manage.py makemigrations` and `python manage.py migrate` later
6. we need to create a static folder to store images `backend/static`
7. register the static folder inside the settings.py

```py

"""

Generated by 'django-admin startproject' using Django 6.0.3.

"""

from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'django-insecure-b5jpidk)f%w%gmy$pb^2)+-dvvnmo_*s-97l=n8dvw130lajl-'

DEBUG = True

ALLOWED_HOSTS = []

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    "corsheaders",
    'base.apps.BaseConfig',
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

STATIC_URL = 'static/'
MEDIA_URL = 'images/'

STATICFILES_DIRS = [
    BASE_DIR / "static",
]

MEDIA_ROOT = 'static/images'
CORS_ALLOW_ALL_ORIGINS=True
```

8. within the config/urls.py tell django where to find the static files

```py

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/', include('base.urls')),
    path('admin/', admin.site.urls),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

# step 16 : rest framewoek serializer

### How Django REST Framework (DRF) Serializers Work

DRF Serializers are the **bridge between your Django models and JSON (or other data formats)** – they handle two core jobs:

1. **Serialization**: Convert Django model instances (Python objects) into JSON (for API responses).
2. **Deserialization**: Convert incoming JSON (from API requests) into Python objects, validate the data, and save it to the database.

Think of serializers as a "translator" – they speak both Django’s model language and the web’s JSON language.

---

### Step 1: Basic Serializer Example (Core Concepts)

Let’s use a `Product` model to explain (matching your React product screen):

#### 1.1 Create a Serializer

Serializers live in `serializers.py` and inherit from DRF’s `ModelSerializer` (for model-based serialization) or `Serializer` (for custom data):

```python
# serializers.py (Django app)
from rest_framework import serializers
from .models import Product

# ModelSerializer = shortcut for serializing Django models (auto-generates fields)
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product  # Link to your Product model
        fields = '__all__'  # Serialize ALL model fields (or list specific fields: ['id', 'name', 'price'])
        # OR specify fields explicitly (better for control):
        # fields = ['id', 'name', 'price', 'description', 'image', 'rating', 'numReviews', 'countInStock']
```

### Step 2: How Serialization Works (Model → JSON)

Serialization converts a Django model instance to JSON (for API responses):

#### 2.1 In a View (Example with Function-Based View)

```python
# views.py (Django app)
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer

# Get a single product by ID (matches your React /api/products/${id} endpoint)
@api_view(['GET'])
def product_detail(request, pk):
    try:
        # 1. Get the Django model instance (Python object)
        product = Product.objects.get(pk=pk)

        # 2. Serialize the model instance (convert to JSON-ready data)
        serializer = ProductSerializer(product)  # For single object

        # 3. Return serialized data as JSON response
        return Response(serializer.data)
    except Product.DoesNotExist:
        return Response({"error": "Product not found"}, status=404)

# Get all products (for your product list page)
@api_view(['GET'])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)  # Use many=True for lists
    return Response(serializer.data)
```
```text
Django Model (database row)
       ↓
Serializer (converts model → JSON)
       ↓
serializer.data (the final JSON structure)
       ↓
Response(serializer.data) (send it to React)
```
#### 2.2 What Happens Here:

- `ProductSerializer(product)` takes the Python `Product` object and converts it to a dictionary (e.g., `{'id': 1, 'name': 'Laptop', 'price': '999.99'}`).
- `Response(serializer.data)` converts that dictionary to JSON and sends it to the client (React).

### Step 3: How Deserialization Works (JSON → Model)

Deserialization validates incoming JSON (e.g., from a `POST` request to create a product) and saves it to the database:

```python
# views.py (add this to handle POST requests)
@api_view(['POST'])
def create_product(request):
    # 1. Deserialize incoming JSON (request.data = parsed JSON from React)
    serializer = ProductSerializer(data=request.data)

    # 2. Validate the data (DRF checks for required fields, data types, etc.)
    if serializer.is_valid():
        # 3. Save the validated data to the database (creates a new Product instance)
        serializer.save()
        return Response(serializer.data, status=201)  # 201 = Created

    # 4. Return errors if validation fails (e.g., missing 'name' field)
    return Response(serializer.errors, status=400)
```

#### What Happens Here:

- `request.data` is the JSON sent from React (e.g., `{"name": "Phone", "price": 499.99}`).
- `serializer.is_valid()` checks:
  - Required fields (e.g., `name` is present).
  - Data types (e.g., `price` is a number).
  - Model constraints (e.g., `name` max length 200).
- If valid: `serializer.save()` creates a new `Product` object and saves it to the database.
- If invalid: `serializer.errors` returns a JSON object with error messages (e.g., `{"name": ["This field is required."]}`).

### Step 4: Key Serializer Features (Beyond Basics)

#### 4.1 Custom Fields

Rename fields or add calculated values (e.g., if your model uses `num_reviews` but React expects `numReviews`):

```python
class ProductSerializer(serializers.ModelSerializer):
    # Rename model field `num_reviews` to `numReviews` for React
    numReviews = serializers.IntegerField(source='num_reviews')
    # Add a custom calculated field
    is_in_stock = serializers.BooleanField(source='countInStock > 0')

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'numReviews', 'is_in_stock']
```

#### 4.2 Validation

Add custom validation rules (e.g., ensure price is positive):

```python
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    # Custom validation for price field
    def validate_price(self, value):
        if value <= 0:
            raise serializers.ValidationError("Price must be greater than 0")
        return value
```

#### 4.3 Read-Only Fields

Mark fields as read-only (e.g., `id` can’t be modified via API):

```python
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        read_only_fields = ['id', 'rating']  # These fields are ignored in POST/PUT requests
```

# 1. The Shortest Answer
**`Meta = Metadata`**
It’s a **configuration class** that tells the serializer:
*   **Which model to convert**
*   **Which fields to include**
*   **Extra rules** (like read-only)

It’s **not code that runs** — it’s just **settings/instructions** for DRF.

---

# 2. Your Code Explained Line by Line
```python
class ProductSerializer(serializers.ModelSerializer):
    # THIS IS THE CONFIG MENU
    class Meta:
        model = Product       # 1. Use the Product model
        fields = '__all__'    # 2. Include ALL database columns
        read_only_fields = ['id', 'rating'] # 3. These can't be edited
```

### **1. model = Product**
*   **Meaning**: *“Hey serializer, translate the **Product** database table.”*
*   It links your serializer to your Django model (`name`, `price`, etc.).

### **2. fields = '__all__'**
*   **Meaning**: *“Take **every column** from the Product model and turn it into JSON.”*
*   This includes: `id`, `name`, `price`, `description`, `rating`, etc.
*   *(Alternative: you can list specific fields like `fields = ['name', 'price']`)*

### **3. read_only_fields = ['id', 'rating']**
*   **Meaning**: *“These fields are **read-only**.”*
*   **React can receive them** (GET request).
*   **React CANNOT send/modify them** (POST/PUT request).
*   Perfect for:
    *   `id` (auto-generated by DB)
    *   `rating` (calculated by backend, not user-editable)

---

# 3. Analogy: Restaurant Menu
Think of the **Serializer** as a **Chef**.
The **`Meta` class** is the **Recipe Card** telling him:
*   **model = Product**: Use **chicken** (ingredient)
*   **fields = '__all__**: Use **all parts** of the chicken
*   **read_only_fields**: **Don’t cook the bones** (leave them out)

---

# 4. Why `Meta` is Used (Technical Reason)
The `ProductSerializer` class **inherits** power from `serializers.ModelSerializer`.
The `Meta` class is the **standard way** to pass custom settings to that parent class.
It keeps your code clean.

---

# 5. What `serializer.data` Looks Like (Because of Meta)
Because you set `fields = '__all__'`, `serializer.data` will contain **everything**:
```python
{
  "id": 1,          // read-only
  "name": "Laptop",
  "price": 999,
  "rating": 4.5,    // read-only
  "in_stock": true
}
```

---

# Ultimate Summary
**`class Meta:` is just a SETTINGS MENU for your Serializer.**

It tells DRF:
1. **What model** to translate
2. **What fields** to include
3. **What rules** to apply

### Step 5: How This Connects to Your React App

1. Your React app sends a GET request to `/api/products/1/` (via Axios with the product ID).
2. Django’s `product_detail` view fetches the `Product` instance with ID 1.
3. The `ProductSerializer` converts the `Product` instance to JSON (e.g., `{"id": 1, "name": "Laptop", "price": "999.99"}`).
4. Django returns this JSON to React.
5. React’s `ProductScreen` component sets the JSON data to state and renders it.

### Summary

1. **Core Purpose**: DRF Serializers translate between Django model objects (Python) and JSON (web) for API requests/responses.
2. **Two Modes**:
   - **Serialization**: `ProductSerializer(product)` → converts model to JSON (for API responses).
   - **Deserialization**: `ProductSerializer(data=request.data)` → converts JSON to validated Python data (for creating/updating models).
3. **Key Features**: Auto-validation, custom fields, read-only fields, and integration with Django models via `ModelSerializer`.

For your product screen to work, ensure your DRF serializer includes all the fields React expects (e.g., `id`, `name`, `price`, `countInStock`) and that your Django views return serialized data for the `/api/products/<id>/` endpoint.

1. create 'base/serializers.py'

```py
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, Order, OrderItem, ShippingAddress, Review

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product   // select Product model
        fields = '__all__'  // select all the fields
```

2. create 'base/views.py', remove the products data set

```py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializer import ProductSerializer
# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/products',
        'api/products/create',
        'api/products/upload',
        'api/products/<id>/reviews',
        'api/products/top',
        'api/products/<id>',
        'api/products/delete/<id>',
        'api/products/<update>/<id>',
    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()  // build a queryset to fetch all data from the database
    serializer = ProductSerializer(products, many=True)   // that will return many data
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)  // that will return single data
    return Response(serializer.data)

```

3. after finished the process then build the database and create the data record from product.js file
4. for testing purpose, go makemigrations and migrate and input some data into sqlite3, 
5. testing the `api/products/1/` 

# Step 17 : fronend redux

1. `npm install @reduxjs/toolkit react-redux`

### outdated but just informative What is Redux-Thunk?

`redux-thunk` is a **middleware for Redux** that solves a critical limitation of vanilla Redux: it lets you write **async action creators** (e.g., for API calls like fetching products from your Django backend) instead of only synchronous ones.

To understand why it’s essential, let’s start with the core problem it solves:

---

## 1. The Problem Without Redux-Thunk

Vanilla Redux only allows action creators to return **plain JavaScript objects** (e.g., `{ type: "FETCH_PRODUCTS", payload: data }`). This works for synchronous logic (like incrementing a counter), but fails for async operations (like fetching data from an API):

```javascript
// ❌ THIS FAILS in vanilla Redux (action creators can't return functions!)
const fetchProducts = () => {
  // Axios call is async—vanilla Redux can't handle this
  return async (dispatch) => {
    const res = await axios.get("/api/products/");
    dispatch({ type: "FETCH_PRODUCTS", payload: res.data });
  };
};
```

Redux throws an error here because it expects actions to be plain objects, not functions. This is where `redux-thunk` comes in.

---

## 2. What Redux-Thunk Does (In Simple Terms)

`redux-thunk` modifies Redux’s behavior to:

1. Allow action creators to return **functions** (called "thunks") instead of just plain objects.
2. Pass two arguments to these thunk functions:
   - `dispatch`: The Redux `dispatch` function (to send actions to reducers after async logic completes).
   - `getState`: A function to access the current Redux state (e.g., to get a user token for API auth).
3. Let you run async logic (API calls, timers, etc.) inside these thunk functions, then dispatch plain actions once the async work is done.

### Key Definition:

A **thunk** (in this context) is a function that wraps an asynchronous operation and lets you dispatch actions _after_ the operation finishes.

---

## 3. How to Use Redux-Thunk (Practical Example)

Let’s walk through a real-world example (matching your product screen):

### Step 1: Add Thunk to Your Redux Store

You already installed `redux-thunk`—now add it as middleware to your store:

```javascript
// src/store.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Import thunk
import { composeWithDevTools } from "@redux-devtools/extension"; // just for devtools
import rootReducer from "./reducers";

// Add thunk to middleware (composeWithDevTools for dev tools)
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)), // 👈 Add thunk here
);

export default store;
```

### Step 2: Write an Async Action Creator with Thunk

This is where you’ll fetch products from your Django API:

```javascript
// src/actions/productActions.js
import axios from "axios";
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL,
} from "./types";

// Async action creator (returns a thunk function)
export const fetchProduct = (id) => async (dispatch) => {
  try {
    // 1. Dispatch a "request" action (for loading state)
    dispatch({ type: FETCH_PRODUCT_REQUEST });

    // 2. Run async logic (API call to your Django backend)
    const { data } = await axios.get(`/api/products/${id}`);

    // 3. Dispatch a "success" action with the data (reducer updates state)
    dispatch({
      type: FETCH_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // 4. Dispatch a "fail" action if there's an error
    dispatch({
      type: FETCH_PRODUCT_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};
```

### Step 3: Create a Reducer to Handle the Actions

```javascript
// src/reducers/productReducers.js
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL,
} from "../actions/types";

// Initial state (includes loading/error states for UX)
const initialState = {
  product: null,
  loading: false,
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null }; // Show loading
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload }; // Update with product data
    case FETCH_PRODUCT_FAIL:
      return { ...state, loading: false, error: action.payload }; // Show error
    default:
      return state;
  }
};
```

### Step 4: Use the Thunk in Your React Component

```javascript
// src/screens/ProductScreen.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../actions/productActions";

const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Get state from Redux (product, loading, error)
  const { product, loading, error } = useSelector((state) => state.product);

  // Dispatch the thunk when the component mounts
  useEffect(() => {
    dispatch(fetchProduct(id)); // 👈 Dispatches the thunk function
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{product?.name}</h1>
      <p>Price: ${product?.price}</p>
      {/* Rest of your product UI */}
    </div>
  );
};

export default ProductScreen;
```

---

## 4. Why Redux-Thunk Is Essential for Your App

For your React + Django app, `redux-thunk` is critical because:

- You need to make **async API calls** (fetch products, add to cart, etc.) to your Django backend.
- It lets you handle loading/error states (e.g., show a spinner while fetching data, show an error if the API call fails).
- It keeps your async logic organized (separated from components, in action creators).

---

## 5. Key Features of Redux-Thunk

| Feature               | Benefit                                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Async Action Creators | Write API calls/timers in action creators (not components).                                                                         |
| Access to `getState`  | Use current Redux state in async logic (e.g., get a user token for authenticated API calls: `const token = getState().user.token`). |
| Composable Thunks     | Call thunks from other thunks (e.g., `fetchUser()` → then `fetchUserOrders()`).                                                     |
| Minimal Overhead      | Lightweight (tiny bundle size) and easy to integrate.                                                                               |

---

## 6. Redux-Thunk vs. Redux Toolkit (Bonus)

If you switch to Redux Toolkit (RTK), you don’t need to install `redux-thunk` separately—it’s **included by default** in `configureStore()`. RTK also provides `createAsyncThunk` (a helper to simplify async thunks even further):

```javascript
// RTK example (no manual thunk writing!)
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct", // Action type prefix
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);
```

---

### Summary

1. **Core Purpose**: `redux-thunk` is Redux middleware that allows action creators to return functions (thunks) instead of plain objects—enabling async logic (API calls) in Redux.
2. **Key Use Case**: Fetching data from your Django backend (or any API) and dispatching actions only after the async operation completes.
3. **Critical for UX**: Lets you handle loading/error states (e.g., show spinners, error messages) for async operations.
4. **RTK Integration**: Included by default in Redux Toolkit (no separate installation needed).

React 19 + Django app, `redux-thunk` is the standard way to manage async API calls in Redux—this is exactly what you need to fetch product data from your Django backend!

## **Redux Thunk = a wrapper that lets you write ASYNC functions in Redux actions**

# Normal Redux = ONLY sync (can’t do API calls)
Normal Redux **action creators must return plain objects** immediately:
```javascript
// NORMAL ACTION (only sync, no API, no delay)
const setProducts = (data) => ({
  type: 'SET_PRODUCTS',
  payload: data
});
```
❌ **CANNOT do `fetch` / axios / async / await here**

# Redux Thunk = lets you return an ASYNC FUNCTION
Thunk lets your action **return a function instead of an object** — so you can:
- Fetch data from Django DRF API
- Use `async/await`
- Delay dispatch
- Run logic before sending to Reducer

```javascript
// ASYNC ACTION (THUNK POWER)
export const fetchProducts = () => async (dispatch) => {
  // 1. Call your Django API
  const { data } = await axios.get('/api/products/');

  // 2. Send data to Reducer
  dispatch({
    type: 'PRODUCT_LIST_SUCCESS',
    payload: data
  });
};
```

### What thunk does:
It **wraps** the async function and lets Redux understand it.
What this replaces:
✅ redux@4.2.1 → replaced by RTK
✅ redux-thunk@2.4.2 → BUILT-IN to RTK
✅ @redux-devtools/extension → BUILT-IN to RTK
✅ react-redux@9.1.0 → you still need this (keep it)

2. create store.js
```js
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
  // ✅ Thunk + DevTools ARE AUTO INCLUDED — NO SETUP NEEDED!
});

export default store;
```

3. insert Provider in the index.js
```js
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import "./bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();

```

# Step 18 : reducers

1. src/reducers/productReducers.js
```js
export const productReducer = (state ={ products:[]}, action) => {
    switch (action.type) {
        case "PRODUCT_LIST_REQUEST":
            return {loading: true, products: []};
        case "PRODUCT_LIST_SUCCESS":
            return {loading: false, products: action.payload};
        case "PRODUCT_LIST_FAIL":
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

```

2. insert productReducer in store.js
```js
import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from "./reducers/productReducers"; // import
export const store = configureStore({
  reducer: {
      productList: productReducer,
  },
  // ✅ Thunk + DevTools ARE AUTO INCLUDED — NO SETUP NEEDED!
});

export default store;

```
3. in ther browser check the product list is loaded under dev-tools
4. refactor the constants to external file, create constants/productConstants.js
```js
export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
export const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL";
```
5. create actions/productActions.js
```js
import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from "../constants/productConstants";
import axios from "axios";
export const listProducts = () => async (dispatch) => {
    try {
            dispatch({ type: PRODUCT_LIST_REQUEST }); 
            const { data } = await axios.get("/api/products");
            dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
            dispatch({ type: PRODUCT_LIST_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
}
```

## Redux Action = The TRIGGER that tells the Reducer WHAT to do.**
## **Redux Reducer = The WORKER that actually CHANGES the state.**


# Let’s break down your code to PROVE you’re right
## 1. Your **Action** (`listProducts`)
It’s just a **plan / selection / command** — it does NOT change state directly.
It only:
- sends `type` to tell reducer what to do
- sends `payload` data to reducer

```javascript
export const listProducts = () => async (dispatch) => {
    try {
        // 👇 SEND COMMAND: "START loading"
        dispatch({ type: PRODUCT_LIST_REQUEST }); 

        const { data } = await axios.get("/api/products");

        // 👇 SEND COMMAND: "SUCCESS → save data"
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        // 👇 SEND COMMAND: "FAIL → show error"
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
};
```

---

## 2. Your **Reducer**
It **listens for the action’s command** and **updates the state** accordingly.

```javascript
export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {

        // 👇 WHEN action says "REQUEST"
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] };

        // 👇 WHEN action says "SUCCESS"
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };

        // 👇 WHEN action says "FAIL"
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
```


# The Full Cycle (You now master Redux!)
1. **Component** calls `dispatch(listProducts())`
2. **Action** runs → does API call → **dispatches a TYPE**
3. **Reducer** sees the TYPE → **updates state**
4. **Component** auto-receives new state via `useSelector`

6. refactor the homeScreen to add redux
```js
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const { error, loading, products } = useSelector((state) => state.productList);
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : 
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>}
    </div>
  );
};

export default HomeScreen;

```

# simple UML flow diagram (text + visual)** that shows the **FULL GLOBAL PICTURE** of how Redux works with your `HomeScreen` — exactly matching your code.


---

# 🌍 Global Redux Flow UML (For Your HomeScreen + Django API)
```
┌─────────────────┐      ┌─────────────────┐      ┌────────────────────┐
│                 │      │                 │      │                    │
│  HomeScreen     │      │  Redux Action   │      │  Django DRF API    │
│  (React UI)     │─────▶│  listProducts() │─────▶│  /api/products/    │
│                 │      │  (Async Thunk)  │      │  (Backend)         │
└─────────────────┘      └─────────────────┘      └────────────────────┘
         │                        │                            │
         │                        │                            │
         │                ┌───────▼────────┐                   │
         │                │                │                   │
         │                │ Dispatch 3 Types:                  │
         │                │ 1. PRODUCT_LIST_REQUEST ◀─────────┘
         │                │ 2. PRODUCT_LIST_SUCCESS ◀──────────┘
         │                │ 3. PRODUCT_LIST_FAIL ◀────────────┘
         │                └───────┬────────┘
         │                        │
         │                        │
┌────────▼────────┐      ┌───────▼────────┐      ┌─────────────────┐
│                 │      │                │      │                 │
│  Redux Store    │◀────▶│ productReducer │◀─────│ Update Redux    │
│  (Central State)│      │                │      │ State           │
└─────────────────┘      └────────────────┘      └─────────────────┘
         │
         │
┌────────▼────────┐
│                 │
│  useSelector    │
│  (Get State)    │
│  → loading      │
│  → error        │
│  → products     │
└─────────────────┘
         │
         │
┌────────▼────────┐
│                 │
│  Render UI      │
│  - Loading...   │
│  - Error        │
│  - Product List │
└─────────────────┘
```

---

# 📌 Step-by-Step Flow (Matching Your Code)
### 1. **HomeScreen starts**
- Calls `useDispatch()`
- Runs `useEffect(() => dispatch(listProducts()), [dispatch])`

### 2. **Action `listProducts()` runs**
- Does `axios.get("/api/products")` → calls your **Django backend**
- Sends 1 of 3 action types to reducer:
  - `PRODUCT_LIST_REQUEST` (loading)
  - `PRODUCT_LIST_SUCCESS` (data from DRF)
  - `PRODUCT_LIST_FAIL` (error)

### 3. **productReducer receives action**
- Updates Redux store state:
  - `loading: true/false`
  - `products: [...]`
  - `error: "..."`

### 4. **useSelector reads new state**
- `const { error, loading, products } = useSelector(...)`

### 5. **HomeScreen renders UI**
- Loading → show spinner
- Error → show message
- Success → show products from Django API


# Component Relationship Diagram
```
┌─────────────────────────────────────────────────────────────────┐
│                       [ Frontend React App ]                     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────┐   ┌───────────────────────┐
│    <BrowserRouter>    │   │     <Provider>        │
│    (React Router)     │───│    (react-redux)      │
└───────────┬───────────┘   └───────────┬───────────┘
            │                           │
            ▼                           ▼
┌───────────────────────┐   ┌───────────────────────┐
│     <HomeScreen>      │   │      Redux Store       │
│                       │◄──┤                       │
│ - useDispatch()       │   │ - reducer: productList │
│ - useSelector()       │   │ - state:              │
│ - useEffect()         │   │   • loading            │
│ - renders <Product>   │   │   • products           │
└───────────┬───────────┘   │   • error              │
            │               └───────────┬───────────┘
            │                           │
            ▼                           │
┌───────────────────────┐               │
│     <Product>         │               │
│ - shows image/name/…  │               │
└───────────────────────┘               │
                                          │
            ┌───────────────────────┐     │
            │   Redux Action         │     │
            │   listProducts()       │◄────┘
            │   - async thunk        │
            │   - axios /api/products│
            └───────────┬───────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────────┐
│                     [ Django + DRF Backend ]                     │
│                        /api/products/                            │
└─────────────────────────────────────────────────────────────────┘
```

---

# Layer-by-Layer Explanation (Super Clear)
## 1. Top-Level Wrappers
- `<BrowserRouter>`: handles URL routing
- `<Provider store={store}>`: injects Redux into **all components**

## 2. Page Component: `HomeScreen`
- Uses `useDispatch` to **trigger the Redux action**
- Uses `useSelector` to **read state from Redux**
- Uses `useEffect` to **fetch data on mount**
- Renders a list of `<Product>` components

## 3. UI Component: `Product`
- Dumb/presentational component
- Only receives `product` as prop and displays it
- No logic, no Redux

## 4. Redux Flow
- `HomeScreen` → dispatch `listProducts()`
- Action calls **Django API**
- Action dispatches `REQUEST/SUCCESS/FAIL`
- `productReducer` updates store
- `useSelector` picks up new state
- UI re-renders

## 5. Backend
- Django + DRF serves JSON at `/api/products`
- No templates, only API


## **useSelector = 从 Redux 全局仓库里，“挑出”你要的数据，自动给组件用。**

它的工作只有 **3 步**：

---

# 第 1 步：Redux 有一个 **全局大仓库（Store）**
里面存着所有页面共享的数据，像一个巨大的对象：

```javascript
// Redux Store 里的 state 长这样
state = {
  productList: {
    loading: false,
    products: [{},{},{}],
    error: ''
  },
  cart: { ... },
  user: { ... }
}
```

---

# 第 2 步：useSelector 帮你 **“挑选”数据**
你写：
```javascript
const { loading, products, error } = useSelector( state => state.productList )
```

这句话的意思是：

### **“喂 Redux，把 state 里的 productList 那块数据给我！”**

useSelector 会进入仓库，找到 `state.productList`，把它取出来给你。

---

# 第 3 步：数据变化 → 组件 **自动重新渲染**
这是 useSelector **最神奇的地方**：

### **只要你挑的数据变了，组件自动刷新！**
不需要你手动监听、不需要 setState、不需要刷新页面。

---

# 用生活例子理解（秒懂）
- Redux Store = **家里的冰箱**
- useSelector = **你打开冰箱，拿你要的饮料**
- 饮料变了 → **你杯子里的饮料自动更新**

```
冰箱（Redux Store）
   ↓
useSelector（伸手拿）
   ↓
你的杯子（组件）自动拿到最新数据
```

---

# 为什么你的 HomeScreen 能显示产品？
因为：

```javascript
const { loading, products, error } = useSelector(state => state.productList)
```

意思就是：

1. 从 Redux 拿 `productList`
2. 拿到 `loading` → 显示加载
3. 拿到 `products` → 显示产品列表
4. 拿到 `error` → 显示错误

**而且只要数据变，UI 自动变！**

---

# 超级重点（你必须知道）
## **useSelector 不会改变仓库里的数据！**
它 **只读**！
要改数据必须用：
```javascript
dispatch(动作)
```

