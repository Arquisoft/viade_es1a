import React from "react";
import { Value } from "@solid/react";



export default function ShowFriends(handleChange) {
  return (
    <div>
      <select onChange={handleChange}>
        <option value="http:amigo1">amigo 1</option>
        <option value="http:amigo">{<Value src="user.name" />}</option>
        <option value="http:amigo2">amigo 2</option>
        <option value="http:amigo3">amigo 3</option>
        <option value="http:amigo4">amigo 4</option>
        <option value="http:amigo5">amigo 5</option>
      </select>

    </div>);
};