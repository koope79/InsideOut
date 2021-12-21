import expect from "expect";
import authReducer, { setUserData } from "./Auth-reducer";

test("user's data should be install", ()=>{
    const action = setUserData("радоcть", "12345", true);
    const state = {
        login: null,
        pass: null,
        isAuth: false,
    };
    const newState = authReducer(state, action);

    expect(newState.login).toBe("радоcть");
    expect(newState.pass).toBe("12345");
    expect(newState.isAuth).toBe(true);
});