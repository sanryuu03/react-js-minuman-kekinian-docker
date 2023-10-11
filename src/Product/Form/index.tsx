import { ChangeEvent, SyntheticEvent, useState } from "react";
import { FcAddDatabase } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postMenu } from "../../../services/owner";

export default function ProductForm() {
    const [name, setName] = useState("");
    const [image, setImage] = useState<File | FileList>();
    const [imagePreview, setImagePreview] = useState("/assets/icon/upload.svg");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const navigate = useNavigate();

    const onImageHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const img = event.target.files?.[0];
        setImagePreview(URL.createObjectURL(img!));
        return setImage(img);
    };

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        if (!image) {
            toast.error("harap gambar di upload sebelum di simpan !");
        } else {
            await saveForm();
        }
    };

    const saveForm = async () => {
        const userId = "sanryuu";
        const email = "sanryuu";
        const data = new FormData();

        data.append("user_id", userId!);
        data.append("name", name);
        data.append("image", image as File);
        data.append("description", description);
        data.append("ingredients", ingredients);
        data.append("email", email!);

        const hasil = await postMenu(data);
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
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="mb-3 form-control">
                    <label className="label">gambar</label>

                    <span className="flex items-center justify-between">
                        <img
                            src={imagePreview}
                            width={90}
                            height={90}
                            alt={"icon upload"}
                            className={"mb-2 rounded-lg"}
                        />
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
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>
                <div className="mb-3 form-control">
                    <label className="label">bahan-bahan</label>
                    <input
                        type="text"
                        className="w-full input input-bordered input-info"
                        placeholder="Dipisahkan dengan koma, contoh: Bawang Merah, Paprika, Bawang Bombay, Timun"
                        value={ingredients}
                        onChange={(event) => setIngredients(event.target.value)}
                    />
                </div>
                <button type="submit">
                    <FcAddDatabase size={70} />
                </button>
            </form>
        </section>
    );
}
