import React from "react";
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const CardInfo = props => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>Recipes:</Card.Header>
        {props.recipes &&
          props.recipes.map(recipe => (
            <div key={recipe.id} data-testid="card">
              <p>Name: {recipe.name}</p>
              <p>Course: {recipe.course} </p>
              <p>Technique: {recipe.technique} </p>
              <p>Ingredients: {recipe.ingredients} </p>
            </div>
          ))}
      </Card.Content>
    </Card>
  );
};

export default CardInfo;
