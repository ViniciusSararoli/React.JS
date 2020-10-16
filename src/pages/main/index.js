/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
import {Link} from 'react-router-dom';
import Product from '../product';

export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1,
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;
    //console.log(response.data.docs);
    this.setState({ products: docs, productInfo, page });
  }

  prevPage = () => {
    const { page, productInfo } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadProducts(pageNumber);
  }

  nextPage = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
  }


  render() {
    /*return <h1>Contagem de produtos {this.state.products.length}</h1>;
    */
    const { products, page } = this.state;


    return (
      <div className="product-list">
        {this.state.products.map(product => (
          //<h2 key={product._id}>{product.title}</h2>
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <Link to={`/products/${Product._id}`}>Mais detalhes</Link>
          </article>
        ))}
        <div className="action">
          <button disabled={page === 1} onClick={this.prevPage}>Voltar</button>
          <button disabled={page === 2 /*productInfo.pages */} onClick={this.nextPage}>
            Proximo</button>
        </div>
      </div>
    );
  }
}