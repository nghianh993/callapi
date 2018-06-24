import React, { Component } from 'react';

class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form >
                    <div className="form-group">
                        <label>Mã sản phẩm: </label>
                        <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                        <label>Tên sản phẩm: </label>
                        <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                        <label>Giá sản phẩm: </label>
                        <input type="number" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                        <label>Trạng thái: </label>
                    </div>
                    
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="" />
                            Còn hàng
                        </label>
                    </div>
                    <button type="reset" className="btn btn-danger">Nhập lại</button>
                    <button type="submit" className="btn btn-primary">Thêm mới</button>
                </form>
                
            </div>
            
        );
    }
}

export default ProductActionPage;