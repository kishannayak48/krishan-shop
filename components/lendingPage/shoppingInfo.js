import React from "react";
import { TfiReload } from "react-icons/tfi";
import { GrCreditCard } from "react-icons/gr";
import { MdSupportAgent } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";

const ShoppingInfo = () => {
  return (
    <div>
      <>
        <section className="shipping-info">
          <div className="container">
            <ul>
              <li>
                <div className="media-icon">
                  <i className="lni lni-delivery" />
                  <FaShippingFast />
                </div>
                <div className="media-body">
                  <h5>Free Shipping</h5>
                  <span>On order over $99</span>
                </div>
              </li>
              <li>
                <div className="media-icon">
                  <i className="lni lni-support" />
                  <MdSupportAgent />
                </div>
                <div className="media-body">
                  <h5>24/7 Support.</h5>
                  <span>Live Chat Or Call.</span>
                </div>
              </li>
              <li>
                <div className="media-icon">
                  <i className="lni lni-credit-cards" />
                  <GrCreditCard />
                </div>
                <div className="media-body">
                  <h5>Online Payment.</h5>
                  <span>Secure Payment Services.</span>
                </div>
              </li>
              <li>
                <div className="media-icon">
                  <i className="lni lni-reload" />
                  <TfiReload className="lni lni-reload" />
                </div>
                <div className="media-body">
                  <h5>Easy Return.</h5>
                  <span>Hassle Free Shopping.</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </>
    </div>
  );
};

export default ShoppingInfo;
