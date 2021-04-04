import { useState } from "react";
import { FormType } from "../type";

const UseInputChange = (initialInputState: FormType) => {
    const [inputs, setInputs] = useState<FormType>(initialInputState);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((inputs) => ({ ...inputs, [e.target.id]: e.target.value }));
    };

    return { inputs, handleInputChange };
};

export default UseInputChange;
