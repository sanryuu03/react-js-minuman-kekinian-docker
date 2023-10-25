import { useCallback, useEffect, useState } from "react";
import { getTransactions } from "../../services/owner";
import { TransactionsTypes } from "../../services/data-types";

export default function Transactions() {
    const [transactionsList, setTransactionsList] = useState([]);
    const userId = "sanryuu";

    const getProductPrizeAPI = useCallback(async () => {
      const dataAPI = await getTransactions();
      setTransactionsList(dataAPI?.data);
    }, [userId]);

    useEffect(() => {
      getProductPrizeAPI();
    }, []);


  return (
    <>
      <div className="overflow-x-auto bottom-data">
        <table className="table glass">
          <thead>
            <tr>
              <th>#</th>
              <th>Pembeli</th>
              <th>Tanggal Transaksi</th>
              <th>Produk</th>
              <th>Sizeroduk</th>
              <th>Promo</th>
              <th>Harga</th>
              <th>Kuantitas</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {transactionsList?.map((r: TransactionsTypes, i: number) => {
                const milliseconds = r.purchase_date * 1000;
                const dateObject = new Date(milliseconds);
                const humanDateFormat = dateObject.toLocaleString("id-ID");
              return (
                <tr key={r.uuid}>
                  <th>{i + 1}</th>
                  <td>{r.buyer}</td>
                  <td>{humanDateFormat}</td>
                  <td>{r.name}</td>
                  <td>{r.size}</td>
                  <td>{r.is_promo === true ? 'ya' : 'tidak'}</td>
                  <td>{r.price}</td>
                  <td>{r.quantity}</td>
                  <td>{r.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
