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


7. refactor the loading and error message to bootstrap components
components/Loader.jsx
```jsx
import {Spinner} from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;

```
components/Message.jsx
```jsx
import {Alert} from 'react-bootstrap';
const Message = ({ variant = "info", children }) => {
  return (
    <Alert variant={variant}>
      {children}
    </Alert>
  );
};

export default Message;
```
8. refactor th homescreen
```jsx
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const { error, loading, products } = useSelector((state) => state.productList);
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : 
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

# Step 18b : add in data

1. update constants/productConstants.js
```js
export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
export const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL";

export const PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST";
export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS";
export const PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL";

```

2. update reducers/productReducers.js
```js
import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from "../constants/productConstants";
export const productReducer = (state ={ products:[]}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products: []};
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const productDetailsReducer = (state ={ product: {reviews: []}}, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true, ...state};
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload};
        case PRODUCT_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

```

3. update the store.js for the new reducers
```js
import { configureStore } from '@reduxjs/toolkit';
import { productReducer, productDetailsReducer} from "./reducers/productReducers"; // import
export const store = configureStore({
  reducer: {
      productList: productReducer,
      productDetails: productDetailsReducer,
  },
  // ✅ Thunk + DevTools ARE AUTO INCLUDED — NO SETUP NEEDED!
});

export default store;

```

4. update actions/productActions.js
```js
import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from "../constants/productConstants";
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

export const listProductDetails = (id) => async (dispatch) => {
    try {
            dispatch({ type: PRODUCT_DETAILS_REQUEST }); 
            const { data } = await axios.get(`/api/products/${id}`);
            dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
            dispatch({ type: PRODUCT_DETAILS_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
}

```

5. update Productscreens.jsx
```jsx
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import { listProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
// import products from "../products";
const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);
  return (
    <div>
      <Link to="/" className="btn btn-light my-3"> Go Back
      </Link>
      {
        loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
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
            <ListGroup variant="flush">
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
                  className="w-100 py-2"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
         
        )
      }
       
    </div>
  );
};

export default ProductScreen;

```

# step 18c : add qty

1. update productScreen.jsx, addding qty as dropdown menu and then add event handler to add to cart
```jsx
import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import Rating from "../components/Rating";
import { listProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
// import products from "../products";
const ProductScreen = () => {
  const { id } = useParams();
  const [qty,setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);
  const addToCartHandler = () => {
    console.log("Add to cart", id, qty);
  }
  return (
    <div>
      <Link to="/" className="btn btn-light my-3"> Go Back
      </Link>
      {
        loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
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
            <ListGroup variant="flush">
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
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col xs="auto" className="my-1">
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button onClick={addToCartHandler}
                  className="w-100 py-2"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
         
        )
      }
       
    </div>
  );
};

export default ProductScreen;

```

2. after testing the event handler is getting back to console, refacotor for add to cart
```js
import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import Rating from "../components/Rating";
import { listProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
// import products from "../products";
const ProductScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [qty,setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);
  const addToCartHandler = () => {
    // console.log("Add to cart", id, qty);
    navigate(`/cart/${id}?qty=${qty}`); // re-route to cart with id and qty
  }
  return (
    <div>
      <Link to="/" className="btn btn-light my-3"> Go Back
      </Link>
      {
        loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
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
            <ListGroup variant="flush">
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
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col xs="auto" className="my-1">
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button onClick={addToCartHandler}
                  className="w-100 py-2"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
         
        )
      }
       
    </div>
  );
};

export default ProductScreen;

```

3. add screens/cartScreen.jsx as template for the time being
```jsx

const CartScreen = () => {
  return (
    <div>CartScreen</div>
  )
}

export default CartScreen
```
4. update App.js for cartScreen
```jsx
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />  // set the id as optional
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

```
5. workon cart reducer cycle, add constants/cartConstants.js
```js
export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";
```
6. add reducers/cartReducer.js
```js
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
}
```

## **这个 Reducer 负责管理购物车：添加商品、更新数量、删除商品。**

---
```javascript
// 导入动作类型
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

// 定义 Reducer
// state = { cartItems: [] } → 默认状态：购物车是空数组
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {

    // ==========================================
    // 【1】添加商品到购物车（核心逻辑）
    // ==========================================
    case CART_ADD_ITEM:
      // 1. 拿到要添加的商品（来自 Action 的 payload）
      const item = action.payload;

      // 2. 检查购物车里**是否已经存在这个商品**
      // 判断依据：x.product === item.product（product 是商品 ID）
      const existItem = state.cartItems.find((x) => x.product === item.product);

      // 如果商品已存在 → 更新数量
      if (existItem) {
        return {
          ...state,           // 保留原来的 state 不变
          cartItems: state.cartItems.map((x) =>
            // 如果找到相同商品 → 替换成新的 item（数量更新）
            // 其他商品保持不变
            x.product === existItem.product ? item : x
          ),
        };
      } 

      // 如果商品不存在 → 直接追加到数组末尾
      else {
        return {
          ...state,
          cartItems: [...state.cartItems, item], // 旧数组 + 新商品
        };
      }

    // ==========================================
    // 【2】从购物车删除商品
    // ==========================================
    case CART_REMOVE_ITEM:
      return {
        ...state,
        // filter = 过滤掉要删除的商品
        // 保留：x.product 不等于 action.payload（要删除的商品ID）
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };

    // 默认：不改动状态
    default:
      return state;
  }
};
```

7. register reducer inside store.js
```js
import { configureStore } from '@reduxjs/toolkit';
import { productReducer, productDetailsReducer} from "./reducers/productReducers"; // import
import {cartReducer} from "./reducers/cartReducers";
export const store = configureStore({
  reducer: {
      productList: productReducer,
      productDetails: productDetailsReducer,
      cart: cartReducer,
  },
  // ✅ Thunk + DevTools ARE AUTO INCLUDED — NO SETUP NEEDED!
});

export default store;

```

8. add actions/cartActions.js, save the cart data into localStorage
```js
import axios from "axios";
import { CART_ADD_ITEM ,CART_REMOVE_ITEM} from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}/`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,                   
    payload: id,                        
  });                                       
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));                     
};      
```

# **Super Clear Answer: Where does `getState` come from?**  
I’ll explain this **100% clearly, simply, and visually** — you’ll know forever.

---

# **Shortest Answer**
## **`getState` is automatically given to you by Redux Thunk**  
It is **built into the Redux async action function**  
You **did NOT create it** — Redux Thunk **passes it to you automatically**.

