import SimpleSamplePlateDataTable from "./SimpleSamplePlateDataTable";

interface PlateData {
  _id: string;
  sampleFrame: string;
  type: number;
  samples: SampleData[];
}

interface SampleData {
  _id: string;
  samplePlate: string;
  description: string;
  position: string;
  scanSetups: ScanData[];
}

interface ScanData {
  _id: string;
  sample: string;
  element: string;
  edge: string;
  range: string;
  setup: string;
  sweeps: number;
}

interface Props {
  tag: string;
  samplePlateDescriptionL: string;
  samplePlateDescriptionR: string;
  samplePlateDataL: PlateData | null;
  samplePlateDataR: PlateData | null;
  onClick: (scanId: string) => void;
}

function SamplePlateDataTable({
  tag,
  samplePlateDescriptionL,
  samplePlateDescriptionR,
  samplePlateDataL,
  samplePlateDataR,
  onClick,
}: Props) {
  return (
    <div
      style={{
        borderColor: "rgba(100, 100, 100, 1)",
        borderStyle: "solid",
        borderWidth: "1px",
        borderRadius: "5px",
        padding: "8px",
        margin: "4px 20px 20px 4px",
      }}
    >
      <div style={{ margin: "4px 0px 8px 4px" }}>
        <span style={{ fontWeight: "bold", fontSize: "20px" }}>
          Sample Frame Tag: {tag}
        </span>
      </div>
      <SimpleSamplePlateDataTable
        title="Left"
        description={samplePlateDescriptionL}
        data={samplePlateDataL}
        onDelete={(scanId) => {
          console.log(scanId);
        }}
      />
      <SimpleSamplePlateDataTable
        title="Right"
        description={samplePlateDescriptionR}
        data={samplePlateDataR}
        onDelete={(scanId) => {
          console.log(scanId);
        }}
      />
    </div>
  );
}

export default SamplePlateDataTable;
