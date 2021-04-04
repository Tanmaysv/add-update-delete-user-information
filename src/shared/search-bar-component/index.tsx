import React from "react";
import { SEARCH_BAR } from "../../constants";
import InputComponent from "../input-component";
import {
    InputComponentWrapper,
    StyledSearchBar,
    SvgWrapper,
} from "./search-bar-styles";

type Props = {
    title?: string;
    id?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBarComponent: React.FC<Props> = ({
    title,
    id,
    value,
    onChange,
}: Props) => (
    <StyledSearchBar>
        <SvgWrapper />
        <InputComponentWrapper>
            <InputComponent
                title={title}
                id={id}
                placeholder={SEARCH_BAR.PLACEHOLDER}
                value={value}
                onChange={onChange}
                width={"100%"}
            />
        </InputComponentWrapper>
    </StyledSearchBar>
);

export default SearchBarComponent;
