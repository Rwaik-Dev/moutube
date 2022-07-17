import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 7em;
  padding: 0.5em;
  display: flex;
  align-items: center;
  border-radius: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  :hover {
    transition: all 0.6s;
    background-color: #01c38d;
  }
  .informations {
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: none;
  }
  .imageUrl {
    width: 30%;
    height: 100%;
    border-radius: 5px;
    background: none;
  }
  .gameName {
    margin-left: 1em;
    background: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .informationGame {
    margin-left: 1em;
    margin-top: 1em;
    font-size: 0.9em;
    background: none;
  }
`;
