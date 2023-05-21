import React, { FC, useState } from "react";

interface IProps {
  initialCount: number;
}

/**
 * AAA パターン用コンポーネント
 * @param param0 
 * @returns 
 */
export const Counter: FC<IProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const clickHandler = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <p>現在のカウント:{count}</p>
      <p>
        <button onClick={clickHandler}>
          <span>カウントアップ</span>
        </button>
      </p>
    </>
  );
};
