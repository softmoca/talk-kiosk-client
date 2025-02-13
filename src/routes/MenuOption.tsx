import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { menuOption } from "../atoms";
import menuData from "../menu-table.json";
import { idToName } from "../utils";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div<{ isSelected: boolean }>`
  width: 500px;
  height: 70px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-top: 5px;
  margin-bottom: 30px;
  border-radius: 20px;
  border: 5px solid ${(props) => (props.isSelected ? "#e64848" : "white")};
  font-size: 30px;
  font-weight: 700;
  box-sizing: content-box;
  overflow: hidden;
  & > span:last-child {
    font-size: 20px;
    margin-right: 40px;
  }
`;
const SelectBox = styled.div<{ isSelected: boolean }>`
  width: 150px;
  height: 80px;
  background-color: #e64848;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  visibility: ${(props) => (props.isSelected ? "visible" : "hidden")};
  & > span:first-child {
    margin-bottom: 5px;
  }
`;

function MenuOption() {
  const [option, setOption] = useRecoilState(menuOption);
  // for test
  useEffect(() => {
    setOption([true, false, false, true]);
  }, []);
  return (
    <Wrapper>
      {[1, 2, 3, 4].map((i) => (
        <Card key={i} isSelected={option[i - 1]}>
          <span>{idToName(menuData, i + 1000)}</span>
          {option[i - 1] ? (
            <SelectBox isSelected={option[i - 1]}>
              <span>선택 됨</span>
              <span>+ {i === 4 ? "0" : i === 3 ? "300" : "500"}원</span>
            </SelectBox>
          ) : (
            <span>+ {i === 4 ? "0" : i === 3 ? "300" : "500"}원</span>
          )}
        </Card>
      ))}
    </Wrapper>
  );
}

export default MenuOption;
