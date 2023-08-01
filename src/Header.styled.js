import { styled } from "styled-components";
import { Styled } from "styled-components/dist/constructors/constructWithOptions";

export const StyledHeader = styled.header`
background-color: ${({theme}) => theme.colors.header};
padding: 40px 0;
`