---

# Let’s look at your action:
```javascript
export const addToCart = (id, qty) => async (dispatch, getState) => {
```

This is a **Redux Thunk async action**.

When you write a thunk action (a function that returns a function),  
**Redux Thunk will automatically pass 2 parameters to you**:

1. **`dispatch`** → to send actions to reducer  
2. **`getState`** → to **read the current Redux store state**

---

# So:
### `dispatch` = send data to reducer  
### `getState` = read current data from store  

---

# What does `getState()` return?
It returns the **full Redux store state object**:
```javascript
{
  productList: { ... },
  cart: {
    cartItems: [ ... ]   // ← this is what you want
  }
}
```

So when you write:
```javascript
getState().cart.cartItems
```
You are saying:
> **“Give me the current cart items from the Redux store.”**

---

# Why you need it:
You use it to **save cart to localStorage**:
```javascript
localStorage.setItem(
  "cartItems",
  JSON.stringify(getState().cart.cartItems)
);
```

This makes the cart **persist even after refreshing the page**.

# Visual Flow
```
You dispatch addToCart()
        ↓
Redux Thunk sees it's an async function
        ↓
Thunk gives you:
  - dispatch
  - getState  ← HERE IT IS!
        ↓
You use getState() to read store
        ↓
Save to localStorage
```

9. back to the store.js
```js
import { configureStore } from '@reduxjs/toolkit';
import { productReducer, productDetailsReducer} from "./reducers/productReducers"; // import
import {cartReducer} from "./reducers/cartReducers";

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

// 👇 初始化 Redux 状态
const preloadedState = {
  cart: {
    cartItems: cartItemsFromStorage, // 给 cart reducer 赋值
  },
};

export const store = configureStore({
  reducer: {
      productList: productReducer,
      productDetails: productDetailsReducer,
      cart: cartReducer,
  },
  // ✅ Thunk + DevTools ARE AUTO INCLUDED — NO SETUP NEEDED!
  preloadedState : preloadedState
});

export default store;

```
10. update cartscreen.js, functional part
```jsx
import {Row, Col, Form, Button, ListGroup, Card, Image} from "react-bootstrap";
import {Message} from "../components/Message";
import { useEffect } from "react";
import {addToCart} from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
const CartScreen = ( ) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const qty = loaction.search ? Number(loaction.search.split("=")[1]) : 1;
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    useEffect(() => {
        if(id){
            dispatch(addToCart(id, qty));
        }
    }, [dispatch, id, qty]);
  return (
    <div>CartScreen</div>
  )
}

export default CartScreen
```

### **useLocation = 拿 URL 地址栏的数据**

# 1. 什么是 `useLocation()`？
**它只和 URL 有关！**

例子：
你跳转到：
```
/cart/66123?qty=2
```

`useLocation()` 会给你：
- **pathname**: `/cart/66123`
- **search**: `?qty=2`
- **hash**: ...

# 3. 你的购物车真正的流程（超级清晰）
```
1. 商品页点击 ADD TO CART
   ↓
2. 跳转到 /cart/:id?qty=2
   ↓
3. CartScreen 使用 useLocation() 拿到 ?qty=2
   ↓
4. dispatch(addToCart(id, qty))
   ↓
5. Redux 更新购物车
   ↓
6. 保存到 localStorage
   ↓
7. store.js 从 localStorage 读取初始状态
```
11. add the UI part + event handlers
```jsx
import {Row, Col, Form, Button, ListGroup, Card, Image} from "react-bootstrap";
import Message from "../components/Message";
import { useEffect } from "react";
import {addToCart, removeFromCart} from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
const CartScreen = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const qty = location.search ? Number(location.search.split("=")[1]) : 1;
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    useEffect(() => {
        if(id){
            dispatch(addToCart(id, qty));
        }
    }, [dispatch, id, qty]);
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        navigate('/login?redirect=shipping')
    }

  return (
  <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message variant='info'>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </Message>
                ) : (
                        <ListGroup variant='flush'>
                            {cartItems.map(item => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>

                                        <Col md={2}>
                                            ${item.price}
                                        </Col>

                                        <Col md={3}>
                                            <Form.Control
                                                as="select"
                                                value={item.qty}
                                                onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                            >
                                                {

                                                    [...Array(item.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }

                                            </Form.Control>
                                        </Col>

                                        <Col md={1}>
                                            <Button
                                                type='button'
                                                variant='light'
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
            </Col>

            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup.Item>
                        <Button
                            type='button'
                            className='w-100 py-2'
                            disabled={cartItems.length === 0}
                            onClick={checkoutHandler}
                        >
                            Proceed To Checkout
                        </Button>
                    </ListGroup.Item>


                </Card>
            </Col>
        </Row>
  )
}

export default CartScreen
```
variant="flush" = 让 ListGroup 去掉默认边框、圆角、内边距，变成 “贴边、无边框” 的纯线条列表。

12. minor update of index.css
```css
main {
  min-height: 100vh;
}
h1 {
  font-size: 1.8rem;
  padding: 1rem 0;
}
h2 {
  font-size: 1.4rem;
  padding: 0.5rem 0;
}
h3 {
  
  padding: 1rem 0;
}
.rating span {
  margin: 0.1rem;
}

```

# Step 19 postman for authentication

1. postman create workplace

# Step 20 django rest framework for authentication simplyjwt

# **Django REST Framework 认证方式：最全、最直白、最实用对比（电商/React 项目专用）**

# **1. TokenAuthentication（最简单的 Token）**
你最常见的：`Authorization: Token 93as93ksd32...`

### ✅ 优点
- 超级简单，5 分钟集成
- 适合小型项目、练习项目
- 前后端分离支持

### ❌ 缺点
- **Token 永久有效，除非手动删除**（不安全）
- 无自动过期
- 无刷新机制
- 不适合大型、正式电商项目

### 🎯 适合谁？
**初学、小项目、课程作业**

---

# **2. JWT Authentication（最流行！Json Web Token）**
分两种：`Simple JWT` / `JWT`

### ✅ 优点
- **有过期时间（安全）**
- **有 Refresh Token（刷新机制）**
- 无状态，不占服务器存储
- **前后端分离首选**
- **你的 React + Django 电商项目 最适合这个！**

### ❌ 缺点
- 不能手动作废（除非用黑名单）
- 比 Token 复杂一点点

