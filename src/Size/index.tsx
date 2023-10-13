import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { FcEditImage, FcEmptyTrash, FcAddDatabase } from "react-icons/fc";
import { Link } from "react-router-dom";
import { deleteSize, getSize } from "../../services/owner";
import { SizeTypes } from "../../services/data-types";
import { toast } from "react-toastify";

export default function Product() {
  const [menuList, setMenuList] = useState([]);
  const userId = "sanryuu";

  const getSizeAPI = useCallback(async () => {
    const dataAPI = await getSize();
    setMenuList(dataAPI?.data);
  }, [userId]);

  useEffect(() => {
    getSizeAPI();
  }, []);

  const onDelete = async (e: SyntheticEvent, sizeId: string) => {
    e.preventDefault();
    const hasil = await deleteSize(sizeId, userId);
    if (hasil.error) {
      toast.error(hasil.message);
    } else {
      toast.success("data berhasil dihapus");
      getSizeAPI();
    }
  };

  return (
    <>
      <div className="flex">
        <Link to="/size/form">
          <FcAddDatabase size={30} />
        </Link>
      </div>
      <div className="overflow-x-auto bottom-data">
        <table className="table glass">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Size</th>
              <th>Handle</th>
            </tr>
          </thead>
          <tbody>
            {menuList?.map((r: SizeTypes, i: number) => {
              return (
                <tr key={r.id}>
                  <th>{i + 1}</th>
                  <td>{r.name}</td>
                  <td>{r.size}</td>
                  <td className="flex">
                    <Link to={`/size/${r.uuid}`}>
                      <FcEditImage size={30} />
                    </Link>
                    <button
                      type="button"
                      onClick={(e) => {
                        window.confirm(
                          "Are you sure you wish to delete this item?"
                        ) && onDelete(e, r.uuid!);
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
