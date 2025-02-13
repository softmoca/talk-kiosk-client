import styled from "styled-components";
import Sticky from "react-sticky-el";
import MenuCard from "../components/MenuCard";
import menuData from "../menu-table.json";
import { idToName } from "../utils";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
const Category = styled.div`
  width: 90%;
  height: 100px;
  background: linear-gradient(90deg, #f65858, #e64848);
  border: 3px solid white;
  border-top: none;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  margin-left: 5%;
  color: white;
  font-size: 36px;
  font-weight: 700;
  will-change: scroll-position;
`;
const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 300px);
  grid-auto-rows: minmax(300px, 300px);
  gap: 50px;
  padding: 50px;
  justify-content: center;
`;

function MenuList() {
  return (
    <Wrapper className="scroll-area">
      {[1, 2, 3].map((i) => (
        <div key={i} className="block">
          <Sticky
            boundaryElement=".block"
            scrollElement=".scroll-area"
            topOffset={-1}
          >
            <Category>
              {i === 1 ? "메인 메뉴" : i === 2 ? "사이드 메뉴" : "음료수"}
            </Category>
          </Sticky>
          <GridWrapper>
            {Object.keys(menuData).map((id, idx) => {
              if (i * 100 < Number(id) && Number(id) < (i + 1) * 100) {
                return (
                  <MenuCard
                    key={idx}
                    index={idx + 1}
                    id={Number(id)}
                    name={idToName(menuData, Number(id))}
                  />
                );
              }
              return null;
            })}
          </GridWrapper>
        </div>
      ))}
    </Wrapper>
  );
}

export default MenuList;
