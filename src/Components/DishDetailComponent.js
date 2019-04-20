import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';



    function RenderDish({dish}) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }


    function RenderComments({comments}) {
        if (comments == null) {
            return(
                <div></div>
            );
        }
        else {
            const cm = comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <span>{comment.comment}</span><br/>
                        <span>-- {comment.author} , {comment.date.slice(0, 10)}</span>
                        <br/><br/>
                    </li>
                );
            });
            return (
                <ul className="list-unstyled">{cm}</ul>
            );
        }
    }

    const DishDetail = (props) =>  {
        if (props.selected == null) {
            return (
                <div className="container"></div>
            );
        }
        else {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.selected} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.selected.comments} />
                        </div>
                    </div>
                </div>
            );
        }
    }


export default DishDetail;