### 🎯 适合谁？
**90% 的正式前后端项目 → 包括你！**

---

# **3. SessionAuthentication（浏览器 Cookie 认证）**
Django 传统登录，用 cookie + session

### ✅ 优点
- 安全
- Django 自带
- 适合模板项目（不前后端分离）

### ❌ 缺点
- **前后端分离跨域问题巨多**
- 不适合纯前端 React 项目
- 移动端不友好

### 🎯 适合谁？
**不适合你！** 只适合 Django 模板渲染。

---

# **4. BasicAuthentication（基础认证）**
直接把用户名密码 base64 编码放请求头

### ✅ 优点
- 测试用很方便

### ❌ 缺点
- **超级不安全**
- 不能用于生产
- 几乎不用

### 🎯 适合谁？
**只用于本地测试**

---

# **5. OAuth2 认证（第三方登录：Google / GitHub / 微信）**

### ✅ 优点
- 用户登录方便
- 大厂标准

### ❌ 缺点
- 复杂
- 需要第三方平台
- 小型项目没必要

### 🎯 适合谁？
**需要第三方登录的大型应用**

---

# **6. Knox / DRF Token 增强版**
比默认 Token 更安全，支持过期

### ✅ 优点
- 比默认 Token 安全
- 服务器存储 Token

### ❌ 缺点
- 不如 JWT 流行

---

---

# **🔥 终极结论：你的项目应该用哪个？**
## **你的项目：React + Django 电商 → 必须用 JWT（Simple JWT）**

### 为什么？
1. **前后端分离最佳方案**
2. **有过期时间，安全**
3. **有刷新机制**
4. **移动端、网页端通用**
5. **电商项目必须用这个**

---

# **最直白总结表（你存这张表就够）**
| 认证方式 | 安全性 | 难度 | 前后端分离 | 适合你的项目？ |
|---------|--------|------|------------|----------------|
| Token | ⭐⭐ | 简单 | ✅ | ❌ 不推荐 |
| **JWT** | ⭐⭐⭐⭐⭐ | 中等 | ✅ ✅ ✅ | **✅ 最佳选择** |
| Session | ⭐⭐⭐⭐ | 简单 | ❌ | ❌ 不适合 |
| Basic | ⭐ | 最简单 | ✅ | ❌ 测试用 |
| OAuth2 | ⭐⭐⭐⭐⭐ | 难 | ✅ | ❌ 复杂 |

1. `pip install djangorestframework-simplejwt`
2. https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html
3. follow the doc, add a section into settings.py
```py
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
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}

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

4. base/urls.py
```py
from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView
urlpatterns = [
    path('users/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.getRoutes, name="routes"),
    path("products/", views.getProducts, name="products"),
    path("products/<str:pk>/", views.getProduct, name="product"),
]
```
5. testing the urls
6. want to change the token time by addition all the parameters into settings.py
7. https://django-rest-framework-simplejwt.readthedocs.io/en/latest/settings.html
```py settings.py
from pathlib import Path
from datetime import timedelta
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
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}


SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(days=5),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
    "ROTATE_REFRESH_TOKENS": False,
    "BLACKLIST_AFTER_ROTATION": False,
    "UPDATE_LAST_LOGIN": False,
    "ALGORITHM": "HS256",
    "VERIFYING_KEY": "",
    "AUDIENCE": None,
    "ISSUER": None,
    "JSON_ENCODER": None,
    "JWK_URL": None,
    "LEEWAY": 0,

    "AUTH_HEADER_TYPES": ("Bearer",),
    "AUTH_HEADER_NAME": "HTTP_AUTHORIZATION",
    "USER_ID_FIELD": "id",
    "USER_ID_CLAIM": "user_id",
    "USER_AUTHENTICATION_RULE": "rest_framework_simplejwt.authentication.default_user_authentication_rule",
    "ON_LOGIN_SUCCESS": "rest_framework_simplejwt.serializers.default_on_login_success",
    "ON_LOGIN_FAILED": "rest_framework_simplejwt.serializers.default_on_login_failed",

    "AUTH_TOKEN_CLASSES": ("rest_framework_simplejwt.tokens.AccessToken",),
    "TOKEN_TYPE_CLAIM": "token_type",
    "TOKEN_USER_CLASS": "rest_framework_simplejwt.models.TokenUser",

    "JTI_CLAIM": "jti",

    "SLIDING_TOKEN_REFRESH_EXP_CLAIM": "refresh_exp",
    "SLIDING_TOKEN_LIFETIME": timedelta(minutes=5),
    "SLIDING_TOKEN_REFRESH_LIFETIME": timedelta(days=1),

    "TOKEN_OBTAIN_SERIALIZER": "rest_framework_simplejwt.serializers.TokenObtainPairSerializer",
    "TOKEN_REFRESH_SERIALIZER": "rest_framework_simplejwt.serializers.TokenRefreshSerializer",
    "TOKEN_VERIFY_SERIALIZER": "rest_framework_simplejwt.serializers.TokenVerifySerializer",
    "TOKEN_BLACKLIST_SERIALIZER": "rest_framework_simplejwt.serializers.TokenBlacklistSerializer",
    "SLIDING_TOKEN_OBTAIN_SERIALIZER": "rest_framework_simplejwt.serializers.TokenObtainSlidingSerializer",
    "SLIDING_TOKEN_REFRESH_SERIALIZER": "rest_framework_simplejwt.serializers.TokenRefreshSlidingSerializer",

    "CHECK_REVOKE_TOKEN": False,
    "REVOKE_TOKEN_CLAIM": "hash_password",
    "CHECK_USER_IS_ACTIVE": True,
}


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

8. add more user info inside the token https://django-rest-framework-simplejwt.readthedocs.io/en/latest/customizing_token_claims.html
9. base/views.py, copy 2 classes into views.py
```py views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializer import ProductSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['message'] = "hello world"
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

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
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)
```
10. update the urls.py, using the new views
```py
from django.urls import path
from . import views

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.getRoutes, name="routes"),
    path("products/", views.getProducts, name="products"),
    path("products/<str:pk>/", views.getProduct, name="product"),
]
```
11. copy the access token and paste into jwt.io to decode the token
12. refactor the validation of the token
```py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializer import ProductSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data['username'] = self.user.username
        data['email'] = self.user.email
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

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
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)
```


This is **customizing SimpleJWT login** to **return more user info** (like `username` + `email`) **when you log in**.

