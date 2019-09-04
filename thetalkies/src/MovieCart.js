import React, { Component } from 'react';
import './App.css';

class MovieCart extends Component {
    total(){
        return this.props.items.reduce((total, item) => {
            return total - item.cost
        }, 100)
    }
    render () {
        if (this.props.items === 0) {
            return <div>
                <p>Your cart is empty</p>
            </div>
        }
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Cost</th>
                        </tr>
                            {/* {this.props.items.map((movie, index) => {
                                console.log(this);
                                return <tr key= {index}>
                                    <button>Remove</button>
                                    <td>{movie.title}</td>
                                    <td>{movie.cost}</td>
                                </tr>
                            })} */}
                    </tbody>    
                </table>

                <p>
                    Total: {this.total()}
                </p>
            </div>
        );
    }
}

export default MovieCart;
