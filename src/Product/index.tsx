import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { FcEditImage, FcEmptyTrash, FcAddDatabase } from "react-icons/fc";
import { Link } from "react-router-dom";
import { deleteMenu, getMenu } from "../../services/owner";
import { MenuTypes } from "../../services/data-types";
import { toast } from "react-toastify";

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

  const onDelete = async (
    e: SyntheticEvent,
    masterProductId: string,
    userId: string
  ) => {
    e.preventDefault();
    const hasil = await deleteMenu(masterProductId!, userId!);
    if (hasil.error) {
      toast.error(hasil.message);
    } else {
      toast.success("data berhasil dihapus");
      getMenuAPI();
    }
  };

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
                    <button
                      type="button"
                      onClick={(e) => {
                        window.confirm(
                          "Are you sure you wish to delete this item?"
                        ) && onDelete(e, r.uuid, userId);
                      }}
                    >
                      <FcEmptyTrash size={30} />
                    </button>
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