## **1. Default SimpleJWT Login Response (NORMAL)**
By default, when you log in, SimpleJWT only returns:
```json
{
  "access": "eyJblabla...",
  "refresh": "eyJblabla..."
}
```
❌ **No username, no email — only tokens.**

---

## **2. Your Code: CUSTOMIZE the Response**
You are **extending the default JWT response** to add **user data**.

### Step 1: Custom Serializer
```python
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        # 1. Run the original validation (check username/password)
        data = super().validate(attrs)

        # 2. ADD YOUR OWN DATA to the response
        data['username'] = self.user.username
        data['email'] = self.user.email

        # 3. Return the new data
        return data
```

### Step 2: Custom View
```python
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
```

---

## **3. What happens NOW when you log in?**
You get **tokens + user info**:
```json
{
  "access": "eyJblabla...",
  "refresh": "eyJblabla...",
  "username": "john_doe",
  "email": "john@example.com"
}
```
✅ **Perfect for your React frontend!**

---

# **What does each part mean?**

### **1. `super().validate(attrs)`**
- Runs the **original SimpleJWT validation**
- Checks if username + password are correct
- Returns the default token response: `{access: ..., refresh: ...}`

### **2. `self.user`**
- After successful validation, SimpleJWT sets `self.user`
- This is the **actual logged-in User object**
- So you can grab:
  - `self.user.username`
  - `self.user.email`
  - `self.user.id`
  - `self.user.first_name`
  - etc.

### **3. Add fields to `data`**
You just **add new keys** to the response.

### **4. `MyTokenObtainPairView`**
- This is the login API endpoint
- It uses **your custom serializer** instead of the default one
- So your API now returns extra user fields

---

# **Why you need this (for React)**
When a user logs in:
1. You get the **token** (for authentication)
2. You get **user info** (to show in Navbar: Welcome, john_doe!)
3. No need for a SECOND API call to fetch user profile

**This is clean and efficient!**

```python
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
```

## **Shortest Answer:**
### **This line tells Django:**
> *“Use MY CUSTOM serializer instead of the default one for the login/token endpoint.”*

It **does NOT create tokens** — it just **swaps the serializer**.

---

# Let’s go step by step

## 1. What is `TokenObtainPairView`?
It’s the **built-in SimpleJWT view** that does 2 things:
1. Accept username + password
2. Return `access` and `refresh` tokens

It’s the **login API view**.

---

## 2. What does `MyTokenObtainPairView(TokenObtainPairView)` mean?
It means:
### **“Make a NEW view that is IDENTICAL to TokenObtainPairView — but I will change one thing.”**

This is called **inheriting / extending** the original view.

---

## 3. What is `serializer_class = ...`?
Every DRF view uses a **serializer** to:
- Validate input (username/password)
- Format output (the JSON response)

By default:
```python
serializer_class = TokenObtainPairSerializer
```

**You override it:**
```python
serializer_class = MyTokenObtainPairSerializer
```

### So now:
The login view will use **your custom serializer** instead of the original.

---

# What does your serializer do again?
```python
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)  # RUNS DEFAULT LOGIN + GET TOKENS
        data['username'] = self.user.username  # ADD EXTRA DATA
        data['email'] = self.user.email        # ADD EXTRA DATA
        return data
```

### This serializer:
1. **Validates login** (username & password)
2. **Generates tokens** (the default behavior)
3. **Adds extra fields** to the response
4. **Returns the final JSON**

---

# #1 Full Flow (Exact Behavior)
1. User sends username + password → `MyTokenObtainPairView`
2. View uses **your serializer**
3. Serializer:
   - Checks credentials
   - Generates token pair
   - Adds `username` and `email`
4. View returns the JSON to React

---

# #2 Does it “get token value pair and serialize”?
### **YES — exactly!**
But more precisely:

1. It **generates the token pair** (via `super().validate()`)
2. It **serializes** (formats) the final JSON response
3. You added extra fields to that serialized output

# step 21 user serializer

1. update base/serializers.py
```py
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, Order, OrderItem, ShippingAddress, Review

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

```
2. update view.py

```py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializer import ProductSerializer, UserSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data['username'] = self.user.username
        data['email'] = self.user.email
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

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
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

```

3. update urls.py
```py
from django.urls import path
from . import views

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.getRoutes, name="routes"),
    path("products/", views.getProducts, name="products"),
    path("user/profile/", views.getUserProfile, name="user-profile"),
    path("products/<str:pk>/", views.getProduct, name="product"),
]

```

# **最短结论：**
### **`request.user` = 当前**已经登录的用户对象**（Django User 模型）**
### 它**不是 ID，不是字符串，不是 token**
### 它是**完整的用户数据 + 方法**

---

# **里面到底有什么？（全部字段）**
当你用 **JWT 认证** 访问这个 API 时：
```python
user = request.user
```

`user` 里面包含 **Django User 模型的所有内容**：
```python
user.id
user.username  # 用户名
user.email     # 邮箱
user.first_name
user.last_name
user.password  # 哈希后的密码
user.is_active # 是否激活
user.is_staff  # 是否管理员
user.is_superuser # 是否超级管理员
user.date_joined # 注册时间
user.last_login # 最后登录
```

✅ **这就是你能序列化返回给 React 的全部信息！**

---

# **它是怎么来的？（关键！）**
你不需要传用户 ID  
你不需要传用户名  
**只需要传 JWT token**

流程：
1. React 发送请求 → Header 带 `Bearer <token>`
2. SimpleJWT 认证类 **自动验证 token**
3. 验证成功 → **把对应的用户放进 `request.user`**
4. 你直接用 `request.user` 就能拿到当前登录用户

---

# **你的代码做了什么？**
```python
@api_view(['GET'])
def getUserProfile(request):
    user = request.user  # 拿到当前登录用户
    serializer = UserSerializer(user)  # 序列化成 JSON
    return Response(serializer.data)  # 返回给前端
```

### 返回结果示例：
```json
{
  "id": 5,
  "username": "john_doe",
  "email": "john@example.com",
  "first_name": "John",
  "last_name": "Doe"
}
```

---

# **最重要的 3 个事实（你必须记住）**
## 1. **`request.user` 永远是当前登录的用户**
## 2. **只有认证通过后才存在**（否则是匿名用户）
## 3. **它是 ORM 对象，你可以直接存、改、查**

例如：
```python
# 改邮箱
request.user.email = "new@example.com"
request.user.save()

# 改密码
request.user.set_password("newpassword")
request.user.save()
```

