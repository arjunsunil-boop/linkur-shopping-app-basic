import React from 'react'
import Navbar from './Navbar'

const AddProducts = () => {
    return (
        <div>
            <Navbar />
            <br /><br />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        


                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Product ID</label>
                                <input type="text" className="form-control" />


                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Product Name</label>
                                <input type="text" className="form-control" />



                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Product Image</label>
                                <input type="file" className="form-control" />


                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Product Description</label>
                                <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>


                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Category</label>

                                <select name="" id="" className="form-control">
                                    <option value="Electronics">Electronics</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Home">Home</option>
                                    <option value="Books">Books</option>
                                    <option value="Toys">Toys</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Health">Health</option>
                                    <option value="Beauty">Beauty</option>
                                    <option value="Other">Other</option>
                                </select>


                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Product Price</label>
                                <input type="text" className="form-control" />


                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-success">Submit</button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProducts