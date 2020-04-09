import React from "react";
import { useLDflexList } from "@solid/react";

function GetFriends(src) {
  const items = useLDflexList(src)
    .filter(() => true)
    .slice(0, Infinity)
    .map(
      (item, index) =>
        <li name="listFriend" key={index}>
          {`${item}`}
          <input type="checkbox" name="amigo">
          </input>
        </li>
    );

  return items;
}


export default function ShowFriends() {
  return (
    <div className="overflow">
      <form action="/action_page.php">
        <div>
          <input type="checkbox" id="http:amigo1" value="http:amigo1" />
          <label for="http:amigo1"> amigo 1</label>
        </div>
        <div>
          <input type="checkbox" id="http:amigo2" value="http:amigo2" />
          <label for="http:amigo2"> amigo 2</label>
        </div>
        <div>
          <input type="checkbox" id="http:amigo3" value="http:amigo3" />
          <label for="http:amigo3"> amigo 3</label>
        </div>
      </form>
    </div>
  );
};