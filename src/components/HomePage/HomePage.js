import React from "react";
import { Col, Row } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";
import "./HomePage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const { productFilter, filterProducts } = useProducts();
  //Slider setting
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 20,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 0,
        },
      },
    ],
  };

  // Unique Named Product
  let productName = [
    ...new Map(
      filterProducts.map((item) => [item["product_name"], item])
    ).values(),
  ];
  // Unique State Product
  let productState = [
    ...new Map(
      filterProducts.map((item) => [item["address"]["state"], item])
    ).values(),
  ];
  // Unique City Product
  let productCity = [
    ...new Map(
      filterProducts.map((item) => [item["address"]["city"], item])
    ).values(),
  ];

  let uniqueProduct = (products, productName) => {
    let uniqueProductArr = [];
    products.map((product) => {
      if (productName === product.product_name) {
        uniqueProductArr.push(product);
      }
    });
    return uniqueProductArr;
  };

  return (
    <div className="home-section p-5">
      <Row>
        <Col sm={12} md={3} lg={3}>
          <div className="filter-section">
            <h3 className="filter-title">Filter</h3>
            <hr />
            <select
              onChange={productFilter}
              name="products"
              className="select-input"
            >
              {productName.map((product, index) => (
                <option value={product.product_name} key={index}>
                  {product.product_name}
                </option>
              ))}
            </select>
            <select
              onChange={productFilter}
              name="state"
              className="select-input"
              id="state"
            >
              {productState.map((product, index) => (
                <option value={product.address.state} key={index}>
                  {product.address.state}
                </option>
              ))}
            </select>
            <select
              onChange={productFilter}
              name="city"
              className="select-input"
              id="city"
            >
              {productCity.map((product, index) => (
                <option value={product.address.city} key={index}>
                  {product.address.city}
                </option>
              ))}
            </select>
          </div>
        </Col>

        <Col sm={12} md={9} lg={9}>
          <h2>Edvora</h2>
          <h2>Products</h2>
          {productName.map((productHeader, index) => {
            return (
              <div key={index}>
                <h2 className="mt-3">{productHeader.product_name}</h2>
                <hr />
                <Slider {...settings} className="row-bg">
                  {uniqueProduct(
                    filterProducts,
                    productHeader.product_name
                  ).map((product, index) => (
                    <div key={index}>
                      <div className="col-bg">
                        <div className="d-flex justify-content-start">
                          <img
                            width="70px"
                            height="70px"
                            className="img-fluid"
                            src={product.image}
                            alt="img"
                          />
                          <div className="ms-3">
                            <h5 className="text_font-size">
                              {product.product_name}
                            </h5>
                            <h6 className="text_font-size">
                              {product.brand_name}
                            </h6>
                            <h6 className="text_font-size">
                              $ {product.price}
                            </h6>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="d-flex">
                            <div>
                              <h6 className="location color text_font-size me-3">
                                {product.address.state}
                              </h6>
                              <h6 className="location color text_font-size me-3">
                                {product.address.city}
                              </h6>
                            </div>
                            <Col>
                              <h6 className="text_font-size">
                                <span className="date-heading">Date: </span>{" "}
                                {product.time.split("T")[0]}
                              </h6>
                            </Col>
                          </div>
                        </div>
                        <p className="product-description text_font-size">
                          {product.discription}
                        </p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
