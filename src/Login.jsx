// filepath: c:\Users\Winst\Documents\StockerV1\src\App.jsx
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function Login() {
  return (
    <div className="Login">
      <Header />
      
      <main>
        <div className="container py-4">
          <h1>Stocker AI</h1>
          <img src="Stock AI img.jpg" alt="Stocks" width="200" />
          
          <div className="container-sm mt-4">
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" />
                <div className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="check" />
                <label className="form-check-label" htmlFor="check">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Login