import React from "react";
import Email from "./email";
import Password from "./password";
import checkBox from "./checkBox";
import signinBtn from "./signinBtn";


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
