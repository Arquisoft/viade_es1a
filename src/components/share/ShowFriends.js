import React from "react";
import { Value } from "@solid/react";



export default function ShowFriends() {
  return (
    <div>
      <form action="/action_page.php">
        <input type="checkbox" id="http:amigo1" value="http:amigo1" />
        <label for="http:amigo1"> amigo 1</label>

        <input type="checkbox" id="http:amigo2" value="http:amigo2" />
        <label for="http:amigo2"> amigo 2</label>

        <input type="checkbox" id="http:amigo3" value="http:amigo3" />
        <label for="http:amigo3"> amigo 3</label>
        <input type="submit" value="Submit" />
      </form>
    </div>);
};