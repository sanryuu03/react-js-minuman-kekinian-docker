import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IMG, getMenu } from "../../services/owner";
import { MenuTypes } from "../../services/data-types";

export default function Shop() {
    const [menuList, setMenuList] = useState([]);
    const userId = "sanryuu";

    const getMenuAPI = useCallback(async () => {
        const dataAPI = await getMenu(userId);
        setMenuList(dataAPI?.data);
    }, [userId]);

    useEffect(() => {
        getMenuAPI();
    }, []);

    return (
        <>
            <div className="overflow-x-auto bottom-data">
                {menuList?.map((r: MenuTypes) => {
                    return (
                        <div key={r.id} className="shadow-xl card w-96 bg-base-100">
                            <figure><img src={`${IMG}/${r?.picture_path}`} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{r.name}</h2>
                                <p>{r.description}</p>
                                <div className="justify-end card-actions">
                                    <button className="btn btn-primary">
                                        <Link to={`/shop/${r.uuid}`}>
                                            Buy Now
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
