import styled from 'styled-components';

export const Container = styled.li`
  list-style: none;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid var(--color-primary);

  padding: .5rem 0 .5rem .5rem;

  cursor: pointer;
`;

export const Label = styled.label`
    font-size: 1.5rem;

    display: flex;
    align-items: center;

    cursor: pointer;

    &::before{
        content: "";
        width: 12px;
        height: 12px;

        display: inline-block;
        /* box-sizing: border-box; */

        border: 1px solid var(--color-primary);
        border-radius: 10px;

        margin-right: 1rem;
    }
`;

export const Checkbox = styled.input.attrs({type: 'checkbox'})`

  display: none;
`;

export const Value = styled.span`
    font-size: 1.5rem;
`;

// export const Label = styled.label`

// `;