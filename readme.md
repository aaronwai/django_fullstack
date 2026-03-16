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
4. create HomeScreen.jsx

```jsx
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

1. refactor the App.jsx

```jsx
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";
const HomeScreen = () => {
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

2. create Product.jsx inside components folder

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

# step 8 : rating component

1. we will be re-using this component later
2. refactor the product component

```jsx
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

```jsx
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

```jsx
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

4. add src/screens/ProductScreen.jsx for product pages

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
7. we don't want to render the product page for every click, so we need to change all the <a> to <Link> for quick rendering, refactor Product.jsx
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

```jsx
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
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

```jsx
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";
import { use } from "react";
const ProductScreen = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  return <div>{product.name}</div>;
};

export default ProductScreen;
```

2. refactor the product page to add the product details

```jsx
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
