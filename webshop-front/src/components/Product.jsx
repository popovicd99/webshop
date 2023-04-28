import React from "react";

const Product = () => {
  return (
    <>
      <div className="row" style={{ padding: 50 }}>
        <div className="medium-6 columns">
          <img className="thumbnail" src="https://placehold.it/650x350" />
          <div className="row small-up-4">
            <div className="column">
              <img className="thumbnail" src="https://placehold.it/250x200" />
            </div>
            <div className="column">
              <img className="thumbnail" src="https://placehold.it/250x200" />
            </div>
            <div className="column">
              <img className="thumbnail" src="https://placehold.it/250x200" />
            </div>
            <div className="column">
              <img className="thumbnail" src="https://placehold.it/250x200" />
            </div>
          </div>
        </div>
        <div className="medium-6 large-5 columns">
          <h3>My Awesome Product</h3>
          <p>
            Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum
            faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla
            at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet
            egestas purus in.
          </p>

          <label>
            Size
            <select>
              <option value="husker">Small</option>
              <option value="starbuck">Medium</option>
              <option value="hotdog">Large</option>
              <option value="apollo">Yeti</option>
            </select>
          </label>

          <div className="row">
            <div className="small-3 columns">
              <label htmlFor="middle-label" className="middle">
                Quantity
              </label>
            </div>
            <div className="small-9 columns">
              <input type="text" id="middle-label" placeholder="e.g. 1" />
            </div>
          </div>

          <a href="#" className="button large expanded">
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Product;
