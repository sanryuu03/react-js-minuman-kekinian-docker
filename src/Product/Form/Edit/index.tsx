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
import { IMG, editMenu, updateMenu } from "../../../../services/owner";

export default function EditProduct() {
  const { masterProductId, userId } = useParams();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [menuItem, setMenuItem] = useState({
    uuid: "",
    name: "",
    picture_path: "",
    description: "",
    ingredients: "",
  });
  const gambarItem = `${IMG}/${menuItem?.picture_path}`;

  const navigate = useNavigate();

  const getEditMenuAPI = useCallback(
    async (masterProductId: string, userId: string) => {
      const dataAPI = await editMenu(masterProductId, userId);
      setMenuItem(dataAPI?.data[0]);
      localStorage.setItem("menu-item", JSON.stringify(dataAPI?.data));
    },
    [editMenu]
  );

  useEffect(() => {
    getEditMenuAPI(masterProductId!, userId!);
  }, []);

  const onImageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const img = event.target.files?.[0];
    setImagePreview(URL.createObjectURL(img!));
    return setMenuItem({ ...menuItem, picture_path: img });
  };

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await saveForm();
  };

  const saveForm = async () => {
    const email = "sanryuu";
    const data = new FormData();

    data.append("user_id", userId!);
    data.append("name", menuItem?.name);
    data.append("image", menuItem?.picture_path);
    data.append("description", menuItem?.description);
    data.append("ingredients", menuItem?.ingredients);
    data.append("email", email!);

    const hasil = await updateMenu(masterProductId!, userId!, data);
    if (hasil.error) {
      toast.error(hasil.message);
    } else {
      toast.success("data berhasil disimpan");
      navigate("/product");
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
            value={menuItem?.name}
            onChange={(event) =>
              setMenuItem({ ...menuItem, name: event.target.value })
            }
          />
        </div>
        <div className="mb-3 form-control">
          <label className="label">gambar</label>

          <span className="flex items-center justify-between">
            {imagePreview ? (
              <img
                src={imagePreview}
                width={90}
                height={90}
                alt={"icon upload"}
                className={"mb-2 rounded-lg"}
              />
            ) : (
              <img
                src={gambarItem}
                width={90}
                height={90}
                alt={"icon upload"}
                className={"mb-2 rounded-lg"}
              />
            )}
            <input
              type="file"
              className="form-control"
              accept="image/png, image/jpeg"
              onChange={(event) => {
                onImageHandler(event);
              }}
            />
          </span>
        </div>
        <div className="mb-3 form-control">
          <label className="label">deskripsi menu</label>
          <input
            type="text"
            className="w-full input input-bordered input-info"
            placeholder="deskripsi"
            value={menuItem?.description}
            onChange={(event) =>
              setMenuItem({
                ...menuItem,
                description: event.target.value,
              })
            }
          />
        </div>
        <div className="mb-3 form-control">
          <label className="label">bahan-bahan</label>
          <input
            type="text"
            className="w-full input input-bordered input-info"
            placeholder="Dipisahkan dengan koma, contoh: Bawang Merah, Paprika, Bawang Bombay, Timun"
            value={menuItem?.ingredients}
            onChange={(event) =>
              setMenuItem({
                ...menuItem,
                ingredients: event.target.value,
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
