import { SyntheticEvent, useState } from "react";
import { FcAddDatabase } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postSize } from "../../../services/owner";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await saveForm();
  };

  const saveForm = async () => {
    const email = "sanryuu";
    const data = {
      name: name,
      size: size,
      email: email!,
    };

    const hasil = await postSize(data);
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
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-3 form-control">
          <label className="label">deskripsi size</label>
          <input
            type="text"
            className="w-full input input-bordered input-info"
            placeholder="XS, S, M, L, XL"
            value={size}
            onChange={(event) => setSize(event.target.value)}
          />
        </div>
        <button type="submit">
          <FcAddDatabase size={70} />
        </button>
      </form>
    </section>
  );
}
