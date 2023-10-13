import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { FcAddDatabase } from "react-icons/fc";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { editSize, updateSize } from "../../../../services/owner";

export default function EditProduct() {
  const { sizeId } = useParams();

  const [sizeItem, setSizeItem] = useState({
    uuid: "",
    name: "",
    size: "",
  });

  const navigate = useNavigate();

  const getEditMenuAPI = useCallback(
    async (sizeId: string) => {
      const dataAPI = await editSize(sizeId);
      setSizeItem(dataAPI?.data[0]);
      localStorage.setItem("size-item", JSON.stringify(dataAPI?.data));
    },
    [editSize]
  );

  useEffect(() => {
    getEditMenuAPI(sizeId!);
  }, []);

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await saveForm();
  };

  const saveForm = async () => {
    const email = "sanryuu";
    const data = {
      name: sizeItem?.name,
      size: sizeItem?.size,
      email: email!,
    };

    const hasil = await updateSize(sizeId!, data);
    if (hasil.error) {
      toast.error(hasil.message);
    } else {
      toast.success("data berhasil disimpan");
      navigate("/size");
    }
  };

  return (
    <section className="min-h-screen md:max-w-screen-sm md:mx-auto glass">
      <form onSubmit={onSubmit}>
        <div className="mb-3 form-control">
          <label className="label">Nama</label>
          <input
            type="text"
            className="w-full input input-bordered input-info"
            placeholder="nama"
            value={sizeItem?.name}
            onChange={(event) =>
              setSizeItem({ ...sizeItem, name: event.target.value })
            }
          />
        </div>
        <div className="mb-3 form-control">
          <label className="label">size</label>
          <input
            type="text"
            className="w-full input input-bordered input-info"
            placeholder="deskripsi"
            value={sizeItem?.size}
            onChange={(event) =>
              setSizeItem({
                ...sizeItem,
                size: event.target.value,
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
