import { FaRegTrashCan } from "react-icons/fa6";
import { PlateData } from "../../interfaces/FrameDataInterfaces";

interface Props {
  title: string;
  description: string;
  data: PlateData | null;
  showDelete: boolean;
  onClick: (sampleId: string, scanId: string) => void;
  onDelete?: (scanId: string) => void;
}

function SimpleSamplePlateDataTable({
  title,
  description,
  data,
  showDelete,
  onDelete,
  onClick,
}: Props) {
  return (
    <div style={{ margin: "0px 4px" }}>
      <span style={{ fontWeight: "bold", fontSize: "14px" }}>{title}: </span>
      <span style={{ fontSize: "14px" }}>
        {description != "" ? description : ""}
      </span>
      <div style={{ padding: "0px 4px" }}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Pos.</th>
              <th>Sample Description</th>
              <th>Element</th>
              <th>Edge</th>
              <th>Range</th>
              <th>Setup</th>
              <th>Sweeps</th>
              {showDelete && <th>Delete</th>}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.samples &&
              data.samples.map(
                (sample, sampleId) =>
                  sample.scanSetups &&
                  sample.scanSetups.map((scan, scanId) => (
                    <tr
                      key={sampleId * sample.scanSetups.length + scanId}
                      onClick={() => onClick(sample._id, scan._id)}
                    >
                      <td>{sample.position}</td>
                      <td>{sample.description}</td>
                      <td>{scan.element}</td>
                      <td>{scan.edge}</td>
                      <td>{scan.range}</td>
                      <td>{scan.setup == "FY" ? "FY" : "TRANS"}</td>
                      <td>{scan.sweeps}</td>
                      {showDelete && (
                        <td>
                          <div
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              onDelete ? onDelete(scan._id) : null
                            }
                          >
                            <FaRegTrashCan size={20} color="#dc3545" />
                          </div>
                        </td>
                      )}
                    </tr>
                  ))
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SimpleSamplePlateDataTable;
