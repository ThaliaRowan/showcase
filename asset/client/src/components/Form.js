import React from "react";
import Password from "./password";
import Email from "./email";
import signinBtn from "./signinBtn";
import checkBox from "./checkBox";

function Form() {
    return (
          
<form class="px-4 py-3">
            <Email />
            <Password />
            <checkBox />
            <signinBtn />
        </form>

    );
}


export default Form;
