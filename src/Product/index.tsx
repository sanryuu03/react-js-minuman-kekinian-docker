import { useCallback, useEffect, useState } from "react";
import {
  FcPlus,
  FcEditImage,
  FcEmptyTrash,
  FcAddDatabase,
} from "react-icons/fc";
import { Link } from "react-router-dom";
import { getMenu } from "../../services/owner";
import { MenuTypes } from "../../services/data-types";

export default function Product() {
  const [menuList, setMenuList] = useState([]);
  const userId = "sanryuu";

  const getMenuAPI = useCallback(async () => {
    const dataAPI = await getMenu(userId);
    setMenuList(dataAPI?.data);
  }, [userId]);

  useEffect(() => {
    getMenuAPI();
  }, []);

  return (
    <>
      <div className="flex">
        <Link to="/product/form">
          <FcAddDatabase size={30} />
        </Link>
      </div>
      <div className="overflow-x-auto bottom-data">
        <table className="table glass">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>ingredients</th>
              <th>Handle</th>
            </tr>
          </thead>
          <tbody>
            {menuList?.map((r: MenuTypes, i: number) => {
              return (
                <tr key={r.id}>
                  <th>{i + 1}</th>
                  <td>{r.name}</td>
                  <td>{r.description}</td>
                  <td>{r.ingredients}</td>
                  <td className="flex">
                    <Link to={`/product/${r.uuid}/user/${userId}`}>
                      <FcEditImage size={30} />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
