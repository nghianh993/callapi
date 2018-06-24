import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        var {product, index} = this.props;
        var className = product.status ? 'success' : 'danger';
        var status = product.status ? 'Còn hàng' : 'Hết hàng';
        return (
            <tr>
                <td>{ index + 1 }</td>
                <td>{ product.code }</td>
                <td>{ product.name }</td>
                <td>{ product.price }</td>
                <td>
                    <span className={`label label- ${ className }` }>
                        { status }
                    </span>
                </td>
                <td>
                    <button type="button" className="btn btn-success">Sửa</button>
                    <button type="button" className="btn btn-danger ml-10">Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;