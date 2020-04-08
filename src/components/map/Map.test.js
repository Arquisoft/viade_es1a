import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Map from "./Map";
import User from "../login/User";
import { Given, Then, When } from "jest-cucumber"; 
import { create } from "react-test-renderer";
import { LoginButton, LoggedOut, LoggedIn } from "@solid/react";
import ReactDom from "react-dom";
import TestRenderer from 'react-test-renderer';

test('renders without crashing', () => {
    expect(<Map />).toBeTruthy();
});