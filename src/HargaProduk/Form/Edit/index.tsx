import {
  ChangeEvent,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { FcAddDatabase } from "react-icons/fc";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  editProductPrice,
  getMenu,
  getSize,
  updateProductPrice,
} from "../../../../services/owner";
import Select from "react-select";
import { MenuTypes, SelectTypes, SizeTypes } from "../../../../services/data-types";

export default function EditProduct() {
  const { productPriceId } = useParams();

  const [menuList, setMenuList] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [getStatusProductChange, setStatusProductChange] = useState(false);
  const [productPriceItem, setProductPriceItem] = useState({
    uuid: "",
    product_id: "",
    size_id: "",
    is_promo: "",
    price: "",
  });
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

  const getEditProductPriceAPI = useCallback(
    async (productPriceId: string) => {
      const dataAPI = await editProductPrice(productPriceId);
      setProductPriceItem(dataAPI?.data[0]);

      localStorage.setItem("product-price-item", JSON.stringify(dataAPI?.data));
    },
    [editProductPrice]
  );

  useEffect(() => {
    getMenuAPI();
    getSizeAPI();
    getEditProductPriceAPI(productPriceId!);
  }, []);


  const getFilteredMenuAPI = async (selectOption: SelectTypes) => {
    const masterProductId = selectOption.value;
    setProductPriceItem({ ...productPriceItem, product_id: masterProductId });
  };

  const getFilteredSizeAPI = async (selectOption: SelectTypes) => {
    const sizeId = selectOption.value;
    setProductPriceItem({ ...productPriceItem, size_id: sizeId });
  };

  const promoHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setProductPriceItem({ ...productPriceItem, is_promo: e.target.checked });
  };

  const productOptions = menuList.map((product: MenuTypes) => ({
    value: product.uuid,
    label: product.name,
  }));

  const sizeOptions = sizeList.map((size: SizeTypes) => ({
    value: size.uuid,
    label: size.name,
  }));

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await saveForm();
  };

  const saveForm = async () => {
    const email = "sanryuu";
    const data = {
      product_id: productPriceItem?.product_id,
      size_id: productPriceItem?.size_id,
      is_promo: productPriceItem?.is_promo,
      price: +productPriceItem?.price,
      email: email!,
    };

    const hasil = await updateProductPrice(productPriceId!, data);
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
            value={
              getStatusProductChange
                ? menuList
                : productOptions.find(function (option) {
                    return option?.value === productPriceItem.product_id;
                  })
            }
            options={productOptions}
            onChange={(event) => getFilteredMenuAPI(event!)}
            />
        </div>
        <div className="mb-3">
          <label className="label">size</label>
          <Select
            placeholder={"pilih..."}
            isClearable
            value={
                sizeOptions.find(function (option) {
                    return option?.value === productPriceItem.size_id;
                  })
            }
            options={sizeOptions}
            onChange={(event) => getFilteredSizeAPI(event!)}
          />
        </div>
        <div className="mb-3 form-control">
          <label className="cursor-pointer label">
            <span className="label-text">apakah ini harga promo ?</span>
            <input
              type="checkbox"
              checked={productPriceItem.is_promo === true ? 'checked':''}
              className="checkbox checkbox-info"
              onChange={(event) => promoHandle(event)}
            />
          </label>
        </div>
        <div className="mb-3 form-control">
          <label className="label">harga</label>
          <input
            type="text"
            className="w-full input input-bordered input-info"
            placeholder="10000"
            value={productPriceItem?.price}
            onChange={(event) =>
              setProductPriceItem({
                ...productPriceItem,
                price: event.target.value,
              })
            }
          />
        </div>
        <button type="submit">
          <FcAddDatabase size={70} />
        </button>
      </form>
    </section>
  );
}
