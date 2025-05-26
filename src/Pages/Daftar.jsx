import React from 'react'
import Footer from '../component/footer'
import Navbar from '../component/Navbar'

function Daftar() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="hero bg-[url(/BGMI.png)] bg-fixed  min-h-screen">
          <div className="hero-content flex-col bg-black/50 backdrop-blur-1xl lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-white">Join now!</h1>
              <p className="py-6 text-white">
                join sekarang dan dapatkan benefit yang mengguntungkan bagi anda
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Daftar
