import React, { useState } from 'react';


function Price() {
    return (
      <div className="price">
          <div className="price__title">
              <h1>
                Price plans
              </h1>
              <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
              </p>
          </div>
          <div className="price__cards">
            <div className="price__cards__card">
                <div className="price__cards__card__title">
                  <h2>Silver</h2>
                  <span><h1>$0.00</h1><h4>/Hour</h4></span>
                </div>
                <p>For most businesses that want to
                optimize web queries</p>
                <ul className="price__cards__card__perks">
                  <li className="price__cards__card__perks__included">
                      <img src="../../public/price/price-check.svg" alt="price-check" />
                      UI Design
                  </li>
                  <li className="price__cards__card__perks__included">
                      <img src="../../public/price/price-check.svg" alt="price-check" />
                      Web Development
                  </li>
                  <li className="price__cards__card__perks__non-included">
                      <img src="../../public/price/price-cross.svg" alt="price-cross" />
                      Logo Design
                  </li>
                  <li className="price__cards__card__perks__non-included">
                      <img src="../../public/price/price-cross.svg" alt="price-cross" />
                     Seo Optimization
                  </li>
                  <li className="price__cards__card__perks__non-included">
                      <img src="../../public/price/price-cross.svg" alt="price-cross" />
                      WordPress Integration
                  </li>
                  <li className="price__cards__card__perks__non-included">
                      <img src="../../public/price/price-cross.svg" alt="price-cross" />
                      5 Websites
                  </li>
                  <li className="price__cards__card__perks__non-included">
                      <img src="../../public/price/price-cross.svg" alt="price-cross" />
                      Unlimited User
                  </li>
                  <li className="price__cards__card__perks__non-included">
                      <img src="../../public/price/price-cross.svg" alt="price-cross" />
                      20 GB Bandwith
                  </li>
                </ul>
                <button className="price__cards__card__pricebtn">ORDER NOW</button>
            </div>
            <div className="price__cards__card popular">
                <div className="price__cards__card__popular">Most Popular</div>
                <div className="price__cards__card__title">
                  <h2>Gold</h2>
                  <span><h1>$50.00</h1><h4>/Hour</h4></span>
                  </div>
                <p>For most businesses that want to
                optimize web queries</p>
                <ul className="price__cards__card__perks">
                  <li className="price__cards__card__perks__included">
                      <img src="../../public/price/price-check.svg" alt="price-check" />
                      UI Design
                  </li>
                  <li className="price__cards__card__perks__included">
                      <img src="../../public/price/price-check.svg" alt="price-check" />
                      Web Development
                  </li>
                  <li className="price__cards__card__perks__included">
                      <img src="../../public/price/price-check.svg" alt="price-check" />
                      Logo Design
                  </li>
                  <li className="price__cards__card__perks__included">
                      <img src="../../public/price/price-check.svg" alt="price-check" />
                      Seo Optimization
                  </li>
                  <li className="price__cards__card__perks__non-included">
                      <img src="../../public/price/price-cross.svg" alt="price-cross" />
                      WordPress Integration
                  </li>
                  <li className="price__cards__card__perks__non-included">
                      <img src="../../public/price/price-cross.svg" alt="price-cross" />
                      5 Websites
                  </li>
                  <li className="price__cards__card__perks__non-included">
                      <img src="../../public/price/price-cross.svg" alt="price-cross" />
                      Unlimited User
                  </li>
                  <li className="price__cards__card__perks__non-included">
                      <img src="../../public/price/price-cross.svg" alt="price-cross" />
                      20 GB Bandwith
                  </li>
                </ul>
                <button className="price__cards__card__pricebtn popular">ORDER NOW</button>
            </div>
            <div className="price__cards__card">
                <div className="price__cards__card__title">
                  <h2>Diamond</h2>
                  <span><h1>$80.00</h1><h4>/Hour</h4></span>
                </div>
                <p>For most businesses that want to
                optimize web queries</p>
                <ul className="price__cards__card__perks">
                  <li className="price__cards__card__perks__included">
                      <img src="../../public/price/price-check.svg" alt="price-check" />
                      UI Design
                  </li>
                  <li className="price__cards__card__perks__included">
                      <img src="../../public/price/price-check.svg" alt="price-check" />
                      Web Development
                  </li>
                  <li className="price__cards__card__perks__included">
                      <img src="../../public/price/price-check.svg" alt="price-check" />
                      Logo Design
                  </li>
                  <li className="price__cards__card__perks__included">
                      <img src="../../public/price/price-check.svg" alt="price-check" />
                     Seo Optimization
                  </li>
                  <li className="price__cards__card__perks__included">
                      <img src="../../public/price/price-check.svg" alt="price-check" />
                      WordPress Integration
                  </li>
                  <li className="price__cards__card__perks__included">
                      <img src="../../public/price/price-check.svg" alt="price-check" />
                      5 Websites
                  </li>
                  <li className="price__cards__card__perks__included">
                      <img src="../../public/price/price-check.svg" alt="price-check" />
                      Unlimited User
                  </li>
                  <li className="price__cards__card__perks__included">
                      <img src="../../public/price/price-check.svg" alt="price-check" />
                      20 GB Bandwith
                  </li>
                </ul>
                <button className="price__cards__card__pricebtn">ORDER NOW</button>
            </div>
          </div>
      </div>
    );
  }
  
  export default Price;