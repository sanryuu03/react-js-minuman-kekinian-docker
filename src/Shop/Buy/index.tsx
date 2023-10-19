import {
    ChangeEvent,
    SyntheticEvent,
    useCallback,
    useEffect,
    useState,
} from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
    getShopProduct,
    getShopProductPrice,
    getSize,
    updateProductPrice,
} from "../../../services/owner";
import Select from "react-select";
import { SelectTypes, SizeTypes } from "../../../services/data-types";

export default function ShopBuy() {
    const { masterProductId } = useParams();

    const [menuID, setMenuID] = useState("");
    const [menuName, setMenuName] = useState("");
    const [sizeList, setSizeList] = useState([]);
    const [sizeId, setSizeId] = useState("");
    const [isPromo, setIsPromo] = useState<boolean>(false);
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [totalHarga, setTotalHarga] = useState(0);
    const userId = "sanryuu";

    const navigate = useNavigate();

    const getMenuAPI = useCallback(async () => {
        const dataAPI = await getShopProduct(masterProductId!, userId);
        setMenuName(dataAPI?.data[0].name);
        setMenuID(dataAPI?.data[0].uuid)
    }, [userId]);

    const getSizeAPI = useCallback(async () => {
        const dataAPI = await getSize();
        setSizeList(dataAPI?.data);
    }, [userId]);

    useEffect(() => {
        getMenuAPI();
        getSizeAPI();
    }, []);

    const getFilteredSizeAPI = async (selectOption: SelectTypes) => {
        const size_id = selectOption.value;
        setSizeId(size_id!);
    };

    const promoHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setIsPromo(e.target.checked)
    };

    const getPriceAPI = useCallback(async (masterProductId: string, sizeId: string, isPromo: boolean) => {
        const dataAPI = await getShopProductPrice(masterProductId!, sizeId, isPromo)
        setPrice(dataAPI?.data[0] !== null ? dataAPI?.data[0]?.price : 0)
    }, []);

    useEffect(() => {
        getPriceAPI(masterProductId!, sizeId, isPromo);
    }, [sizeId, isPromo]);

    const quantityHandle = (e: ChangeEvent<HTMLInputElement>)=>{
        const tempQuantity = +e.target.value
        setQuantity(tempQuantity)
        const tempTotalHarga = price * tempQuantity!
        setTotalHarga(tempTotalHarga)
    }

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await saveForm();
    };

    const saveForm = async () => {
        const email = "sanryuu";
        const data = {
            product_id: menuID,
            size_id: sizeId,
            is_promo: isPromo,
            price: +price,
            email: email!,
        };

        const hasil = await updateProductPrice(masterProductId!, data);
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
                    <input
                        type="text"
                        className="w-full input input-bordered input-info glass"
                        placeholder="menu"
                        value={menuName}
                        disabled
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
                        type="text"
                        className="w-full input input-bordered input-info glass"
                        placeholder="10000"
                        value={price}
                        disabled
                    />
                </div>
                <div className="mb-3 form-control">
                    <label className="label">quantity</label>
                    <input
                        type="number"
                        className="w-full input input-bordered input-info"
                        placeholder="10000"
                        min={0}
                        value={quantity}
                        onChange={(e)=> quantityHandle(e)}
                    />
                </div>
                <div className="mb-3 form-control">
                    <label className="label">total harga</label>
                    <input
                        type="text"
                        className="w-full input input-bordered input-info glass"
                        placeholder="10000"
                        value={totalHarga}
                        disabled
                    />
                </div>
                <button type="submit" className="absolute right-10">
                    <BsFillCartPlusFill size={70} />
                </button>
            </form>
        </section>
    );
}
