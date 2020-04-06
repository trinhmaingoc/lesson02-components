import React, { Component } from 'react'

export class Product extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="thumbnail">
                    <img src="https://product.hstatic.net/1000351627/product/iphone-6-silver.png" alt="Iphone 6" />
                    <div className="caption">
                        <h3>Iphone 6 Plus</h3>
                        <p>
                            16.000.000 VNĐ
                        </p>
                    </div>
                    
                    <button type="button" className="btn btn-success">Mua Hàng</button>
                </div>
            </div>  
        )
    }
}

export default Product
