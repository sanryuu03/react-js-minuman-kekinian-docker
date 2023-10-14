import { ChangeEvent, SyntheticEvent, useCallback, useEffect, useState } from "react";
import { FcAddDatabase } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getMenu, getSize, postProductPrice } from "../../../services/owner";
import Select from "react-select";
import {
  MenuTypes,
  SelectTypes,
  SizeTypes,
} from "../../../services/data-types";

export default function ProductForm() {
  const [menuList, setMenuList] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [masterProductId, setMasterProductId] = useState("");
  const [sizeId, setSizeId] = useState("");
  const [isPromo, setIsPromo] = useState<boolean>(false);
  const [price, setPrice] = useState(0);
  const userId = "sanryuu";

  const navigate = useNavigate();

  const getMenuAPI = useCallback(async () => {
    const dataAPI = await getMenu(userId);
    setMenuList(dataAPI?.data);
  }, [userId]);

  const getSizeAPI = useCallback(async () => {
    const dataAPI = await getSize();
    setSizeList(dataAPI?.data);
  }, [userId]);

  useEffect(() => {
    getMenuAPI();
    getSizeAPI();
  }, []);

  const getFilteredMenuAPI = async (selectOption: SelectTypes) => {
    const masterProductId = selectOption.value;
    setMasterProductId(masterProductId!);
  };

  const getFilteredSizeAPI = async (selectOption: SelectTypes) => {
    const sizeId = selectOption.value;
    setSizeId(sizeId!);
  };

  const promoHandle=(e: ChangeEvent<HTMLInputElement>)=>{
    setIsPromo(e.target.checked)
  }

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await saveForm();
  };

  const saveForm = async () => {
    const email = "sanryuu";
    const data = {
      product_id: masterProductId,
      size_id: sizeId,
      is_promo: isPromo,
      price: +price,
      email: email!,
    };

    const hasil = await postProductPrice(data);
    if (hasil.error) {
      toast.error(hasil.message);
    } else {
      toast.success("data berhasil disimpan");
      navigate("/harga");
    }
  };

  return (
    <section className="min-h-screen md:max-w-screen-sm md:mx-auto glass">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="label">produk</label>
          <Select
            placeholder={"pilih..."}
            isClearable
            options={menuList.map((menu: MenuTypes) => ({
              value: menu.uuid,
              label: menu.name,
            }))}
            onChange={(event) => getFilteredMenuAPI(event!)}
          />
        </div>
        <div className="mb-3">
          <label className="label">size</label>
          <Select
            placeholder={"pilih..."}
            isClearable
            options={sizeList.map((size: SizeTypes) => ({
              value: size.uuid,
              label: size.name,
            }))}
            onChange={(event) => getFilteredSizeAPI(event!)}
          />
        </div>
        <div className="mb-3 form-control">
          <label className="cursor-pointer label">
            <span className="label-text">apakah ini harga promo ?</span>
            <input
              type="checkbox"
              className="checkbox checkbox-info"
              onChange={(event) => promoHandle(event)}
            />
          </label>
        </div>
        <div className="mb-3 form-control">
          <label className="label">harga</label>
          <input
            type="number"
            className="w-full input input-bordered input-info"
            placeholder="10000"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <button type="submit">
          <FcAddDatabase size={70} />
        </button>
      </form>
    </section>
  );
}
