import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { FcEditImage, FcEmptyTrash, FcAddDatabase } from "react-icons/fc";
import { Link } from "react-router-dom";
import { deleteProductPrice, getProductPrice } from "../../services/owner";
import { ProductPriceTypes } from "../../services/data-types";
import { toast } from "react-toastify";

export default function Product() {
  const [productPriceList, setProductPriceList] = useState([]);
  const userId = "sanryuu";

  const getProductPrizeAPI = useCallback(async () => {
    const dataAPI = await getProductPrice();
    setProductPriceList(dataAPI?.data);
  }, [userId]);

  useEffect(() => {
    getProductPrizeAPI();
  }, []);

  const onDelete = async (e: SyntheticEvent, productPriceId: string) => {
    e.preventDefault();
    const hasil = await deleteProductPrice(productPriceId, userId);
    if (hasil.error) {
      toast.error(hasil.message);
    } else {
      toast.success("data berhasil dihapus");
      getProductPrizeAPI();
    }
  };

  return (
    <>
      <div className="flex">
        <Link to="/harga/form">
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
              <th>Promo</th>
              <th>Harga</th>
              <th>Handle</th>
            </tr>
          </thead>
          <tbody>
            {productPriceList?.map((r: ProductPriceTypes, i: number) => {
              return (
                <tr key={r.uuid}>
                  <th>{i + 1}</th>
                  <td>{r.name}</td>
                  <td>{r.size}</td>
                  <td>{r.is_promo === true ? 'ya' : 'tidak'}</td>
                  <td>{r.price}</td>
                  <td className="flex">
                    <Link to={`/harga/${r.uuid}`}>
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
