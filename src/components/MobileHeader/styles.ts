import styled from 'styled-components';
import { FiMessageSquare } from 'react-icons/fi';

export const Container = styled.div`
    background: var(--color-link);
    height: 48px;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;

    @media (min-width: 1180px) {
        display: none;
    }
`;
export const ProfileCircle = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid var(--color-icons);
    flex-shrink: 0;
`;

export const SearchInput = styled.input`
    margin: 0 12px;
    width: 100%;
    background: var(--color-input);
    color: var(--color-black);
    outline: 0;
    border: 0;
    font-size: 14px;
    padding: 6.5px 8px;
    border-radius: 2px;

    &:focus {
        background: var(--color-white);
    }
`;

export const MessageIcon = styled(FiMessageSquare)`
    height: 24px;
    width: 24px;
    color: var(--color-white);
    border-radius: 4px;
    flex-shrink: 0;
`;