import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callAPI from '../../utils/apiCaller';

class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            txtcode : '', 
            txtname : '',
            txtprice : 0,
            chkstatus : false,
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }

    onSave = (event) => {
        event.preventDefault();
        var { history } = this.props;
        var {id, txtcode, txtname, txtprice, chkstatus} = this.state;
        if(id){
            callAPI(`products/${id}`, 'PUT', {
                code : txtcode,
                name: txtname,
                price: txtprice,
                status: chkstatus
            }).then(resp => {
                history.goBack();
            });
        }else {
            callAPI('products', 'POST', {
                code : txtcode,
                name: txtname,
                price: txtprice,
                status: chkstatus
            }).then(resp => {
                history.goBack();
            });
        }
    }

    componentDidMount() {
        let {match} = this.props;
        if(match) {
            let id = match.params.id;
            callAPI(`products/${id}`, 'GET', null).then(resp => {
                let data = resp.data;
                this.setState({
                    id: id,
                    txtcode : data.code, 
                    txtname : data.name,
                    txtprice : data.price,
                    chkstatus : data.status,
                });
            });
        }
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={ this.onSave }>
                    <div className="form-group">
                        <label>Mã sản phẩm: </label>
                        <input type="text" className="form-control" onChange={ this.onChange } name="txtcode" value={ this.state.txtcode } />
                    </div>
                    <div className="form-group">
                        <label>Tên sản phẩm: </label>
                        <input type="text" className="form-control" onChange={ this.onChange } name="txtname" value={ this.state.txtname } />
                    </div>
                    <div className="form-group">
                        <label>Giá sản phẩm: </label>
                        <input type="number" className="form-control" onChange={ this.onChange } name="txtprice" value={ this.state.txtprice } />
                    </div>
                    <div className="form-group">
                        <label>Trạng thái: </label>
                    </div>
                    
                    <div className="checkbox">
                        <label>
                            <input name="chkstatus" type="checkbox" checked={ this.state.chkstatus } onChange={ this.onChange } />
                            Còn hàng
                        </label>
                    </div>
                    <Link to="/product-list" className="btn btn-default">Quay lại</Link>
                    <button type="reset" className="btn btn-danger ml-10">Nhập lại</button>
                    <button type="submit" className="btn btn-primary ml-10">Lưu lại</button>
                </form>
                
            </div>
            
        );
    }
}

export default ProductActionPage;