---

# **超级白话总结**
### **`request.user` = 你登录后的“用户本人”**
### 谁发了有效的 Token，谁就是 `request.user`

This is the **most important insight** for DRF + JWT authentication.

### 1. Normal Django (HTML/templates):
**`request.user` = Session/Cookie Login User**
*(Comes from browser cookie)*

### 2. DRF with `@api_view` + JWT:
**`request.user` = Token User**
*(Comes from the `Authorization: Bearer <token>` header)*

---

# **What This Really Means (The Magic)**
When you use **SimpleJWT** with your API:

1. The front-end (React) sends a request with a **Token**
2. The **JWT Authentication Class** (in your settings) intercepts the request
3. It **decodes & validates the Token**
4. It **finds the matching User** in the database
5. It **attaches that User object to `request.user`**
6. **Your View/Function runs**

### So:
**You don’t need to send `user_id` or `username`**
**The Token itself tells the backend WHO IS MAKING THE REQUEST.**

---

# **Proof in Your Code**
```python
# This works BECAUSE JWT set request.user for you
@api_view(['GET'])
def getUserProfile(request):
    # 👇 This user is EXTRACTED FROM THE TOKEN, NOT from a form/URL
    user = request.user 
    serializer = UserSerializer(user)
    return Response(serializer.data)
```

---

# **Final, Super-Clear Rule**
## **In your API (@api_view):**
### **`request.user` = The user identified by the JWT Token**
### **Whoever owns the Token is the `request.user`**

## **Once you set up DRF + JWT:
Django **NO LONGER checks sessions/cookies** for your API views.
It **ONLY checks the Token** in the request header.**

---

# Here’s the proof (from your `settings.py`)
```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ]
}
```

### This setting tells Django REST Framework:
### **“For ALL API requests — ONLY use JWT auth.
### DO NOT use Session Auth. DO NOT look for cookies.”**

---

# So the flow is now **exclusively token-based**:
1. React sends:
   ```
   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```
2. DRF reads **only the token**
3. Validates token
4. Finds user
5. Assigns user to `request.user`

### **Session ID? Cookie? Django ignores them completely for APIs.**

---

# **What if you still have login via Django Admin?**
The Django Admin (`/admin/`) still uses sessions.
### **BUT YOUR API (@api_view) DOES NOT. It’s fully separated.**

---

# **Your Final Understanding Is Perfect:**
### Normal Django → checks session/cookie
### DRF API + JWT → **only checks token**
### `request.user` → comes **from token, not session**

4. in order to test the login, we need postman, not browser
testing is good under postman

5. refactor the serilaizer for custom user name
```py
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product
// how the user related fields send back to front end
class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin', '_id']
    def get__id(self, obj):
        return obj.id
    def get_isAdmin(self, obj):
        return obj.is_staff
    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

```
6. refactor the serilaizer add refresh token
```py
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Product

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin', '_id']
    def get__id(self, obj):
        return obj.id
    def get_isAdmin(self, obj):
        return obj.is_staff
    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin', '_id', 'token']
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

```

## **Access Token = Short‑lived → For accessing APIs**
## **Refresh Token = Long‑lived → For getting NEW Access Tokens**

## **Why two?**
### **FOR SECURITY.**  
If you only had **one token**, and it got stolen – hackers can use it **forever**.  
With two tokens:  
- **Access Token expires fast** (30 mins) → stolen token is useless quickly.  
- **Refresh Token stays safe** (only used to get new access tokens).

---

# **2. Analogy: Hotel Key Card (You’ll Remember Forever)**
Think of your app like a **hotel**:

- **Access Token** = 🚪 **Room Key**  
  - Opens your room, buys food, uses facilities  
  - **Expires in 1-2 hours**  
  - If lost → only usable for a short time

- **Refresh Token** = 📝 **Hotel Reception Card**  
  - **Only used to get a NEW room key**  
  - Valid for **1 day or more**  
  - Never used to open rooms directly  
  - If lost → can’t enter rooms, only get new keys (easily revoked)

---

# **3. Real Technical Explanation**
## **Access Token**
- **Lifetime**: 30 minutes (short)
- **Sent with EVERY API request**
- Used to authenticate you for:
  - `/api/products`
  - `/api/users/profile`
  - `/api/orders`
- **If stolen**: Only usable for 30 mins → very secure

## **Refresh Token**
- **Lifetime**: 1 day or 7 days (long)
- **ONLY sent to ONE endpoint**:
  - `/api/token/refresh/`
- **Job**: ONLY to get a NEW Access Token
- **Never sent to normal APIs** → low risk
- **If stolen**: Can’t access data – only get new tokens (easily blacklisted)

---

# **4. Why We CANNOT Use Only One Token**
If you use **one long-lived token**:
- If a hacker steals it → they can **use your account forever**
- **No way to automatically expire it**
- **HIGH RISK** (especially for e-commerce with payments)

With **two tokens**:
- Access token expires fast → limited damage
- Refresh token is rarely used → safer
- You can **rotate & blacklist** refresh tokens

---

# **5. How They Work Together (Your React + Django Flow)**
### Step 1: User logs in  
→ Get **Access + Refresh Token**

### Step 2: Use Access Token for requests
```
GET /api/profile
Authorization: Bearer ACCESS_TOKEN
```

### Step 3: After 30 mins → Access Token EXPIRES
→ API returns `401 Unauthorized`

### Step 4: Auto login with Refresh Token
```
POST /api/token/refresh/
refresh: REFRESH_TOKEN
```
→ Get **NEW Access Token**

### Step 5: Continue using app – **user never logs out**

---

# **6. SimpleJWT Default Settings (Your Settings)**
```python
SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=30),  # SHORT
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),     # LONG
}
```

---

# **7. Final Summary (Must Memorize)**
| Token | Purpose | Lives | Sent where | Risk |
|---|---|---|---|---|
| **Access Token** | Access APIs | 30 mins | Every request | Low (expires fast) |
| **Refresh Token** | Get new Access Token | 1 day | Only 1 endpoint | Very low |

## **Why two tokens?**
### **MAXIMUM SECURITY for your e-commerce app.**

7. because we add som many fields, we refactor the views.py to loop the serializer with token
```py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializer import ProductSerializer, UserSerializer, UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        seializer = UserSerializerWithToken(self.user).data
        for k, v in seializer.items():
            data[k] = v
        return data
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

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
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

```

8. add access permission to routes

