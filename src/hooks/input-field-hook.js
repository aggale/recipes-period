// Source: adapted from https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/

import { useState } from "react";

export const useInputField = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(initialValue),
        bind: {
            value,
            onChange: (evt) => { setValue(evt.target.value); }
        }
    }
}