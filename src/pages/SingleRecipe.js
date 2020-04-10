import React, { Component } from 'react'
import { recipeData } from '../data/tempDetails';
import { Link } from 'react-router-dom';

export default class SingleRecipe extends Component {
    constructor(props){
        super(props);
        const id = props.match.params.id;
        this.state = {
            recipe : {},
            id,
            loading : true
        }
    }

    async componentDidMount(){
        const recipeResponse = await fetch(`https://community-food2fork.p.rapidapi.com/get?rId=${this.id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-food2fork.p.rapidapi.com",
                "x-rapidapi-key": "191e1b1cb4msh95e0996e9a76eb4p139920jsn173e8be45058"
            }
        })
        .then(response => {
            console.log(response); 
        })
        .catch(err => {
            console.log(err);
        });
    
    }
    
    render() {
        const { image_url,source_url,title,publisher,publisher_url,ingredients } = this.state.recipe;
        if(this.state.loading){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h2 className="text-uppercase text-orange text-center">
                                loading recipe...
                            </h2>
                        </div>
                    </div>

                </div>
            );
        }
       
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3 mb-5">
                        <Link to="/recipes" className="btn btn-warning text-capitalize">
                            back to recipes
                        </Link>
                        <img src={image_url} alt="recipe" className="d-block w-100" style={{maxHeight:'30rem'}}/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                       <h6 className="text-uppercase">{title}</h6>
                       <h6 className="text-warning text-capitalize text-slanted">provided by {publisher}</h6>
                       <a 
                        href={publisher_url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary mt-2 text-capitalize"
                        >
                            publisher webpage
                        </a> 
                        <a 
                        href={source_url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success mt-2 mx-2 text-capitalize"
                        >
                            recipe url
                        </a> 
                        <ul className="list-group mt-4">
                            <h2 className="mt-3 mb-4">Ingredients</h2>
                            {ingredients.map((item,index) =>  { return(
                                <li key={index} className="list-group-item text-slanted">
                                    {item}
                                </li>
                            );
                            }
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