```py

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from .models import Product
from django.contrib.auth.models import User
from .serializer import ProductSerializer, UserSerializer, UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        seializer = UserSerializerWithToken(self.user).data
        for k, v in seializer.items():
            data[k] = v
        return data
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

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
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)
```


## Step 22 regidter user
1. refactor view.py
```py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from .models import Product
from django.contrib.auth.models import User
from .serializer import ProductSerializer, UserSerializer, UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from rest_framework import status
# Create your views here.
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        seializer = UserSerializerWithToken(self.user).data
        for k, v in seializer.items():
            data[k] = v
        return data
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)    


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

```
2. update urls.py
```py
from django.urls import path
from . import views

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/', views.registerUser, name='register'),
    path("products/", views.getProducts, name="products"),
    path("users/profile/", views.getUserProfile, name="user-profile"),
    path("users/", views.getUsers, name="users"),
    path("products/<str:pk>/", views.getProduct, name="product"),
]

```
## step 23 django signals
1. a demo of how to link 2 data fields together. Now, username is using email, if email is changed, username is also changed, so we use django signals to handle this


## **Django Signals = 触发器 / 事件监听**
### **当某个事情发生时 → 自动执行一段代码**
在 Django 里：
- **用户保存（save）时**
- **用户删除（delete）时**
- **订单创建时**
→ **自动跑你写的函数**

这就是 **Signals（信号）**。

# **Django 有哪些自带信号？**
最常用的 4 个：

1. **post_save** → 对象**保存后**触发
2. **pre_save** → 对象**保存前**触发
3. **post_delete** → 对象**删除后**触发
4. **pre_delete** → 对象**删除前**触发

---

# **实际例子：用户注册 → 自动创建用户资料**
你一定用得上！

## 场景：
当 **User 表创建新用户**
→ **自动创建 Profile 资料表**

不用手动写代码，信号自动执行！

## 代码长这样：
```python
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from .models import Profile

# 当 User 被保存后 → 执行下面函数
@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    # created = True 代表是“新创建”
    if created:
        # 自动创建 Profile
        Profile.objects.create(user=instance)
```

## 解释每个参数：
- **sender** → 谁发送的信号（这里是 User）
- **instance** → 刚刚被保存的那个用户对象
- **created** → 是否是新创建的（True/False）

---

# **信号到底怎么工作？（流程）**

## 1. 发生动作
```
user = User.objects.create_user(...)
user.save()
```

## 2. Django 自动发出信号
```
post_save 信号发出！
```

## 3. 你的 @receiver 收到信号
```
@receiver(post_save, sender=User)
```

## 4. 自动执行函数
```
Profile.objects.create(user=instance)
```

## 5. 完成！
你**完全没有手动调用**这个函数，它**自动跑了**。

---

# **你什么时候会用到信号？**
这些场景 **100% 用信号**：
- 用户注册 → 创建用户资料
- 用户下单 → 减库存
- 用户评论 → 发通知
- 日志记录
- 数据自动更新

---

# **优点 vs 缺点**

## 优点
✅ 代码解耦
✅ 自动执行，不用手动调用
✅ 逻辑清晰

## 缺点
⚠️ 太多信号会让流程变复杂
⚠️ 不容易调试



2. create signals.py
```py
from django.db.models.signals import pre_save
from django.contrib.auth.models import User

def updateUser(sender,instance, **kwargs):
    user = instance
    if user.email != '':
        user.username = user.email  
pre_save.connect(updateUser, sender=User)


```

3. update the base/app.py
```py
from django.apps import AppConfig

class BaseConfig(AppConfig):
    name = 'base'
    def ready(self):
        import base.signals
        return super().ready()
```

## step 24 refactor base into sub-folders
1. refactor config/urls.py
```py

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/products', include('base.urls.product_urls')),
    path('api/users', include('base.urls.user_urls')),
    path('api/orders', include('base.urls.order_urls')),
    path('admin/', admin.site.urls),
    
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```
2. create views folder under base and create 3 files, products.py, users.py, orders.py, copy users part into users.py update the . to base.
```py users.py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from django.contrib.auth.models import User
from base.serializer import UserSerializer, UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password
from rest_framework import status


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)    


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

```

3. update products.py
```py products.py

from rest_framework.decorators import api_view
from rest_framework.response import Response
from base.models import Product
from base.serializer import ProductSerializer


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

```
4. delete the base/views.py
5. create a urls.py folder under base, create 3 files, product_urls.py, user_urls.py, order_urls.py, copy users part into users.py update the . to base.
```py user_urls.py
from django.urls import path
from base.views import user_views as views


urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),

    path('register/', views.registerUser, name='register'),

    path('profile/', views.getUserProfile, name="users-profile"),
    path('', views.getUsers, name="users"),
]

```
6. product_urls.py
```py
from django.urls import path
from base.views import product_views as views

urlpatterns = [

    path('', views.getProducts, name="products"),
    path('<str:pk>/', views.getProduct, name="product"),
   
]

```
7. delete base/urls.py

## step 25 frontend user auth

1. after creating the backend api for users, we can now create the frontend user auth system
2. refacor the productactions.js error handling from `message` to `detail`

# **Super Clear Answer: `message` vs `detail` in Your API Error**

### **`message` = default JavaScript/Axios error**
### **`detail` = DJANGO REST FRAMEWORK’S standard error field**

Your backend **always sends errors in a field called `detail`**, not `message`.
That’s why you **must use `error.response.data.detail`** in your frontend.

---

# #2 Let’s Visualize This

## When Django throws an error (like 401, 404, 400)
It **always returns JSON like this**: (cross check with postman )
```json
{
  "detail": "Not found"
}
```
```json
{
  "detail": "Authentication credentials were not provided"
}
```

### ✅ Django uses `detail` — **not** `message`

---

## If you use `error.response.data.message`
You’re looking for a field that **does NOT exist**:
```json
{
  "message": "This does NOT exist in Django → YOU GET UNDEFINED"
}
```

### ❌ So your frontend would show `undefined` as error

---

# #3 Full Explanation of Your Code
```javascript
payload: error.response && error.response.data.detail
? error.response.data.detail
: error.message
```

### This code is **SAFE & SMART** — it does 2 things:

1. **First try `error.response.data.detail`**
   → For **Django API errors** (the real error from backend)

2. **If that doesn’t exist, fall back to `error.message`**
   → For **network/Axios errors** (like no internet, CORS, server down)

---

# #4 Real Examples

