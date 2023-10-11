import {
  FcPlus,
  FcEditImage,
  FcEmptyTrash,
  FcAddDatabase,
} from "react-icons/fc";
import { Link } from "react-router-dom";
export default function Product() {
  return (
    <>
      <div className="flex">
      <Link to="/product/form">
          <FcAddDatabase size={30} />
          </Link>
      </div>
      <div className="overflow-x-auto bottom-data">
        <table className="table glass">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
