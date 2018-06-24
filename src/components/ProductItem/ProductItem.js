import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    render() {
        var {product, index} = this.props;
        var className = product.status ? 'warning' : 'default';
        var status = product.status ? 'Còn hàng' : 'Hết hàng';
        return (
            <tr>
                <td>{ index + 1 }</td>
                <td>{ product.code }</td>
                <td>{ product.name }</td>
                <td>{ product.price }</td>
                <td>
                    <span className={`label label-${ className }` }>
                        { status }
                    </span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-success">Sửa</Link>
                    <button type="button" className="btn btn-danger ml-10" onClick={() => this.onDeleteProduct(product.id) }>Xóa</button>
                </td>
            </tr>
        );
    }

    onDeleteProduct = (id) => {
        this.props.onDelete(id);
    }
}

export default ProductItem;