## Case 1: Django returns 404 Not Found
Backend sends:
```json
{ "detail": "Product not found" }
```
Frontend uses:
```javascript
error.response.data.detail → "Product not found" ✅
```

## Case 2: Internet is broken
Axios auto-generates:
```javascript
error.message → "Network Error" ✅
```

---

# #5 Final Refactored Code (Clean & Correct)
Your code is **already perfect** — just clean it up a bit:

```javascript
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response?.data?.detail || error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response?.data?.detail || error.message,
    });
  }
};
```

### I used modern optional chaining:
`error.response?.data?.detail`
= same logic, cleaner code


3. create constnants/userConstants.js
```js
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'

export const USER_LOGOUT = 'USER_LOGOUT'
```

4. create reducers/userReducers.js
```js
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,


} from '../constants/userConstants'


export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }

        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}


```
5. register the reducers inside store.js
```js
import { configureStore } from '@reduxjs/toolkit';
import { productReducer, productDetailsReducer} from "./reducers/productReducers"; // import
import {cartReducer} from "./reducers/cartReducers";
import { userLoginReducer } from './reducers/userReducers';
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

// 👇 初始化 Redux 状态
const preloadedState = {
  cart: {
    cartItems: cartItemsFromStorage, // 给 cart reducer 赋值
  },
};

export const store = configureStore({
  reducer: {
      productList: productReducer,
      productDetails: productDetailsReducer,
      cart: cartReducer,
      userLogin: userLoginReducer,

  },
  // ✅ Thunk + DevTools ARE AUTO INCLUDED — NO SETUP NEEDED!
  preloadedState : preloadedState
});

export default store;

```
6. create actions/userActions.js
```js
import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

} from '../constants/userConstants'


export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/users/login/',
            { 'username': email, 'password': password },
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))   // add into localStorage

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


```
7. back to the store add the localStorage data check
```js store.js
import { configureStore } from '@reduxjs/toolkit';
import { productReducer, productDetailsReducer} from "./reducers/productReducers"; // import
import {cartReducer} from "./reducers/cartReducers";
import { userLoginReducer } from './reducers/userReducers';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const userInfoFromStorage = localStorage.getItem('userInfo')  // check the localStorage
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
// 👇 初始化 Redux 状态
const preloadedState = {
  cart: {
    cartItems: cartItemsFromStorage, // 给 cart reducer 赋值
  },
  userLogin: {
    userInfo: userInfoFromStorage, // 给 userLogin reducer 赋值
  }
};

export const store = configureStore({
  reducer: {
      productList: productReducer,
      productDetails: productDetailsReducer,
      cart: cartReducer,
      userLogin: userLoginReducer,

  },
  // ✅ Thunk + DevTools ARE AUTO INCLUDED — NO SETUP NEEDED!
  preloadedState : preloadedState
});

export default store;

```

8. components/formContainer.jsx
```jsx
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function FormContainer({ children }) {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer
```
9.  create screens/loginScreen.jsx, declare variables, create jsx then add the useeffect
```jsx
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

function LoginScreen() {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const userLogin = useSelector(state => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='email' className='mb-3'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId='password' className='mb-4'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Sign In
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer? <Link
                        to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Register
                        </Link>
                </Col>
            </Row>

        </FormContainer>
    )
}

export default LoginScreen
```

10. app.js add the loginscreen
```js
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

```


## step 26 user in navbar and logout
1. add dispatch inside the header.jsx
```jsx
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
const Header = () => {
   const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const dispatch = useDispatch()
   const logoutHandler = () => {
        console.log('logout')
    }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler} >Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                    <LinkContainer to='/login'>
                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                    </LinkContainer>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

```
2. for the logout, add the logout inside userAction.js
```js
import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

} from '../constants/userConstants'


export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/users/login/',
            { 'username': email, 'password': password },
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
   
}

```
3. back to Header.jsx
```jsx
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions'
const Header = () => {
   const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const dispatch = useDispatch()
   const logoutHandler = () => {
        dispatch(logout())
    }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler} >Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                    <LinkContainer to='/login'>
                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                    </LinkContainer>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

```

## step 27 register page
1. add constants inside userConstants for register
```js
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'

export const USER_LOGOUT = 'USER_LOGOUT'

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'

```
2. update reducers/userReducers.js
```js
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

} from '../constants/userConstants'


export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }

        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }

        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}


```
3. update store.js
```js
import { configureStore } from '@reduxjs/toolkit';
import { productReducer, productDetailsReducer} from "./reducers/productReducers"; // import
import {cartReducer} from "./reducers/cartReducers";
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
// 👇 初始化 Redux 状态
const preloadedState = {
  cart: {
    cartItems: cartItemsFromStorage, // 给 cart reducer 赋值
  },
  userLogin: {
    userInfo: userInfoFromStorage, // 给 userLogin reducer 赋值
  },
  
};

export const store = configureStore({
  reducer: {
      productList: productReducer,
      productDetails: productDetailsReducer,
      cart: cartReducer,
      userLogin: userLoginReducer,
      userRegister: userRegisterReducer,

  },
  // ✅ Thunk + DevTools ARE AUTO INCLUDED — NO SETUP NEEDED!
  preloadedState : preloadedState
});

export default store;

```
4. update actions/userActions.js
```js
import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
} from '../constants/userConstants'


export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/users/login/',
            { 'username': email, 'password': password },
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
   
}

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/users/register/',
            { 'name': name, 'email': email, 'password': password },
            config
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
// after register, then go to login
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
```
5. create registerscreens.jsx
```jsx
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

function RegisterScreen() {
    const location = useLocation()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password != confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }

    }

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        required
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='passwordConfirm'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Register
                </Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    Have an Account? <Link
                        to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                        Sign In
                        </Link>
                </Col>
            </Row>
        </FormContainer >
    )
}

export default RegisterScreen
```
6. update app.js
```js
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
             <Route path="/register" element={<RegisterScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

```

## step 28 update user profile
1. backto backend, we will add feature for user to edit their own profile, update user_views.py
```py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from django.contrib.auth.models import User
from base.serializer import UserSerializer, UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password
from rest_framework import status


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)    

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)

    data = request.data
    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email']

    if data['password'] != '':
        user.password = make_password(data['password'])

    user.save()

    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

```
2. update user_urls.py
```py
from django.urls import path
from base.views import user_views as views


urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),

    path('register/', views.registerUser, name='register'),

    path('profile/', views.getUserProfile, name="users-profile"),
    path('profile/update/', views.updateUserProfile, name="user-profile-update"),
    path('', views.getUsers, name="users"),
]
```
3. goto postman for testing the put, by edit the name

## step 29 user profile frontend
1. update constants/userConstants  
```js
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'

export const USER_LOGOUT = 'USER_LOGOUT'

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'

export const USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST'
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS'
export const USER_DETAILS_FAIL = 'USER_DETAILS_FAIL'
export const USER_DETAILS_RESET = 'USER_DETAILS_RESET'
```
2. update userReducer.js
```js
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,

} from '../constants/userConstants'


export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }

        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }

        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true }

        case USER_DETAILS_SUCCESS:
            return { loading: false, user: action.payload }

        case USER_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        case USER_DETAILS_RESET:
            return { user: {} }


        default:
            return state
    }
}

```
3. update store.js
```js
import { configureStore } from '@reduxjs/toolkit';
import { productReducer, productDetailsReducer} from "./reducers/productReducers"; // import
import {cartReducer} from "./reducers/cartReducers";
import { userLoginReducer, userRegisterReducer, userDetailsReducer } from './reducers/userReducers';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
// 👇 初始化 Redux 状态
const preloadedState = {
  cart: {
    cartItems: cartItemsFromStorage, // 给 cart reducer 赋值
  },
  userLogin: {
    userInfo: userInfoFromStorage, // 给 userLogin reducer 赋值
  },
  
};

export const store = configureStore({
  reducer: {
      productList: productReducer,
      productDetails: productDetailsReducer,
      cart: cartReducer,
      userLogin: userLoginReducer,
      userRegister: userRegisterReducer,
      userDetails: userDetailsReducer,

  },
  // ✅ Thunk + DevTools ARE AUTO INCLUDED — NO SETUP NEEDED!
  preloadedState : preloadedState
});

export default store;

```
4. update userActions.js
```js
import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,

} from '../constants/userConstants'


export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/users/login/',
            { 'username': email, 'password': password },
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
   
}

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/users/register/',
            { 'name': name, 'email': email, 'password': password },
            config
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`  // need to add access token
            }
        }

        const { data } = await axios.get(
            `/api/users/${id}/`,
            config
        )

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
```
5. create screens/profilescreen.js
```js
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getUserDetails} from '../actions/userActions'

function ProfileScreen() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

  


    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        } else {
            if (!user || !user.name ) {
               
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, navigate, userInfo, user])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            console.log("updating...")
        }

    }
    return (
        <Row>
            <Col md={3}>
                <h2>User Profile</h2>

                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>

                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control

                            type='password'
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='passwordConfirm'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control

                            type='password'
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                        Update
                </Button>

                </Form>
            </Col>

            <Col md={9}>
                <h2>My Orders</h2>
           
            </Col>
        </Row>
    )
}

export default ProfileScreen
```
6. update the app.js for the profilescreen
```js
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen";
function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
             <Route path="/register" element={<RegisterScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

```
7. update user profile, , update constants
```js
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'

export const USER_LOGOUT = 'USER_LOGOUT'

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'

export const USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST'
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS'
export const USER_DETAILS_FAIL = 'USER_DETAILS_FAIL'
export const USER_DETAILS_RESET = 'USER_DETAILS_RESET'

export const USER_UPDATE_PROFILE_REQUEST = 'USER_UPDATE_PROFILE_REQUEST'
export const USER_UPDATE_PROFILE_SUCCESS = 'USER_UPDATE_PROFILE_SUCCESS'
export const USER_UPDATE_PROFILE_FAIL = 'USER_UPDATE_PROFILE_FAIL'
export const USER_UPDATE_PROFILE_RESET = 'USER_UPDATE_PROFILE_RESET
```
8. update userReducer.js
```js
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,

    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,

} from '../constants/userConstants'


export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }

        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }

        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true }

        case USER_DETAILS_SUCCESS:
            return { loading: false, user: action.payload }

        case USER_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        case USER_DETAILS_RESET:
            return { user: {} }


        default:
            return state
    }
}

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return { loading: true }

        case USER_UPDATE_PROFILE_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload }

        case USER_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload }

        case USER_UPDATE_PROFILE_RESET:
            return {}

        default:
            return state
    }
}


```
9. update store.js
```js
import { configureStore } from '@reduxjs/toolkit';
import { productReducer, productDetailsReducer} from "./reducers/productReducers"; // import
import {cartReducer} from "./reducers/cartReducers";
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
// 👇 初始化 Redux 状态
const preloadedState = {
  cart: {
    cartItems: cartItemsFromStorage, // 给 cart reducer 赋值
  },
  userLogin: {
    userInfo: userInfoFromStorage, // 给 userLogin reducer 赋值
  },
  
};

export const store = configureStore({
  reducer: {
      productList: productReducer,
      productDetails: productDetailsReducer,
      cart: cartReducer,
      userLogin: userLoginReducer,
      userRegister: userRegisterReducer,
      userDetails: userDetailsReducer,
      userUpdateProfile: userUpdateProfileReducer,
  },
  // ✅ Thunk + DevTools ARE AUTO INCLUDED — NO SETUP NEEDED!
  preloadedState : preloadedState
});

export default store;

```
10. update userActions.js
```js
import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,

    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,

} from '../constants/userConstants'


export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/users/login/',
            { 'username': email, 'password': password },
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
     dispatch({ type: USER_DETAILS_RESET })   // add this reset to clear state
   
}

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/users/register/',
            { 'name': name, 'email': email, 'password': password },
            config
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `/api/users/${id}/`,
            config
        )

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `/api/users/profile/update/`,
            user,
            config
        )

        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

```
11. update profilescreen.jsx
```jsx
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
function ProfileScreen() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const { success } = userUpdateProfile


    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        } else {
            if (!user || !user.name || success) {
               dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, navigate, userInfo, user, success])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
           dispatch(updateUserProfile({ id: user._id, name, email, password }))
           setMessage("")
        }

    }
    return (
        <Row>
            <Col md={3}>
                <h2>User Profile</h2>

                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>

                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control

                            type='password'
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='passwordConfirm'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control

                            type='password'
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                        Update
                </Button>

                </Form>
            </Col>

            <Col md={9}>
                <h2>My Orders</h2>
           
            </Col>
        </Row>
    )
}

export default ProfileScreen
```
## step 30
## step 31
## step 32
## step 33
## step 34
## step 35